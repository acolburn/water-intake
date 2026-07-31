export default function RadialProgress({
  percentage,
  current,
  goal,
  typeScale,
}) {
  return (
    <div className="flex items-center justify-center gap-4 p-4">
      <div
        className="radial-progress text-info"
        style={
          {
            "--value": Math.round(percentage),
            "--size": "148px",
            "--thickness": "8px",
          } /* as React.CSSProperties */
        }
        aria-valuenow={Math.round(percentage)}
        role="progressbar"
      >
        <div className="flex h-full w-full flex-col items-center justify-center text-center">
          <div className={typeScale.statPrimary}>{Math.round(percentage)}%</div>
          <div className={typeScale.statSecondary}>{current} oz</div>
          <div className={typeScale.statSecondary}>{goal - current} oz</div>
        </div>
      </div>
    </div>
  );
}
