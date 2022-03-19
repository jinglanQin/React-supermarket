import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import Alert from "./alert";

function UpdateProduct({product}) {
    return( 
        <Container>
            {product==="" ? (<Alert variant={"warning"} message={"WrongID, Please enter the correct barcode."} ></Alert>) :(
            <table  class='table table-borderless'>
            <tr>
                <th>Name</th>
                <td><input type="text" id="name" name="name" requiredminlength="4" maxlength="" size="70"
                class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                placeholder={product.name} ></input>
                </td>
            </tr> 
            <tr> 
                <th>Quantity</th>
                <td><input type="text" id="quantity" name="quantity" requiredminlength="4" maxlength="" size="70"
                 class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.no_of_items}></input>
                 </td>
            </tr>
            <tr> 
                <th>Brand</th>
                <td><input type="text" id="brand" name="brand" requiredminlength="4" maxlength="" size="70"
                class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.brand}></input>
                 </td>
            </tr>
            <tr> 
                <th>Price</th>
                <td><input type="text" id="price" name="price" requiredminlength="4" maxlength="" size="70"
                class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.price}></input>
                 </td>

            </tr>
            <tr> 
                <th>Location_x</th>
                <td><input type="text" id="location_x" name="location_x" requiredminlength="4" maxlength="" size="70"
                class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.location_x}></input>
                 </td>
            </tr>
            <tr> 
                <th>Location_y</th>
                <td><input type="text" id="location_y" name="location_y" requiredminlength="4" maxlength="" size="70"
                class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.location_y}></input>
                 </td>
            </tr>
        </table>)}
        </Container>
    )
}

export default UpdateProduct;