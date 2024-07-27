import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons"
import { useShopingCart } from '../context/ShopingCartContext';
const Navbar = () => {
  const {openCart,cartQuantity}=useShopingCart()
  return (
    // sticky='top' 
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link  as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link  as={NavLink} to="/store">Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            
            </Nav>
            <Button variant='outline-primary' className='rounded-circle position-relative' onClick={openCart}>
            <FontAwesomeIcon className='fs-4' icon={faBagShopping}/>
            <span type="button" class=" position-absolute top-100 start-100 translate-middle badge rounded-pill bg-danger">{cartQuantity}</span>

            </Button>

        </Container>
    </NavbarBs>
  )
}

export default Navbar