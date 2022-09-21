import React from "react";
import {Container, Row} from 'react-bootstrap';
import Category from '../components/Category';
export default function Categories(){

//Home page

        return(
            <>
            <Container>
                <Row xs='2' lg='4'xl='6'>
                    <Category ingredient='lemon_juice'/>
                    <Category ingredient='orange_juice'/>
                    <Category ingredient='cranberry_juice'/>
                    <Category ingredient='pineapple_juice'/>
                    <Category ingredient='lime_juice'/>
                    <Category ingredient='Absinthe'/>
                    <Category ingredient='vodka'/>
                    <Category ingredient='rum'/>
                    <Category ingredient='gin'/>
                    <Category ingredient='tequila'/>
                    <Category ingredient='beer'/>
                    <Category ingredient='white_wine'/>
                    <Category ingredient='red_wine'/>
                    <Category ingredient='grenadine'/>
                    <Category ingredient='lime'/>
                    <Category ingredient='lemon'/>
                    <Category ingredient='coffee'/>
                    <Category ingredient='salt'/>
                    <Category ingredient='ginger'/>
                </Row>
            </Container>
            </>
            

    )
};

