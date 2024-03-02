import React, { useEffect, useState } from "react";
import Weather from "../Weather/Weather";

const city = "Toronto";

function WeatherData() {
  const [details, getdetails] = useState({
    temperature: 25,
    temperatureApparent: 20,
    humidity: 80,
    dewPoint: 20.1,
    windSpeed: 30,
    visibility: 7,
  });

  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${process.env.REACT_APP_API_KEY}`,
        options
      ).then((res) => res.json());
      getdetails(response.data.values);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <>{details && <Weather details={details} city={city} />}</>
    </>
  );
}

export default WeatherData;
