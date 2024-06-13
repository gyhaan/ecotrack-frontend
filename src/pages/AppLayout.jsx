import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4 bg-snow h-screen">
      <header className="mb-8">
        <div className="flex justify-center">
          <img src="/Logo.svg" alt="logo" />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
