import { Comment } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectToDb();

    const comments = await Comment.find();

    return NextResponse.json(comments);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get comments");
  }
};