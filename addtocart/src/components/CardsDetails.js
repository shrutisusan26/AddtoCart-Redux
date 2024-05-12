import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE } from '../redux/actions/action';

function CardsDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getData = useSelector((state) => state.cartReducer.carts);
  const history = useNavigate();

  const compare = () => {
    let comparedata = getData.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  }
  useEffect(() => {
    compare();
  }, [id]);
  const dispatch = useDispatch();
  const deleteFromCart = (id) =>{
    dispatch(REMOVE(id));
    history("/");
  }
  return (
    <div className='container mt-2'>
      <h2 className='text-center'>Items Details Page </h2>
      <section className='container mt-3'>

        <div className='itemsdetails'>
          {data.map((element) => {
            return (
              <>
                <div className='items_img'>
                  <img src={element.imgdata} alt="" />
                </div>

                <div className='details'>
                  <Table>
                    <tr>
                      <td>
                        <p> <strong> Restaurant </strong> : {element.rname} </p>
                        <p> <strong> Price </strong> : Rs. {element.price} </p>
                        <p> <strong> Dishes </strong> : {element.address} </p>
                        <p> <strong> Total </strong> : 300 </p>

                      </td>
                      <td>

                        <p> <strong> Rating </strong><span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}> {element.rating} ☆ </span> </p>
                        <p> <strong> Order Review </strong> {element.somedata} </p>
                        <p> <strong> Remove </strong> <span><i className='fa fa-trash' style={{ color: "red", fontSize: "20", cursor: "pointer" }} onClick={ () => {deleteFromCart(element.id)}}></i></span> </p>
                      </td>
                    </tr>
                  </Table>
                </div>
             </>)
          })}
        </div>

      </section>
    </div>
  )
}

export default CardsDetails;
