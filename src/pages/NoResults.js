import React from "react";
import {Col,Row, Button} from 'react-bootstrap';
import cliparterror from '../resources/images/lost.png'
import {Link} from 'react-router-dom';
export default function NoResults(props){
//no results page

        return(<Row>
            <Col lg='6'>
                <div noresults-text>
                    <h1 className='capitalize'>We looked everywhere...</h1>
                    <h2>But we just couldn't find it</h2>
                    <Link to='/' className='link capitalize'><Button className='round-button'>Return Home</Button></Link>  
                </div>
            </Col>
            <Col lg='6'>
                <img src={cliparterror} style={{height:'500px',objectFit:'cover'}}/>
            </Col>
            
            
        </Row>

    )
};

