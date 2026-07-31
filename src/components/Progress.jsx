export default function Progress({ percentage }) {
  return (
    <div className="flex items-center justify-center gap-4 p-4">
      <progress
        className="progress w-56 text-info"
        value={Math.round(percentage)}
        max="100"
      ></progress>
    </div>
  );
}
