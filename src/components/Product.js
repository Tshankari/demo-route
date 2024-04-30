import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import {useSelector, useDispatch } from 'react-redux'
import add from '../actions/action';

import axios from 'axios'

function Product() {

    const { cart } = useSelector(state => state.updateCart)
    console.log(cart);
    const dispatch = useDispatch()

    const send = (list) => {
        dispatch(add(list))
      }

    // Start of data fetching
    const [data, setData] = useState([])

    console.log(data);
    // const getData = async () => {

    //     const response = await fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //     setData(response)

    // }
    // useEffect(() => {
    //     getData()
    // }, []);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        setData(res.data)
    })
    setData()
    },[])
    // End of data fetching
    return (
        <>
            <div className="ms-5 mt-5 row d-flex gap-5">
                {
                    data && data.map(list => (

                        <Card key={list.id} style={{ width: '15rem', height: "fit-content" }}>
                            <Card.Img style={{ width: '10rem', height: "10rem" }} variant="top" src={list.image} />
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{list.title}</ListGroup.Item>
                                    <ListGroup.Item>Price - ${list.price}</ListGroup.Item>
                                    <ListGroup.Item>Rating {list.rating.rate}</ListGroup.Item>
                                    <ListGroup.Item className='mb-0'> 
                                    <Button variant="primary" onClick={() => send(list)}>Add to Cart</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>

                    ))}
            </div>
        </>
    );
}

export default Product;