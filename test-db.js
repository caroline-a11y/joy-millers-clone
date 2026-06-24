const { Client } = require("pg");

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "prisma_user",
  password: "prisma_pass",
  database: "joy_millers",
});

async function testConnection() {
  try {
    await client.connect();
    console.log("✅ Connected to PostgreSQL successfully!");
  } catch (err) {
    console.error("❌ Connection failed:");
    console.error(err);
  } finally {
    await client.end();
  }
}

testConnection();
