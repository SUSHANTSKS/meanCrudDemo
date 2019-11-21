// to connect this db to mongodb

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

// export the mongoose property to index.html so we will use the module.exports

module.exports = mongoose;