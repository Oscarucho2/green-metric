import fs from "fs";
import { NextResponse } from "next/server";

export async function POST(req) {
  
  try {
    const formData = await req.formData();
    const user = JSON.parse(req.cookies.get("user").value);
    const formDataEntryValues = Array.from(formData.values());
    for (const formDataEntryValue of formDataEntryValues) {
      if (typeof formDataEntryValue === "object" && "arrayBuffer" in formDataEntryValue) {
        const file = formDataEntryValue;
        const ext = file.name.split(".").pop();
        console.log(ext);
        fs.mkdirSync(`public/answers/${user.dependency_id}`, { recursive: true });
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(`public/answers/${user.dependency_id}/${"test"}.${ext}`, buffer);
      }
    }
    return NextResponse.json({ success: true });
  }
  catch (e) {
    return NextResponse.json({ success: false });
  }


};

