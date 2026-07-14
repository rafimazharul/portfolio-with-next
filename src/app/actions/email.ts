"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}) {
  const { name, email, number, subject, message } = formData;

  try {
    const { data, error } = await resend.emails.send({
      from: "Rafi Portfolio <onboarding@resend.dev>",
      to: ["nurullahasan.dev@gmail.com"],
      subject: `📩 ${subject} | Portfolio Contact`,
      replyTo: email,
      html: `
        <div style="background-color: #f4f4f5; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <div style="background-color: #FF4C4C; padding: 40px 30px; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
              <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800; text-transform: uppercase; letter-spacing: 3px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">New Transmission</h1>
              <p style="color: #ffffff; margin: 12px 0 0; font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 2px; opacity: 0.9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">Received via Portfolio Website</p>
            </div>
            <div style="padding: 40px 30px; color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
              <div style="margin-bottom: 30px;">
                <label style="color: #FF4C4C; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 8px;">Sender Name</label>
                <p style="margin: 0; font-size: 20px; font-weight: 500; color: #18181b; letter-spacing: -0.5px;">${name}</p>
              </div>
              <div style="margin-bottom: 30px;">
                <label style="color: #FF4C4C; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 8px;">Email Address</label>
                <p style="margin: 0; font-size: 16px; font-weight: 400; color: #52525b;">${email}</p>
              </div>
              <div style="margin-bottom: 30px;">
                <label style="color: #FF4C4C; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 8px;">Mobile Number</label>
                <p style="margin: 0; font-size: 16px; font-weight: 400; color: #52525b;">${number}</p>
              </div>
              <div style="margin-bottom: 40px; background-color: #f8fafc; padding: 25px; border-radius: 8px; border-left: 5px solid #FF4C4C;">
                <label style="color: #FF4C4C; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 12px;">Message Body</label>
                <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #334155; font-weight: 400;">${message.replace(/\n/g, "<br/>")}</p>
              </div>
              <div style="text-align: center; margin-top: 40px;">
                <a href="mailto:${email}" style="background-color: #FF4C4C; color: #ffffff; padding: 16px 32px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; display: inline-block; box-shadow: 0 4px 10px rgba(255,76,76,0.2);">Reply to Sender</a>
              </div>
            </div>
            <div style="background-color: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 3px; font-weight: 500;">&copy; ${new Date().getFullYear()} Rafi Portfolio</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Email Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Server Action Error:", err);
    return { success: false, error: err.message };
  }
}
