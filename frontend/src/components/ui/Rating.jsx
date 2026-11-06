import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

// value 0-5 (halves supported)
const Rating = ({ value = 0, count, size = "text-sm" }) => {
  const stars = [1, 2, 3, 4, 5].map((n) => {
    if (value >= n) return <FaStar key={n} />;
    if (value >= n - 0.5) return <FaStarHalfAlt key={n} />;
    return <FaRegStar key={n} />;
  });
  return (
    <span className={`inline-flex items-center gap-1 text-amber-500 ${size}`} aria-label={`${value} out of 5 stars`}>
      {stars}
      {count !== undefined && <span className="ml-1 text-xs text-gray-500">({count})</span>}
    </span>
  );
};
export default Rating;
