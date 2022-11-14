import React, { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetail } from '../../redux/actions';

import styles from './Detail.module.css';

const Detail = () => {
  const { id } = useParams(); // viene como objeto

  const dispatch = useDispatch();
  const detail = useSelector(state => state.detail)[0];
  
  useEffect(() => {
    dispatch(getDetail(id));
  }, [id, dispatch]);

  return (
    <>
      <div className={ styles.detailBackground }></div>
      <div className={ styles.container }>
        <span className={ styles.detail }>
        {
        detail ? (
          <>
            <div className={ styles.section }>
              <img
                src={ detail.flag }
                alt={`Flag from ${detail.name}`}
                className={ styles.flag } 
              />
            </div>
            <div className={ styles.sectionTitle }>{detail.name} ({detail.id})</div>
            <div className={ styles.sectionSubtitle }>Continent: {detail.continent}</div>
            <div className={ styles.section }>
              <span className={ styles.sectionDetail }>
                <ul>
                  <li><u>Capital:</u> {detail.capital}</li>
                  <li><u>Continent:</u> {detail.continent}</li>
                  <li><u>Subregion:</u> {detail.subregion}</li>
                  <li><u>Area:</u> {detail.area.toLocaleString()} km<sup>2</sup></li>
                  <li><u>Population:</u> {detail.population.toLocaleString()} habs.</li>
                </ul>
              </span>
            </div>
            <div className={ styles.section }>
            {
              detail.activities.length > 0 ?
              (
                <>
                  <div className={ styles.sectionTitle }>Activities</div>
                  <span className={ styles.sectionDetail }>
                    <div className={ styles.activities }>
                    {detail.activities.map(ac => {
                        return (
                          <div className={ styles.activityContainer }>
                            <div className={ styles.activityName }>{ac.name}</div>
                            <div >
                              <div className={ styles.activityDetail }>Skill: {ac.skill} {['😊', '😎', '😮', '😬', '😱'][ac.skill - 1]}</div>
                              <div className={ styles.activityDetail }>Days: {ac.duration}</div>
                              <div className={ styles.activityDetail }>Season: {ac.season}</div>
                            </div>
                          </div>
                      );
                    })}
                    </div>
                  </span>
                </>
              )
              :
              (
                <>
                  <p>(no activities found)</p>
                </>
              )
            }
            </div>
          </>
        ) : (
          <div className={ styles.section }>
            <h3>
              An error ocurred, there are no details.
            </h3>
            <Link to="/countries">
              <button className={ styles.button }>Back to list</button>
            </Link> 
          </div>
          )
        }
          <Link to="/countries">
            <button className={ styles.button }>Back to list</button>
          </Link> 
        </span>
      </div>
    </>
  );
};

export default Detail;