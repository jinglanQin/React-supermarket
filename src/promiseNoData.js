import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

function PromiseNoData(promise, data, error) {
	return (
		(!promise && "no data") || 
		(!data && (
            <Spinner animation="border" role="status"></Spinner>
		))
	); 
}

export default PromiseNoData;