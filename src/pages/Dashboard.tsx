import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="border-b bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-semibold">Dashboard</span>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Welcome to your Dashboard!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              You have successfully logged in. Start building something amazing!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
                <p className="text-muted-foreground">
                  Explore the features and start your journey.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-muted-foreground">
                  View your data and insights here.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Settings</h3>
                <p className="text-muted-foreground">
                  Customize your experience and preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;