CREATE TABLE IF NOT EXISTS luckvault.entries (
  id SERIAL PRIMARY KEY,
  raffle_id INT REFERENCES luckvault.raffles(id),
  user_id TEXT REFERENCES luckvault.users(auth0_id),
  purchase_time TIMESTAMP DEFAULT NOW(),
  free BOOLEAN DEFAULT FALSE
);

CREATE UNIQUE INDEX one_free_entry_per_user_per_raffle
ON luckvault.entries (raffle_id, user_id)
WHERE free = true;
