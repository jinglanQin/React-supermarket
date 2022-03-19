import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import Alert from "./view/alert";

function PromiseNoData(promise, data, error) {
	console.log(error);
	console.log(promise);
	console.log(data);
	return (
		(error && <Alert variant={"warning"} message={"Error"}></Alert>) || 
		(!promise && <Alert variant={"warning"} message={"nodata"}></Alert>)|| 
		(!data && (<Spinner animation="border" role="status"></Spinner>)) 
	
	
	); 
}

export default PromiseNoData;