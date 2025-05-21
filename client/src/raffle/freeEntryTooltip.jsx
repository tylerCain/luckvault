import { Tooltip, Typography, Link, Box } from '@mui/material'
import InfoOutlined from '@mui/icons-material/InfoOutlined'

const FreeEntryTooltip = () => (
  <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
    <Tooltip
      title={
        <Typography variant="body2">
          You can also enter this raffle for free by post.{' '}
          <Link
            href="/tos"
            target="_blank"
            rel="noopener"
            sx={{ color: '#fff', textDecoration: 'underline' }}
          >
            Read how here
          </Link>.
        </Typography>
      }
      arrow
      placement="bottom"
    >
      <InfoOutlined sx={{ fontSize: 20, color: 'text.secondary', cursor: 'pointer' }} />
    </Tooltip>
  </Box>
)

export default FreeEntryTooltip
