import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const position = formData.get("position")?.toString() || "";
    const coverLetter = formData.get("coverLetter")?.toString() || "";

    const resume = formData.get("resume") as File | null;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let attachments: any[] = [];

    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());

      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.HR_EMAIL,
      subject: `New Job Application - ${position}`,
      replyTo: email,
      html: `
        <h2>New Application</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Position:</b> ${position}</p>
        <p><b>Cover Letter:</b> ${coverLetter}</p>
      `,
      attachments,
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });

  } catch (error) {
    console.error("APPLICATION ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Failed to submit application" },
      { status: 500 }
    );
  }
}