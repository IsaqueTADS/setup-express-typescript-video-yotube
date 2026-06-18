import express from "express"


const app = express()
const port = 3333
 
interface User {
  name: string
  email: string
  password: string
  createdAt: Date
}

app.get('/', (req, res) => {
  res.send('Hello World! Se inscreva no meu canal e deixa o like')
})

app.post("/user", (req, res) => {
  const {name, email} = req.body as { name: string, email: string }


  return {name, email} as User
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})