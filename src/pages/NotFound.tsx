
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-steel mb-4">404</h1>
        <div className="h-1 w-20 bg-orange mx-auto mb-6"></div>
        <p className="text-2xl text-gray-700 mb-4">Oops! Page not found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="bg-orange hover:bg-orange-light">
          <Link to="/">
            <Home size={18} className="mr-2" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
