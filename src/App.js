import './index.css';
import { useEffect, useState } from 'react';
import { Search } from './components/Search';
import { RightSide } from './components/RightSide';
import { LeftSide } from './components/LeftSide';
// import { useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar")
  const [weatherLoading, setWeatherLoading] = useState(false)
  const [weather, setWeather] =useState({})

  const weatherApiKey = "c74333e3d071494c8dd22100251501"
  
  const getWeather = async () => {
    setWeatherLoading(true);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      const result = await response.json();
      console.log(result);
      const weatherData = {
        cityName: selectedCity, 
        max_c: result.forecast.forecastday[0].day.maxtemp_c,
        humidity: result.current.humidity,
        min_c: result.forecast.forecastday[0].day.mintemp_c,
        condition: result.forecast.forecastday[0].day.condition.text,
        date: result.forecast.forecastday[0].date,
      };
      setWeather(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setWeatherLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  return (
    <div className="flex w-screen h-screen relative justify-center items-center bg-[#F3F4F6]">
      <div className='absolute h-[176px] w-[176px] bg-[#FF8E27] z-10 top-[8%] left-[10%] rounded-full'></div>
      <div className='absolute h-[128px] w-[128px] bg-[#6E72C9] z-10 top-[80%] left-[80%] rounded-full'></div>
      <div className="h-[140px] w-[140px] bg-[#F3F4F6] absolute border border-black rounded-full z-10 justify-center items-center">
      </div>
      <div className="h-[340px] w-[340px] absolute border border-black rounded-full z-10 opacity-20"></div>
      <div className="h-[540px] w-[540px] absolute border border-black rounded-full z-10 opacity-20"></div>
      <div className="h-[940px] w-[940px] absolute border border-black rounded-full z-10 opacity-20"></div>
      <div className="h-[140px] w-[140px] absolute border border-[gray] rounded-full z-10 flex justify-center items-center">
        <img src={"./pic/logo-right.png"} alt='' className="h-[86px] w-[43px] absolute z-index-20 left-20" />
        <img src={"./pic/logo-left.png"} alt='' className="h-[86px] w-[43px] absolute z-index-20 left-4" />
      </div>
      <div className="h-[340px] w-[340px] absolute border border-white rounded-full z-10 opacity-40"></div>
      <div className="h-[540px] w-[540px] absolute border border-white rounded-full z-10 opacity-40"></div>
      <div className="h-[940px] w-[940px] absolute border border-white rounded-full z-10 opacity-40"></div>


      <div className="bg-custom-white w-1/2 h-screen left-0 absolute flex justify-center items-center">
        <Search setSelectedCity={setSelectedCity}/>
        <LeftSide weather={weather}/>
        {weatherLoading && <p></p>}
      </div>
      <div className="bg-custom-dark w-1/2 h-screen right-0 absolute flex justify-center items-center rounded-bl-[48px]">
      <RightSide weather={weather} />
      </div>
    </div>
  );
}

export default App;