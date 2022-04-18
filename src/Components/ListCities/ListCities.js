import React from 'react';
import ListItem from './ListItem';

function ListCities(props) {
  const { cities } = props

  return (
    <ul onClick={props.selectCity}>
      {cities.map((city, index) => {
            return (
              <ListItem key={index} city={ city }/>
            )
          })}
    </ul>
  );
}

export default ListCities;