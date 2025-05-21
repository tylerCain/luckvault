// src/pages/TermsPage.jsx
import React from 'react'
import { Box, Typography, Container } from '@mui/material'

const TermsPage = () => (
  <Container maxWidth="md" sx={{ py: 8 }}>
    <Typography variant="h4" fontWeight={700} gutterBottom>
      Terms of Service
    </Typography>

    {/* 1. Business Details */}
    <Typography variant="h6" fontWeight={600} gutterBottom mt={4}>
      1. Business Details
    </Typography>
    <Typography paragraph>
      TheLuckVault operates as an online raffle platform. While not currently a registered UK company, it is in the process of formal incorporation. No physical address is provided at this time.
    </Typography>

    {/* 2. Eligibility */}
    <Typography variant="h6" fontWeight={600} gutterBottom mt={4}>
      2. Eligibility
    </Typography>
    <Typography paragraph>
      Participation is limited to <strong>UK residents aged 18 and over</strong>. All users must register for an account to enter raffles. TheLuckVault reserves the right to verify the identity and eligibility of participants.
    </Typography>

    {/* 3. Raffle Participation */}
    <Typography variant="h6" fontWeight={600} gutterBottom mt={4}>
      3. Raffle Participation
    </Typography>
    <Typography paragraph>
      Paid entries may be made using various digital payment methods (e.g. credit/debit card, Apple Pay), pending integration with a suitable payment processor.
    </Typography>
    <Typography paragraph>
      There is currently <strong>no limit</strong> on the number of tickets a user may purchase.
    </Typography>
    <Typography paragraph>
      TheLuckVault reserves the right to cancel any raffle at its discretion. In such cases, participants will be <strong>refunded in full</strong>.
    </Typography>

    {/* 4. Free Entry (No Purchase Necessary) */}
    <Typography variant="h6" fontWeight={600} gutterBottom mt={4}>
      4. Free Entry (No Purchase Necessary)
    </Typography>
    <Typography paragraph>
      We offer a free entry route via <strong>postal mail</strong> for each raffle.
    </Typography>
    <Typography paragraph>
      To enter by post, you must:
      <ul>
        <li>Register an account on TheLuckVault</li>
        <li>Write your <strong>full name</strong>, <strong>email</strong>, <strong>mobile number</strong>, and the <strong>exact name of the raffle</strong> on a plain sheet of paper</li>
        <li>Send this to: <em>TheLuckVault Free Entry, PO Box 123, Placeholder City, UK</em></li>
      </ul>
    </Typography>
    <Typography paragraph>
      <strong>Note:</strong> Entries that are incomplete, illegible, or late will not be accepted.
    </Typography>

    {/* 5. Draw Process */}
    <Typography variant="h6" fontWeight={600} gutterBottom mt={4}>
      5. Draw Process
    </Typography>
    <Typography paragraph>
      Winners are selected via a <strong>random SQL draw</strong> once the raffle ends.
    </Typography>
    <Typography paragraph>
      Draws are <strong>manually triggered by an administrator</strong>.
    </Typography>
    <Typography paragraph>
      The winner’s <strong>nickname</strong> will be displayed on the raffle page. They will also be notified via email.
    </Typography>

    {/* 6. Privacy & Data Protection */}
    <Typography variant="h6" fontWeight={600} gutterBottom mt={4}>
      6. Privacy & Data Protection
    </Typography>
    <Typography paragraph>
      We collect and store user <strong>names, emails, and mobile numbers</strong> for the purpose of participation and communication.
    </Typography>
    <Typography paragraph>
      All data is stored securely and access is restricted to authorized staff only.
    </Typography>
    <Typography paragraph>
      We use <strong>Auth0</strong> for secure authentication and do not currently use cookies or analytics.
    </Typography>
    <Typography paragraph>
      User information will never be sold or shared with third parties except where required by law.
    </Typography>

    {/* 7. Refunds & Disqualification */}
    <Typography variant="h6" fontWeight={600} gutterBottom mt={4}>
      7. Refunds & Disqualification
    </Typography>
    <Typography paragraph>
      All ticket purchases are <strong>non-refundable</strong>, unless the raffle is cancelled by us. Refunds will be processed promptly in the case of cancellation.
    </Typography>
    <Typography paragraph>
      We reserve the right to <strong>cancel entries</strong> and disqualify users for abuse, spamming, or use of bots or automated systems.
    </Typography>
  </Container>
)

export default TermsPage
