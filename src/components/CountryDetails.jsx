import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://restcountries.com/v3.1/all";

const CountryDetails = () => {
    const params = useParams();
    const [list, setList] = useState([]);
    const [currentTime, setCurrentTime] = useState(null);
      
    useEffect(() => {
        const fetchCountriesData = async () => {
            const response = await fetch(API_URL);
            const json = await response.json();
            const filteredList = json.filter(country => country.name.common !== 'Israel');
            setList(filteredList);
        };
        fetchCountriesData().catch(console.error);
    }, []);

    const country = list.find(country => country.cca2 === params.cca2);

    if (!country) {
        return <h3>Country not found</h3>; 
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <h3>Flag:</h3>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />

            <h3>Country Details:</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Official Name</th>
                        <td>{country.name.official}</td>
                    </tr>
                    <tr>
                        <th>Capital</th>
                        <td>{country.capital ? country.capital[0] : 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Current Time in Capital</th>
                        <td>{currentTime || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Population</th>
                        <td>{country.population.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <th>Area (sq km)</th>
                        <td>{country.area ? country.area.toLocaleString() : 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Region</th>
                        <td>{country.region}</td>
                    </tr>
                    <tr>
                        <th>Subregion</th>
                        <td>{country.subregion}</td>
                    </tr>
                    <tr>
                        <th>Languages</th>
                        <td>{country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Currencies</th>
                        <td>{country.currencies ? Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ') : 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Time Zones</th>
                        <td>{country.timezones ? country.timezones.join(', ') : 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>TLD</th>
                        <td>{country.tld ? country.tld.join(', ') : 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Latitude</th>
                        <td>{country.latlng ? country.latlng[0] : 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Longitude</th>
                        <td>{country.latlng ? country.latlng[1] : 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Landlocked</th>
                        <td>{country.landlocked ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <th>ISO 2 Code</th>
                        <td>{country.cca2}</td>
                    </tr>
                    <tr>
                        <th>ISO 3 Code</th>
                        <td>{country.cca3}</td>
                    </tr>
                    <tr>
                        <th>Google Maps</th>
                        <td>
                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${country.latlng[0]},${country.latlng[1]}`} 
                                target="_blank" 
                                rel="noopener noreferrer">
                                View on Google Maps
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CountryDetails;
