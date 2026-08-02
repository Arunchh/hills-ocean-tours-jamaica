"use client";

type Step = "date" | "time" | "details";

type Props = {
  current: Step;
  labels: { date: string; time: string; details: string };
};

const STEPS: Step[] = ["date", "time", "details"];

export function BookingStepIndicator({ current, labels }: Props) {
  const labelMap = { date: labels.date, time: labels.time, details: labels.details };
  const currentIndex = STEPS.indexOf(current);

  return (
    <ol className="mb-6 flex flex-wrap items-center gap-2 sm:gap-3" aria-label="Booking steps">
      {STEPS.map((step, index) => {
        const done = index < currentIndex;
        const active = step === current;
        return (
          <li key={step} className="flex items-center gap-2">
            <span
              className={`flex h-8 min-w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                active
                  ? "bg-rasta-red text-white shadow-md"
                  : done
                    ? "bg-jamaica-green text-white"
                    : "bg-jamaica-green/10 text-jamaica-black-soft/50"
              }`}
              aria-current={active ? "step" : undefined}
            >
              {done ? "✓" : index + 1}
            </span>
            <span
              className={`text-xs font-bold sm:text-sm ${
                active ? "text-jamaica-black" : done ? "text-jamaica-green" : "text-jamaica-black-soft/50"
              }`}
            >
              {labelMap[step]}
            </span>
            {index < STEPS.length - 1 && (
              <span className="hidden h-px w-4 bg-jamaica-green/20 sm:block" aria-hidden="true" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

type SummaryProps = {
  tourName: string;
  dateLabel: string;
  timeLabel: string;
  duration?: string;
  labels: {
    yourSelection: string;
    duration: string;
  };
};

export function BookingSelectionSummary({ tourName, dateLabel, timeLabel, duration, labels }: SummaryProps) {
  return (
    <div className="rounded-xl border-2 border-jamaica-green/20 bg-white p-4 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wide text-jamaica-green">{labels.yourSelection}</p>
      <p className="mt-2 font-display font-bold text-jamaica-black">{tourName}</p>
      <dl className="mt-3 grid gap-2 text-sm text-jamaica-black-soft">
        <div className="flex justify-between gap-4">
          <dt className="font-semibold text-jamaica-black-soft/70">Date</dt>
          <dd className="text-right font-bold text-jamaica-black">{dateLabel}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="font-semibold text-jamaica-black-soft/70">Time</dt>
          <dd className="text-right font-bold text-jamaica-black">{timeLabel}</dd>
        </div>
        {duration && (
          <div className="flex justify-between gap-4">
            <dt className="font-semibold text-jamaica-black-soft/70">{labels.duration}</dt>
            <dd className="text-right font-bold text-jamaica-black">{duration}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}

type LegendProps = {
  labels: { title: string; open: string; closed: string; full: string };
};

export function BookingCalendarLegend({ labels }: LegendProps) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-jamaica-green/10 pt-4">
      <span className="text-xs font-bold text-jamaica-black-soft/60">{labels.title}</span>
      <span className="flex items-center gap-1.5 text-xs text-jamaica-black-soft">
        <span className="h-3 w-3 rounded bg-jamaica-green-light ring-1 ring-jamaica-green/30" />
        {labels.open}
      </span>
      <span className="flex items-center gap-1.5 text-xs text-jamaica-black-soft">
        <span className="h-3 w-3 rounded bg-jamaica-black-soft/10" />
        {labels.full}
      </span>
      <span className="flex items-center gap-1.5 text-xs text-jamaica-black-soft">
        <span className="h-3 w-3 rounded bg-transparent ring-1 ring-jamaica-black-soft/20" />
        {labels.closed}
      </span>
    </div>
  );
}
