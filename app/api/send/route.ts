

import { EmailTemplate } from "@/components/shared/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const body = await req.json();

    const { data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["hasibul.nayon1@gmail.com"],
      subject: "Message From GadgetBd",
      react: EmailTemplate({
        name: body.name || "empty",
        email: body.email || "empty",
        message: body.message || "empty",
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
