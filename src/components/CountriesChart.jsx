
import React, { Component, useEffect, useState } from "react";
import {BarChart, Bar, Rectangle, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label} from "recharts";
  

const CountriesChart = ({list}) => {
    const [countriesData, setcountriesData] = useState([]);
    
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
        return { Country: continent.code, pop: population };
    });
    
    console.log(cdata);
    

    const renderBarChart1 = (title) => (
        <div style={{ marginBottom: "20px" }}>
            <h3>{title}</h3>
            <BarChart
                width={400}
                height={300}
                data={cdata}
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
                <Bar dataKey="pop" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />}/>
            </BarChart>
        </div> 
    );
    
    const renderBarChart2 = () =>{
            
    }
    const renderBarChart3 = () =>{
            
    }

    return (
        <div className="countryCharts" >
           {renderBarChart1("Population by Continents")}
           {renderBarChart2("Area by Continents")}
           {renderBarChart3("Counries by Continent")}
         
        </div>
    )

}


export default CountriesChart;