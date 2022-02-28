import React, { Component } from "react";
import "./css/person.css";

const Person = ({ image, name, age }) => {
  return (
    <div className="person">
      <img src={image} alt="picture" />
      <div>
        <p className="name">{name}</p>
        <p className="age">{age} years</p>
      </div>
    </div>
  );
};

export default Person;
