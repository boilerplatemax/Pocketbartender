import React from "react";
import {Col,Row, Button} from 'react-bootstrap';
import cliparterror from '../resources/images/lost.png'
import {Link} from 'react-router-dom';
export default function NoResults(props){
//no results page
    const resetSearchHandler=()=>{
        document.getElementById("search-bar").reset();
        window.localStorage.removeItem('DRINK_SEARCH')
    }
        return(
            <div className='home-banner'>
            <Row>
                <Col lg={5}>
                    <div className="title capitalize">
                        <h1 className='capitalize'>We looked everywhere...</h1>
                        <h2>But we just couldn't find it</h2>
                        <Link to='/' className='link capitalize' onClick={resetSearchHandler}><Button className='round-button'>Return Home</Button></Link>
                    </div>
                </Col>
                    <Col lg={7}>
=
                            <img src={cliparterror} className='card-img'/>
=
                    </Col>
                </Row>       
            </div>
        

    )
};

