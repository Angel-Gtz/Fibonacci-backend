import express, { Application, Request, Response } from 'express'
import fibonacci from './fibonacci'
const cors =  require('cors')

const app: Application = express()
const port: Number = 4005

app.use(cors())

app.get('/api/fibonacci/:num', (req: Request, res: Response) => {

    const num = parseInt(req.params.num)

    if(num < 0) {
        res.status(400).json({
            result:"Please select a number above 0"
        })
    }

    if(!num) {
        res.status(400).json({
            result:"Please provide a number"
        })
    }

    const result: number = fibonacci(num)
    console.log(result)
    res.status(200).json({
        result
    })
})

app.listen(port, () => {
    console.log(`app running on port ${port} 🚀`)
})