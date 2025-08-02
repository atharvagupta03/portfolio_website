import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Shayad yeh fatt gaya portfolio website. koi nahi, trying to fix it. If you see this, please mail  - toce.atharva@gmail.com",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-heading font-bold text-4xl mb-4 text-foreground">404</h1>
        <p className="font-body text-xl text-muted-foreground mb-4">Page not found</p>
        <a href="/" className="font-body text-foreground underline hover:no-underline transition-all">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
