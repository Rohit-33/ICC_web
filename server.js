const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Replace with your own MongoDB URI (local or Atlas)
const MONGODB_URI = 'mongodb://localhost:27017/icc_musicclub'; // or your Atlas URI

const app = express();
app.use(cors());
app.use(express.json());

// Define Mongoose schema and model
const joinSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});
const Join = mongoose.model('Join', joinSchema);

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// POST endpoint for Join Us form
app.post('/api/join', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required.' });
    }
    const entry = new Join({ name, email });
    await entry.save();
    res.json({ message: `Thank you, ${name}! Your request to join has been received.` });
  } catch (err) {
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
