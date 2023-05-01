import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium, aspernatur et a assumenda nihil dolore nostrum cumque iusto veritatis amet accusantium quas totam nulla ut impedit adipisci eius natus.</p>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;