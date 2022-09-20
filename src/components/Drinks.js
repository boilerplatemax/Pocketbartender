import React, {useState, useEffect} from "react";
import {Container, Col, Row, CloseButton} from 'react-bootstrap';
import Drink from './Drink'
import NoResults from './NoResults'
import { useParams} from 'react-router-dom';

export default function Drinks(){

    const{urlParams}=useParams()

    const [errorState, setErrorState] = useState(false)

    const filter = (window.location.href.indexOf("filter") != -1)?true:false
    const searchParam = window.localStorage.getItem('DRINK_SEARCH')
    

    const resource = (!urlParams?'filter.php?a=non_alcoholic':
    filter?
    'filter.php?i='+urlParams:
    'search.php?s='+urlParams
    )
    const [items, setItems] = useState([''])
        useEffect(()=>{
            setErrorState(false)

            fetch(`https://www.thecocktaildb.com/api/json/v1/1/${resource}`)
            .then(response => response.json())
            .then(json => setItems(json.drinks))
            .catch(error => {
                setErrorState(true)
               })
        },[])    
     
        return(
            <Container>
                <Row xs='1' md='2' lg='4' xxl='4'>{
                    items&&errorState===false?
                        items.map(item=>{
                            return(
                                <Drink key={item.idDrink} item={item}/> 
                                )
                            })://no results goes here
                            <NoResults/>
       
                  

                   }
                   </Row>
            </Container>
    )
};

