import React, {useState, useEffect} from "react";
import { Card, Container, Col, Row , CloseButton} from 'react-bootstrap';
import { useParams,useNavigate } from 'react-router-dom';

const Instructions=()=>{
    const navigate = useNavigate();
    const { id } = useParams();
    const [items, setItems] = useState([''])

useEffect(()=>{
    //we are fetching data from this url and because we have the dollar sign in mini quotes we can pass js code
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(json => setItems(json.drinks) )
    window.scrollTo({top: 0, left: 0, behavior: 'instant'})
    },[])
       
return(
    <Container>
        {items&&items[0].strDrink?
            items.map(item=>{
                return(
                    <div className='instructions-card' key={1}>
                        <Card style={{border:'none'}}>
                            <Row>
                            <CloseButton style={{position: 'absolute', right: '0', padding:'10px', backgroundColor:'white'}} onClick={()=>navigate(-1)}/>         
                                <Col md='6'>
                                {/* <Card.Title style={{padding:'30px'}}></Card.Title> */}
                                <Card.Img src={item.strDrinkThumb} style={{height:'100%',objectFit:'cover'}}></Card.Img>
                                </Col>
                                <Col md='6'>
                                    <Card.Body>
                                    <h1 className='text-muted'>{item.strDrink}</h1>
                                    <h2>Ingredients</h2>
                                        <ul>
                                        <li>{item.strIngredient1}</li>
                                        <li>{item.strIngredient2}</li>
                                        {item.strIngredient3===null?null:<li>{item.strIngredient3}</li>}
                                        {item.strIngredient4===null?null:<li>{item.strIngredient4}</li>}
                                        {item.strIngredient5===null?null:<li>{item.strIngredient5}</li>}
                                        {item.strIngredient6===null?null:<li>{item.strIngredient6}</li>}
                                        {item.strIngredient7===null?null:<li>{item.strIngredient7}</li>}
                                        {item.strIngredient8===null?null:<li>{item.strIngredient8}</li>}   
                                        </ul>
                                    <h2>Category</h2>
                                    <p>{item.strCategory}</p>

                                    <h2>Instructions</h2>
                                    <p>{item.strInstructions}</p>
                                    </Card.Body>
                                </Col>
                            </Row>   
                        </Card>
                    </div>    
                    )
                }
            ):null
        }
    </Container>
    )
};
export default Instructions;

