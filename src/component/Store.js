import React from 'react'
import { Row,Col } from 'react-bootstrap'
import StoreItem from './StoreItem'
import storeItems from "../data/storeitems.json"

const Store = () => {
    return (
        <>
        <h1>Store</h1>
        <Row md={2} lg={3} className='g-3'>
            {storeItems.map((item)=>(
<Col key={item.id}>
    <StoreItem {...item}/>
</Col>

            ))}
        </Row>
        </>
    )
}

export default Store