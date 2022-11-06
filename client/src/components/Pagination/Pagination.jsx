import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageView } from '../../redux/actions';

const Pagination = () => {

  const dispatch = useDispatch();
  const paises = useSelector(state => state.countries);
  const page = useSelector(state => state.page); // para luego ver mediante CSS en que pagina estoy
  
  const handleInputChange = (e) => {
    dispatch(setPageView(e.target.value))
  }

  let filtered = paises.filter(pais => pais.c_visible && pais.a_visible)
  let visibles = filtered.length;
  let pages = Math.ceil((visibles - 9) / 10) + 1;

  useEffect(() => {
    if(visibles < 10) {
      dispatch(setPageView(1))
    }
    if (page > pages) {
      dispatch(setPageView(pages))
    }
  }, [page, visibles, pages, dispatch]);
  
  return (
    <>{
      visibles < 9 ? null :
        <>
          <p>Pages: {pages} - Actual page: {page}</p>
          {/* <ul> */}
            {
              [...Array(pages).keys()].map(i => i + 1).map(i => (
                // <li>
                  <input type='button' onClick={handleInputChange} name={i} value={i} />
                // </li>
                )
              )
            }
          {/* </ul> */}
        </>
      }
    </>
  )
}

export default Pagination;