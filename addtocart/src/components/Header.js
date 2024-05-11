import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Table } from '@mui/material';

export default function Header() {


    // useContext to get the context values;
    const getData = useSelector((state) => state.cartReducer.carts);
    console.log(getData)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add To Cart </NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light" >Home</NavLink>

                    </Nav>
                    <Badge badgeContent={getData.length} color="primary" id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i class="fa fa-shopping-cart text-light " style={{ fontSize: '25px', cursor: "pointer" }}></i>
                    </Badge>
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getData.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <tHead>
                                        <tr>
                                            <th> Photo </th>
                                            <th> Restaurant Name </th>
                                        </tr>
                                    </tHead>

                                    <tbody>
                                        {
                                            getData.map((e) => {
                                                return (
                                                    <> 
                                                        <tr>
                                                            <td>
                                                                 <img style={{width:"5rem" , height: "5rem"}}src={e.imgdata} alt=""/>
                                                            </td>
                                                            <td>
                                                                <p>{e.rname}</p>
                                                                <p>Price : Rs. {e.price}</p>
                                                                <p>Quantity : {e.qnty}</p>
                                                                <p style= {{color: "red", fontSize: 20, cursor:"pointer"}}><i className='fa fa-trash smalltrash'></i></p>


                                                            </td>
                                                            <td className='mt-5' style= {{ color: "red", fontSize: 20, cursor:"pointer" , position: "relative"}}>
                                                                    <i className='fa fa-trash largetrash'></i>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div> :
                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className="xfa fa-close smallclose"
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}> Your cart is empty!</p>
                                <img src="./cart.gif" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>


                    }

                </Menu>
            </Navbar>
        </>
    )
}

