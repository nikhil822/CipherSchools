import dotenv from "dotenv";
import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/users.js'
import videoRoutes from './routes/videos.js'
import commentRoutes from './routes/comments.js'
import authRoutes from './routes/auth.js'
import cookieParser from "cookie-parser";
const app = express()
dotenv.config()

const PORT = 8800

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('connected to mongo')
})
mongoose.connection.on('error', () => {
    console.log('err ', err)
})

// require('./models/User')

app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/comments', commentRoutes)
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

app.listen(PORT, () => {
    console.log('connected')
})