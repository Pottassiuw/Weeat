import express from "express"
import getUser from "../controllers/getUser.js"

const router = express.Router() 

router.get('/', async (req,res) => {
    const user = await getUser()
    res.send(user)
})


router.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await getUser(id)
    res.send({data: user})
})



router.post('/:id', async (req,res) => {
    const id = req.params.id
    const name = req.body.name 
    res.status(200).send(name)
})

export default router;