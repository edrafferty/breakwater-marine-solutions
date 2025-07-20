import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Breakwater Marine Contact Form <onboarding@resend.dev>',
      to: ['ops@breakwatermarine.ca'],
      subject: 'New Contact Form Submission',
      replyTo: email, // ✅ FIXED here
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('[CONTACT_API_ERROR]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
