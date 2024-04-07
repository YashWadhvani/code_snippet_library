// import React, { useEffect } from "react";

// export default function GoogleButton() {
//   useEffect(() => {
//     const script = document.createElement("script");

//     script.src = "https://accounts.google.com/gsi/client";
//     script.async = true;
//     script.defer = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
//   const handleGoogleSignIn = () => {
//     // Call your login endpoint here
//     fetch("http://localhost:5000/auth/google", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // Add any additional headers if required
//       },
//       body: JSON.stringify({
//         // Add any required payload data for your login endpoint
//       }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Handle successful login response
//           console.log("Login successful!");
//         } else {
//           // Handle login failure
//           console.error("Login failed!");
//         }
//       })
//       .catch((error) => {
//         console.error("Error occurred during login:", error);
//       });
//   };
//   return (
//     <>
//       <div
//         id="g_id_onload"
//         data-login_uri="localhost:5000/auth/google"
//         data-client_id="63263055697-2he94hvftml8jkoqrursffbsjdug41rt.apps.googleusercontent.com"
//       />
//       <div
//         className="g_id_signin"
//         data-type="standard"
//         data-size="large"
//         data-theme="outline"
//         data-text="continue_with"
//         data-shape="pill"
//         data-logo_alignment="left"
//       />
//     </>
//   );
// }

import React, { useEffect } from "react";

export default function GoogleButton() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleGoogleSignIn = () => {
    // Call your login endpoint here
    fetch("http://localhost:5000/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if required
      },
      body: JSON.stringify({
        // Add any required payload data for your login endpoint
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful login response
          console.log("Login successful!");
        } else {
          // Handle login failure
          console.error("Login failed!");
        }
      })
      .catch((error) => {
        console.error("Error occurred during login:", error);
      });
  };

  return (
    <>
      <div
        id="g_id_onload"
        data-login_uri="http://localhost:5000/auth/google" // Corrected URL
        data-client_id="63263055697-2he94hvftml8jkoqrursffbsjdug41rt.apps.googleusercontent.com"
      />
      <div
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="continue_with"
        data-shape="pill"
        data-logo_alignment="left"
        onClick={handleGoogleSignIn} // Call handleGoogleSignIn on click
      />
    </>
  );
}
