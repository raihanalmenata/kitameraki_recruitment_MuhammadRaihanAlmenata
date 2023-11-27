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

            return res.status(200).json({
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

    },
    deleteById : (req, res, next) => {
        try {

            const targetId = req.body.id
            
            for (let i = 0; i < db['tasks'].length; i++) {                
                
                const curId = db['tasks'][i]['id']
                if(curId === targetId)
                    return res.status(204).json({
                        success: true,
                        code: 204,
                        message: "Deleted book successfully",
                        data: db['tasks'].splice(i, 1)
                    });

            }

            throw new Error('CONTENT_NOT_FOUND')

        } 
        catch (err) {
            
            if(err.message === 'CONTENT_NOT_FOUND')
                err.status = 404
            next(err)

        }
    }
}