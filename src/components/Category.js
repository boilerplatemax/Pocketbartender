import React, {useState, useEffect} from "react";
import {Col, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";

export default function Category(props){


    const [errorState, setErrorState] = useState(false)

    const resource = (`filter.php?i=${props.ingredient}`)

    const [items, setItems] = useState([''])
        useEffect(()=>{
            setErrorState(false)

            fetch(`https://www.thecocktaildb.com/api/json/v1/1/${resource}`)
            .then(response => response.json())
            //only return 4 rinks
            .then(json => setItems(json.drinks.slice(0, 1)))
            .catch(error => {
                setErrorState(true)
               })
        },[])
        const formatResource=(string)=>{
            string=string.replace('_', ' ')
            return (string);
        }
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
                      
                    <Link to={{pathname: `/filter/${props.ingredient}`}} className='link capitalize'><h5>{formatResource(props.ingredient)}</h5>
                    

                        <Card className={hover===true?'bg-light text-muted card-hover  border-0':'bg-white text-dark  border-0'}>

                        <Card.Img src={items[0].strDrinkThumb} style={hover?{filter:'brightness(50%)'}:null} className='card-img'/>
                        </Card>

                    
                    </Link>
                    </Col>
                   </>

    )
};

