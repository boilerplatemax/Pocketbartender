import Container from 'react-bootstrap/Container';
import React, {useState, useEffect} from "react";
import {Nav,Navbar,NavDropdown,Form,Button} from 'react-bootstrap';


export default function NavMenu() {
  //what is being searched
  const [search, setSearch] = useState('')

  const [query, setQuery] = useState('')
  

  const filterHandler=(filter)=>{
    setQuery(filter)
    filter='filter.php?i='+filter
    window.localStorage.setItem('DRINK_SEARCH',filter)
    
  }

  const resetSearchHandler=()=>{
    window.localStorage.removeItem('DRINK_SEARCH')
  }
  const updateSearchHandler=(e)=>{
    setSearch(e.target.value)
  }
  const searchHandler=()=>{
    search!=''?setSearchQuery(search):returnHome()
  }
  const keyPressHandler= (e) => {
    if(e.key === 'Enter'){
      //prevents the default action of enter key
      //page will not be redirected immediately
      e.preventDefault()
      search!=''?setSearchQuery(search):returnHome()
    }
  }
  const setSearchQuery = (search) =>{
    window.localStorage.setItem('DRINK_SEARCH',('search.php?s='+search))
    window.location.assign(`#/search/${search}`);
  }
  const returnHome = () =>{
    if(window.location.pathname!='/pocketbartender'){
      window.localStorage.removeItem('DRINK_SEARCH')
      window.location.href = '/pocketbartender'
    }

  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='sticky-top'>
      <Container>
        <Navbar.Brand className=' w-25' href="/pocketbartender" onClick={resetSearchHandler}>Pocket Bartender</Navbar.Brand>
        <Nav className=' w-50'>
            <Form className="d-flex  w-100">
            <Form.Control
              type="search"
              placeholder="Search Drink..."
              className="me-2"
              aria-label="Search"
              onChange={updateSearchHandler}
              onKeyPress={keyPressHandler}
            />
            <Button variant="outline-success" onClick={searchHandler}>Search</Button>
          </Form>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Popular" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#/drink/178323">Passion Fruit Martini</NavDropdown.Item>
              <NavDropdown.Item href="#/drink/11387">Frozen Daiquiri</NavDropdown.Item>
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('gin')}>Gin</NavDropdown.Item>
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('vodka')}>Vodka</NavDropdown.Item>
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('orange_juice')}>Orange Juice</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Categories</Nav.Link>
            <Nav.Link eventKey={2} >
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
