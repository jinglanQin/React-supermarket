import React from 'react';
import {Container} from 'react-bootstrap';
import Alert from "./alert";
import {Table} from 'react-bootstrap';

function ProductDetail({product, startTime}) {
    return( 
        <Container>
            {product==="" ? ( <Alert variant={"warning"} message={"WrongID, Please enter the correct barcode."} startTime={startTime} ></Alert>) :(
      <Table  className="table table-striped" >
        {product.supplier === null ? (
                <tbody>
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
                <th>Floor</th>
                <td>{product.floor != null ? (<div>{product.floor.floorNumber}</div>):({})}</td>
            </tr>
            </tbody>
            ):(
           <tbody>
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
                <td>{} </td>
            </tr>
            <tr>
                <th>Manufacturer Address</th>
                <td>{} </td>
            </tr> 
            <tr >
                <th>Floor</th>
                <td>{product.floor != null ? (<div>{product.floor.floorNumber}</div>):({})}</td>
            </tr>
            </tbody>)}
            </Table>
    )}
    
        </Container>
    )
}

export default ProductDetail;
