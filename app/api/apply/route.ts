import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const resume = formData.get("resume") as File | null;

    let resumeUrl = "";

    // 📁 Save file locally
    if (resume) {
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${uuidv4()}-${resume.name}`;
      const uploadPath = path.join(process.cwd(), "public/uploads", fileName);

      fs.writeFileSync(uploadPath, buffer);

      resumeUrl = `/uploads/${fileName}`;
    }

    const application = await prisma.application.create({
      data: {
        fullName,
        email,
        phone,
        position,
        coverLetter,
        resumeUrl,
      },
    });

    return NextResponse.json({
      success: true,
      application,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to submit application" },
      { status: 500 }
    );
  }
}