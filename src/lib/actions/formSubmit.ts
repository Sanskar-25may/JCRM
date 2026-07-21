"use server";

import { contactFormSchema, joinUsFormSchema } from "../validations";

export async function submitDemoRequest(data: any) {
  const result = contactFormSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Invalid submission data");
  }
  console.log("Demo/Quote request received on Server:", result.data);
  return { success: true };
}

export async function submitTalentApplication(rawFormData: FormData) {
  const name = rawFormData.get("name") as string;
  const email = rawFormData.get("email") as string;
  const phone = rawFormData.get("phone") as string;
  const domain = rawFormData.get("domain") as string;
  const note = rawFormData.get("note") as string;
  const resume = rawFormData.get("resume") as File;

  const result = joinUsFormSchema.safeParse({
    name,
    email,
    phone,
    domain,
    note,
    resume,
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const file = result.data.resume;
  if (file && file.size > 0) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    console.log(`Uploaded resume on Server: ${file.name} (${buffer.length} bytes)`);
  }

  console.log("Talent application received on Server:", {
    name: result.data.name,
    email: result.data.email,
    phone: result.data.phone,
    domain: result.data.domain,
  });

  return { success: true };
}
