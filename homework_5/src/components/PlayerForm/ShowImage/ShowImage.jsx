import React from 'react';

const ShowImage = ({response}) => {
    return (
        <div>
             <img src={response.avatar_url} alt={"UPS..."} />
        </div>
    );
};

export default ShowImage;