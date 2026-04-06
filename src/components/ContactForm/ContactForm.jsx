import React, { Component } from "react";

export default class ContactForm extends Component {
  render() {
    const { onSubmit, onChange, name, number } = this.props;
    return (
      <form className="phonebook__form" onSubmit={onSubmit}>
        <label className="phonebook__field">
          <span>Name</span>
          <input
            className="phonebook__input"
            onChange={onChange}
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
            onChange={onChange}
            value={number}
            required
          />
        </label>

        <button className="phonebook__addBtn" type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
