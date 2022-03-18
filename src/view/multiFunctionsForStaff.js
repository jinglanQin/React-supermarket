import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {useState} from "react";
import { Dropdown, MenuItem, DropdownButton } from "react-bootstrap";

function MultiFunction({handleSelect, onText, onSearch}) {
    const [value,setValue]=useState('');
    const handleSelectt=(e)=>{
      console.log(e);
      setValue(e)
    }
    // in dropdown onSelect={handleSelect}
         //<h4>You selected {value}</h4>
    return( 
        <Container>
            <br></br>
             <Dropdown onSelect={handleSelect} >  
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                      <Dropdown.Item href="#/update">update</Dropdown.Item>
                      <Dropdown.Item href="#/delete">delete</Dropdown.Item>
                      <Dropdown.Item href="#/search">search</Dropdown.Item>
                      <Dropdown.Item href="#/insert">insert</Dropdown.Item>
                      </Dropdown.Menu>
                      <input type = "text" placeholder="" onChange={event=>onText(event.target.value)}/>
                 <button type = "button" onClick={onSearch}>Search</button>
            </Dropdown>    

        </Container>
    )
}

export default MultiFunction;