const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/encanto-db', (error) => {
    if (error) {
        console.error('Error connecting to mongodb', error);
    } else {
        console.log('Successfully connected to mongodb');
    }
});
