import React from 'react'

export const RightSide = (props) => {
  const {weather, selectedCity, weatherLoading} = props
  
  const RightCondition = () => {
    const condition = weather?.condition?.toLowerCase() || 'clear'; 

    if (condition.includes("clouds")) {
      return './pic/Clouds1.png';
    }
    else if (condition.includes('rain')) {
      return './pic/rain1.png';
    }
    else if (condition.includes('sunny')) {
      return './pic/moon.png';
    }
    else if (condition.includes('windy')) {
      return './pic/Wind1.png';
    }
    else if (condition.includes('snow')) {
      return './pic/Snow1.png';
    }
    else {
      return './pic/Snow1.png'; 
    }
  };

  if (weatherLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='z-30'>
      <div className="h-[828px] w-[414px] bg-[#11182733] z-30 rounded-[48px] flex flex-col items-center backdrop-blur-md shadow-2xl">
          <div className='flex justify-center items-center flex-col py-[56px] px-[40px]'>
            <div className='flex h-[80px] w-[334px] justify-between'>
              <div>
                <p className='text-[#9ca3af]'>{weather.date}</p>
                <p className='text-[48px] text-[#FFFFFF] font-extrabold'>{weather.cityName}</p>
              </div>
              <div className='flex justify-center items-center'>
                <img src={"./pic/location-icon.png"} alt='' className="h-[32px] w-[32px] text-[#FFFFFF]" />
              </div>
            </div>
            <img src={RightCondition()} alt='' className="h-[274px] w-[274px] mt-[48px]" />
          </div>
          <div className='h-[269px] w-[414px] px-[48px] flex justify-center items-center flex-col'>
            <div className='h-[165px] w-[318px]'>
              <p className='font-extrabold text-[110px] text-[#F9FAFB]'>{weather.min_c}º</p>
            </div>
            <div className="h-[35px] w-[318px] mb-[48px] flex justify-center  items-center ">
              <p className='text-[#777CCE] text-[30px] outline-dashed rounded-[40px] px-[10px]'>{weather.condition}</p>
            </div>
            <div className='flex border-solid border-2 border-sky-500 h-[70px] w-[100px] rounded-[20px] justify-center items-center'>
              <img src={"./pic/humidity1.png"}  alt='' className='h-[40px] w-[40px]'/>
              <p className='text-[#0000ff] text-[28px] ml-[10px]'>{weather.humidity}</p>
            </div>
          </div>
        </div>
    </div>
  )
}
