const express = require('express');
const app = express();

require('dotenv').config({
  path: '.env.example'
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
