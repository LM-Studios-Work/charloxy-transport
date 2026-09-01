import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');
const TARGET_EMAIL = process.env.EMAIL || 'lm.studios.web@gmail.com';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract text fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const pickup = formData.get('pickup') as string;
    const delivery = formData.get('delivery') as string;
    const date = formData.get('date') as string;
    const description = formData.get('description') as string;

    // Validate required fields
    if (!name || !email || !phone || !pickup || !delivery || !date || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Extract files
    const images = formData.getAll('images') as File[];
    const attachments = await Promise.all(
      images.filter((img) => img.size > 0).map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        return {
          filename: file.name,
          content: buffer,
        };
      })
    );

    const emailContent = `
      <h1>New Quote Request: Charloxy Transport</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      
      <h2>Move Details</h2>
      <p><strong>Pickup:</strong> ${pickup}</p>
      <p><strong>Delivery:</strong> ${delivery}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Description:</strong></p>
      <p>${description.replace(/\n/g, '<br>')}</p>
    `;

    // If API key is missing, mock success
    if (!process.env.RESEND_API_KEY) {
      console.log('Mock email send. Data:', { name, email, phone, pickup, delivery, date, description, attachments: attachments.length });
      // Simulate network delay
      await new Promise(r => setTimeout(r, 1000));
      return NextResponse.json({ success: true, message: 'Mock email sent successfully' });
    }

    // Send real email via Resend
    const data = await resend.emails.send({
      from: 'Charloxy Quotes <quotes@charloxytransport.co.za>',
      to: TARGET_EMAIL,
      subject: `New Quote Request from ${name}`,
      html: emailContent,
      attachments: attachments.length > 0 ? attachments : undefined,
      replyTo: email,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
