import React, { useState, useEffect } from 'react';

export const Search = ({ setSelectedCity }) => {
  const [countriesSearch, setCountriesSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries");
        const result = await response.json();
        const CitiesFilter = (countries) => {
          const citiesAndCountry = countries.flatMap((country) => 
            country.cities.map((city) => `${city} , ${country.country}`)
        );
        return citiesAndCountry;
        }
        const countriesAndCity = CitiesFilter(result.data);
        setCities(countriesAndCity);
        setFilteredData(countriesAndCity);
      } catch (error) {
        console.log("Error fetching cities:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    
  }, []);


  const handleChange = (event) => {
    const searchValue = event.target.value;
    setCountriesSearch(searchValue);
    setFilteredData(
      cities.filter(city =>
        city.toLowerCase().startsWith(searchValue.toLowerCase())
      ).slice(0, 5)
    );
  };
  

  const handleCityClick = (city) => {
    const cityName = city.split(",")[0];
    setSelectedCity(cityName);
    setCountriesSearch(""); 
  };

  return (
    <div className='z-40 '>
      <img
        src="./pic/search.png"
        alt=""
        className="h-[48px] w-[48px] absolute top-[58px] left-[77%] z-30"
      />
      <input
        disabled={loading}
        value={countriesSearch}
        onChange={handleChange}
        className="h-[80px] w-[530px] bg-[#FFFFFF] absolute top-[40px] left-[76%] rounded-[48px] pt-[16px] pr-[24px] pb-[16px] pl-[80px] text-[32px] font-semibold z-20"
        placeholder="Search"
      />
      <div className="absolute top-[12%] left-[75%] z-30 bg-[#FFFFFF] w-[530px] flex flex-col rounded-[28px] backdrop-blur-md">
        {countriesSearch.length > 0 &&
          filteredData.map((city, index) => (
            <div
              key={index}
              onClick={() => handleCityClick(city)}
              className="text-[24px] h-[56px] w-[530px] z-30 flex justify-start items-center top-[10%] bg-[#FFFFFF] backdrop-blur-md rounded-[15px]"
            >
              <img
                src="./pic/location-icon.png"
                alt=""
                className="z-40 h-[32px] w-[32px] ml-[25px] mr-[20px] opacity-40"
              />
              {city}
              
            </div>
          ))}
      </div>
    </div>
  );
};
