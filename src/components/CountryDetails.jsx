import React from "react";



const DetailView = ({list}) => {
  return (
    <div>
        <h3>Random Flag: {country.name.common}</h3>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </div>
  );
};

export default DetailView;



