import React from 'react'
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const faqs = [
  {
    question: 'How do I enter a raffle?',
    answer:
      'Browse our live raffles, select the prize you want, and choose how many tickets to purchase. Then complete the secure checkout process — your entries will be automatically logged and confirmed.'
  },
  {
    question: 'What happens after I enter?',
    answer:
      'Once you’ve purchased or submitted your entry, it will be added to our secure database. You can view your active entries in your account dashboard.'
  },
  {
    question: 'How is the winner selected?',
    answer:
      'When a raffle closes, our admin team initiates a secure, random draw from all valid entries using a database-level random selection. Each entry — paid or free — has an equal chance of winning.'
  },
  {
    question: 'How do I know if I’ve won?',
    answer:
      'Winners will be contacted directly by email/ mobile and also announced on the raffle page. Make sure your account details are correct and up to date.'
  },
  {
    question: 'Can I cancel or refund my entry?',
    answer:
      'All raffle entries are final and non-refundable unless the raffle is cancelled by us, in which case refunds will be issued. Please double-check before confirming your purchase.'
  },
  {
    question: 'Why did the raffle end early?',
    answer:
      'Some raffles may end before the deadline if all tickets are sold out. In that case, the winner will be drawn shortly after.'
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. We use Auth0 for authentication and store all data securely. Your personal details are only used to contact you if you win or for account verification.'
  },
  {
    question: 'Can I enter for free?',
    answer:
      'Yes! UK residents can enter any raffle for free by post. You’ll need to include specific personal details and send it before the raffle closes. Full instructions are on the raffle page and in our Terms & Conditions.'
  }
]


const FaqPage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, id) => (
          <Accordion key={id} sx={{ bgcolor: 'white', boxShadow: 0, borderBottom: '1px solid #eee' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-content-${id}`}>
              <Typography variant="body1" fontWeight={500} color="text.secondary">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  )
}

export default FaqPage
