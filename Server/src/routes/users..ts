import express, { Router, Request, Response, NextFunction } from "express"
import { getUser, insertUser, deleteUser, updateUser } from "../controllers/users"

const router: Router = express.Router()

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const user = await getUser(id)
        res.status(200).json(user)
    } catch (err) {
        throw err
    }

})

router.post('/', async (req: Request, res: Response) => {
    const { name, email, password } = req.body
    try {
        const createdUser = await insertUser(name, email, password);
        res.status(201).json(createdUser)
    } catch (err) {
        throw err
    }
})
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const deletedUser = await deleteUser(id)
        res.status(200).json(deletedUser)
    } catch (err) {
        throw err
    }
})
router.put('/:id', async (req, res, next) => {
    const {id, name, email, password} = req.body
    try {
        const updatedUser = await updateUser(id, name, email, password)
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
})

export default router;