import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageView } from '../../redux/actions';
import styles from './Pagination.module.css'

const stripedPagination = (totalPages, currentPage, maxPages) => {
  let startPage, endPage;

  if (totalPages <= maxPages) {   // totalPages es menos que todas las disponibles
    startPage = 2;
    endPage = totalPages;
  } else {                        // totalPages es mas, se calcula el intervalo que se muestra
    let beforActualPage = Math.floor(maxPages / 2);     // paginas antes de actual
    let afterActualPage = Math.ceil(maxPages / 2) - 1;  // paginas despues de actual
    if (currentPage <= beforActualPage + 1) {     // estamos al principio
      startPage = 2;
      endPage = maxPages;
    } else if (currentPage + afterActualPage >= totalPages) { //estamo al final
      startPage = totalPages - maxPages + 1;
      endPage = totalPages - 1;
    } else {                                          // estamos en el medio
      startPage = currentPage - beforActualPage;
      endPage = currentPage + afterActualPage;
    }
  }
  let final = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
  if (totalPages <= maxPages) {
    return final.splice(final.length - 1)
  } else {
    return final
  }
}

const Pagination = () => {
  const [shownPages, setShownPages] = useState([2,3,4,5,6]);

  const dispatch = useDispatch();
  const paises = useSelector(state => state.countries);
  const page = useSelector(state => state.page); // para luego ver mediante CSS en que pagina estoy
  
  const visibles = paises.filter(pais => pais.c_visible && pais.a_visible).length
  const pages = Math.ceil((visibles - 9) / 10) + 1;
  const maxPages = 5;

  const handleInputChange = (e) => {
    dispatch(setPageView(e.target.value))
  }

  const handleInputLess = (e) => {
    dispatch(setPageView(page - 5))
  }

  const handleInputMore = (e) => {
    dispatch(setPageView(page + 5))
  }

  useEffect(() => {
    if(visibles < 10) {
      dispatch(setPageView(1))
    }
    if (page > pages) {
      dispatch(setPageView(pages))
    }
    setShownPages(stripedPagination(pages, page, maxPages))
  }, [page, visibles, pages, dispatch]);
  
  return (
    <div className={ styles.pagination }>{
      visibles < 9 ? null :
        <>
          { pages <= maxPages ?
            <>
            {
              [...Array(pages).keys()].map(i => (
                <input type='button' onClick={handleInputChange} name={i+1} value={i+1} key={i+1} 
                className={page === i+1 ? styles.actualPage : styles.normalPage} />
              ))
            }
            </>
            :
            <>
              <input type='button' onClick={handleInputChange} name={1} value={1} key={1}
              className={page === 1 ? styles.actualPage : styles.normalPage}  />
              { shownPages[0] > 2 ? <> ... </> : null }
              { shownPages[0] > 6 ? <><input type='button' onClick={handleInputLess} name='less' value='-5' /> ... </> : null}
              {/* <ul> */}
                {
                  //[...Array(subpages).keys()]
                  shownPages.map(i => (
                   // <li>
                   <input type='button' onClick={handleInputChange} name={i} value={i} key={i}
                   className={page === i ? styles.actualPage : styles.normalPage} />
                // </li>
                )
              )
                }
              {/* </ul> */}
              { shownPages[shownPages.length-1] < pages - 5 ? <> ... <input type='button' onClick={handleInputMore} name='more' value='+5' /></> : null}
              { shownPages[shownPages.length-1] < pages - 1 ? <> ... </> : null }
              <input type='button' onClick={handleInputChange} name={pages} value={pages} key={pages}
              className={page === pages ? styles.actualPage : styles.normalPage} />
            </>
          }
          <div className={ styles.hide }>Pages: {pages} - Actual page: {page}</div>
        </>
      }
    </div>
  )
}

export default Pagination;