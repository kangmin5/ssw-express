import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './User.js'
import IdmgrModel from './Idmgr.js'
import TodoModel from './Todo.js'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = new UserModel(mongoose)
db.Idmgr = new IdmgrModel(mongoose)
db.Todo = new TodoModel(mongoose)

export default db