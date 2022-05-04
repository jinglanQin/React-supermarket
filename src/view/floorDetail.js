import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import Alert from "./alert";

function FloorDetail({floor, startTime}) {
    return( 
        <div>
            {floor==="" ? ( <Alert variant={"warning"} message={"WrongID, Please enter the correct floor number."} startTime={startTime}></Alert>) :(
            <Table striped border="true" hover>
        <table  className='table table-borderless'>
            <thead></thead>
            <tbody>
            <tr >
                <th>Shape</th>
                <td>{floor.shape}</td>
            </tr>
            <tr >
                <th>CenterPoint</th>
                <td>{floor.centerPoint} </td>
            </tr>
            <tr >
                <th>Opposite Point</th>
                <td>{floor.oppositePoint} </td>
            </tr>
            <tr >
                <th>Polygon Points</th>
                <td>{floor.polygonPoints} </td>
            </tr>
            <tr >
                <th>Floor Number</th>
                <td>{floor.floorNumber} </td>
            </tr>
            </tbody>
            </table>
        </Table>)}
        </div>
    )
}

export default FloorDetail;
