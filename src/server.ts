import express from "express"
import "dotenv/config";
import { prisma } from "./lib/prisma.js";


const app = express()
const port = process.env.PORT 
 
interface User {
  name: string
  email: string
  password: string
  createdAt: Date
}

app.get('/', (req, res) => {
  res.send('Hello World! Se inscreva no meu canal e deixa o like')
})

app.get("/users", async (req, res) => {

  try {
    const users =  await prisma.user.findMany()

  return res.status(200).send ({users})
  } catch (err){
    console.error(err)
  }

  
})

app.post("/user", (req, res) => {
  const {name, email} = req.body as  User


  return {name, email} as User
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})