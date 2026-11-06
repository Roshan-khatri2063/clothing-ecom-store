import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "../components/layout/UserLayout";
import AdminLayout from "../components/layout/AdminLayout";
import Home from "../pages/Home";

const page = (loader) => lazy(loader);

const Collection = page(() => import("../pages/Collection"));
const Search = page(() => import("../pages/Search"));
const ProductPage = page(() => import("../pages/ProductPage"));
const Cart = page(() => import("../pages/Cart"));
const Checkout = page(() => import("../pages/Checkout"));
const OrderConfirmation = page(() => import("../pages/OrderConfirmation"));
const Wishlist = page(() => import("../pages/Wishlist"));
const Login = page(() => import("../pages/Login"));
const Register = page(() => import("../pages/Register"));
const ForgotPassword = page(() => import("../pages/ForgotPassword"));
const Profile = page(() => import("../pages/account/Profile"));
const Orders = page(() => import("../pages/account/Orders"));
const OrderDetail = page(() => import("../pages/account/OrderDetail"));
const About = page(() => import("../pages/info/About"));
const Contact = page(() => import("../pages/info/Contact"));
const FAQ = page(() => import("../pages/info/FAQ"));
const Shipping = page(() => import("../pages/info/Shipping"));
const Privacy = page(() => import("../pages/info/Privacy"));
const Terms = page(() => import("../pages/info/Terms"));
const NotFound = page(() => import("../pages/NotFound"));
const AdminDashboard = page(() => import("../pages/admin/Dashboard"));
const AdminProducts = page(() => import("../pages/admin/Products"));
const AdminOrders = page(() => import("../pages/admin/Orders"));
const AdminUsers = page(() => import("../pages/admin/Users"));

const Loading = () => (
  <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Loading">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink/20 border-t-ink" />
  </div>
);

const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="collection" element={<Collection />} />
        <Route path="search" element={<Search />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-confirmation/:id" element={<OrderConfirmation />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="shipping-returns" element={<Shipping />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="users" element={<AdminUsers />} />
      </Route>
    </Routes>
  </Suspense>
);
export default AppRoutes;
