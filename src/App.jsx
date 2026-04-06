import { nanoid } from "nanoid";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
        name: "",
        number: "",
      };
    });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
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
          <label>
            {" "}
            Number:
            <input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={number}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <h2>Contacts:</h2>
        <input
          type="text"
          name="filter"
          value={filter}
          title="Filter"
          onChange={this.handleChange}
          required
        />
        <ul>
          {filteredContacts.map((evt) => {
            return (
              <li key={evt.id}>
                {evt.name}: {evt.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
