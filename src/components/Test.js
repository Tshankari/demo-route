import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import axios from 'axios'
var id=21
function Test() {


    const [sdata, setData] = React.useState([]) 
    const [title, setTitle] = React.useState("") 
   
        
        useEffect(()=>{
            axios.get('https://api.sampleapis.com/cartoons/cartoons2D')
        .then((res)=>{
            setData(res.data)
        })
        },[])
 
 const pushData=()=>{
    axios.patch(`https://api.sampleapis.com/cartoons/cartoons2D/${1}`,{title:title})
    .then((res)=>{
        setData(res.data)
        // setTitle([...sdata,res.data])
        console.log(res.data);
    })
 }
// const pushData=()=>{
//     axios.post('https://api.sampleapis.com/cartoons/cartoons2D/',{id:id+1,title:title})
//     .then((res)=>{
      
//      setTitle([...sdata,res.data])
//         console.log(res.data);
//     })
//  }

    return (
        <>



            <div className="ms-5 mt-5 row d-flex gap-5">
                {sdata.title}
                {/* {
                    sdata && sdata.map(list => (

                        <Card key={list.id} style={{ width: '15rem', height: "fit-content" }}>
                            <Card.Img style={{ width: '10rem', height: "10rem" }} variant="top" src={list.image} />
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{list.title}</ListGroup.Item>
                                    <ListGroup.Item>Price - ${list.year}</ListGroup.Item>
                                    <ListGroup.Item>Rating {list.rating}</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card.Body>
                        </Card>

                    ))} */}
                    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
                    <button onClick={pushData}>Push</button>
            </div>
        </>
    );
}

export default Test;