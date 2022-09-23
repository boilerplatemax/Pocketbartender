import React,{useState} from "react";
import {Col, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import bartender from '../resources/images/bartender.png'
import bartenderHover from '../resources/images/bartenderhover.png'

export default function ViewAll(){

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
                      
                    <Link to={{pathname: '/categories'}} className='link capitalize'>
                    

                        <Card className={hover===true?'text-muted':'text-dark'}>
                        <Card.Title>View All Categories</Card.Title>
                        <Card.Img src={hover?bartenderHover:bartender} className='card-img'/>

                        </Card>

                    
                    </Link>
                    </Col>
                   </>

    )
};

