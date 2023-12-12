CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

INSERT INTO users (username) VALUES ('harry');