import React from "react";
import { useState, useEffect } from "react";

//lang, name, iso/tld
function CountryTable({list}) {
    const [filteredList, setfilteredList] = useState([])
    const [searchInput, setsearchInput] = useState(false)
    const [continents, setContinents] = useState([])
  

    const searchItems = (input) => {
        setsearchInput(true)
        if (input.length === 0) {
            setfilteredList(list)
        } else {
            setfilteredList(
                list.filter(country => 
                    country.name.common.toLowerCase().includes(input.toLowerCase()) ||
                    (country.languages && Object.values(country.languages).some(lang => lang.toLowerCase().includes(input.toLowerCase()))) ||
                    (country.tld && country.tld[0].toLowerCase().includes(input.toLowerCase()))
                )
            );
        }

        
    }
    console.log(filteredList)
    
    return (
        <div className="countryTableDiv">
            <div className="filtersContainer">
                <input className="search"
                type="text"
                placeholder="Search..."
                onChange={(inputString) => searchItems(inputString.target.value)}
                />
                {/*create continents array and use map() maybe*/}
                <input type="checkbox" id='Asia'/>
                <label htmlFor="Asia">Asia</label>
                
                <input type="checkbox" id='NorthAmerica'/>
                <label htmlFor="NorthAmerica">North America</label>
                
                <input type="checkbox" id='SouthAmerica'/>
                <label htmlFor="SouthAmerica">South America</label>
                
                <input type="checkbox" id='Europe'/>
                <label htmlFor="Europe">Europe</label>
                
                <input type="checkbox" id='Oceania'/>
                <label htmlFor="Oceania">Australia (Oceania)</label>
                
                <input type="checkbox" id='Africa'/>
                <label htmlFor="Africa">Africa</label>

                <input type="checkbox" name="" id="Landlocked" />
                <label htmlFor="Landlocked">Landlocked</label>
        
                
                {/* <label htmlFor="timezone">Time Zone</label>
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
                        <th>TLD</th>
                        <th>Landlocked</th>
                        {/*<th>Borders</th>*/}
                        <th>Langages</th>
                        <th>Google Maps</th>

                    </tr>

                </thead>
                <tbody>
                    {searchInput ? filteredList.map((country) => (
                        <tr key={country.cca2}>
                            <td> {country.name.common}</td>
                            <td className="table-cell"> {country.name.official}</td>
                            <td> {country.subregion}</td>
                            <td> {country.area.toLocaleString()}</td>
                            <td> {country.population.toLocaleString()}</td>
                            {/*<td> {country.latlng.join(', ')}</td>*/}
                            <td> {country.cca2}</td>
                            <td> {country.tld[0]}</td>
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
                            <td> {country.tld[0]}</td>
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
  