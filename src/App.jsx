import { useState, useEffect } from "react";
import Header from "./components/Header";
import RadialProgress from "./components/RadialProgress";
// import Progress from "./components/Progress";
// import { typeScale, intakeActions, intakeLevelClasses } from "./constants.js";
import { typeScale } from "./constants.js";
import Buttons from "./components/Buttons";

function App() {
  const [goal, setGoal] = useState(() => {
    const savedGoal = localStorage.getItem("goal");
    return savedGoal ? Number(savedGoal) : 64;
  });
  const [current, setCurrent] = useState(() => {
    const savedCurrent = localStorage.getItem("current");
    return savedCurrent ? Number(savedCurrent) : 0;
  });
  const percentage = goal ? (current / goal) * 100 : 0;

  useEffect(() => {
    localStorage.setItem("goal", goal);
  }, [goal]);

  useEffect(() => {
    localStorage.setItem("current", current);
  }, [current]);

  const addWater = (volume) => {
    setCurrent((prev) => prev + volume);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <Header />
      <main className="p-4 mb-8">
        <form className="flex items-center justify-center mb-4">
          <label className="pr-2 text-lg font-extrabold tracking-tight ">
            Goal (oz){" "}
          </label>
          <input
            className="w-20 text-2xl font-extrabold text-center"
            type="number"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
          />
        </form>

        <RadialProgress
          percentage={percentage}
          current={current}
          goal={goal}
          typeScale={typeScale}
        />

        {/* <Progress
          percentage={percentage}
          current={current}
          goal={goal}
          addWater={addWater}
          intakeActions={intakeActions}
          intakeLevelClasses={intakeLevelClasses}
        /> */}

        <div className="flex items-center justify-center gap-4 p-4 mb-8">
          <p>You've had: {current} oz</p>
          <p>Still to go: {goal - current} oz</p>
        </div>
        {/* <div className="flex gap-4 items-center justify-center mb-4">
          <button className="btn btn-info px-8" onClick={() => addWater(4)}>
            + 4 oz
          </button>
          <button className="btn btn-info px-8" onClick={() => addWater(8)}>
            + 8 oz
          </button>
        </div>
        <div className="flex gap-4 items-center justify-center mb-8">
          <button className="btn btn-info px-8" onClick={() => addWater(12)}>
            + 12 oz
          </button>
          <button className="btn btn-info px-8" onClick={() => addWater(16)}>
            + 16 oz
          </button>
        </div>
         */}

        <Buttons onClick={addWater} />
        <div className="flex gap-4 items-center justify-center mb-4">
          <button className="btn btn-error" onClick={() => setCurrent(0)}>
            Reset
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
