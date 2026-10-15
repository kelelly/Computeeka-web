import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server configuration error: RESEND_API_KEY is not defined.',
    })
  }

  const resend = new Resend(apiKey)

  const body = await readBody(event)
  const { name, email, phone, service, phase, message } = body || {}

  if (!name || !email ||!phone || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please fill in all required fields.',
    })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Computeeka Web <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'computeekake@gmail.com',
      replyTo: email.includes('@') ? email : undefined,
      subject: `New Inquiry from ${name} - ${service || 'General'}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1e293b;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #0ea5e9; padding-bottom: 8px;">
            New Project Inquiry — Computeeka
          </h2>
          <p><strong>Name & Organization:</strong> ${name}</p>
          <p><strong>Email address:</strong> ${email}</p>
          <p><strong>Phone number:</strong> ${phone}</p>
          <p><strong>Service of Interest:</strong> ${service || 'Not specified'}</p>
          <p><strong>Project Phase:</strong> ${phase || 'Not specified'}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <h3 style="color: #0f172a;">Challenge / Project Description:</h3>
          <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9;">${message}</p>
        </div>
      `,
    })

    if (error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message || 'Resend failed to send email.',
      })
    }

    return { success: true, id: data?.id }
  } catch (err: any) {
    throw createError({
      statusCode: err.statusCode || 500,
      statusMessage: err.statusMessage || err.message || 'Failed to send inquiry email.',
    })
  }
})
