import React from 'react';
import {Container} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {useState} from "react";
import { Dropdown, MenuItem, DropdownButton } from "react-bootstrap";

function MultiFunction({option, object,handleSelect,OnSelectObject, onText, onSearch,header}) {

    return( 
        <Container>
            <br></br>
            <div className="btn-group btn-group-inline">
             <Dropdown onSelect={handleSelect} >  
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {option.replace('#/', '')}
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                      <Dropdown.Item href="#/update">update</Dropdown.Item>
                      <Dropdown.Item href="#/delete">delete</Dropdown.Item>
                      <Dropdown.Item href="#/search">search</Dropdown.Item>
                      <Dropdown.Item href="#/insert">insert</Dropdown.Item>
                      </Dropdown.Menu>
            </Dropdown> 

            <Dropdown onSelect={OnSelectObject} >  
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {object.replace('#/', '')}
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                      <Dropdown.Item href="#/product">product</Dropdown.Item>
                      <Dropdown.Item href="#/container">container</Dropdown.Item>
                      <Dropdown.Item href="#/floor">floor</Dropdown.Item>
                      </Dropdown.Menu>
            </Dropdown> 
            
            </div>
            <div>
                <textarea type="text" placeholder="" id ="select" rows ="6" cols ="50"
                      onChange={event=>onText(event.target.value)}></textarea>
            </div>
            {option==="#/insert" && (object==="#/container" || object==="#/product" )? ( 
                <div className ="">
                 Floor Number <input type = "text" placeholder="" onChange={event=>header(event.target.value)}/>
 
            </div>):(<div></div>)}
            <div>
                <button type = "button" onClick={onSearch}>Submit</button>
            </div>

        </Container>
    )
}

export default MultiFunction;