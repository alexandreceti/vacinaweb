import { useState } from "react"
import ListCartCities from "../src/Components/ListCartCities"
import ListCities from "../src/Components/ListCities/ListCities"

export default function HomePage() {

  const [cities, setCities] = useState([])
  const [filter, setFilter] = useState('')

  async function handleLoadCitys() {
    const resposeApi = await fetch('/db/db.json')
      .then( res => res.json())
      .catch(err => console.log(err))
    
    const newCities = resposeApi.cities.map(item => {
      return {
        ...item,
        isVisible: false,
      }
    })
      
    setCities(newCities)
  };

  function handleFilter() {
    const filterInput = event.target.value
    
    setFilter(filterInput);
    
  }

  function filterCities() {
    if (filter !== '') {
      const newList = cities.filter((city) => {
        return (city.name?.toUpperCase().includes(filter.toUpperCase()))
      })
      return newList
    }
    return cities;
  }

  function handleClearSelectList() {
    const clearList = cities.map(city => city.isVisible = false)

    setCities(clearList);
  }

  function selectCity(event) {
    // console.log(event.target.innerText)
    if (event.target.nodeName === 'LI'){
      const cityLocation = event.target.innerText
      const [selectCity] = cities.filter((item) => {
        return ( item.name === cityLocation )
      })
      selectCity.isVisible = !selectCity.isVisible;
      setFilter('')
      setCities([... cities, cityLocation])
      // console.log(selectCity);
    }
  }


  return (
    <div className="columns pt-5">
      <div className="column is-one-quarter">
        <div className="field">
          <label className="label">Pesquisa</label>
          <div className="control">
            <input className="input" type="text" placeholder="Filtar Cidades" value={filter} onChange={handleFilter} />
          </div>
          <p className="help">Use o filtra para pesquisar cidades.</p>
          <div className="columns row">
            <div className="column">
                <button className="button is-primary" onClick={handleLoadCitys}>Carregar Lista</button>
            </div>
            <div className="column">
                <button className="button is-danger" onClick={handleLoadCitys}>Limpar Lista</button>
            </div>
          </div>
        </div>
        <div className="listCities">
          <ListCities cities={filterCities()} setCities={setCities} selectCity={selectCity} />
        </div>
      </div>
      <div className="column is-four-fifths">
        <h2>Cidades Selecionadas:</h2>
        <div className="columns is-multiline">
          <ListCartCities cities={filterCities()}/>
        </div>
      </div>
    </div>
  )
}
