import React from 'react'
import { Col, Row } from 'react-bootstrap'
import StorItemContent from './StorItemContent'
import storeItem from "../data/storeItem.json"
const Store = () => {
  return (
    <>
       <h1>Store</h1>
       <Row md={2} xs={1} lg={4} className='g-3'>
        {storeItem.map((item)=>(
            <Col key={item.id}>
                <StorItemContent {...item}/>
            </Col>
        ))}
       </Row>

      
    </>
  )
}

export default Store