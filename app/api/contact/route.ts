import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { name, email, message } = body;

    await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "oncollisionstudios@gmail.com",

      subject: `OnCollision Contact: ${name}`,

      html: `
        <h2>New Contact Submission</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `
    });

    return Response.json({
      success:true
    });

  } catch(error){

    console.log(error);

    return Response.json(
      {success:false},
      {status:500}
    );

  }

}