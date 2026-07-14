import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. إعداد بروتوكول النقل العائد لإيميلك (SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mo5rb600@gmail.com',
        // 💡 ملاحظة: هنا تضع "App Password" من حساب جوجل وليس كلمتك السرية العادية
        pass: process.env.EMAIL_APP_PASSWORD, 
      },
    });

    // 2. صياغة محتوى الإيميل الذي سيصلك
    const mailOptions = {
      from: 'mo5rb600@gmail.com',
      to: 'mo5rb600@gmail.com', // ترسلها لنفسك
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // 3. التنفيذ والإرسال
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}