import express from 'express'
import { handler } from './svelte/build/handler.js'

const app = express()
const port = 3000

//demo route

app.get('/expressroute', (req, res) => {
  res.send('this is an express route ')
})

//this will conect your svelte kit app to your express server :\
app.use(handler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
