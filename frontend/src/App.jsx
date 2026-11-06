import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Toaster position="top-right" richColors closeButton />
    <AppRoutes />
  </BrowserRouter>
);
export default App;
