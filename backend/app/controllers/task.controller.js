const db = require('../../infra/database/inMemory.db')
const Task = require('../../models/task.model')

module.exports = {
    insert : (req, res, next) => {
        try {
            
            const { title, description } = req.body
            const newTask = new Task({title, description})
            db['tasks'].unshift(newTask)
            
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
    get : (req, res, next) => {
        
        try {

            if(!req.query)
            return res.status(200).json({
                success: true,
                code: 200,
                message: "Get all tasks successfully",
                data: db['tasks']
            });

            const { current, size } = req.query
            if (current && size)
                return res.status(200).json({
                    success: true,
                    code: 200,
                    message: `Get ${size} later tasks successfully`,
                    data: db['tasks'].slice(parseInt(current), parseInt(current + size))
                });
            else
                throw new Error('BAD_REQUEST')


        } 
        catch (err) {

            if(err.message in ['INVALID_PAYLOAD', 'BAD_REQUEST'])
                err.status = 400
            next(err)

        }

    },
    deleteById : (req, res, next) => {
        try {

            const targetId = req.body.id
            
            for (let i = 0; i < db['tasks'].length; i++) {                
                
                const curId = db['tasks'][i]['id']
                if(curId == targetId){
                    data: db['tasks'].splice(i, 1)
                    return res.status(204).json({
                        success: true,
                        code: 204,
                        message: "Deleted book successfully",
                    });
                }

            }

            throw new Error('CONTENT_NOT_FOUND')

        } 
        catch (err) {
            
            if(err.message === 'CONTENT_NOT_FOUND')
                err.status = 404
            next(err)

        }
    },
    updateById : (req, res, next) => {
        try {

            const {id, title, description} = req.body
            
            for (let i = 0; i < db['tasks'].length; i++) {                
                
                const curId = db['tasks'][i]['id']
                if(curId == id){
                    db['tasks'][i] = new Task({title, description, id})
                    return res.status(200).json({
                        success: true,
                        code: 200,
                        message: "Updated task successfully"
                    });

                }

            }

            throw new Error('CONTENT_NOT_FOUND')

        } 
        catch (err) {
            
            if(err.message === 'INVALID_PAYLOAD')
                err.status = 400
            if(err.message === 'CONTENT_NOT_FOUND')
                err.status = 404
    
            next(err)

        }
    }
}