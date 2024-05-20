import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import './Request.css'

function Request() {


  const [phoneNumber, setPhoneNumber] = useState('');
  const [method, setMethod] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleNumberChange = (e) => {
    setPhoneNumber(e.target.value)
    setPhoneNumberError(validatePhoneNumber(phoneNumber));
    console.log(phoneNumber);
  }

  const handleMethod = (e) => {
    setMethod(e.target.value);
  }

  const handleSubmit = () => {
    if (!phoneNumberError) {
      const data = {
        phoneNumber: phoneNumber,
        method: method
      };
      console.log(data);
      setPhoneNumber('');
      setMethod('');
    } else {
      console.log('Please correct the phone number');
    }

  }

  const validatePhoneNumber = (value) => {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    return value.match(phoneRegex) ? '' : 'Please enter a valid phone number (xxx-xxx-xxxx)';
  };

    return(
        <div>
               <Typography className="heading" variant="h2" > Add your contact Phone number</Typography>
      <Typography variant="subtitle1" gutterBottom border={1} marginBottom={8}>
      We will contact you by text or phone call about accounts updates for your home products and services, for verification when calling in and for exclusive offers and surveys
      </Typography>

      <Typography variant="button" display="block" gutterBottom>
      Enter your contact phone number
      </Typography>

      <Typography variant="body2" gutterBottom>
        Mobile number preferred
      </Typography>
      
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

        <TextField id="phone-number" label="PhoneNumber" variant="outlined" onChange={handleNumberChange} value={phoneNumber} placeholder="xxx-xxx-xxxx"
          required
          error={!!phoneNumberError}
          helperText={phoneNumberError || 'Format: xxx-xxx-xxxx'}
           className='phone'

              />
      
    </Box>

    <div>we will send you a code to comfirm this phone number. where we should send it?</div>

    <div><FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        value={method}
        onChange={handleMethod}
        
      >
        <FormControlLabel value="Text-message" control={<Radio />} label="Text-message" />
        <FormControlLabel value="Phone call" control={<Radio />} label="Phone call" />
      </RadioGroup>
    </FormControl></div>

    
    <Button variant="contained" onClick={handleSubmit}>continue</Button>
        </div>
    )
}

export default Request;