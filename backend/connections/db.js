const mongoose = require('mongoose');

async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb+srv://simplebooklibrary:vxM5tJd5AuxOhS83@cluster0.iqjr1dg.mongodb.net/simplebooklibrary?retryWrites=true&w=majority');
        console.log('Database Connected Successfully...');
    } catch (error) {
        console.error('Database connection failed !!!', error);
    }
}

connectToMongoDB();
