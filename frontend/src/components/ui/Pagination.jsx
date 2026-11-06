const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const base = "flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm transition";
  return (
    <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center justify-center gap-2">
      <button
        className={`${base} border-ink/20 hover:border-ink disabled:opacity-40`}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          aria-current={p === page ? "page" : undefined}
          onClick={() => onChange(p)}
          className={`${base} ${p === page ? "border-ink bg-ink text-white" : "border-ink/20 hover:border-ink"}`}
        >
          {p}
        </button>
      ))}
      <button
        className={`${base} border-ink/20 hover:border-ink disabled:opacity-40`}
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>
    </nav>
  );
};
export default Pagination;
