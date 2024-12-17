enum DayOfWeek {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
  Sunday = "sunday",
}

const isWeekend = (day: DayOfWeek): boolean =>
  day === DayOfWeek.Saturday || day === DayOfWeek.Sunday ? true : false;

// console.log(isWeekend(DayOfWeek.Saturday));
