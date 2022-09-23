import React from "react";
import {Container, Row} from 'react-bootstrap';
import Category from '../components/Category';
export default function Categories(){

//Home page

        return(
            <>
            <Container>
                <Row xs='2' lg='4'xl='6'>
                    <Category ingredient='lemon_juice' name='Lemon Juice'/>
                    <Category ingredient='orange_juice' name='Orange Juice'/>
                    <Category ingredient='cranberry_juice' name='Cranberry Juice'/>
                    <Category ingredient='pineapple_juice' name='Pineapple Juice'/>
                    <Category ingredient='lime_juice' name='Lime Juice'/>
                    <Category ingredient='Blue' name='Blue Drinks' isSearchTerm={true}/>
                    <Category ingredient='Bloody' name='Spooky' isSearchTerm={true}/>
                    <Category ingredient='vodka' name='Vodka'/>
                    <Category ingredient='rum' name='Rum'/>
                    <Category ingredient='gin' name='Gin'/>
                    <Category ingredient='tequila' name='Tequila'/>
                    <Category ingredient='beer' name='Beer'/>
                    <Category ingredient='white_wine' name='White Wine'/>
                    <Category ingredient='red_wine' name='Red Wine'/>
                    <Category ingredient='Cooler' name='Cooler Than You' isSearchTerm={true}/>
                    <Category ingredient='lime' name='Lime'/>
                    <Category ingredient='lemon' name='Lemon'/>
                    <Category ingredient='coffee' name='Coffee'/>
                    <Category ingredient='salt' name='Lil Bit of Salt'/>
                    <Category ingredient='ginger' name='Ginger'/>
                </Row>
            </Container>
            </>
            

    )
};

