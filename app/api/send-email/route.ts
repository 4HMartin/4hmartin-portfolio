import { sendEmail } from "@/lib/email/send-email";
import { getContactFormEmailHTML } from "@/lib/email/email-template";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        // 1. Validar datos del formulario
        const formData = await req.json();
        // 2. Generar HTML del template
        const html = getContactFormEmailHTML(formData);
        // 3. Enviar email
        await sendEmail({
        //   to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hola@rodriguez-events.com',
          to: process.env.NEXT_PUBLIC_DEV_EMAIL || 'dev@4hmartin.com',
          cc: 'hheber.martin@gmail.com',
          subject: "New contact message from portfolio",
          html,
          from: process.env.SMTP_FROM_EMAIL || 'dev@4hmartin.com',
        });
        return NextResponse.json(
            { message: 'Email enviado' },
            { status: 200 }
        )

    } catch (error) {
        console.error("Error al enviar el correo:", error);
        return NextResponse.json(
            { error: "Hubo un problema al enviar el correo:" + error },
            { status: 500 }
        )
    }
}
