export const toColonTime = (time: number): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const secs = Number((time % 60).toFixed(0));

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = secs < 10 ? `0${secs}` : secs;

  if (hours > 0) {
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
};
