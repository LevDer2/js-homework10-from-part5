import { nanoid } from "nanoid";
import React, { Component } from "react";
import "./App.css";

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

    const normalizedName = this.state.name.toLowerCase().trim();
    const isDuplicate = this.state.contacts.some(
      (contact) => contact.name.toLowerCase().trim() === normalizedName
    );

    if (isDuplicate) {
      return alert(`${this.state.name} was already created!`);
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      number: "",
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { name, number, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className="phonebook">
        <div className="phonebook__card">
          <h1 className="phonebook__title">Phone Book</h1>
          <p className="phonebook__subtitle">The best book ever!</p>

          <form className="phonebook__form" onSubmit={this.handleSubmit}>
            <label className="phonebook__field">
              <span>Name</span>
              <input
                className="phonebook__input"
                onChange={this.handleChange}
                type="text"
                name="name"
                value={name}
                required
              />
            </label>

            <label className="phonebook__field">
              <span>Number</span>
              <input
                className="phonebook__input"
                type="tel"
                name="number"
                onChange={this.handleChange}
                value={number}
                required
              />
            </label>

            <button className="phonebook__addBtn" type="submit">
              Add Contact
            </button>
          </form>

          <h2 className="phonebook__contactsTitle">Contacts</h2>

          <input
            className="phonebook__filter"
            type="text"
            name="filter"
            value={filter}
            placeholder="Find contacts by name"
            onChange={this.handleChange}
          />

          <ul className="phonebook__list">
            {filteredContacts.map((contact) => (
              <li className="phonebook__item" key={contact.id}>
                <div className="phonebook__info">
                  <span className="phonebook__name">{contact.name}</span>
                  <span className="phonebook__number">{contact.number}</span>
                </div>

                <button
                  className="phonebook__deleteBtn"
                  type="button"
                  onClick={() => this.handleDelete(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}