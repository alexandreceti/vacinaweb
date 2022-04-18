import React from 'react';
import ChartCity from '../ChartCity';

function ListCartCities(props) {
  const {cities} = props;
  const newCities = cities.filter((item) => ( item.isVisible))
  return (
    <>
      {newCities.map((city, index) => (
        <div key={index} className='column is-half'>
            <article className="message is-dark">
            <div className="message-header">
              <p>{city.name}</p>
            </div>
            <div className="message-body">
              <ChartCity DSVACINAmn={(city?.DSVACINAmn)? city?.DSVACINAmn : []} />
            </div>
          </article>   
        </div>
      ))}
    </>
  );
}

export default ListCartCities;