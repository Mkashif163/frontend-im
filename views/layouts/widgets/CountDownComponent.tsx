import React, { Fragment, useEffect, useState } from "react";

const CountDownComponent: React.FC = () => {
  const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  const [countdowns, setCountDown] = useState({ days: 0, hrs: 0, mins: 0, sec: 0, completed: false });
  useEffect(() => {
    const intervals = setInterval(() => {
      const currentDate = new Date().getTime();

      const difference = countDownDate - currentDate;

      // Finding difference in days, hours, minutes and seconds
      setCountDown({
        ...countdowns,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        sec: Math.floor((difference % (1000 * 60)) / 1000),
      });

      if (difference < 0) {
        setCountDown({ ...countdowns, completed: true });
      }
    }, 1000);
    return () => {
      clearInterval(intervals);
    };
  }, []);

  return (
    <Fragment>
      {countdowns.completed ? (
        <span>You are good to go!</span>
      ) : (
        <div className="timer">
          <p className="demo">
            <span>
              {countdowns.days}
              <span>days</span>
            </span>
            <span>
              {countdowns.hrs}
              <span>hrs</span>
            </span>
            <span>
              {countdowns.mins}
              <span>min</span>
            </span>
            <span>
              {countdowns.sec}
              <span>sec</span>
            </span>
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default CountDownComponent;
