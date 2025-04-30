// import React, { useEffect, useState } from 'react';
import Cloud from '../pic/Clouds.png'
import Rain from '../pic/Rain.png'
import Icon from '../pic/icon.png'
import Wind from '../pic/Wind.png'
import Snow from '../pic/Snow.png'
import locationIcon from '../pic/location-icon.png'
import humidityIcon from '../pic/humidity1.png'

export const LeftSide = (props) => {
  const { weather, weatherLoading } = props;


  const LeftCondition = () => {
    const condition = weather?.condition?.toLowerCase() || 'clear'; 

    if (condition.includes("clouds")) {
      return Cloud;
    }
    else if (condition.includes('rain')) {
      return Rain;
    }
    else if (condition.includes('sunny')) {
      return Icon;
    }
    else if (condition.includes('windy')) {
      return Wind;
    }
    else if (condition.includes('snow')) {
      return Snow;
    }
    else {
      return Snow; 
    }
  };

  if (weatherLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="z-30">
      <div className="h-[828px] w-[414px] bg-[#FFFFFF30] z-30 rounded-[48px] flex flex-col items-center backdrop-blur-md shadow-2xl">
        <div className="flex justify-center items-center flex-col py-[56px] px-[40px]">
          <div className="flex h-[80px] w-[334px] justify-between">
            <div>
              <p className="`text-[#9ca3af10]`">{weather.date}</p> 
              <p className="text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400 text-[48px] font-extrabold">{weather.cityName}</p> 
            </div>
            <div className="flex justify-center items-center">
              <img
                src={locationIcon}
                alt="Location"
                className="h-[32px] w-[32px] top-[100px]"
              />
            </div>
          </div>


          <img
            src={LeftCondition()}  
            alt="Weather Condition"
            className="h-[274px] w-[274px] mt-[48px]"
          />
        </div>

        <div className="h-[269px] w-[414px] px-[48px] flex justify-center items-center flex-col">
          <div className="h-[165px] w-[318px]">
            <p className="font-extrabold text-[110px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">{weather?.max_c}º</p> 
          </div>
          <div className="h-[35px] w-[318px] mb-[48px] flex justify-center items-center">
            <p className="text-[#FF8E27] text-[30px] outline-dashed rounded-[40px] px-[10px]">
              {weather?.condition} 
            </p>
          </div>
          <div className="flex border-solid border-2 border-sky-500 h-[70px] w-[100px] rounded-[20px] justify-center items-center">
            <img src={humidityIcon} alt="" className="h-[40px] w-[40px]" />
            <p className="text-[#0000ff] text-[28px] ml-[10px]">{weather?.humidity}</p> 
          </div>
        </div>
      </div>
    </div>
  );
};