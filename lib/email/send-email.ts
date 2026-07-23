import { emailTransporter } from './email-client';

type SendEmailParams = {
    to: string | string[];
    bcc?: string | string[];
    cc?: string | string[];
    subject: string;
    html: string;
    text?: string; // Versión texto plano (fallback)
    from?: string;
    replyTo?: string;
};

type SendEmailResult = {
    success: boolean;
    messageId?: string;
    error?: string;
};

/**
 * Sends an email using Nodemailer
 * @param params - Email parameters
 * @returns Result object with success status
 */
export async function sendEmail(params: SendEmailParams): Promise<SendEmailResult> {
    try {
        // Validación básica
        if (!params.to || params.to.length === 0) {
            return {
                success: false,
                error: 'Recipient email is required'
            };
        }

        if (!params.subject || params.subject.trim() === '') {
            return {
                success: false,
                error: 'Subject is required'
            };
        }

        if (!params.html || params.html.trim() === '') {
            return {
                success: false,
                error: 'Email content (HTML) is required'
            };
        }

        // Configurar opciones del email
        const mailOptions = {
            from: params.from || process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
            to: params.to,
            cc: params.cc,
            bcc: params.bcc,
            replyTo: params.replyTo,
            subject: params.subject,
            html: params.html,
            text: params.text, // Fallback texto plano
        };

        // Enviar email
        const info = await emailTransporter.sendMail(mailOptions);

        console.log('Email sent successfully:', {
            messageId: info.messageId,
            to: params.to,
            subject: params.subject,
        });

        return {
            success: true,
            messageId: info.messageId,
        };

    } catch (error) {
        console.error('Error sending email:', error);

        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error sending email',
        };
    }
}