import React from 'react';

const Home = () => {
    const handleClick = () => {
        alert('handle click');
    };
    return  (
        <div>
            <button className="btn btn-primary" onClick={handleClick}>Button</button>
        </div>
    );
};

export default Home