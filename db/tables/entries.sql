CREATE TABLE IF NOT EXISTS entries (
  id SERIAL PRIMARY KEY,
  ticket_numer INT,
  raffle_id INT REFERENCES raffles(id),
  user_id INT REFERENCES users(id),
  purchase_time TIMESTAMP DEFAULT NOW()
);