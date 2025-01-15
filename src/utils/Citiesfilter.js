export const citiesfilter = (countries) => {

    const citiesAndCountry = countries.flatMap((country) => 
        country.cities.map((city) => `${city} , ${country.country}`)
    );

    return citiesAndCountry;
};