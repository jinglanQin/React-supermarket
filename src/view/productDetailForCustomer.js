import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import Alert from "./alert";
// OBS add supplier!
function ProductDetailForCustomer({products,startTime}) {
    return( 
        <Container>
             
            {!products && products.length==0? (<Alert variant={"warning"} message={"WrongID, Please enter the correct barcode."} startTime={startTime} ></Alert>) 
            :( products.map ( product=> (<Table striped border="true" hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Location</th>
                        <th>Floor</th>
                        <th>Manufacturer</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={product.id}>
                        <td>{product.productName}</td>
                        <td>{product.quantity} st</td>
                        <td>{product.price} kr</td>
                        <td>{product.locationX} {"  "}{product.locationY}</td>
                        <td>{product.floor!=null ? (<>{product.floor.floorNumber}</>):(<div></div>)} </td>
                        <td>{product.supplier!=null ? (<>{product.supplier.manufacturer}</>):(<div></div>)}</td>
                        <td>{product.supplier!=null ? (<>{product.supplier.brand}</>):(<div></div>)} </td>
                    </tr>
                </tbody>
                </Table>
            )))}
        </Container>
    )
}

export default ProductDetailForCustomer;