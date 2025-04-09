import { useEffect, useState } from "react";

const targetDate = new Date("2026-04-10T00:00:00");

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card bg-base-100 shadow-xl w-80">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Cuenta regresiva para chuparmela 18 veces ah no, era tu cumple perdón 🎂</h2>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col">
            <span className="countdown font-mono text-2xl">
              {timeLeft.days}
            </span>
            días
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-2xl">
              {timeLeft.hours}
            </span>
            hs
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-2xl">
              {timeLeft.minutes}
            </span>
            min
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-2xl">
              {timeLeft.seconds}
            </span>
            seg
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
