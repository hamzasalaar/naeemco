import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const body = await req.json();
        console.log("Contact form data:", body);

        // TODO: Send email via nodemailer or any email service

        return NextResponse.json({ success: true});
    }catch(error){
        console.error("Error handling contact form:", error);
        return NextResponse.json({ success: false}, { status: 500 });
    }
}