import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import Alert from "./alert";

function ProductDetail({product}) {
    return( 
        <Container>
            {product==="" ? ( <Alert variant={"warning"} message={"WrongID, Please enter the correct barcode."} ></Alert>) :(
            <Table striped border="true" hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Quntity</th>
                <th>Price</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            <tr key={product.upc14}>
                <td>{product.name}</td>
                <td>{product.no_of_items} st</td>
                <td>{product.price} kr</td>
            <td>{product.location_x} {"  "}{product.location_y}</td>
            </tr>
        </tbody>
        </Table>)}
        </Container>
    )
}

export default ProductDetail;