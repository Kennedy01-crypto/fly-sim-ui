import { GoogleHeader } from "@/components/GoogleHeader";
import { AppFooter } from "@/components/AppFooter";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <GoogleHeader />

      <main className="pb-8">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default Layout;
