import React,{useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Table from 'react-bootstrap/Table';

import { useSelector, useDispatch } from 'react-redux';
import add from '../actions/action';
import { removeOne } from '../actions/action';
import { remove } from '../actions/action';

import { Link } from 'react-router-dom';

function Header() {


    const { cart } = useSelector(state => state.updateCart)
    const dispatch = useDispatch()

 // Total calculation
    const [total, setTotal] = React.useState(0)
    const getTotal = () => {
        let price = 0
        cart.map(product =>
            price = product.price * product.rating.count + price
        )
        setTotal(price)
    }
    useEffect(() => {
        getTotal()
    });
    // code for cart material ui
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Add To Cart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto w-100">
                            <Link to="/" className={"text-decoration-none text-white"}>Products</Link>
                            <Link className='w-100 text-decoration-none text-white'>
                                 <Badge style={{ float: "right" }} badgeContent={cart.length} color="primary">
                                    <ShoppingCartIcon onClick={handleClick} /></Badge></Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* // code for cart material ui */}


            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >
                    {
                        cart.length === 0 ? <div>
                            Your cart is empty
                        </div> :

                            <div style={{ width: "40rem" }}>

                                <Table striped bordered hover variant="light">
                                    <thead>
                                        <tr>
                                            <th>
                                                Photo
                                            </th>
                                            <th>
                                                Details
                                            </th>
                                        </tr>
                                    </thead>




                                    {
                                        cart.map((product, key) => {
                                            return (
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img style={{ width: "5rem", height: "5rem" }} src={product.image} alt="" />
                                                        </td>
                                                        <td>
                                                            <p >{product.title}</p>
                                                            <p>Price :${product.price}</p>
                                                            <p>rating : {product.rating.rate}</p>
                                                            <p>No of products</p>
                                                            <div className='d-flex justify-content-between w-50'>
                                                                <p  
                                                                onClick={product.rating.count === 1 ? 
                                                                () => dispatch(remove(product)) : () => dispatch(removeOne(product))}>-</p>
                                                                <p>x{product.rating.count}</p>
                                                                <p onClick={() => dispatch(add(product))}>+</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                                 <DeleteIcon onClick={() => dispatch(remove(product))} 
                                                                 style={{ fontSize: "2rem", cursor: "pointer", color: "red" }} />
                                                        </td>
                                                    </tr>


                                                </tbody>
                                            )
                                        })
                                    }


                                    <tfoot>
                                        <tr>

                                            <div className='text-center'>Total : ${total}</div>
                                        </tr>
                                    </tfoot>

                                </Table>
                            </div>

                    }

                </MenuItem>

            </Menu >

        </>
    );
}

export default Header;