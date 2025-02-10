import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const REDIS_HOST = process.env.REDIS_HOST || process.env.REDIS_HOST;
export const REDIS_PORT = process.env.REDIS_PORT || process.env.REDIS_PORT;
export const REDIS_DATABASE = process.env.REDIS_PASSWORD || process.env.REDIS_PASSWORD;

export const EMAIL_SMTP_HOST = process.env.EMAIL_SMTP_HOST || process.env.EMAIL_SMTP_PORT || process.env.EMAIL_SMTP_HOST;
export const EMAIL_SMTP_HOST_PORT = process.env.EMAIL_SMTP_HOST_PORT || process.env.EMAIL_SMTP_HOST_PORT;
export const EMAIL_SMTP_HOST_USER = process.env.EMAIL_SMTP_HOST_USER || process.env.EMAIL_SMTP_HOST_USER;
export const EMAIL_SMTP_HOST_PASSWORD = process.env.EMAIL_SMTP_HOST_PASSWORD || process.env.EMAIL_SMTP_HOST_PASSWORD;