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
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="63263055697-2he94hvftml8jkoqrursffbsjdug41rt.apps.googleusercontent.com"
      />
      <div
        className="g_id_signin"
        data-type="standard"
        data-size="medium"
        data-theme="outline"
        data-text="continue_with"
        data-shape="pill"
        data-logo_alignment="left"
      />
    </>
  );
}
