import { NextResponse } from "next/server";
import connect from "../../../lib/db";
import User from "../../../lib/modals/user";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching users" + error, { status: 500 });
  }
};
export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    await connect();
    const newUser = new User(body);
    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "User is created", user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        Message: "Error in creating user",
        error,
      }),
      {
        status: 500,
      }
    );
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();

    const { userId, newUsername } = body;

    await connect();

    if (!userId || !newUsername) {
      return new NextResponse(
        JSON.stringfy({ message: "ID or new username are requerid" }),
        {
          status: 400,
        }
      );
    }
    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid UserId" }), {
        status: 400,
      });
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { username: newUsername },
      { new: true }
    );

    if (!updatedUser) {
      return new NextResponse(
        JSON.stringify({
          message: "User not found or didn't update user sucessfully.",
        }),
        { status: 400 }
      );
    }
    // Return a success response
    return new NextResponse(
      JSON.stringify({
        message: "Username updated successfully",
        user: updatedUser,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error updating username",
      }),
      {
        status: 500,
      }
    );
  }
};
