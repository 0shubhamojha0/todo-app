const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://shubhamojha2428:S1HP3vxKbx7NNv93@cluster0.do0cnry.mongodb.net/todo')

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}