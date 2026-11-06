import usePageTitle from "../../hooks/usePageTitle";
import Button from "../ui/Button";

// Temporary placeholder used by routes that are built on later days.
const PageStub = ({
  title,
  note = "This page is under construction.",
  day,
}) => {
  usePageTitle(title);
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <p className="eyebrow mb-3">{day ? `Coming ${day}` : "Coming soon"}</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-gray-600">{note}</p>
      <Button to="/" className="mt-8">
        Back to home
      </Button>
    </section>
  );
};
export default PageStub;
