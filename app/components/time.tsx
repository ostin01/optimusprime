export default function Time() {
  const t = new Date();
  const hours = t.getHours();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const minutes = t.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return (
    <p className="text-xs font-medium">
      {formattedHours}:{formattedMinutes}
    </p>
  );
}
