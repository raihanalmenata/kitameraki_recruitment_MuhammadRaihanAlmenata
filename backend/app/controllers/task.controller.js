const db = require('../../infra/database/inMemory.db')
const Task = require('../../models/task.model')

module.exports = {
    insert : (req, res, next) => {
        try {
            
            const { title, description } = req.body
            const newTask = new Task({title, description})
            db['tasks'].unshift(newTask)
            
            console.log('current DB: ', JSON.stringify(db));
            
            return res.status(201).json({
                success: true,
                code: 201,
                message: "Insert new task successfully",
                data: newTask
            });

        } catch (err) {
            if(err.message === 'INVALID_PAYLOAD')
                err.status = 400
            next(err)
        }
    },
    getAll : (req, res, next) => {
        
        try {

            return res.status(201).json({
                success: true,
                code: 200,
                message: "Get all tasks successfully",
                data: db['tasks']
            });

        } 
        catch (err) {

            if(err.message === 'INVALID_PAYLOAD')
                err.status = 400
            next(err)

        }
    }
}