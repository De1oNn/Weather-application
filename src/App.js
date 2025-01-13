import './index.css';
import sun from './pic/icon.png';
import moon from './pic/moon.png';
import logoleft from './pic/logo-left.png';
import logoright from './pic/logo-right.png'
import home from './pic/home-icon.png'
import location from './pic/location-icon.png'
import love from './pic/love-icon.png'
import user from './pic/user-icon.png'
import search from './pic/search.png'
import { useEffect, useState } from 'react';

function App() {

  const [countriesSearch, setcountriesSearch] = useState("");
  const [countriesData, setCountriesData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const fetchData = () => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((result) => {
        setCountriesData(result.data)
        setFilteredData(result.data);
      })
      .catch((error) => {
        console.log("error", error);
      })
  };


  const filterData = () => {
    setFilteredData(
      countriesData.filter((item)=> item.country === countriesSearch)
    );
  }

  useEffect(() => { 
    filterData();
  }, [countriesSearch])

  useEffect(()=> {
    console.log("useEffect fetch data worked");
    
    fetchData();
  }, [])

  const handleChange = (event) => {
    setcountriesSearch(event.target.value)
  };

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
        <img src={logoright} alt='' className="h-[86px] w-[43px] absolute z-index-20 left-20"/>
        <img src={logoleft} alt='' className="h-[86px] w-[43px] absolute z-index-20 left-4"/>
      </div>
      <div className="h-[340px] w-[340px] absolute border border-white rounded-full z-10 opacity-40"></div>
      <div className="h-[540px] w-[540px] absolute border border-white rounded-full z-10 opacity-40"></div>
      <div className="h-[940px] w-[940px] absolute border border-white rounded-full z-10 opacity-40"></div>
      
      
      <div className="bg-custom-white w-1/2 h-screen left-0 absolute flex justify-center items-center">
        <img src={search} alt='' className='h-[48px] w-[48px] absolute top-[58px] left-[180px] z-30'></img>
        <input onChange={handleChange} className="h-[80px] w-[567px] bg-[#FFFFFF] absolute top-10 left-40 rounded-[48px] pt-[16px] pr-[24px] pb-[16px] pl-[80px] text-[32px] font-semibold z-20" placeholder='Search'></input>
        <div className='z-40'>
          {filteredData.map((country, index) => {
            return <div key={index}>{country.country}</div>
          })}
        </div>
        <div className="h-[828px] w-[414px] bg-[#FFFFFF] z-20 rounded-[48px] flex flex-col items-center backdrop-blur-md backdrop-opacity-20">
          <div className='flex justify-center items-center flex-col py-[56px] px-[40px]'>
            <div className='flex h-[80px] w-[334px] justify-between'>
              <div>
                <p className='text-[#9ca3af]'>January 13, 2025</p>
                <p className='text-[48px] text-[#111827] font-extrabold'>Ulaanbaatar</p>
              </div>
              <div className='flex justify-center items-center'>
                <img src={location} alt='' className="h-[32px] w-[32px]"/>
              </div>
            </div>
            <img src={sun} alt='' className="h-[274px] w-[274px] mt-[48px]"/>
          </div>
          <div className='h-[269px] w-[414px] px-[48px] flex justify-center items-center flex-col'>
            <div className='h-[165px] w-[318px]'>
              <p className='font-extrabold text-[110px]'>-15.4º</p>
            </div>
            <div className="h-[24px] w-[318px] mb-[48px]">
              <p>Light snow</p>
            </div>
            <div className="flex h-[32px] w-[318px] justify-between">
              <img src={home} alt='' className="h-[32px] w-[32px]"/>
              <img src={location} alt='' className="h-[32px] w-[32px] opacity-40"/>
              <img src={love} alt='' className="h-[32px] w-[32px] opacity-40"/>
              <img src={user} alt='' className="h-[32px] w-[32px] opacity-40"/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom-dark w-1/2 h-screen right-0 absolute flex justify-center items-center rounded-bl-[48px]">
        <div className="h-[828px] w-[414px] bg-[#111827] z-20 rounded-[48px] flex flex-col items-center backdrop-blur-md backdrop-opacity-20">
          <div className='flex justify-center items-center flex-col py-[56px] px-[40px]'>
            <div className='flex h-[80px] w-[334px] justify-between'>
              <div>
                <p className='text-[#9ca3af]'>January 13, 2025</p>
                <p className='text-[48px] text-[#FFFFFF] font-extrabold'>Ulaanbaatar </p>
              </div>
              <div className='flex justify-center items-center'>
                <img src={location} alt='' className="h-[32px] w-[32px] text-[#FFFFFF]"/>
              </div>
            </div>
            <img src={moon} alt='' className="h-[274px] w-[274px] mt-[48px]"/>
          </div>
          <div className='h-[269px] w-[414px] px-[48px] flex justify-center items-center flex-col'>
            <div className='h-[165px] w-[318px]'>
              <p className='font-extrabold text-[110px] text-[#F9FAFB]'>-15.4º</p>
            </div>
            <div className="h-[24px] w-[318px] mb-[48px]">
              <p className='text-[#777CCE]'>Light snow</p>
            </div>
            <div className="flex h-[32px] w-[318px] justify-between">
              <img src={home} alt='' className="h-[32px] w-[32px]"/>
              <img src={location} alt='' className="h-[32px] w-[32px] opacity-40"/>
              <img src={love} alt='' className="h-[32px] w-[32px] opacity-40"/>
              <img src={user} alt='' className="h-[32px] w-[32px] opacity-40"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;