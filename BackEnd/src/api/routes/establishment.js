import express from "express"

const router = express.Router()

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const data = req.body
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
    } catch (err) {
        next(err)
    }
})

export default router