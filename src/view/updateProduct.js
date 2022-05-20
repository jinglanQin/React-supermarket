import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import Alert from "./alert";

function UpdateProduct({product, handleOnChange, onUpdate, updateRes, info, header}) {
    if(updateRes){
        return(info!=null ? (<Alert variant={"success"} message={info} ></Alert>):(<div></div>))
    }
    else{
    return( 
        <Container>
            {product==="" ? (<Alert variant={"warning"} message={"WrongID, Please enter the correct barcode."} ></Alert>) :(
            product.hasOwnProperty("id")?( 
            <table  className='table table-borderless'>
           <tbody>
            <tr>
                <th>Name</th>
                <td>{product.productName}</td>
            </tr> 
            <tr> 
                <th>Quantity</th>
                <td><input type="text" id="quantity" name="quantity" requiredminlength="4" maxLength="" size="70"
                 className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.quantity} defaultValue={product.quantity} onChange={handleOnChange} ></input>
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
                <th>Floor</th>          
                <td>{product.floor != null ? (<input type="text" id="floor_id" name="floor_id" requiredminlength="4" maxLength="" size="70"
                className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.floor.floorNumber} defaultValue={product.floor.floorNumber}   onChange={event=>header(event.target.value)} ></input>)
                 :(<input type="text" id="floor_id" name="floor_id" requiredminlength="4" maxLength="" size="70"
                 className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                  defaultValue={0}   onChange={event=>header(event.target.value)} ></input>)}
                 </td>

            </tr>
            <tr> 
                <th>Location_x</th>
                <td><input type="text" id="locationX" name="locationX" requiredminlength="4" maxLength="" size="70"
                className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.locationX} defaultValue={product.locationX}  onChange={handleOnChange}  ></input>
                 </td>
            </tr>
            <tr> 
                <th>Location_y</th>
                <td><input type="text" id="locationY" name="locationY" requiredminlength="4" maxLength="" size="70"
                className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.locationY} defaultValue={product.locationY} onChange={handleOnChange}  ></input>
                 </td>
            </tr>
            <tr> 
                <th>Order Quantity</th>
                <td><input type="text" id="orderQuantity" name="orderQuantity" requiredminlength="4" maxLength="" size="70"
                className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.orderQuantity} defaultValue={product.orderQuantity} onChange={handleOnChange}  ></input>
                 </td>
            </tr>
            <tr> 
                <th>Reorder Level</th>
                <td><input type="text" id="reOrderLevel" name="reOrderLevel" requiredminlength="4" maxLength="" size="70"
                className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                 placeholder={product.reOrderLevel} defaultValue={product.reOrderLevel} onChange={handleOnChange}  ></input>
                 </td>
            </tr>
          
            <tr><button type = "button" onClick={onUpdate} >Update</button></tr>
            </tbody>
        </table>
        ):(<div></div>)
        )}


        </Container>
    )
            }
}

export default UpdateProduct;