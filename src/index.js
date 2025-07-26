const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello from backend!"));

if (require.main === module) {
  app.listen(3001, () =>
    console.log("Backend running on http://localhost:3001")
  );
}

module.exports = app;
