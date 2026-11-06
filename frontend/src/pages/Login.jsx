import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import AuthShell from "../components/common/AuthShell";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import usePageTitle from "../hooks/usePageTitle";

const Login = () => {
  usePageTitle("Log in");
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const err = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Enter a valid email address";
    if (form.password.length < 6)
      err.password = "Password must be at least 6 characters";
    return err;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;
    // Day 1: call POST /auth/login via AuthContext.
    toast.info("Login API is connected on Day 1.");
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Enter your email and password to log in."
      footer={
        <>
          New here?{" "}
          <Link to="/register" className="font-semibold text-ink underline">
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} noValidate className="space-y-4">
        <Input
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={form.email}
          onChange={onChange}
          error={errors.email}
          placeholder="you@example.com"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={form.password}
          onChange={onChange}
          error={errors.password}
          placeholder="Your password"
        />
        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-600 hover:text-ink"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Log in
        </Button>
      </form>
    </AuthShell>
  );
};
export default Login;
