export const citiesfilter = (setCities, countries) => {
    if (!Array.isArray(countries)) {
        console.error("Expected 'countries' to be an array, but got:", countries);
        return [];
    }

    const citiesAndCountry = countries.flatMap((country) => 
        country.cities.map((city) => `${city} , ${country.country}`)
    );

    return citiesAndCountry;
};