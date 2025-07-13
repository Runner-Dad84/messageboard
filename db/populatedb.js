#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  comment VARCHAR ( 255 ), 
  author VARCHAR ( 255 ), 
  date TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

INSERT INTO comments (comment, author) 
VALUES
  ('Look at my robin egg!', 'Emery'),
  ('Need more!', 'Cayden');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://runnerdad84:Scarborough-02!@localhost:5432/message_board",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
