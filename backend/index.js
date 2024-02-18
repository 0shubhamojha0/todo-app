const express = require('express')
const { createTodo, updateTodo } = require('./type')
const { todo } = require('./db')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/todo', async function(req, res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            message : 'invalid input type!'
        })
        return;
    }

    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        message : 'todo has been created'
    })

})

app.get('/todos', async function(req, res){
    const todos = await todo.find({})
    res.json({
        todos
    })

})

app.put('/completed', async function(req, res){
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            message : 'invalid input type!'
        })
        return;
    }

    await todo.updateOne({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        message : 'todo has been marked completed'
    })

})

app.listen(3000)