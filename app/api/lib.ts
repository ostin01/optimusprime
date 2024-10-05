const apikey = "3cf458be8f80b56b634bc863713571a9";

export async function _getCity() {
  const res = await fetch(
    "https://api.ipgeolocation.io/ipgeo?apiKey=901ab119096b4572b354f42af258b63d",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}
export async function _getWeather(cityName: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apikey}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function _getIcon(iconCode: number) {
  const res = await fetch(`https://openweathermap.org/img/w/${iconCode}.png`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.url;
}
