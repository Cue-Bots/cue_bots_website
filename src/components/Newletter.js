import React from 'react';
import './Newletter.css';

const Newletter = () => {
  return (
    <section className="NewletterSection">
      <div className="NewletterContent">
        <h2 className="NewletterTitle">Newsletter</h2>
        <form className="NewletterForm">
          <div className="NewletterRow">
            <input type="text" placeholder="Salutation" />
            <input type="text" placeholder="Last name*" />
          </div>
          <div className="NewletterRow">
            <input type="text" placeholder="First name*" />
            <input type="email" placeholder="E-mail*" />
          </div>
          <div className="NewletterRow checkbox-row">
            <input type="checkbox" id="receiveNews" />
            <label htmlFor="receiveNews">Receive the latest news*</label>
          </div>
          <button type="submit" className="NewletterSubmit">Submit</button>
          <p className="NewletterNote">
            You agree to receive the Cue Bots newsletter and additional information about new products and events.<br />
            Via the unsubscribe link at the bottom of newsletter mailings you can withdraw your consent.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Newletter;
