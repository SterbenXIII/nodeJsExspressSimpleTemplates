import express from 'express';
import mongoose from 'mongoose';
import router from './router.js'

const PORT = 5000;
const app = express();
const DB_URL = `mongodb+srv://root:root@cluster0.1cm1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
app.use(express.json())
app.use('/api', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`server is run ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

startApp();