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
      <div style="font-family: Arial, sans-serif; color: #0e2632; line-height: 1.6; background-color: #f4f6f3; padding: 40px 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(14,38,50,0.08);">
          <!-- Header -->
          <div style="background-color: #0e2632; padding: 35px 30px; text-align: center; border-bottom: 6px solid #e3ac25;">
            <img src="https://charloxytransport.co.za/brand-logo.jpg" alt="Charloxy Transport" width="220" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
          </div>
          
          <!-- Body -->
          <div style="padding: 40px 35px;">
            <h2 style="margin-top: 0; color: #0e2632; font-size: 24px;">Thank you for contacting us, ${name}!</h2>
            <p style="color: #5d6c72; font-size: 16px;">We've received your message and will get back to you as soon as possible.</p>
            
            <div style="background-color: #f4f6f3; border-left: 4px solid #e3ac25; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
              <p style="margin-top: 0; font-weight: bold; color: #0e2632;">If your enquiry is for a quotation, please include the following where possible:</p>
              <ul style="margin-bottom: 0; color: #5d6c72; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Collection and delivery locations</li>
                <li style="margin-bottom: 8px;">Preferred date and time</li>
                <li style="margin-bottom: 8px;">Details of the items to be moved</li>
                <li>Photos of the items, where applicable</li>
              </ul>
            </div>
            
            <p style="color: #5d6c72; font-size: 16px;">Providing these details will help us assist you faster and prepare an accurate quotation.</p>
            <p style="color: #5d6c72; font-size: 16px; margin-bottom: 0;">We look forward to assisting you.</p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #0e2632; padding: 35px; color: #ffffff; font-size: 15px;">
            <p style="margin: 0 0 12px 0; font-weight: bold; color: #e3ac25; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">Charloxy Transport</p>
            <p style="margin: 0 0 20px 0; color: #ffffff; opacity: 0.8;">Reliable. Safe. On time.</p>
            <table cellpadding="0" cellspacing="0" border="0" style="color: #ffffff; width: 100%;">
              <tr>
                <td style="padding-bottom: 8px;"><strong style="color: #e3ac25;">T:</strong> <a href="tel:+27824296737" style="color: #ffffff; text-decoration: none;">+27 82 429 6737</a></td>
              </tr>
              <tr>
                <td style="padding-bottom: 8px;"><strong style="color: #e3ac25;">E:</strong> <a href="mailto:info@charloxytransport.co.za" style="color: #ffffff; text-decoration: none;">info@charloxytransport.co.za</a></td>
              </tr>
              <tr>
                <td><strong style="color: #e3ac25;">W:</strong> <a href="https://charloxytransport.co.za" style="color: #ffffff; text-decoration: none;">charloxytransport.co.za</a></td>
              </tr>
            </table>
          </div>
        </div>
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
