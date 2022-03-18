import React from 'react';
import {Container} from 'react-bootstrap';

function SearchProductByID({onSearch, onText}) {
    return( 
        <Container>
            <div className ="searchProductByID">
                 Search <input type = "text" placeholder="" onChange={event=>onText(event.target.value)}/>
                 <button type = "button" onClick={onSearch}>Search</button>
            </div>
            <br></br>
        </Container>)
}
export default SearchProductByID;