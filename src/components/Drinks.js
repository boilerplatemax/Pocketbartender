import React, {useState, useEffect} from "react";
import {Container, Row} from 'react-bootstrap';
import Drink from './Drink'
import NoResults from '../pages/NoResults'
import { useParams, useNavigate, Link} from 'react-router-dom';
import { propTypes } from "react-bootstrap/esm/Image";

export default function Drinks(){

    const navigate = useNavigate();

    const{urlParams}=useParams()

    const [errorState, setErrorState] = useState(false)

    const filter = (window.location.href.indexOf("filter") != -1)?true:false
    
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
    const formatResource=(string)=>{
        string=string.split('=')[1]
        string=string.replace('_', ' ')
        return (string);
    }
        return(
            <Container>
                {
                    items&&errorState===false?<>
                    <Row>
                        <div className='position-relative'>
                            <a onClick={()=>navigate(-1)} className='link capitalize return-button'><h4>Return</h4></a>  
                            <h4>Results for: <strong><span className="category-name bg-primary">{formatResource(resource)}</span></strong></h4>
                        </div>
                    </Row>
                        <Row xs='2' md='2' lg='4' xxl='4'>{
                        items.map(item=>{
                            return(
                                <Drink key={item.idDrink} item={item}/> 
                                )
                            })}</Row></>://no results goes here
                            <NoResults name={formatResource(resource)}/>
       
                  
                    
                   }
                   
            </Container>
    )
};

