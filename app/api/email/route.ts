// import { Email } from "../../../components/Email";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_CODE);

resend.domains.create({ name: "test.com" });

interface EmailRequest {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { name, lastName, email, phone, message }: EmailRequest =
      await req.json();

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["owenzeledon@icloud.com"],
      subject: `New Message from ${name} (${email})`,
      text: `${name} ${lastName}, \n${phone} \n ${message}`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
