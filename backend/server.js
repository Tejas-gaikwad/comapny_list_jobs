const express = require('express');
const mongoose = require('mongoose');
const companyRoutes = require('../backend/routes/comnpany_routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

app.use('/api', companyRoutes);

app.get('/', (req, res) => {
    res.send('Company listing project!');
});


mongoose.connect('mongodb+srv://tejasg4646:cDEl1zVouStzKb7C@cluster0.f1boujn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

