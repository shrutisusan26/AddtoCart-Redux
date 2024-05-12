import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE,ADD,REMOVE_ITEM } from '../redux/actions/action';

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
  }, [id,getData]);
  
  const dispatch = useDispatch();
  const deleteFromCart = (id) =>{
    dispatch(REMOVE(id));
    history("/");
  }
  const send = (element) => {
    dispatch(ADD(element));
  }

  const rem_item = (element) => {
    dispatch(REMOVE_ITEM(element));
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
                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100, cursor: "pointer", background: "#ddd", color: "#111"}}> 
                          <span style={{fontSize: 24}} onClick={()=> rem_item(element)} > - </span>
                          <span style={{fontSize: 22}}> {element.qnty} </span>
                          <span style={{fontSize: 24}} onClick={()=> send(element)} > + </span>

                        </div>
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
