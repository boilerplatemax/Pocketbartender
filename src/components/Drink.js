import React, {useState} from "react";
import {Card, Col} from 'react-bootstrap';
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
            
        <Col className='card-box' onMouseEnter={hoverEnterHandler} onMouseLeave={hoverLeaveHandler} lg={3}>

            <Link to={{pathname: `/drink/${props.item.idDrink}`}}
                className='link'>
                <Card className={hover===true?'bg-light text-muted card-hover  border-0':'bg-white text-dark  border-0'}>

                

                <Card.Img src={props.item.strDrinkThumb} style={hover?{filter:'brightness(50%)'}:null} className='card-img'/>
                <Card.Title style={{height:'50px',padding:'10px'}} title={`View Recipe for ${props.item.strDrink}`}>
                    {props.item.strDrink}
                </Card.Title>
                </Card>
            </Link>
        </Col>
        </>
        
    )
};

