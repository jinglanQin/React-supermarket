import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {useState} from "react";
import { Dropdown, MenuItem, DropdownButton } from "react-bootstrap";

function MultiFunction({handleSelect, onText, onSearch}) {
    return( 
        <Container>
            <br></br>
             <Dropdown onSelect={handleSelect} >  
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select method
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                      <Dropdown.Item href="#/update">update</Dropdown.Item>
                      <Dropdown.Item href="#/delete">delete</Dropdown.Item>
                      <Dropdown.Item href="#/search">search</Dropdown.Item>
                      <Dropdown.Item href="#/insert">insert</Dropdown.Item>
                      </Dropdown.Menu>
            </Dropdown>    
            <div>
                <textarea type="text" placeholder="" id ="select" rows ="6" cols ="50"
                      onChange={event=>onText(event.target.value)}></textarea>
            </div>
            <div>
                <button type = "button" onClick={onSearch}>Search</button>
            </div>

        </Container>
    )
}

export default MultiFunction;