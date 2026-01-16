import mongoose, { mongo } from "mongoose";

type ConnectionObject = {
  isConnected?:number
}

const connection : ConnectionObject = {}

async function dbConnect (): Promise <void> {

  if(connection.isConnected)
  {
    console.log(("Connection is already established"));
    
    return 
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

    connection.isConnected = db.connections[0].readyState

    console.log("Database connection is successfull");
    

  } catch (error) {
    console.log("Database Connection is failed", error);
    
    process.exit(1);
  }
}