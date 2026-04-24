import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const requiredFields = ["name", "company", "workEmail", "teamSize", "focusArea"];
  const missingField = requiredFields.find((field) => !String(payload[field] || "").trim());

  if (missingField) {
    return NextResponse.json(
      { message: `Please provide ${missingField}.` },
      { status: 400 }
    );
  }

  if (!String(payload.workEmail).includes("@")) {
    return NextResponse.json(
      { message: "Please provide a valid work email." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Lead submitted successfully.",
    submission: {
      ...payload,
      submittedAt: new Date().toISOString(),
    },
  });
}
