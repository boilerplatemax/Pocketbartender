import React, {useState, useEffect} from "react";
import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import {Link} from "react-router-dom";


export default function Drink(props){
        const [hover, setHover] = useState(false)

        const hoverEnterHandler = () =>{
            setHover(true)
        }
        const hoverLeaveHandler=()=>{
            setHover(false)
        }
        return(
            <>
            
        <Col className='card-box' onMouseEnter={hoverEnterHandler} onMouseLeave={hoverLeaveHandler}>

            <Link to={{pathname: `/drink/${props.item.idDrink}`}}
                className='link'>
                <Card className={hover===true?'bg-light text-muted card-hover  border-0':'bg-white text-dark  border-0'}>

                <Card.Title>
                    {props.item.strDrink}
                </Card.Title>

                <Card.Img src={props.item.strDrinkThumb} style={hover?{filter:'brightness(50%)'}:null} className='card-img'/>

                </Card>
            </Link>
        </Col>
        </>
        
    )
};

