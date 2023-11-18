import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Root() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex h-screen bg-gray-50 overflow-hidden flex-1">
        <Outlet />
      </main>
    </div>
  );
}
