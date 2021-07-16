import React from 'react';

const ErrorPage = ({history}) => {
    return (
        <div style={{marginTop:'10px'}}>
            <h1>404 Page</h1>
            <p>Redirecting to <span style={{color: 'dodgerblue', cursor:'pointer'}} onClick={() =>  history.push('/')}>Login Page</span></p>
        </div>
    )
}

export default ErrorPage;