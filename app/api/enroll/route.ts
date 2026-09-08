import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, danceClass, batchPreference, ageGroup } = body;

    // Simple validation
    if (!name || !phone || !danceClass) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in all required fields (Name, Phone number, and Preferred Dance Class).",
        },
        { status: 400 }
      );
    }

    // In a real database, we would insert this into Prisma / Supabase / MongoDB
    const enrollmentRecord = {
      id: `ENR-${Date.now()}`,
      name,
      email: email || "N/A",
      phone,
      danceClass,
      batchPreference: batchPreference || "Any",
      ageGroup: ageGroup || "Adult",
      createdAt: new Date().toISOString(),
    };

    console.log("New Trial Class Enrollment Received:", enrollmentRecord);

    return NextResponse.json(
      {
        success: true,
        message: `Namaste ${name}! Your trial class request for ${danceClass} has been received. Our coordinator will contact you at ${phone} to confirm your slot.`,
        data: enrollmentRecord,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enrollment API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process enrollment. Please try again or WhatsApp us directly.",
      },
      { status: 500 }
    );
  }
}
