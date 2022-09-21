import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import MinifiedDrinks from '../components/MinifiedDrinks';
import homeImage from '../resources/images/homedrinkimg.png'
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
            
            <MinifiedDrinks ingredient='lemon'/>
            <MinifiedDrinks ingredient='coffee'/>
            <Button className='round-button' href='/categories'>
                View All Categories
            </Button>
            </Container>
            </div>
            

    )
};

