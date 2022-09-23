import React, {useState} from "react";
import {Card, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";


export default function Drink(props){
        const {item}=props

        const [hover, setHover] = useState(false)

        const hoverEnterHandler = () =>{
            setHover(true)
        }
        const hoverLeaveHandler=()=>{
            setHover(false)
        }
        return(
            <Col className='card-box' onMouseEnter={hoverEnterHandler} onMouseLeave={hoverLeaveHandler} lg={3}>

                <Link to={{pathname: `/drink/${item.idDrink}`}}
                    className='link'>
                    <Card className={hover===true?'text-muted':'text-dark'}>
                    <Card.Title title={`View Recipe for ${item.strDrink}`}>
                        {item.strDrink}
                    </Card.Title>
                    <div className='card-img'>
                        <Card.Img src={item.strDrinkThumb} className={hover?'half-brightness':null}/>
                    </div>
                    </Card>
                </Link>
            </Col>  
    )
};

