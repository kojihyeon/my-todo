import React from 'react';
import "./Template.css";

const Template = ({ children, todolength }) => {
  return (
    <div className="Template">
      <div className="title">Todo List ({todolength})</div>
      <div>{children}</div>
    </div>
  )
}

export default Template;