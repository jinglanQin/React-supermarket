import React from 'react';
import {Container} from 'react-bootstrap';
import Alert from "./alert";
import {Table} from 'react-bootstrap';

function ProductDetail({product}) {
    return( 
        <Container>
            {product==="" ? ( <Alert variant={"warning"} message={"WrongID, Please enter the correct barcode."} ></Alert>) :(
      <Table  class="table table-striped" >
        {product["supplier"] === null ? (
            <div>
            <tr >
                <th>Name</th>
                <td>{product.productName}</td>
            </tr>
            <tr >
                <th>Quantity</th>
                <td>{product.quantity} st</td>
            </tr>
            <tr >
                <th>Order Quantity</th>
                <td>{product.quantity} st</td>
            </tr>
            <tr >
                <th>Reorder Level</th>
                <td>{product.orderQuantity} st</td>
            </tr>
            <tr >
                <th>Price</th>
                <td>{product.price} kr</td>
            </tr>
            <tr >
                <th>Location</th>
                <td>{product.locationX} {" , "}{product.locationY}</td>
            </tr>
            </div>
            ):(
           <div>
            <tr >
                <th>Name</th>
                <td>{product.productName}</td>
            </tr>
            <tr >
                <th>Quantity</th>
                <td>{product.quantity} st</td>
            </tr>
            <tr >
                <th>Order Quantity</th>
                <td>{product.quantity} st</td>
            </tr>
            <tr >
                <th>Reorder Level</th>
                <td>{product.orderQuantity} st</td>
            </tr>
            <tr >
                <th>Price</th>
                <td>{product.price} kr</td>
            </tr>
            <tr >
                <th>Location</th>
                <td>{product.locationX} {" , "}{product.locationY}</td>
            </tr>
            <tr >
                <th>Brand</th>
                <td>{product.supplier.brand} </td>
            </tr>
            <tr>
                <th>Manufacturer Address</th>
                <td>{product.supplier.address} </td>
            </tr> 
            </div>)}
            </Table>
    )}
    
        </Container>
    )
}

export default ProductDetail;
