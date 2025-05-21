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
    answer: 'Simply select a raffle, choose how many tickets you want to buy, and proceed with payment. Once completed, your entries will be automatically registered.'
  },
  {
    question: 'Can I edit or cancel my entry?',
    answer: 'Unfortunately, all entries are final and non-refundable. Please ensure you’ve selected the correct raffle and number of tickets before confirming.'
  },
  {
    question: 'How is the winner selected?',
    answer: 'Winners are drawn randomly either when the raffle deadline passes or all tickets are sold — whichever comes first. Every entry has a fair and equal chance.'
  },
  {
    question: 'How will I know if I’ve won?',
    answer: 'If you win, we’ll notify you by email and display your username on the raffle page. Make sure your email is accurate and checked regularly.'
  },
  {
    question: 'Why did the raffle close early?',
    answer: 'If all available tickets are sold before the deadline, the raffle will close automatically and a winner will be drawn soon after.'
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
