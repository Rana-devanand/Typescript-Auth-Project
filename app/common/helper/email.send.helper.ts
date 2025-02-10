import nodemailer from 'nodemailer';

// Create a transporter object using the default SMTP transport

export const sender = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP_HOST,
    port: Number(process.env.EMAIL_SMTP_HOST_PORT),
        auth : {
            user : String(process.env.EMAIL_SMTP_HOST_USER),
            pass : String(process.env.EMAIL_SMTP_HOST_PASSWORD)
        }
})