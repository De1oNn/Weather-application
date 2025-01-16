import './index.css';
import { useEffect, useState } from 'react';
import { citiesfilter } from "./utils/CitiesFilter";
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
      const result = await response.json();
  
      // Add cityName to the weather data
      const weatherData = {
        cityName: selectedCity, 
        max_c: result.forecast.forecastday[0].day.maxtemp_c,
        min_c: result.forecast.forecastday[0].day.mintemp_c,
        condition: result.forecast.forecastday[0].day.condition.text,
        date: result.forecast.forecastday[0].date,
      };
  
      setWeather(weatherData);  // Update the state with cityName
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
        {/* <img src={search} alt='' className='h-[48px] w-[48px] absolute top-[58px] left-[77%] z-30'></img>
        <input disabled={loading} onChange={handleChange} className="h-[80px] w-[530px] bg-[#FFFFFF] absolute top-[40px] left-[76%] rounded-[48px] pt-[16px] pr-[24px] pb-[16px] pl-[80px] text-[32px] font-semibold z-20" placeholder='Search'></input>
        <div className='absolute top-[12%] left-[75%] z-30 bg-[#FFFFFF] w-[567px] flex flex-col rounded-[28px] backdrop-blur-md shadow-2xl'>
          {countriesSearch.length > 0 &&
            filteredData.map((country, index) => {
              return <div key={index} className='text-[24px] h-[56px] w-[567px] z-30 flex justify-start items-center top-[10%] bg-[#FFFFFF] backdrop-blur-md rounded-[15px] '><img src={location} alt='' className='z-40 h-[32px] w-[32px] ml-[25px] mr-[20px] opacity-40' />  {country}</div>
            })}
        </div> */}
        {/* <div className="h-[828px] w-[414px] bg-[#FFFFFF30] z-20 rounded-[48px] flex flex-col items-center backdrop-blur-md shadow-2xl">
          <div className='flex justify-center items-center flex-col py-[56px] px-[40px]'>
            <div className='flex h-[80px] w-[334px] justify-between'>
              <div>
                <p className='text-[#9ca3af]'>January 13, 2025</p>
                <p className='text-[48px] text-[#111827] font-extrabold'>Ulaanbaatar</p>
              </div>
              <div className='flex justify-center items-center'>
                <img src={"./pic/location-icon.png"} alt='' className="h-[32px] w-[32px] top-[100px]" />
              </div>
            </div>
            <img src={"./pic/icon.png"} alt='' className="h-[274px] w-[274px] mt-[48px]" />
          </div>
          <div className='h-[269px] w-[414px] px-[48px] flex justify-center items-center flex-col'>
            <div className='h-[165px] w-[318px]'>
              <p className='font-extrabold text-[110px]'>-15.4º</p>
            </div>
            <div className="h-[24px] w-[318px] mb-[48px]">
              <p className='text-[#FF8E27]'>Light snow</p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="bg-custom-dark w-1/2 h-screen right-0 absolute flex justify-center items-center rounded-bl-[48px]">
      <RightSide weather={weather}/>
        {/* <div className="h-[828px] w-[414px] bg-[#11182733] z-20 rounded-[48px] flex flex-col items-center backdrop-blur-md shadow-2xl">
          <div className='flex justify-center items-center flex-col py-[56px] px-[40px]'>
            <div className='flex h-[80px] w-[334px] justify-between'>
              <div>
                <p className='text-[#9ca3af]'>January 13, 2025</p>
                <p className='text-[48px] text-[#FFFFFF] font-extrabold'>Ulaanbaatar </p>
              </div>
              <div className='flex justify-center items-center'>
                <img src={"./pic/location-icon.png"} alt='' className="h-[32px] w-[32px] text-[#FFFFFF]" />
              </div>
            </div>
            <img src={"./pic/moon.png"} alt='' className="h-[274px] w-[274px] mt-[48px]" />
          </div>
          <div className='h-[269px] w-[414px] px-[48px] flex justify-center items-center flex-col'>
            <div className='h-[165px] w-[318px]'>
              <p className='font-extrabold text-[110px] text-[#F9FAFB]'>-15.4º</p>
            </div>
            <div className="h-[24px] w-[318px] mb-[48px]">
              <p className='text-[#777CCE]'>Light snow</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;