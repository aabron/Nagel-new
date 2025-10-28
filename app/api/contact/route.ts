import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { firstName, lastName, company, email, phoneNumber, message } = await req.json();

        if (!firstName || !lastName || !company || !email || !phoneNumber) {
            return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
        }
        // console.log(process.env.SMTP_HOST, process.env.SMTP_PORT, process.env.SMTP_SECURE, process.env.SMTP_USER, process.env.SMTP_PASS);
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
            tls: { ciphers: 'TLSv1.2' },
        });

        const to = process.env.TO_EMAIL || process.env.SMTP_USER;

        const text = [
            `New contact form submission:`,
            `Name: ${firstName} ${lastName}`,
            `Company: ${company}`,
            `Email: ${email}`,
            `Phone: ${phoneNumber}`,
            `Message: ${message || '(none)'}`,
        ].join('\n');

        const html = `
            <div>
                <h2>New contact form submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phoneNumber}</p>s
                <p><strong>Message:</strong></p>
                <p>${(message || '').replace(/\n/g, '<br/>')}</p>
            </div>
        `;

        await transporter.sendMail({
            from: `"Nagel Controls Website" <${process.env.SMTP_USER}>`,
            to,
            replyTo: email,
            subject: `New Contact: ${firstName} ${lastName} (${company})`,
            text,
            html,
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('Email send error:', err);
        return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }
}