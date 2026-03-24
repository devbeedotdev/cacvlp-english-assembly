import { useEffect, useMemo, useState } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;

const getTimeParts = (targetDate: string, now: Date): CountdownValue | null => {
  const target = new Date(targetDate);
  const diff = target.getTime() - now.getTime();
  if (Number.isNaN(target.getTime()) || diff <= 0) {
    return null;
  }

  const days = Math.floor(diff / ONE_DAY);
  const hours = Math.floor((diff % ONE_DAY) / ONE_HOUR);
  const minutes = Math.floor((diff % ONE_HOUR) / ONE_MINUTE);
  const seconds = Math.floor((diff % ONE_MINUTE) / ONE_SECOND);

  return { days, hours, minutes, seconds };
};

export const useCountdown = (targetDate: string): CountdownValue | null => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, ONE_SECOND);

    return () => window.clearInterval(timer);
  }, []);

  return useMemo(() => getTimeParts(targetDate, now), [targetDate, now]);
};
