import { nanoid } from "nanoid";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleChange = (evt) => {
    this.setState({
      name: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
    };
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div>
        <h1>Phone Book</h1>
        <p>The best book ever!</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={name}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <h2>Contacts:</h2>
        <ul>
          {contacts.map((evt) => {
            return <li key={evt.id}>{evt.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
