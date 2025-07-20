import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message, botField } = await req.json()

    // 🚫 Block spam if honeypot field is filled (even with whitespace)
    if (botField && botField.trim() !== '') {
      return NextResponse.json({ success: true })
    }

    // ✅ Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const data = await resend.emails.send({
      from: 'Breakwater Marine Solutions <no-reply@breakwatermarine.ca>',
      to: ['ops@breakwatermarine.ca'],
      subject: 'New Contact Form Submission',
      reply_to: email,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    if (data.error) {
      console.error('Resend API error:', data.error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
