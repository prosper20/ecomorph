import { Resend } from 'resend';

export async function POST(req: Request) {
  const data = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.TO_EMAIL || 'ecomorphprojects@proton.me',
      subject: `📨 New Contact Message from ${data.fullName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.project}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
