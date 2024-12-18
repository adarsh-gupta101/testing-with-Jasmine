// App.jsx
import { useState, useEffect } from "react";

const App = () => {
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome")) {
      setBrowser("Chrome");
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      setBrowser("Safari");
    } else if (userAgent.includes("Firefox")) {
      setBrowser("Firefox");
    } else {
      setBrowser("Other");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <h1>Hi Testers!</h1>
      <h2>You are using: {browser}</h2>
    </div>
  );
};

export default App;
