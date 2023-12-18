import * as mongoose from 'mongoose'

export const ContactsSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
})