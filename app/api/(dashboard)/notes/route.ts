import { NextResponse } from "next/server";
import connect from "../../../lib/db";
import Note from "../../../lib/modals/notes";
// import { Types } from "mongoose";
import { Types, Schema, model, models } from "mongoose";
// import mongoose from "mongoose";
import User from "../../../lib/modals/user";
import { Anybody } from "next/font/google";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    if (!userId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing userId" }),
        {
          status: 400,
        }
      );
    }
    await connect();

    const user = await User.findById(userId);
    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    const notes = await Note.find({ user: new Types.ObjectId(userId) });
    return new NextResponse(JSON.stringify(notes), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching notes" + error, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    const body = await request.json();

    const { title, description } = body;

    if (!userId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing userId" }),
        {
          status: 400,
        }
      );
    }

    await connect();

    const user = await User.findById(userId);
    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
    //const NoteSchema = new Schema({
    //  title: { type: String, required: true },
    //  description: { type: String },
    //  user: { type: Schema.Types.ObjectId, ref: "User" },
    // });

    const newNote = new Note({
      title,
      description,
      user: new Types.ObjectId(userId),
    });

    await newNote.save();

    return new NextResponse(
      JSON.stringify({ message: "Note Created", note: newNote }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error creating note",
        error, // Send a user-friendly error message
      }),
      {
        status: 500,
      }
    );
  }
};
