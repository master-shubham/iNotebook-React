require("dotenv").config();

const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://i-notebook-react-weld.vercel.app",
      "i-notebook-react-cwbjwhr7z-master-shubhams-projects.vercel.app",
    ],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(PORT, () => {
  console.log(`iNotebook app listening on port ${PORT}`);
});
