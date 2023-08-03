import React from 'react';
import "./Template.css";

const Template = ({ children, todolength }) => {
  return (
    <div className="Template">
      <div className="title">Todo List <span className="todolength">{todolength}</span></div>
      <div>{children}</div>
    </div>
  )
}

export default Template;