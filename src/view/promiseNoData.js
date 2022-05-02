import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import Alert from "./alert";

function PromiseNoData(promise, data, error) {
	//console.log(error);
	//console.log(promise);
	//console.log(data);
	return (
		(error && <Alert variant={"warning"} message={"Error"}></Alert>) || 
		(!data && (<Spinner animation="border" role="status"></Spinner>)) ||
		(!promise && <Alert variant={"warning"} message={"nodata"}></Alert>)
	
	
	); 
}

export default PromiseNoData;