import React from 'react';
import './Model.css';

const Model = (props) => (
    <div className="Model" style={{ zIndex: '10' }}>
        <div>{props.image}</div>
            <article className="ModelInfo">
                <h3>{props.title}</h3>
                <small>{props.text}</small>
                <a>{props.children}</a>
            </article>
        </div>
)

export default Model;