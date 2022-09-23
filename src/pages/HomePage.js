import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import homeImage from '../resources/images/homedrinkimg.png'
import Category from '../components/Category';
import ViewAll from '../components/ViewAll';

export default function HomePage(){

//Home page

        return(
            <div id='home-page'>
            <Container>
                <div className='home-banner'>
                    <Row>
                        <Col lg={5}>
                            <div className="title capitalize">
                                <h1>When life gives you lemons...</h1>
                                <h2>make a cocktail!</h2>
                            </div>
                            
                        </Col>
                        <Col lg={7}>
                            <div className="img-holder">
                                <img src={homeImage}/>
                            </div>
                        </Col>
                    </Row>       
                </div>
                <Row>
                    <Col>
                        <h1>Categories</h1>
                    </Col>
                </Row>
                <Row xs='2' lg='4'>
                    <Category ingredient='lemon_juice' name='Lemon Juice'/>
                    <Category ingredient='pineapple_juice' name='Pineapple Juice'/>
                    <Category ingredient='red_wine' name='Red Wine'/>
                    <Category ingredient='ginger' name='Ginger'/>
                    <Category ingredient='coffee' name='Coffee'/>
                    <Category ingredient='kahlua' name='Kahlua'/>
                    <Category ingredient='mint' name='Mint'/>
                    <ViewAll/>
                </Row>
            </Container>
            </div>
            

    )
};

