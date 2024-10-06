import { day, dayInWords, month } from "@/app/constant/DateTime";
import { WeatherResponse } from "../schema/port";

export default function weather({
  weather,
  weatherIcon,
}: {
  weather: WeatherResponse;
  weatherIcon: string;
}) {
  return (
    <div className="absolute top-[50px] left-0 right-0 flex justify-between max-w-[90%] mx-auto">
      <div className="flex flex-col justify-center w-[150px] relative overflow-hidden text-white">
        <div className="bg-gradient-to-b from-black to-gray-700 h-[150px] w-[150px] rounded-[20px] text-[12px] p-[10px]">
          {weather ? (
            <div>
              <h2 className="text-[18px]">{weather.name}</h2>
              <p className="text-[40px] font-light">
                {Math.floor(weather?.main?.temp - 273.15)}°
              </p>

              <div className="w-[20px] mb-[-8px]">
                <img src={weatherIcon} alt="" />
              </div>
              <p>{weather.weather[0].main}</p>
              <div className="flex gap-[5px]">
                <p>H:{Math.floor(weather?.main?.temp_max - 273.15)}°</p>
                <p>L:{Math.floor(weather?.main?.temp_min - 273.15)}°</p>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <p className="mt-[5px] text-[12px] text-center">Weather</p>
      </div>

      <div className="text-center">
        <div className="bg-white text-black h-[150px] w-[150px] flex flex-col items-center justify-center rounded-[20px] text-[25px] font-bold">
          <div className="flex gap-[5px]">
            <span className="text-[#FF0000] font-bold">{dayInWords}</span>
            <p>{month}</p>
          </div>

          <p className="text-[60px]">{day}</p>
        </div>
        <p className="mt-[5px] text-[12px] text-white">Calendar</p>
      </div>
    </div>
  );
}
