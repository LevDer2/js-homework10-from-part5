import React, { Component } from "react";

export default class ContactList extends Component {
  render() {
    const {filteredContacts, handleDelete} = this.props
    return (
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
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
