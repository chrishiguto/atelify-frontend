import { GanttChart, Home, LucideBoxes } from "lucide-react";
import { Link } from "react-router-dom";

const routes = [
  {
    to: "/",
    label: "Home",
    icon: <Home />
  },
  {
    to: "/materials",
    label: "Materiais",
    icon: <LucideBoxes />
  },
  {
    to: "/products",
    label: "Produtos",
    icon: <GanttChart />
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-gray-200" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded">
        <ul className="space-y-2">
          {routes.map((route) => (
            <li key={route.label}>
              <Link
                to={route.to}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition hover:ease-in ease-out"
              >
                {route.icon}
                <span className="flex-1 ml-3 whitespace-nowrap">{route.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
