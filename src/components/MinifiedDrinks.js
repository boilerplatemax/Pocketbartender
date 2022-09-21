import React, {useState, useEffect} from "react";
import {Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Drink from './Drink'
import NoResults from '../pages/NoResults'

export default function MinifiedDrinks(props){


    const [errorState, setErrorState] = useState(false)

    const resource = (`filter.php?i=${props.ingredient}`)

    const [items, setItems] = useState([''])
        useEffect(()=>{
            setErrorState(false)

            fetch(`https://www.thecocktaildb.com/api/json/v1/1/${resource}`)
            .then(response => response.json())
            //only return 4 rinks
            .then(json => setItems(json.drinks.slice(0, 4)))
            .catch(error => {
                setErrorState(true)
               })
        },[])
        const formatResource=(string)=>{
            string=string.replace('_', ' ')
            return (string);
        }
        
     
        return(
                <>
                    <Link to={{pathname: `/filter/${props.ingredient}`}} className='link capitalize'><h2 className="orange-text">{formatResource(props.ingredient)}</h2></Link>
                    <Row xs='2' md='4'>
                        {
                        items&&errorState===false?
                            items.map(item=>{
                                return(
                                    <Drink key={item.idDrink} item={item}/> 
                                    )
                                })
                                ://no results goes here
                                <NoResults/>
                    }

                    </Row>
                   </>

    )
};

