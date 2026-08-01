type JamaicaStripeProps = {
  variant?: "flag" | "rasta";
  className?: string;
};

export function JamaicaStripe({ variant = "flag", className = "" }: JamaicaStripeProps) {
  return (
    <div
      className={`${variant === "rasta" ? "rasta-stripe" : "jamaica-stripe"} ${className}`}
      aria-hidden="true"
    />
  );
}
