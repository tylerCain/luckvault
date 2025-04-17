CREATE TABLE IF NOT EXISTS luckvault.entries (
  id SERIAL PRIMARY KEY,
  raffle_id INT REFERENCES luckvault.raffles(id),
  user_id TEXT REFERENCES luckvault.users(auth0_id),
  purchase_time TIMESTAMP DEFAULT NOW()
);