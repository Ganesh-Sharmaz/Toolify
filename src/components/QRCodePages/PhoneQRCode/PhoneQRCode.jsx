import { Input } from '@mui/material';
import React from 'react'
import {QRCode} from "react-qrcode-logo"

function PhoneQRCode(phoneNumber) {

  // console.log(phoneNumber.phoneNumber)
  const formattedNumber = `tel:${phoneNumber.phoneNumber}`;


  return (
    <div>
      <QRCode value={formattedNumber}/>
    </div>
  )
}

export default PhoneQRCode