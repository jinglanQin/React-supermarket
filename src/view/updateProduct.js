import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import Alert from "./alert";

function UpdateProduct({product, handleOnChange, onUpdate, updateRes, info}) {
    if(updateRes){
        return(<Alert variant={"success"} message={info} ></Alert>)
    }
    else{
    return( 
        <Container>
            {product==="" ? (<Alert variant={"warning"} message={"WrongID, Please enter the correct barcode."} ></Alert>) :(
            <table  className='table table-borderless'>
            <tr>
                <th>Name</th>
                <td><input type="text" id="name" name="name" requiredminlength="4" maxLength="" size="70"
                className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                placeholder={product.name} defaultValue={product.name}  onChange={handleOnChange}></input>
                </td>
            </tr> 
            <tr> 
                <th>Quantity</th>
                <td><input type="text" id="no_of_items" name="no_of_items" requiredminlength="4" maxLength="" size="70"
                 className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.no_of_items} defaultValue={product.no_of_items} onChange={handleOnChange} ></input>
                 </td>
            </tr>
            <tr> 
                <th>Brand</th>
                <td><input type="text" id="brand" name="brand" requiredminlength="4" maxLength="" size="70"
                className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.brand} defaultValue={product.brand}  onChange={handleOnChange}  ></input>
                 </td>
            </tr>
            <tr> 
                <th>Price</th>
                <td><input type="text" id="price" name="price" requiredminlength="4" maxLength="" size="70"
                className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.price} defaultValue={product.price}  onChange={handleOnChange}  ></input>
                 </td>

            </tr>
            <tr> 
                <th>Location_x</th>
                <td><input type="text" id="location_x" name="location_x" requiredminlength="4" maxLength="" size="70"
                className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.location_x} defaultValue={product.location_x}  onChange={handleOnChange}  ></input>
                 </td>
            </tr>
            <tr> 
                <th>Location_y</th>
                <td><input type="text" id="location_y" name="location_y" requiredminlength="4" maxLength="" size="70"
                className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.location_y} defaultValue={product.location_y} onChange={handleOnChange}  ></input>
                 </td>
            </tr>
            <tr><button type = "button" onClick={onUpdate} >Update</button></tr>
        </table>)}


        </Container>
    )
            }
}

export default UpdateProduct;