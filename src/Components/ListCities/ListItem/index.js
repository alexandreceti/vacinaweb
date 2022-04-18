
function ListItem(props) {
  const {city, index } = props
  return (
    <>
      <li key={index}>
        {city.name} 
        
        {(city.isVisible)? 
          (<span className="icon has-text-success">
                    <i className="fas fa-lg  fa-check-square"></i>
          </span>)
        : null}
      </li>
    </>
  );
}

export default ListItem;