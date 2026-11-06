import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import AuthShell from "../components/common/AuthShell";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import usePageTitle from "../hooks/usePageTitle";

const Register = () => {
  usePageTitle("Create account");
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const err = {};
    if (form.name.trim().length < 2) err.name = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email address";
    if (form.password.length < 6) err.password = "Password must be at least 6 characters";
    if (form.confirm !== form.password) err.confirm = "Passwords do not match";
    return err;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;
    // Day 1: call POST /auth/register via AuthContext.
    toast.info("Register API is connected on Day 1.");
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Join Berserk for faster checkout and order tracking."
      footer={<>Already have an account? <Link to="/login" className="font-semibold text-ink underline">Log in</Link></>}
    >
      <form onSubmit={onSubmit} noValidate className="space-y-4">
        <Input label="Full name" name="name" autoComplete="name" value={form.name} onChange={onChange} error={errors.name} />
        <Input label="Email" type="email" name="email" autoComplete="email" value={form.email} onChange={onChange} error={errors.email} />
        <Input label="Password" type="password" name="password" autoComplete="new-password" value={form.password} onChange={onChange} error={errors.password} />
        <Input label="Confirm password" type="password" name="confirm" autoComplete="new-password" value={form.confirm} onChange={onChange} error={errors.confirm} />
        <Button type="submit" className="w-full">Create account</Button>
      </form>
    </AuthShell>
  );
};
export default Register;
