import express from "express"
import {getUser, insertUser, deleteUser, updateUser} from "../controllers/users.js"

const router = express.Router() 
 
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await getUser(id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
    
})

router.post('/', async (req, res, next) => {
    const {id, name, email, password} = req.body
    try {
        const createdUser = await insertUser(id, name, email, password);
        res.status(201).json(createdUser)
    } catch (err) {
        next(err)
    }
})
router.delete ('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const deletedUser = await deleteUser(id)
        res.status(200).json(deletedUser)
    } catch (err) {
        next(err)
    }
})
router.put('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const updatedUser = await updateUser(id)
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
})

export default router;