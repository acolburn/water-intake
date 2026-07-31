import { intakeActions, intakeLevelClasses } from "../constants.js";

export default function Buttons({ onClick }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
      {intakeActions.map(({ amount, level }) => (
        <button
          key={amount}
          className={"btn border-none px-8 " + intakeLevelClasses[level]}
          onClick={() => onClick(amount)}
        >
          + {amount} oz
        </button>
      ))}
    </div>
  );
}
