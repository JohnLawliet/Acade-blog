import validator from 'validator';
import {MongoClient} from 'mongodb'

const validation = (attr) => {
  return !(validator.isEmpty(attr.name) || validator.isEmpty(attr.email) || validator.isEmpty(attr.message))?
      validator.isEmail(attr.email)?
        null
      : "Invalid email"
  : "Some inputs are empty"
}

export default async (req, res) => {
  if (req.method ==="POST"){
    const {email, name, message} = req.body
    const error = validation({email, name, message})
    if (error){
      return res.status(422).json({ message:error }) 
      
    }     
    const newMessage = { email, name, message }
    let client
    const connectionString = `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.clusterName}.xfgpa.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`

    try{
      // it is recommended to use env variables for connection as development server and production server can vary.
      // by this method, all we need to do is switch the env variables with prod env variables
      client = await MongoClient.connect(connectionString)
    }
    catch(err){
      res.status(500).json({message: "Unable to connect to database"})
      return
    }
    const db = client.db()
    try{
      // insertedId is automatically returned by db 
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    }catch(err){
      client.close()
      res.status(500).json({message:"Storing message failed!"})
      return
    }

    client.close()

    res.status(201).json({message: 'Successfully stored message', message:newMessage})

  }
}
