import React from 'react';

const ShowName = ({response}) => {
    return (
        <div>
            <h3>{response.login}</h3>
        </div>
    );
};

export default ShowName;