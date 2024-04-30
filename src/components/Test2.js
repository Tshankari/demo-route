import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import axios from 'axios'
function Test2() {


    const [sdata, setData] = React.useState([]) 

   
        
        useEffect(()=>{
            axios.get('https://dummyjson.com/products')
        .then((res)=>{
           setData(res.data.products);
        })
        },[])
 
    return (
        <>

            <div className="ms-5 mt-5 row d-flex gap-5">
                {
                    sdata && sdata.map(list => (

                        <Card key={list.id} style={{ width: '15rem', height: "fit-content" }}>
                            <Card.Img style={{ width: '10rem', height: "10rem" }} variant="top" 
                            src={list.thumbnail} />
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{list.title}</ListGroup.Item>
                                    <ListGroup.Item>Price - ${list.price}</ListGroup.Item>
                                    <ListGroup.Item>Rating {list.rating}</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card.Body>
                        </Card>

                    ))}
            </div>
        </>
    );
}

export default Test2;