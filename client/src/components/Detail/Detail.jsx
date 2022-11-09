import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetail } from '../../redux/actions';

const Detail = () => {
  const { id } = useParams(); // viene como objeto

  // con props y lo siguiente, rompe, anotado tambien en trello
  // let id = props.match.params.id;

  const dispatch = useDispatch();
  const detail = useSelector(state => state.detail)[0];

  React.useEffect(() => {
    dispatch(getDetail(id));
  }, [id, dispatch]);

  return (
    <>
      {
        detail ? (
          <div>
            <img
              src={detail.flag}
              alt={`imagen de ${detail.name}`}
              className="bandera"
            />
            <h3>
              {detail.name} - ({detail.id})
            </h3>
            <h4>{detail.continent}</h4>
            <p>Detail:</p>
            <ul>
              <li>Capital: {detail.capital}</li>
              <li>Continent: {detail.continent}</li>
              <li>Subregion: {detail.subregion}</li>
              <li>Area: {detail.area} km2</li>
              <li>Population: {detail.population} habs.</li>
            </ul>
            <p>Activities:</p>
            <ul>
              {detail.activities.map(ac => {
                return (
                  <li key={ac.id}>
                    {ac.name}, {ac.skill}, {ac.duration}, {ac.season}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>No hay detalle</div>
        )
      }
      <Link to="/countries">
        <button>Back to list</button>
      </Link> 
    </>
  );
};

export default Detail;