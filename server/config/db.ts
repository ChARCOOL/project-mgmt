import mongoose from 'mongoose'
import 'colors'

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI as string)

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

export default connectDB
