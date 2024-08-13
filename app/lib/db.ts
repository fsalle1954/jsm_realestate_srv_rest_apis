import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI!, {
      dbName: "restapinext14",
      bufferCommands: false,
    });
    console.log("Connected");
  } catch (error) {
    console.log("Error in connecting database", error);
    throw new Error("Error connecting to database");
  }
};
export default connect;
