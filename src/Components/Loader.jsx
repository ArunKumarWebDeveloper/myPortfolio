import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        {/* CHANGE THE CLASS NAME BELOW TO SWITCH STYLES: 
            "loader-ring", "loader-dots", or "loader-bars" */}
        <div className="loader-ring"></div>
        
        <p className="load">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
