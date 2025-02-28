import { NextRequest,NextResponse } from "next/server";
import User from "../../../../DB/usermodel"
import dbConnect from "../../../../DB/db";
dbConnect();
export async function POST(req: NextRequest) {
  try {
    const { username1, username2, result } = await req.json();

    if (!username1 || !username2 || !result) {
      return NextResponse.json({ error: "Please provide both names and the result" }, { status: 400 });
    }

    const newUser = await User.create({ username1, username2, result });
    
    return NextResponse.json({ message: "Result saved successfully!", data: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error}, { status: 500 });
  }
}
