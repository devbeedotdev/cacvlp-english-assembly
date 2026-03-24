const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

export const isCelebrantToday = (dob: string, now: Date = new Date()): boolean => {
  const birthDate = new Date(dob);
  if (Number.isNaN(birthDate.getTime())) {
    return false;
  }

  const sameMonth = birthDate.getMonth() === now.getMonth();
  const sameDate = birthDate.getDate() === now.getDate();
  if (!sameMonth || !sameDate) {
    return false;
  }

  // Explicit 24-hour birthday visibility window from today's midnight.
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const elapsedToday = now.getTime() - todayStart.getTime();
  return elapsedToday >= 0 && elapsedToday < ONE_DAY_IN_MS;
};
