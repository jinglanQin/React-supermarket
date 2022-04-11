import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import Alert from "./alert";

function ContainerDetail({container}) {
    return( 
        <Container>
            {container==="" ? ( <Alert variant={"warning"} message={"WrongID, Please enter the correct barcode."} ></Alert>) :(
            <Table striped border="true" hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>C-centerPoint</th>
                <th>C-oppositePoint</th>
                <th>C-shape</th>
                <th>C-polygon</th>
                <th>C-radius</th>
                <th>Floor</th>
                <th>floor_centerPoint</th>
                <th>floor_oppositePoint</th>
 
                <th>floor-shape</th>

            </tr>
        </thead>
        <tbody>
            <tr key={container.id}>
                <td>{container.id}</td>
                <td>{container.name}</td>
                <td>{container.containerCenterPoint}</td>
                <td>{container.containerOppositePoint}</td>
                <td>{container.shapeOfContainer}</td>
                <td>{container.container_polygonPoints}</td>
                <td>{container.radiusOfContainer}</td>
                <td>{container.floor_id}</td>
                <td>{container.floor_centerPoint}</td>
                <td>{container.floor_oppositePoint}</td>
          
                <td>{container.shapeOfFloor}</td>
            </tr>
        </tbody>
        </Table>)}
        </Container>
    )
}

export default ContainerDetail;