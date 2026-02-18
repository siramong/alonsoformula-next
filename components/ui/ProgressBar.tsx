interface ProgressBarProps {
  label?: string;
  value: number;
  max?: number;
  valueLabel?: string;
  helperText?: string;
  className?: string;
}

export default function ProgressBar({
  label,
  value,
  max = 100,
  valueLabel,
  helperText,
  className,
}: ProgressBarProps) {
  const clampedValue = Math.min(Math.max(value, 0), max);
  const percentage = max > 0 ? Math.round((clampedValue / max) * 100) : 0;

  return (
    <div className={`space-y-2 ${className ?? ""}`}>
      {(label || valueLabel) && (
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-800 text-sm">{label}</span>
          {valueLabel && <span className="font-bold text-primary-600 text-sm">{valueLabel}</span>}
        </div>
      )}
      <div
        className="h-3 w-full rounded-full bg-gray-200 shadow-inner overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={clampedValue}
        aria-label={label ?? "Progress"}
      >
        <div
          className="h-3 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 shadow-lg transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {helperText && <p className="text-xs text-gray-600 font-medium">{helperText}</p>}
    </div>
  );
}
