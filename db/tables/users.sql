CREATE TABLE IF NOT EXISTS luckvault.users (
  id SERIAL PRIMARY KEY,
  auth0_id TEXT UNIQUE,
  email TEXT UNIQUE,
  mobile TEXT UNIQUE,
  nickname TEXT
);