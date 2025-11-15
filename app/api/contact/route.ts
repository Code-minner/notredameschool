import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Debug: Check if API key exists
    const apiKey = process.env.ZEPTOMAIL_API_KEY;
    if (!apiKey) {
      console.error('❌ ERROR: ZEPTOMAIL_API_KEY not found in environment variables!');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service not configured. API key missing.' 
        },
        { status: 500 }
      );
    }

    console.log('📧 Sending email with ZeptoMail...');
    console.log('From:', 'noreply@notredameinterhighschool.com');
    console.log('To:', 'Notrdameinterhighschool@gmail.com');
    console.log('API Key:', apiKey.substring(0, 25) + '...');

    // ZeptoMail API endpoint
    const response = await fetch('https://api.zeptomail.com/v1.1/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': apiKey
      },
      body: JSON.stringify({
        from: {
          address: "noreply@notredameinterhighschool.com",
          name: "Contact Form"
        },
        to: [
          {
            email_address: {
              address: "boluwatifeagbo@gmail.com",
              name: "Notre Dame School"
            }
          }
        ],
        subject: `Contact Form: ${subject}`,
        htmlbody: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e3a8a; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: white; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
              <h3 style="color: #1e3a8a; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #374151;">${message}</p>
            </div>
            <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
              <p>This email was sent from the Notre Dame School contact form</p>
            </div>
          </div>
        `,
        reply_to: [
          {
            address: email,
            name: name
          }
        ]
      })
    });

    console.log('📬 Response status:', response.status, response.statusText);

    if (!response.ok) {
      // Get response text first
      const responseText = await response.text();
      console.error('❌ ZeptoMail API Error:', {
        status: response.status,
        statusText: response.statusText,
        body: responseText
      });
      
      // Try to parse as JSON
      let errorMessage = 'Failed to send email';
      try {
        const errorData = JSON.parse(responseText);
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch {
        errorMessage = `API Error ${response.status}: ${responseText || response.statusText}`;
      }
      
      throw new Error(errorMessage);
    }

    const result = await response.json();
    console.log('✅ Email sent successfully!', result);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage
      },
      { status: 500 }
    );
  }
}