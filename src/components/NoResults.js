import React, {useState, useEffect} from "react";
import {Col,Card} from 'react-bootstrap';
import cliparterror from './cliparterror.png'
export default function NoResults(){

//no results page

        return(<>
            <Col xs='12' md='12' lg='6' xxl='6' >
                <Card className='w-100 border-0'>
                    <Card.Title style={{padding:'30px'}}><h1 className='text-muted'>No Results Found</h1></Card.Title>
                    <Card.Img src={cliparterror} style={{height:'500px',objectFit:'cover'}}></Card.Img>
                </Card>
            </Col>

            {/* <Col xs='12' md='12' lg='12' xxl='12' >
                <div style={{position:'absolute', top:'50%', left: '50%', transform:'translate(-50%,-50%)'}}>
                    <h4 className='text-center'  >Loading...</h4>
                </div>
            </Col> */}
            
            
        </>

    )
};

