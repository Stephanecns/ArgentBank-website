//formulaire de mise à jour du nom d'utilisateur
import React from "react";

function UpdateUsernameForm() {
  return (
    <section className="profile-form-content">
      <h1>Edit user info</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">User name</label>
          <input type="text" id="username" name="username" placeholder="ex: Ben_hg" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" placeholder="ex: Ben" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="username">Last name</label>
          <input type="text" id="lastName" name="lastName" placeholder="ex: Hong" />
        </div>
        <div className="buttons-wrapper">
        <button type="submit" className="profile-form-button">
          Save
        </button>
        <button type="button" className="profile-form-button" onClick={() => {}}>
          Cancel
        </button>
        </div>
      </form>
    </section>
  );
}

export default UpdateUsernameForm;
