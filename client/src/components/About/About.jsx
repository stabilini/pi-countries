import React, { useState  } from 'react';
import { useSelector } from 'react-redux';


import Button from '../Button/Button';

import styles from './About.module.css';

const About = () => {
  let theme = useSelector(state => state.theme);
  const [lang, setLang] = useState('esp');

  const handleSubmit = e => {
    e.preventDefault();
    if(lang === 'esp') {
      setLang('eng');
    } else {
      setLang('esp');
    }
  };

  return (
    <>
      <div className={ styles.container }>
        <span className={ `${styles.about} ${styles[theme]}` }>
          <div className={ styles.langButton }>
            <Button onClick={handleSubmit} text={lang === 'esp' ? 'English' : 'Español'}/>
          </div>
          <div className={ styles.sectionTitle }>
            {lang === 'esp' ? `Acerca de este proyecto` : `About this project`}
          </div>
          
          <div className={ styles.sectionSubtitle }>
            {lang === 'esp' ? `Resumen` : `Abstract`}
          </div>
          <div className={ styles.text }>
            {lang === 'esp' ?
              `Esta aplicación fue desarrollada como parte del bootcamp realizado en Henry, donde se pidió crear la misma como un proyecto individual con ciertas pautas a seguir.`
              :
              `This application was developed as a bootcamp project in Henry. It has requisites and rules to follow as an individual work.`
            }
          </div>

          <span className={ styles.sectionDetail }>
            <div className={ styles.details }>
              <div className={ `${styles.detailsContainer} ${styles[theme]}` }>
                <div className={ styles.sectionSubtitle }>
                  {lang === 'esp' ? `Tecnologías utilizadas` : `Techonologies`}
                </div>
                <ul>
                <li>PostgreSQl</li>
                <li>Express JS</li>
                <li>Sequelize</li>
                <li>React / Redux</li>
                </ul>
              </div>
            </div>
          </span>
          
          <div className={ styles.text }>
            {lang === 'esp' ?
              `La información de los paises es obtenida de la API externa restcountries, la cual se solicita una sola vez al levantar el servidor.`
              :
              `Countries information is obtained from external API restcountries. This is fetched only once when server is raised up.`
            }
          </div>
          <div className={ styles.text }>
            {lang === 'esp' ?
              `Se realizan 50 tests en al backend y 16 en el frontend.`
              :
              `50 tests in backend and 16 in frontend.`
            }
          </div>
          <div className={ styles.text }>
            {lang === 'esp' ?
              `La interface de usuario es completamente responsiva para pantallas de hasta un mínimo de 280 px de ancho.`
              :
              `Fontend UX interface completly responsive for screens as low as 280 px wide.`
            }
          </div>
          <div className={ styles.text }>
            {lang === 'esp' ?
              `Los estilos están realizados con CSS puro sin preprocesadores.`
              :
              `Styles in CSS without any preprocessors.`
            }
          </div>
         
          <span className={ styles.sectionDetail }>
            <div className={ styles.details }>
              <div className={ `${styles.detailsContainer} ${styles[theme]}` }>
                <div className={ styles.sectionSubtitle }>Extras</div>
                <ul>
                  <li>{lang === 'esp' ? `Selector de temas CSS` : `CSS theme selector`}</li>
                  <li>{lang === 'esp' ? `Ordenamiento random` : `Random ordering`}</li>
                  <li>{lang === 'esp' ? `CRUD (solo en el back)` : `CRUD (only in backend)`}</li>
                  <li>{lang === 'esp' ? `Selector de idioma (solo en About)` : `Language selector (only in About)`}</li>
                  <li>Deploy: <a target="_blank" href="https://pi-countries-client-production-08bf.up.railway.app/" rel='noreferrer'>Railway</a></li>
                </ul>
              </div>
            </div>
          </span>
          
          <span className={ styles.sectionDetail }>
            <div className={ styles.details }>
              <div className={ `${styles.detailsContainer} ${styles[theme]}` }>
                <div className={ styles.sectionSubtitle }>{lang === 'esp' ? `Acerca del Autor` : `About the author`}</div>
                <ul>
                  <li>Arq. Nicolás Stabilini</li>
                  <li>stabilini@gmail.com</li>
                  <li><u>Repo:</u> <a target="_blank" href="https://github.com/stabilini/pi-countries/" rel='noreferrer'>Countries main</a></li>
                  <li><u>Github:</u> <a target="_blank" href="https://github.com/stabilini/" rel='noreferrer'>stabilini</a></li>
                  <li><u>Linkedin:</u> <a target="_blank" href="https://www.linkedin.com/in/nicol%C3%A1s-stabilini-5b84343a/" rel='noreferrer'>Nicolás Stabilini</a></li>
                </ul>
              </div>
            </div>
          </span> 
          
          <Button link='/countries' text='Back to countries...' />
        </span>
      </div>
    </>
  );
}

export default About;