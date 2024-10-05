import { _getCity, _getIcon, _getWeather } from "./api/lib";
import Body from "./components/body";

export default async function Home() {
  const cityName = await _getCity();
  const weather = await _getWeather(cityName.city);
  const weatherIcon = (await _getIcon(weather?.weather[0].icon)) ?? "";
  return (
    <div>
      <Body weather={weather} weatherIcon={weatherIcon} />
    </div>
  );
}
