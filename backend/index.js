const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotEnv = require('dotenv')
const app = express();
const userRoutes = require('./routes/users');

dotEnv.config();
app.use(cors());
app.use(express.json());

const mongoConfigurations = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.MONGO_URI, mongoConfigurations)
.then(() => {
    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => console.error('❌ MongoDB connection error:', err));
// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Server is running...');
});