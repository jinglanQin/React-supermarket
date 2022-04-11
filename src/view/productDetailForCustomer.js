import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import Alert from "./alert";

function ProductDetailForCustomer({product}) {
    return( 
        <Container>
            {product==="" ? ( <Alert variant={"warning"} message={"WrongID, Please enter the correct barcode."} ></Alert>) :(
            <Table striped border="true" hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Location</th>
                <th>Manufacturer Address</th>
                <th>Brand</th>
            </tr>
        </thead>
        <tbody>
            <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.quantity} st</td>
                <td>{product.price} kr</td>
                <td>{product.locationX} {"  "}{product.locationY}</td>
                <td>{product.supplier.address} </td>
                <td>{product.supplier.brand} </td>
            </tr>
        </tbody>
        </Table>)}
        </Container>
    )
}

export default ProductDetailForCustomer;