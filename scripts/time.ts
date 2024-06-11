export function past(h: number, m: number, s: number): number {
  //Convert into milliseconds
  const milliseconds = (
    hour: number,
    minute: number,
    second: number
  ): number => {
    return (hour * 3600 + minute * 60 + second) * 1000;
  };

  //Current hour
  const currentTime: number = milliseconds(h, m, s);

  return currentTime;
}
