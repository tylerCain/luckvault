CREATE TYPE luckvault.raffle_status AS ENUM ('DRAFT', 'OPEN', 'CLOSED');

CREATE TABLE IF NOT EXISTS luckvault.raffles (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  ticket_price NUMERIC NOT NULL,
  min_tickets_purchase INT,
  max_tickets INT NOT NULL,
  ends_at TIMESTAMP,
  status luckvault.raffle_status DEFAULT 'DRAFT'
);