import { cn } from "@/lib/utils";

// Quiet label marking stock/illustrative imagery so it is never mistaken for a
// real Premier project. Intentionally small; see /credits for sources.
export function PlaceholderChip({
  className,
  children = "Stock photo",
}: {
  className?: string;
  children?: string;
}) {
  return (
    <span
      className={cn(
        "pointer-events-none inline-flex items-center rounded bg-black/45 px-1.5 py-0.5 text-[0.58rem] font-medium uppercase tracking-[0.1em] text-white/80 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
