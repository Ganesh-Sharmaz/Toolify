import React from 'react'
import {QRCode} from 'react-qrcode-logo'

function EmailQRCode(email) {
  // console.log(email.email)
  const formattedEmail = `mailto:${email.email}`;


  return (
    <div>
      <QRCode value={formattedEmail}/>
    </div>
  )
}

export default EmailQRCode