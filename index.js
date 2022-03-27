const express = require('express');

const userRouter = require('./routes/userRouter');

const app = express();

const port = 4000;

//Router
app.use('/api', userRouter)

app.listen(port, () => {
    console.log(`App Corriendo en puerto ${port}`);
});