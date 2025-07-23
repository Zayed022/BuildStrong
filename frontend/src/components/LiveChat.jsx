import React, { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/687e6adc0c2df81912a84c2c/1j0mt2rkg";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible UI; chat widget floats automatically
};

export default LiveChat;
