import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  slug: string;
}

export const GET = async (request: NextRequest, { params }: { params: Params }) => {
  const { slug } = params;
  try {
    await connectToDb();

    const post = await Post.findOne({ slug });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get post");
  }
};

export const DELETE = async (request: NextRequest, { params }: { params: Params }) => {
  const { slug } = params;
  try {
    await connectToDb();

    await Post.deleteOne({ slug });

    return NextResponse.json("Post successfully deleted!");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get post");
  }
};
