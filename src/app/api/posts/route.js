import Blogpost from "@/blogModels/Blogpost";
import connectDB from "@/utilty/db";

import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Blogpost.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("data eroro", { status: 500 });
  }
};