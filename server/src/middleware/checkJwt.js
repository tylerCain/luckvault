import { auth } from 'express-oauth2-jwt-bearer'

const checkJwt = auth({
  audience: process.env.AUTH_AUDIENCE, // Replace with your actual Auth0 API identifier
  issuerBaseURL: process.env.AUTH_BASE_URL, // Replace with your Auth0 domain
})

export default checkJwt