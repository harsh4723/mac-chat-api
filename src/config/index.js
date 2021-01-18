import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb+srv://harsh:qwerty123@cluster0.9lnr9.mongodb.net/test",
  "bodyLimit": "100kb"
}
