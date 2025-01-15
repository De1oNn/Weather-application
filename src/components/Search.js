// import React from 'react'
// import { useEffect, useState } from 'react';
// import { citiesfilter } from "./utils/Citiesfilter";
// import search from './pic/search.png'
// import location from './pic/location-icon.png'  

// export const Search = () => {
//       const [countriesSearch, setCountriesSearch] = useState("");
//       const [filteredData, setFilteredData] = useState([])
//       const [loading, setLoading] = useState(false)
//       const [cities, setCities] = useState([]);
    
    
//       const fetchData = async () => {
//         setLoading(true)
//         try {
//           const response = await fetch("https://countriesnow.space/api/v0.1/countries")
//           const result = await response.json();
    
//           const countriesAndCity = citiesfilter(result.data)
//           console.log(countriesAndCity);
          
//           setCities(countriesAndCity);
//           setFilteredData(countriesAndCity);
//         } catch {
//           console.log("error");
//         } finally{
//           setLoading(false)
//         }
//       }
    
//       useEffect(() => {
//         console.log("useEffect fetch data worked");
    
//         fetchData();
//       }, [])
    
//       const handleChange = (event) => {
//         console.log(event.target.value);
    
//         setCountriesSearch(event.target.value)
//         setFilteredData(
//           cities
//             .filter((city) =>
//               city.toLowerCase().startsWith(event.target.value.toLowerCase())
//             )
//             .slice(0, 5)
//         );
//       };
    
//   return (
//     <div>
//         <img src={search} alt='' className='h-[48px] w-[48px] absolute top-[58px] left-[77%] z-30'></img>
//         <input disabled={loading} onChange={handleChange} className="h-[80px] w-[530px] bg-[#FFFFFF] absolute top-[40px] left-[76%] rounded-[48px] pt-[16px] pr-[24px] pb-[16px] pl-[80px] text-[32px] font-semibold z-20" placeholder='Search'></input>
//         <div className='absolute top-[12%] left-[75%] z-30 bg-[#FFFFFF] w-[567px] flex flex-col rounded-[28px] backdrop-blur-md shadow-2xl'>
//           {countriesSearch.length > 0 &&
//             filteredData.map((country, index) => {
//               return <div key={index} className='text-[24px] h-[56px] w-[567px] z-30 flex justify-start items-center top-[10%] bg-[#FFFFFF] backdrop-blur-md rounded-[15px] '><img src={location} alt='' className='z-40 h-[32px] w-[32px] ml-[25px] mr-[20px] opacity-40' />  {country}</div>
//             })}
//         </div>
//     </div>
//   )
// }
