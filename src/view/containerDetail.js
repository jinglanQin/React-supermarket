import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import Alert from "./alert";

function ContainerDetail({container, startTime}) {
    return( 
        <Container>
            {container==="" ? ( <Alert variant={"warning"} message={"WrongID, Please enter the correct barcode."} startTime={startTime } ></Alert>) :(
            <Table striped border="true" hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>CenterLocation</th>
                <th>Opposite point</th>
                <th>Polygon</th>
                <th>Shape</th>
                <th>Floor Number</th>

            </tr>
        </thead>
        <tbody>
            <tr key={container.id}>
                <td>{container.id}</td>
                <td>{container.name}</td>
                <td>{container.centerPoint}</td>
                <td>{container.oppositePoint}</td>
                <td>{container.polygonPoints}</td>
                <td>{container.shape}</td>
                <td>{container.floor!=null ? (<>{container.floor.floorNumber}</>):(<div></div>)}</td>
            </tr>
        </tbody>
        </Table>)}
        </Container>
    )
}

export default ContainerDetail;