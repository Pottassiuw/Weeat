import express from "express"
import {getUser, insertUser, deleteUser, updateUser} from "../controllers/user.js"

const router = express.Router() 
 
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await getUser(id)
    res.status(200).json(user)
})

router.post('/:id', async (req, res, next) => {
    const data = req.body
    try {
        const createdUser = await insertUser(data.id, data.name, data.email, data.password);
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