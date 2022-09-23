import React, {useState, useEffect} from "react";
import {Col, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";

export default function Category(props){

    const {ingredient, name, isSearchTerm}=props

    const resource= (isSearchTerm!=null?`search.php?s=${ingredient}`:`filter.php?i=${ingredient}`)


    const [items, setItems] = useState([''])
        useEffect(()=>{
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/${resource}`)
            .then(response => response.json())
            //only return first drink
            .then(json => setItems(json.drinks.slice(0, 1)))
            .catch(error => {
                console.log(error)
               })
        },[])
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
                    <Link to={{pathname: `/${isSearchTerm?'search':'filter'}/${ingredient}`}} className='link capitalize'>
                        <Card className={hover===true?'bg-white text-muted border-0':'bg-white text-dark  '}>
                        <Card.Title>{name}</Card.Title>
                        <div className='card-img'>
                            <Card.Img src={items[0].strDrinkThumb} className={hover?'half-brightness':null}/>
                        </div>
                        </Card>

                    
                    </Link>
                    </Col>
                   </>

    )
};

