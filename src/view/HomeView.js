
import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

function HomeView({product}) {
    return( 
        <Container>
            <div>
                 Search <input placeholder=""/>
             </div>

            <line></line>
            <Table striped border="true" hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Quntity</th>
                <th>Price</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            <tr key={product.upc14}>
                <td>{product.name}</td>
                <td>{product.no_of_items}</td>
                <td>{product.price}</td>
                <td>{product.location_x}, {product.location_y}</td>
            </tr>
        </tbody>
        </Table>
        </Container>
    )
}

export default HomeView;