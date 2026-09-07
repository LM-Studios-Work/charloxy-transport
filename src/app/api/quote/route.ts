import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');
const TARGET_EMAIL = 'charloxy@charloxytransport.co.za';

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
    const extras = formData.getAll('extras') as string[];

    // Validate required fields
    if (!name || !email || !phone || !pickup || !delivery || !date || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Extract files and check total attachment size
    const images = formData.getAll('images') as File[];
    let totalSize = 0;
    const attachments = await Promise.all(
      images.filter((img) => img.size > 0).map(async (file) => {
        totalSize += file.size;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        return {
          filename: file.name,
          content: buffer,
        };
      })
    );

    // Resend has a payload limit of 10MB (including base64 encoding, so ~7MB raw files max)
    if (totalSize > 7 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Total attachment size exceeds the 7MB limit. Please attach smaller photos or fewer images.' },
        { status: 400 }
      );
    }

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
      
      ${extras.length > 0 ? `
      <h2>Requested Optional Extras</h2>
      <ul>
        ${extras.map(extra => `<li>${extra}</li>`).join('')}
      </ul>
      ` : ''}
    `;

    // If API key is missing, mock success
    if (!process.env.RESEND_API_KEY) {
      console.log('Mock email send. Data:', { name, email, phone, pickup, delivery, date, description, attachments: attachments.length });
      // Simulate network delay
      await new Promise(r => setTimeout(r, 1000));
      return NextResponse.json({ success: true, message: 'Mock email sent successfully' });
    }

    // Default to onboarding@resend.dev if custom domain is not yet verified in Resend Dashboard
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'Charloxy Quotes <onboarding@resend.dev>';

    // Send real email via Resend
    const data = await resend.emails.send({
      from: fromAddress,
      to: TARGET_EMAIL,
      subject: `New Quote Request from ${name}`,
      html: emailContent,
      attachments: attachments.length > 0 ? attachments : undefined,
      replyTo: email,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return NextResponse.json({ error: data.error.message || 'Failed to send email' }, { status: 500 });
    }

    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
        <p>Thank you for contacting Charloxy Transport.</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>If your enquiry is for a quotation, please include the following where possible:</p>
        <ul style="margin-bottom: 20px;">
          <li>Collection and delivery locations</li>
          <li>Preferred date and time</li>
          <li>Details of the items to be moved or delivered</li>
          <li>Photos of the items, where applicable</li>
        </ul>
        <p>Providing these details will help us assist you faster and prepare an accurate quotation.</p>
        <p>Thank you for considering Charloxy Transport. We look forward to assisting you.</p>
        <br>
        <p>Regards,</p>
        <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px; font-size: 13px; color: #555; font-family: Arial, sans-serif;">
          <tr>
            <td style="padding-right: 15px; vertical-align: top;">
              <img src="https://charloxytransport.co.za/brand-logo.jpg" alt="Charloxy Transport" width="180" style="display: block; max-width: 180px; height: auto;" />
            </td>
            <td style="vertical-align: top; line-height: 1.6; border-left: 1px solid #ddd; padding-left: 15px;">
              <span style="color: #0056b3; font-weight: bold;">T:</span> <a href="tel:+27824296737" style="color: #0056b3; text-decoration: none;">+27 82 429 6737</a><br>
              <span style="color: #0056b3; font-weight: bold;">E:</span> <a href="mailto:info@charloxytransport.co.za" style="color: #0056b3; text-decoration: none;">info@charloxytransport.co.za</a><br>
              <span style="color: #0056b3; font-weight: bold;">W:</span> <a href="https://charloxytransport.co.za" style="color: #0056b3; text-decoration: none;">charloxytransport.co.za</a>
            </td>
          </tr>
        </table>
      </div>
    `;

    // Send auto-reply to the customer
    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: `Re: New Quote Request from ${name}`,
      html: autoReplyHtml,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
