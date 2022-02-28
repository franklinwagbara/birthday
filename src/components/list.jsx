import React, { Component } from "react";
import "./css/list.css";
import data from "../data.js";
import Person from "./person";

class List extends Component {
  state = {
    total: data.length,
    data: data,
  };

  formatedHeader() {
    const { total } = this.state;
    if (total <= 1) return `${total} birthday today`;
    else return `${total} birthdays today`;
  }
  render() {
    const { data } = this.state;
    return (
      <div className="list-container">
        <h3>{this.formatedHeader()}</h3>
        {data.map((person) => (
          <Person
            key={person.id}
            image={person.image}
            name={person.name}
            age={person.age}
          />
        ))}
        <button>View all</button>
      </div>
    );
  }
}

export default List;
