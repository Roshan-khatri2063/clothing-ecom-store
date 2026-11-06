const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse rounded-lg bg-sand/70 ${className}`} aria-hidden="true" />
);

export const ProductCardSkeleton = () => (
  <div>
    <Skeleton className="aspect-[3/4] w-full rounded-xl" />
    <Skeleton className="mt-3 h-4 w-3/4" />
    <Skeleton className="mt-2 h-4 w-1/3" />
  </div>
);

export default Skeleton;
