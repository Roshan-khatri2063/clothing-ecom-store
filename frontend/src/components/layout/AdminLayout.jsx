import { NavLink, Outlet, Link } from "react-router-dom";
import { SITE } from "../../config/site";

const links = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/products", label: "Products" },
  { to: "/admin/orders", label: "Orders" },
  { to: "/admin/users", label: "Users" },
];

const AdminLayout = () => (
  <div className="min-h-screen bg-cream md:flex">
    <aside className="bg-ink text-white md:min-h-screen md:w-60">
      <div className="flex items-center justify-between p-5 md:block">
        <Link to="/" className="font-display text-2xl font-semibold">
          {SITE.name}
          <span className="text-accent">.</span>
        </Link>
        <p className="text-xs uppercase tracking-widest text-white/50 md:mt-1">
          Admin
        </p>
      </div>
      <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:pb-0">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              `whitespace-nowrap rounded-lg px-4 py-2.5 text-sm transition ${isActive ? "bg-white/15 font-semibold" : "text-white/70 hover:bg-white/10"}`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
    <main className="flex-1">
      <Outlet />
    </main>
  </div>
);
export default AdminLayout;
