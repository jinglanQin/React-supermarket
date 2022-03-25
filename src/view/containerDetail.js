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
                <th>centerLocation_x</th>
                <th>centerLocation_y</th>
                <th>opposite_x</th>
                <th>opposite_y</th>
                <th>roomID</th>
                <th>room_centerLocation_x</th>
                <th>room_centerLocation_y</th>
                <th>room_opposite_x</th>
                <th>room_opposite_y</th>

            </tr>
        </thead>
        <tbody>
            <tr key={container.id}>
                <td>{container.id}</td>
                <td>{container.name}</td>
                <td>{container.centerLocation_x}</td>
                <td>{container.centerLocation_y}</td>
                <td>{container.opposite_x}</td>
                <td>{container.opposite_y}</td>
                <td>{container.room_id}</td>
                <td>{container.room_centerLocation_x}</td>
                <td>{container.room_centerLocation_y}</td>
                <td>{container.room_opposite_x}</td>
                <td>{container.room_opposite_y}</td>
            </tr>
        </tbody>
        </Table>)}
        </Container>
    )
}

export default ContainerDetail;