import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import AppContext from '../Context/AppContext'

let searchVal = '';
const onChangeSearch = (e)=>{
    searchVal = e.target.value;
}

class Header extends React.Component {
    render() {
        return (
            <AppContext.Consumer>
                {(context)=>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">De-Cycle</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                }
            </AppContext.Consumer>
            



        );
    }
}
export default Header;