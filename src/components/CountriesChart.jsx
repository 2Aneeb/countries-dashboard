import React, { useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip } from "recharts";

const CountriesChart = ({ list }) => {
    const [countriesData, setCountriesData] = useState([]);

    const continents = [
        { name: "Asia", code: "As" },
        { name: "North America", code: "NA" },
        { name: "South America", code: "SA" },
        { name: "Africa", code: "Af" },
        { name: "Europe", code: "Eu" },
        { name: "Oceania", code: "Au" },
        { name: "Antarctica", code: "An" }
    ];
    
    const cdata = continents.map(continent => {
        const countries = list.filter(country => country.continents.includes(continent.name));
        const population = countries.reduce((sum, country) => sum + country.population, 0);
        const area = countries.reduce((sum, country) => sum + (country.area || 0), 0);
        const countryCount = countries.length; // Count the number of countries
        return { Country: continent.code, pop: population, area: area, countryCount: countryCount };
    });
    
    const renderBarChart1 = (title) => (
        <div style={{ marginBottom: "20px" }}>
            <h3>{title}</h3>
            <BarChart width={400} height={300} data={cdata}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="Country" />
                <YAxis domain={[1000, 8000000000]} tickFormatter={(value) => `${(value / 1000000000).toFixed(1)}B`} />
                <Tooltip />
                <Bar dataKey="pop" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            </BarChart>
        </div> 
    );

    const renderBarChart2 = (title) => (
        <div style={{ marginBottom: "20px" }}>
            <h3>{title}</h3>
            <BarChart width={400} height={300} data={cdata}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="Country" />
                <YAxis domain={[0, Math.max(...cdata.map(data => data.area))]}tickFormatter={(value) => `${(value / 1000).toFixed(1)} km²`}/>
                <Tooltip />
                <Bar
                    dataKey="area"
                    fill="#82ca9d"
                    activeBar={<Rectangle fill="lightgreen" stroke="green" />}
                />
            </BarChart>
        </div>
    );

    const renderBarChart3 = (title) => (
        <div style={{ marginBottom: "20px" }}>
            <h3>{title}</h3>
            <BarChart width={400} height={300} data={cdata}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="Country" />
                <YAxis domain={[0, Math.max(...cdata.map(data => data.countryCount))]} />
                <Tooltip />
                <Bar
                    dataKey="countryCount"
                    fill="#ffc658"
                    activeBar={<Rectangle fill="orange" stroke="darkorange" />}
                />
            </BarChart>
        </div>
    );

    return (
        <div className="countryCharts">
            {renderBarChart1("Population by Continents")}
            {renderBarChart2("Area by Continents")}
            {renderBarChart3("Countries by Continent")}
        </div>
    );
}

export default CountriesChart;
