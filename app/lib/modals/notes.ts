import { Types, Schema, models, model } from "mongoose";
// import mongoose from "mongoose";
const NoteSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  user: { type: Types.ObjectId, ref: "User" },
});

const Note = models.Note || model("Note", NoteSchema);
// module.exports = models.Note || model("Note", NoteSchema);
//const Note = models.Note || model("Note", NoteSchema);

export default Note;
