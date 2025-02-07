import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import morgan from "morgan";
import { spawn } from "child_process";
import connectDB from "./config/db.js";
import bcrypt from "bcryptjs";
import Snippet from "./models/Snippet.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "./models/User.js"; // Import the User model

//env config
dotenv.config();

//Database Connection
connectDB();

const app = express();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(
  session({
    secret: "abcdEFGHiJkLmNoPqrstUVWXyZ", // Replace with your own secret key
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/uploads", express.static("uploads"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//Routes
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // If email and password are correct, log in the user
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: "Login failed" });
      }
      return res.status(200).json({ message: "Login successful", user });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Signup route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Log in the new user
    req.login(newUser, (err) => {
      if (err) {
        return res.status(500).json({ error: "Login failed" });
      }
      return res
        .status(201)
        .json({ message: "Signup successful", user: newUser });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/snippets", async (req, res) => {
  try {
    const snippets = await Snippet.find().sort({ title: 1 });
    res.json(snippets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/execute-python-script", (req, res) => {
  const pythonProcess = spawn("python", ["main.py"]);

  pythonProcess.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  pythonProcess.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
    res.send({ success: true, message: "Python script executed successfully" });
  });
});

app.post("/snippets/:id/increment", async (req, res) => {
  try {
    const snippetId = req.params.id;
    const snippet = await Snippet.findById(snippetId);
    if (!snippet) {
      return res.status(404).json({ error: "Snippet not found" });
    }
    snippet.snippetCount += 1;
    await snippet.save();
    res.status(200).json({ message: "Snippet count incremented successfully" });
  } catch (error) {
    console.error("Error incrementing snippet count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists in the database based on googleID
        let user = await User.findOne({ googleID: profile.id });

        if (!user) {
          // If user doesn't exist, create a new user with googleID and other details from the profile
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleID: profile.id,
            // You can add more fields as needed
          });
        }

        // Pass the user object to Passport
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    // Retrieve user data from the database based on id
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

//Routes for Google authentication
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.post("/auth/google", passport.authenticate("google"), (req, res) => {
  // Handle successful authentication
  console.log(process.env.GOOGLE_CLIENT_ID);
  console.log(process.env.GOOGLE_CLIENT_SECRET);
  res.redirect("/"); // Redirect to homepage or desired route
});

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}.`);
});
