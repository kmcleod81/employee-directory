import React from 'react';
import "./Container.css";

export default function Container(props) {
    return (
        <div className="container col-12">
            {props.children}
        </div>
    );
}
