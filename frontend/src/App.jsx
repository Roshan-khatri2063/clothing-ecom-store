import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";
import { Toster } from "sonner";
const App = () => {
  return (
    <BrowserRouter>
    <Toster position="top-right"/>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} /> 
        </Route>

        <Route>{/*Admin routes*/} </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
