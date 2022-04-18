import React from 'react';
import ListItem from './ListItem';

function ListCities(props) {
  const { cities } = props

  // function selectCity(event) {
  //   console.log(event.target.innerText)
  //   if (event.target.nodeName === 'LI'){
  //     const cityLocation = event.target.innerText
  //     const [selectCity] = cities.filter((item) => {
  //       // console.log('filter: ', item)
  //       return ( item.name === cityLocation )
  //     })
  //     selectCity.isVisible = true;
      
  //     props.setCities([... cities, cityLocation])
  //     console.log(selectCity);
  //   }
  // }

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