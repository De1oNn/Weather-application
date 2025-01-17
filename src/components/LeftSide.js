import React, { useEffect, useState } from 'react';

export const LeftSide = (props) => {
  const { weather, selectedCity } = props;

  // Debugging: Log the entire weather object
  console.log("Weather Data:", weather);

  const [imageSrc, setImageSrc] = useState('./pic/icon.png'); // Default image

  useEffect(() => {
    if (weather && weather.forecast && weather.forecast.forecastday && weather.forecast.forecastday[0].day.condition) {
      const conditionText = weather.forecast.forecastday[0].day.condition.text.toLowerCase();
      console.log("Condition text:", conditionText);  

      if (conditionText.includes('rain')) {
        setImageSrc('./pic/rain.png');
      } else if (conditionText.includes('sunny')) {
        setImageSrc('./pic/icon.png');
      } else if (conditionText.includes('cloudy')) {
        setImageSrc('./pic/Clouds.png');
      } else if (conditionText.includes('windy')) {
        setImageSrc('./pic/Wind.png');
      } else if (conditionText.includes('snowy')) {
        setImageSrc('./pic/Snow.png');
      } else {
        setImageSrc('./pic/Thunder.png');
      }


      console.log("Image source updated to:", imageSrc); 

    } else {
      console.log("Missing weather data.");
    }
  }, [weather]); 

  return (
    <div className="z-30">
      <div className="h-[828px] w-[414px] bg-[#FFFFFF30] z-30 rounded-[48px] flex flex-col items-center backdrop-blur-md shadow-2xl">
        <div className="flex justify-center items-center flex-col py-[56px] px-[40px]">
          <div className="flex h-[80px] w-[334px] justify-between">
            <div>
              <p className="text-[#9ca3af]">{weather.date}</p>
              <p className="text-[48px] text-[#111827] font-extrabold">{weather.cityName}</p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="./pic/location-icon.png"
                alt="Location"
                className="h-[32px] w-[32px] top-[100px]"
              />
            </div>
          </div>

          {/* Dynamically change the image based on weather condition */}
          <img
            src={imageSrc}  // Use state variable for the image source
            alt="Weather Condition"
            className="h-[274px] w-[274px] mt-[48px]"
          />
        </div>

        {/* Other weather details */}
        <div className="h-[269px] w-[414px] px-[48px] flex justify-center items-center flex-col">
          <div className="h-[165px] w-[318px]">
            <p className="font-extrabold text-[110px]">{weather.max_c}º</p>
          </div>
          <div className="h-[35px] w-[318px] mb-[48px] flex justify-center items-center">
            <p className="text-[#FF8E27] text-[30px] outline-dashed rounded-[40px] px-[10px]">
              {weather.condition}
            </p>
          </div>
          <div className="flex border-solid border-2 border-sky-500 h-[70px] w-[100px] rounded-[20px] justify-center items-center">
            <img src="./pic/humidity1.png" alt="" className="h-[40px] w-[40px]" />
            <p className="text-[#0000ff] text-[28px]">{weather.humidity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};  