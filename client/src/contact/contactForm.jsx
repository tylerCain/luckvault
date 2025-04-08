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
    <Box width={1} sx={{ backgroundColor: '#46ab49', pt: 5, pb: 2, display: 'flex', justifyContent: 'center' }}>
      <Box className="form-container">
        <Typography align="center" variant="h3" sx={{ color: 'white', fontWeight: 700, mx: 'auto' }}>
          Get in Touch
        </Typography>
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
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    '& label.Mui-focused': {
                      color: 'white',
                    },
                  }}
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
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    '& label.Mui-focused': {
                      color: 'white',
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  {...register("Phone")}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    '& label.Mui-focused': {
                      color: 'white',
                    },
                  }}
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
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& label.Mui-focused': {
                    color: 'white',
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2, display: 'flex', justifyContent: { md: 'right', sm: 'center', xs: 'center' }}}>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: '#015f44', color: 'white', textTransform: 'none', mt: -2, height: '32px', '&:hover': {
                backgroundColor: 'white', color: '#015f44'
              }}}
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