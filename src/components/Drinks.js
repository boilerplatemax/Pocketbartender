import React, {useState, useEffect} from "react";
import {Container, Row} from 'react-bootstrap';
import Drink from './Drink'
import NoResults from '../pages/NoResults'
import { useParams, useNavigate, Link} from 'react-router-dom';
import ViewAll from './ViewAll';

export default function Drinks(){

    const navigate = useNavigate();

    const{urlParams}=useParams()

    const [errorState, setErrorState] = useState(false)
    //does current link contain 'filter'
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
        },[urlParams,'']) 
    //function is pure because it will always return same output given any input
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
                            <a onClick={()=>navigate(-1)} className='link return-button'><h4>Return</h4></a>  
                            <h4 className='capitalize'>{items.length} Results for: <strong>'{formatResource(resource)}'</strong></h4>
                        </div>
                    </Row>
                        <Row xs='2' lg='4' >{
                        items.map(item=>{
                            return(
                                <Drink key={item.idDrink} item={item}/> 
                                )
                            })}<ViewAll/></Row></>://no results goes here
                            <NoResults name={formatResource(resource)}/>
                   }
                   
            </Container>
    )
};

