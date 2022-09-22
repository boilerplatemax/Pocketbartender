import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import MinifiedDrinks from '../components/MinifiedDrinks';
import homeImage from '../resources/images/homedrinkimg.png'
import Category from '../components/Category';

export default function HomePage(){

//Home page

        return(
            <div id='home-page'>
            <Container>
                <div className='home-banner'>
                    <Row>
                        <Col>
                            <div className="title capitalize">
                                <h1>When life gives you lemons...</h1>
                                <h2>make a cocktail with...</h2>
                            </div>
                            
                        </Col>
                        <Col lg={6}>
                            <div className="img-holder">
                                <img src={homeImage}/>
                            </div>
                        </Col>
                    </Row>       
                </div>
            
                <Row xs='2' lg='4'>
                    <Category ingredient='lemon_juice'/>
                    <Category ingredient='pineapple_juice'/>
                    <Category ingredient='red_wine'/>
                    <Category ingredient='ginger'/>
                </Row>
            <Button className='round-button' href='#/categories'>
                View All Categories
            </Button>
            </Container>
            </div>
            

    )
};

