import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import Alert from "./alert";

function PromiseNoData(promise, data, error,startTime) {
	//console.log(error);
	//console.log(promise);
	//console.log(data);
	return (
		(error && <Alert variant={"warning"} message={"Error"} startTime={startTime}></Alert>) || 
		(!data && (<Spinner animation="border" role="status"></Spinner>)) ||
		(!promise && <Alert variant={"warning"} message={"nodata"} startTime={startTime} ></Alert>)
	
	
	); 
}

export default PromiseNoData;