import { useAuth0 } from '@auth0/auth0-react'

const useIsAdmin = () => {
  const { user, isAuthenticated } = useAuth0()

  const roles = user?.['https://luckvault.uk/user/roles'] || []
  const isAdmin = isAuthenticated && roles.includes('admin')

  return isAdmin
}

export default useIsAdmin