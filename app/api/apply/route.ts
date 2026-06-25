import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const position = formData.get("position")?.toString() || "";
    const coverLetter = formData.get("coverLetter")?.toString() || "";
    const resume = formData.get("resume") as File | null;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    let resumeUrl = "";

    // 📁 Ensure folder exists
    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // 📁 Save file locally
    if (resume) {
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${uuidv4()}-${resume.name}`;
      const uploadPath = path.join(uploadDir, fileName);

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
    console.error("API ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Failed to submit application" },
      { status: 500 }
    );
  }
}