export const DateDays = (checkIn: string, checkOut: string) => {
  const checkInDate: Date = new Date(checkIn);
  const checkOutDate: Date = new Date(checkOut);

  const differenceMilliseconds: number =
    checkOutDate.getTime() - checkInDate.getTime();
  const differenceDays: number = differenceMilliseconds / (1000 * 60 * 60 * 24);

  return differenceDays;
};
