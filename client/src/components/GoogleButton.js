import React, { useEffect } from "react";

export default function GoogleButton() {
  useEffect(() => {
    // Load Google One Tap library
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Initialize Google One Tap
    window.onload = function () {
      window.google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: handleCredentialResponse,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = (response) => {
    if (response.credential) {
      // User signed in successfully
      // Send the credential to your backend for authentication
      sendCredentialToBackend(response.credential);
    } else if (response.error) {
      // Error handling
      console.error("Google One Tap Error:", response.error);
    }
  };

  const sendCredentialToBackend = (credential) => {
    // Send credential to your backend for authentication
    fetch("http://localhost:5000/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ credential }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Login successful!");
        } else {
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
        data-width="430"
        style={{ position: "relative", left: "15px" }}
        // onClick={handleGoogleSignIn} // Call handleGoogleSignIn on click
      />
    </>
  );
}
