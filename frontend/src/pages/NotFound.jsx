import usePageTitle from "../hooks/usePageTitle";
import Button from "../components/ui/Button";

const NotFound = () => {
  usePageTitle("Page not found");
  return (
    <section className="container mx-auto px-4 py-28 text-center">
      <p className="eyebrow mb-3">Error 404</p>
      <h1 className="font-display text-5xl font-semibold md:text-7xl">Lost in the wardrobe</h1>
      <p className="mx-auto mt-4 max-w-md text-gray-600">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button to="/">Go home</Button>
        <Button to="/collection" variant="light">Shop now</Button>
      </div>
    </section>
  );
};
export default NotFound;
