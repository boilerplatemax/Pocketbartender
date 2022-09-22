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
      resetSearchHandler()
      window.localStorage.removeItem('DRINK_SEARCH')
      window.location.href = '/pocketbartender'
    }

  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='sticky-top navbar'>
      <Container>
        <Navbar.Brand className=' w-25' href="#/" onClick={resetSearchHandler}>Pocket Bartender</Navbar.Brand>
        
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=' w-50'>
            <Form className="d-flex  w-100" >
            <Form.Control
              type="search"
              placeholder="Search Drink..."
              className="me-2"
              aria-label="Search"
              onChange={updateSearchHandler}
              onKeyPress={keyPressHandler}
            />
            <Button variant="outline-dark" onClick={searchHandler}>Search</Button>
          </Form>
          </Nav>
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('Absinthe')}>Absinthe</NavDropdown.Item>
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('gin')}>Gin</NavDropdown.Item>
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('Rum')}>Rum</NavDropdown.Item>
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('vodka')}>Vodka</NavDropdown.Item>
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('Whiskey')}>Whiskey</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('orange_juice')}>Orange Juice</NavDropdown.Item>
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('pineapple_juice')}>Pineapple Juice</NavDropdown.Item>
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('grenadine')}>Grenadine</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('mint')}>Mint</NavDropdown.Item>
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('lemon')}>Lemon</NavDropdown.Item>
              <NavDropdown.Item href={`#/filter/${query}`} onClick={()=>filterHandler('lime')}>Lime</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#/categories'>View All</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#/about">About</Nav.Link>
            <Nav.Link href="#/surprise">Surprise Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
