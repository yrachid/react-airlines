CREATE TABLE airport (
  iata CHAR(3) PRIMARY KEY,
  name VARCHAR,
  city VARCHAR,
  country VARCHAR,
  latitude FLOAT,
  longitude FLOAT,
  timezone VARCHAR
);
