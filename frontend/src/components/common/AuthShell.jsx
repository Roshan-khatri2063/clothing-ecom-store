import { Link } from "react-router-dom";
import { SITE } from "../../config/site";
import hero from "../../assets/outfit1.jpg";

// Two-column shell used by Login / Register / Forgot password.
const AuthShell = ({ title, subtitle, children, footer }) => (
  <section className="grid min-h-[70vh] md:grid-cols-2">
    <div className="flex items-center justify-center px-4 py-12 md:px-12">
      <div className="w-full max-w-md">
        <Link to="/" className="font-display text-3xl font-semibold">
          {SITE.name}
          <span className="text-accent">.</span>
        </Link>
        <h1 className="mt-8 font-display text-3xl font-semibold">{title}</h1>
        <p className="mb-6 mt-2 text-sm text-gray-600">{subtitle}</p>
        {children}
        <div className="mt-6 text-center text-sm text-gray-600">{footer}</div>
      </div>
    </div>
    <div className="hidden bg-sand md:block">
      <img
        src={hero}
        alt=""
        className="h-full w-full object-cover object-top"
      />
    </div>
  </section>
);
export default AuthShell;
