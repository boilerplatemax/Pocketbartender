import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import aboutImage from '../resources/images/aboutimg.png'
export default function About(){

//Home page

        return(
            <div id='about-page'>
            <Container>
                <div>
                    <Row>
                        <Col lg={6}>
                            <img src={aboutImage} id='about-img'/>
                        </Col>
                        <Col>
                            <h1>About</h1>
                            <p>This React App uses the <a href='https://www.thecocktaildb.com/api.php'>CocktailDB API</a> to display a wide variety of drinks as well as their drinks and recipes.</p>
                            <h1>Features</h1>
                            <ul>
                                <li>
                                    React-Bootstrap framework for front-end
                                </li>
                                <li>
                                    Query search system. This lets us do fun things like link to <Link to='/search/blue'>drinks containing the word 'blue'</Link>
                                </li>
                                <li>
                                    Use of React Hooks (UseState, UseEffect, useParams, useNavigate)
                                </li>
                                <li>
                                    API calls
                                </li>
                                <li>
                                    Responsive user Interface
                                </li>
                                </ul>
                                <h2>Developed By Max Shapovalov</h2>
                                <ul>
                                <li>
                                    <a>Github</a>
                                </li>
                                <li>
                                    <a>Linkedin</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>       
                </div>
            </Container>
            </div>
            

    )
};

