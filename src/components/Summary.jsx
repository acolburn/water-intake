export default function Summary({ current, goal }) {
  return (
    <div className="flex items-center justify-center gap-4 p-4 mb-8">
      <p>You've had: {current} oz</p>
      <p>Still to go: {goal - current} oz</p>
    </div>
  );
}
