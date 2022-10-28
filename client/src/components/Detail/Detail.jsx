import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getDetail } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams(); // viene como objeto

  // con props y lo siguiente, rompe, anotado tambien en trello
  // let id = props.match.params.id;
  
  const dispatch = useDispatch();
  const detail = useSelector(state => state.detail)[0];

  React.useEffect(() => {
    dispatch(getDetail(id))
  }, [id, dispatch]);

  return (
    <>
      {
        detail ? 
          <div>
            <img src={detail.flag[1]} alt={`imagen de ${detail.name}`} className='bandera' />
            <h3>{detail.name} - ({detail.id})</h3>
            <h4>{detail.continent}</h4>
            <p>Detalles:</p>
            <ul>
              <li>Capital: {detail.capital}</li>
              <li>Subregion: {detail.subregion}</li>
              <li>Area: {detail.area} km2</li>
              <li>Poblacion: {detail.population} habs.</li>
            </ul>
            <p>Actividades turisticas:</p>
            <ul>
              {
          
          detail.activities.map(ac => {
              return (
                <li>{ac.name}, {ac.skill}, {ac.term}, {ac.season}</li>
              );
            })
        }
            </ul>
          </div>
          :
          <div>
            No hay detalle
          </div>
      }
    </>
  )
}

export default Detail;