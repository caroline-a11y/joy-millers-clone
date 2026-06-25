import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";


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

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let attachments: {
      filename: string;
      content: Buffer;
    }[] = [];

    if (resume) {
      const bytes = await resume.arrayBuffer();

      attachments.push({
        filename: resume.name,
        content: Buffer.from(bytes),
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.HR_EMAIL || "info@forticereals.co.ke",
      subject: `New Job Application - ${position || "General Application"}`,
      replyTo: email,
      html: `
        <h2>New Job Application</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>

        <h3>Cover Letter</h3>
        <p>${coverLetter || "No cover letter provided."}</p>
      `,
      attachments,
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error("APPLICATION ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit application.",
      },
      { status: 500 }
    );
  }
}