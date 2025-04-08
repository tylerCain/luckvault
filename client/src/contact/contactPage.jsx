import React from 'react'
import ServicesHeader from '../services/servicesHeader'
import { Box, Button, Divider, TextField, Typography, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import InstagramIcon from '@mui/icons-material/Instagram'
import background from '../_content/IMG_3317.webp'

const ContactPage = () => {
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
    <>
      <ServicesHeader background={background} text="Contact Us" />
      <Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 2, pb: 5 }}>
        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', px: 4 }}>
          You can use this page to directly send us an email with any queries you may have, and view our contact details.
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: 'white', borderBottom: '2px solid #46ab49' }}>
        <Grid container spacing={2}>
          {/* Left Side - Contact Details */}
          <Grid item xs={12} md={4} sx={{ backgroundColor: 'white', borderRight: { md: '1px solid #46ab49 '}}}>
            <Box sx={{ p: 4 }}>
              <Typography align="center" variant="h3" sx={{ color: '#46ab49', fontWeight: 700, mx: 'auto' }}>
                Contact Details
              </Typography>
              <Divider sx={{ mb: 6, border: '1px solid', color: '#46ab49', mx: 'auto', width: '90%' }}/>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 6, justifyContent: 'center' }}>
                <PhoneIcon sx={{ color: '#46ab49', mr: 2 }} />
                <Typography variant="h5" sx={{ color: '#46ab49' }}>+44 7580 198722</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 6, justifyContent: 'center' }}>
                <EmailIcon sx={{ color: '#46ab49', mr: 2 }} />
                <Typography variant="h6" sx={{ color: '#46ab49' }}>info@read-landscaping.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <InstagramIcon sx={{ color: '#46ab49', mr: 2 }} />
                <Typography
                  variant="h5"
                  sx={{ color: '#46ab49', cursor: 'pointer' }}
                  component="a"
                  href="https://instagram.com/read_landscaping"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  read_landscaping
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={8} sx={{ borderLeft: { md: '1px solid #46ab49 ' }}}>
            <Box className="form-container" sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography align="center" variant="h3" sx={{ color: '#46ab49', fontWeight: 700, mx: 'auto' }}>
                Get in Touch
              </Typography>
              <Divider sx={{ mb: 2, border: '1px solid', color: '#46ab49', mx: 'auto', width: { xs: '90%', md: '60%'} }}/>
              <form onSubmit={handleSubmit(onSubmit)} style={{ flex: 1, display: 'flex', flexDirection: 'column', mx: 'auto' }}>
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
                              borderColor: '#46ab49',
                            },
                          },
                          '& label.Mui-focused': {
                            color: '#46ab49',
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
                              borderColor: '#46ab49',
                            },
                          },
                          '& label.Mui-focused': {
                            color: '#46ab49',
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
                              borderColor: '#46ab49',
                            },
                          },
                          '& label.Mui-focused': {
                            color: '#46ab49',
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <TextField
                      fullWidth
                      label="Message/ Query"
                      variant="outlined"
                      multiline
                      rows={8}
                      {...register("Message", { required: true })}
                      error={!!errors.Message}
                      helperText={errors.Message ? 'Message is required' : ''}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#46ab49',
                          },
                        },
                        '& label.Mui-focused': {
                          color: '#46ab49',
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                {/* Button Container */}
                <Grid item xs={12} sx={{ mt: 1, display: 'flex', justifyContent: { md: 'right', sm: 'center', xs: 'center' }}}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: '#015f44', color: 'white', textTransform: 'none', height: '36px', '&:hover': {
                      backgroundColor: '#46ab49', // Light green color on hover
                    }}}
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ContactPage
