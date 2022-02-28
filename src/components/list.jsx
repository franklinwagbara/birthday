import React, { Component } from "react";
import "./css/list.css";
import data from "../data.js";
import Person from "./person";

class List extends Component {
  state = {
    total: data.length,
    data: data,
  };

  handleClick = () => {
    const total = 0;
    const data = null;

    this.setState({ total, data });
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
        <h4>{this.formatedHeader()}</h4>
        {data &&
          data.map((person) => (
            <Person
              key={person.id}
              image={person.image}
              name={person.name}
              age={person.age}
            />
          ))}
        <button onClick={this.handleClick}>Clear all</button>
      </div>
    );
  }
}

export default List;
