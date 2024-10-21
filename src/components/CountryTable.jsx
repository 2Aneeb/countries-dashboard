import React from "react";
import { useState, useEffect } from "react";

function CountryTable({list}) {
    const [filteredList, setFilteredList] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [continentsInput, setContinentsInput] = useState([]);
      
    useEffect(() => {
        const filterCountries = () => {
            let filtered = list;

            if (searchInput.length > 0) {
                filtered = filtered.filter(country =>
                    country.name.common.toLowerCase().includes(searchInput.toLowerCase()) ||
                    (country.languages && Object.values(country.languages).some(lang => lang.toLowerCase().includes(searchInput.toLowerCase()))) ||
                    (country.cca2 && country.cca2.toLowerCase().includes(searchInput.toLowerCase()))
                );
            }

            if (continentsInput.length > 0) {
                filtered = filtered.filter(country =>
                    country.continents && continentsInput.some(continent => country.continents.includes(continent))
                );
            }

            setFilteredList(filtered);
        };

        filterCountries();
    }, [searchInput, continentsInput, list])

    const handleChecked = (event) => {
        const tag = event.target.id;
        setContinentsInput(prevState => {
            if (prevState.includes(tag)) {
                return prevState.filter(continent => continent !== tag); 
            } else {
                return [...prevState, tag]; 
            }
        });
    };

 
    return (
        <div className="countryTableDiv">
            <div className="filtersContainer">
                <input className="search"
                type="text"
                placeholder="Search..."
                onChange={(inputString) => setSearchInput(inputString.target.value)}
                />
                {/*create continents array and use map() maybe*/}
                <input type="checkbox" id='Asia' onChange={handleChecked}/>
                <label htmlFor="Asia">Asia</label>
                
                <input type="checkbox" id='North America' onChange={handleChecked}/>
                <label htmlFor="North America">North America</label>
                
                <input type="checkbox" id='South America' onChange={handleChecked}/>
                <label htmlFor="South America">South America</label>
                
                <input type="checkbox" id='Europe' onChange={handleChecked}/>
                <label htmlFor="Europe">Europe</label>
                
                <input type="checkbox" id='Oceania'onChange={handleChecked}/>
                <label htmlFor="Oceania">Australia (Oceania)</label>
                
                <input type="checkbox" id='Africa'onChange={handleChecked}/>
                <label htmlFor="Africa">Africa</label>

                <input type="checkbox" id='Antarctica'onChange={handleChecked}/>
                <label htmlFor="Antarctica">Antarctica</label>
                
                {/*
                <input type="checkbox" name="" id="Landlocked" />
                <label htmlFor="Landlocked">Landlocked</label>
        
                
               <label htmlFor="timezone">Time Zone</label>
                <select name="timezone" id="timezone">
                        <option value="">UTC-1</option>
                        <option value="">UTC-1</option>
                        <option value="">UTC-1</option>
                        <option value="">UTC-1</option>
                        <option value="">UTC-1</option>

                </select> */}
            </div>
            <table className="countryTable">
                <thead>
                    <tr>
                        <th>County Name</th>
                        <th>Official Name</th>
                        <th>Sub Region</th>
                        <th>Area (km²)</th>
                        <th>Population</th>
                        {/*<th>Lat/Long</th>*/}
                        <th>ISO Code</th>
                        {/*<th>TLD</th>*/}
                        <th>Landlocked</th>
                        {/*<th>Borders</th>*/}
                        <th>Langages</th>
                        <th>Google Maps</th>

                    </tr>

                </thead>
                <tbody>
                    {filteredList.length > 0 ? filteredList.map((country) => (
                        <tr key={country.cca2}>
                            <td> {country.name.common}</td>
                            <td className="table-cell"> {country.name.official}</td>
                            <td> {country.subregion}</td>
                            <td> {country.area.toLocaleString()}</td>
                            <td> {country.population.toLocaleString()}</td>
                            {/*<td> {country.latlng.join(', ')}</td>*/}
                            <td> {country.cca2}</td>
                            {/*<td> {country.tld}</td>*/}
                            <td> {country.landlocked ? 'Yes' : 'No'}</td>
                            {/*<td> {country.borders}</td>*/}
                            <td> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</td>
                            <td> {country.maps.googleMaps ? <a href={country.maps.googleMaps} target="_blank">View {country.cca2}</a> : 'N/A'}</td>
        
                        </tr>
                    )) : list.map((country) => (
                        <tr key={country.cca2}>
                            <td> {country.name.common}</td>
                            <td className="table-cell"> {country.name.official}</td>
                            <td> {country.subregion}</td>
                            <td> {country.area.toLocaleString()}</td>
                            <td> {country.population.toLocaleString()}</td>
                            {/*<td> {country.latlng.join(', ')}</td>*/}
                            <td> {country.cca2}</td>
                            {/*<td> {country.tld}</td>*/}
                            <td> {country.landlocked ? 'Yes' : 'No'}</td>
                            {/*<td> {country.borders}</td>*/}
                            <td> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</td>
                            <td> {country.maps.googleMaps ? <a href={country.maps.googleMaps} target="_blank">View {country.cca2}</a> : 'N/A'}</td>
        
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )


}


  
export default CountryTable;
  