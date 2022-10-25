import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import { connect } from "react-redux";

const Detail = ({ getDetail, detail }) => {
  const { id } = useParams(); // viene como objeto

  useEffect(() => {
    getDetail(id)
  }, [id, getDetail])

  return (
    <>
      {
        detail ? 
          <div>
            pais
          </div>
          :
          <div>
            No hay detalle
          </div>
      }
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    detail: state.detail
  }
}
export default connect(mapStateToProps, { getDetail })(Detail);