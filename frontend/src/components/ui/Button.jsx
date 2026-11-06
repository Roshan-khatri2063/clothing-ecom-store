import { Link } from "react-router-dom";

const variants = { dark: "btn-dark", light: "btn-light" };

// <Button to="/x"> renders a router Link, otherwise a <button>.
const Button = ({ variant = "dark", to, className = "", children, ...props }) => {
  const cls = `${variants[variant]} ${className}`.trim();
  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};
export default Button;
