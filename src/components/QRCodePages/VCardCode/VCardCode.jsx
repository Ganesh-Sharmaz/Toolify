import React, {useState} from 'react'
import {QRCode} from "react-qrcode-logo"

function VCardCode() {
  const [contact, setContact] = useState({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    birthday: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  };

  const generateVCardData = () => {
    return `BEGIN:VCARD
VERSION:3.0
FN:${contact.fullName}
ORG:${contact.organization}
TEL;TYPE=WORK,VOICE:${contact.phone}
EMAIL:${contact.email}
ADR;TYPE=WORK:;;${contact.streetAddress};${contact.city};${contact.state};${contact.zip};${contact.country}
BDAY:${contact.birthday}
END:VCARD`;
  };

  return (
    <div>
      <form>
        <input type="text" name="fullName" placeholder="Full Name" value={contact.fullName} onChange={handleChange} />
        <input type="text" name="organization" placeholder="Organization" value={contact.organization} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" value={contact.phone} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" value={contact.email} onChange={handleChange} />
        <input type="text" name="streetAddress" placeholder="Street Address" value={contact.streetAddress} onChange={handleChange} />
        <input type="text" name="city" placeholder="City" value={contact.city} onChange={handleChange} />
        <input type="text" name="state" placeholder="State" value={contact.state} onChange={handleChange} />
        <input type="text" name="zip" placeholder="ZIP Code" value={contact.zip} onChange={handleChange} />
        <input type="text" name="country" placeholder="Country" value={contact.country} onChange={handleChange} />
        <input type="date" name="birthday" placeholder="Birthday" value={contact.birthday} onChange={handleChange} />
      </form>

      <QRCode value={generateVCardData()} />
    </div>
  );
}

export default VCardCode