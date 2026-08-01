type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl px-1 ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] sm:text-sm sm:tracking-[0.2em] ${
            light ? "text-jamaica-gold" : "text-jamaica-green"
          }`}
        >
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-rasta-red" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`section-heading-balance font-display text-[1.625rem] font-bold leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-jamaica-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base leading-relaxed sm:mt-4 sm:text-lg ${
            light ? "text-jamaica-gold-light/90" : "text-jamaica-black-soft/80"
          }`}
        >
          {description}
        </p>
      )}
      <div className={`mt-4 flex gap-1 sm:mt-5 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-1 w-6 rounded-full bg-jamaica-green sm:w-8" />
        <span className="h-1 w-6 rounded-full bg-jamaica-gold sm:w-8" />
        <span className="h-1 w-6 rounded-full bg-rasta-red sm:w-8" />
      </div>
    </div>
  );
}
