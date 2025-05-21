import React from 'react'
import { Box, Button, TextField, Typography, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import './contactForm.css'

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
    sendEmail(data)
  }

  const sendEmail = (data) => {
    emailjs.send(
      'Kaizen ',
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        to_name: 'Charlie', // Replace with your name or a placeholder
        from_name: data.Name,
        message: data.Message,
        email: data.Email,
        phone: data.Phone || '',
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      alert("Your message has been recorded. We are on it!")
      reset()
    })
    .catch((error) => {
      alert("Failed to send message.")
      console.error("EmailJS Error:", error)
    })
  }

  return (
    <Box width={0.9} sx={{ display: 'flex', justifyContent: 'center', mx: 'auto', my: 2 }}>
      <Box className="form-container">
        <Typography variant="h4" textAlign="center" sx={{ fontWeight: 'bold', color: '#015f44', mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="h5" textAlign="center" sx={{mb: 3}}>Here you can get in touch with our team with any queries.</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ my: 3 }}>
            <Grid item xs={12} md={4} container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  {...register("Name", { required: true })}
                  error={!!errors.Name}
                  helperText={errors.Name ? 'Name is required' : ''}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  {...register("Email", { required: true })}
                  error={!!errors.Email}
                  helperText={errors.Email ? 'Email is required' : ''}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  {...register("Phone")}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <TextField
                fullWidth
                label="Message/ Query"
                variant="outlined"
                multiline
                rows={10}
                {...register("Message", { required: true })}
                error={!!errors.Message}
                helperText={errors.Message ? 'Message is required' : ''}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2, display: 'flex', justifyContent: { md: 'right', sm: 'center', xs: 'center' }}}>
            <Button
              type="submit"
              variant="outlined"
              size="large" 
              sx={{ height: '32px' }}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}

export default ContactForm