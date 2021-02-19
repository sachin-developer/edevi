import React, { Component } from "react";
import PropTypes from 'prop-types';
import {serverConstants} from '../enums/ServerConstants';
import wretch from 'wretch'


const WithServerRequestResponse =  WrappedComponent => (props) => {
    console.log(serverConstants);
    const handleRequestToServer = (prop) => {
        const defaultErrorHandler = (err) => {console.log(err)};
        const {endPoint, data, onSuccessHandler, onErrorHandler = defaultErrorHandler, 
            methodType = "POST"} = prop;

        const responseHandler = (response) => {
            if(response.success) {
                onSuccessHandler(response); 
            } else if (response.error) {
                onErrorHandler(response);
            }
        };
        if (methodType === 'POST') {
            wretch(serverConstants[endPoint])
            .post(data)
            .json(response => {
                responseHandler(response); 
            });
        } else if (methodType === 'GET') {
            wretch(serverConstants[endPoint])
            .query(data)
            .get()
            .json(response => {
                responseHandler(response); 
            });
        } else if (methodType === 'PUT') {
            wretch(serverConstants[endPoint])
            .put(data)
            .json(response => {
                responseHandler(response); 
            });
        }
    };
    return (
        <div>
            <WrappedComponent
                handleRequestToServer = {handleRequestToServer}
                {...props}
            />
        </div>        
    );
}

WithServerRequestResponse.propTypes = {
    WrappedComponent: PropTypes.element.isRequired
}

export default WithServerRequestResponse;