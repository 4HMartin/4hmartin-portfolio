// Template HTML para emails de contacto
const logotype_image = process.env.NEXT_PUBLIC_EMAIL_LOGO_LINK;

export function getContactFormEmailHTML(formData: {
    name: string;
    email: string;
    subject: string;
    acceptTerms: boolean;
    message?: string | undefined;
}) {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  const currentDate = `${day}/${month}/${year}`;
  const currentYear = new Date().getFullYear();

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Responsive Email Template</title>
    <style>
      /* General styles */
      body, table, td, a {
        text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table {
        border-spacing: 0;
        border-collapse: collapse;
        margin: 0 auto;
      }
      a {
        text-decoration: none;
      }
      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      .content{
        font-family: 'roboto', system-ui, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      /* Responsive styles */
      @media only screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          padding: 0 15px !important;
        }
        .content {
          padding: 15px !important;
        }
        .order-total{
          margin-left: 76% !important;
        }
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f7f7f7;">
    <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#F1F1F1" style="background-color:#F1F1F1;">
      <tr>
        <td align="center">
          <!-- Email Container -->
          <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="max-width: 600px; margin: 0 auto;">
            <!-- Header Section -->
            <tr bgcolor="#030712">
              <td align="center" colspan="2" style="padding-bottom:20px;">
                <img src="${logotype_image}" alt="header-image" width="200px"/>
              </td>
            </tr>
            <!-- Content Section -->
            <tr>
              <td class="content" colspan="2" style="width: 100%; padding: 20px 38px; font-family: 'roboto', system-ui, 'Open Sans', 'Helvetica Neue', sans-serif; color: #413750;">
                <h1 style="margin-top:0; color:#212b35; text-align: center;">Email sent via the web form</h1>
              </td>
            </tr>
            <tr>
                <td class="content" align="left" style="padding:8px 38px; width: 50%; font-family: 'roboto', system-ui, 'Open Sans', 'Helvetica Neue', sans-serif; color: #413750;">
                    <p style="margin-bottom:16px; color:#637381; font-size:18px; font-weight:bold;">Name</p>
                    <p style="margin-bottom:16px; color:#637381; font-size:18px; line-height:24px;">${formData.name}</p>
                </td>
                <td class="content" align="left" style="padding:8px 38px; width: 50%; font-family: 'roboto', system-ui, 'Open Sans', 'Helvetica Neue', sans-serif; color: #413750;">
                    <p style="margin-bottom:16px; color:#637381; font-size:18px; font-weight:bold;">Email</p>
                    <p style="margin-bottom:16px; color:#637381; font-size:18px; line-height:24px;">${formData.email}</p>
                </td>
            </tr>
        
            <tr>
              <td class="content" align="left" colspan="2" style="padding:8px 38px; font-family: 'roboto', system-ui, 'Open Sans', 'Helvetica Neue', sans-serif; color: #413750;">
                <p style="margin-bottom:16px; color:#637381; font-size:18px; font-weight:bold;">Message</p>
                <p style="margin-bottom:16px; color:#637381; font-size:18px; line-height:24px;">${formData.message}</p>
              </td>
            </tr>
            <tr>
              <td class="content" colspan="2" align="left" style="padding:8px 38px; font-family: 'roboto', system-ui, 'Open Sans', 'Helvetica Neue', sans-serif; color: #413750;">
                <p style="margin-bottom:16px; color:#637381; font-size:18px; font-weight:bold;">Email date</p>
                <p style="margin-bottom:16px; color:#637381; font-size:18px; line-height:24px;">${currentDate}</p>
              </td>
            </tr>
            
            <tr>
              <td class="content" colspan="2" align="center" style="border-top:1px solid #e7e7e7; padding:20px 38px; font-family: 'roboto', system-ui, 'Open Sans', 'Helvetica Neue', sans-serif;">
                <p style="color:#637381; line-height:24px; text-align:center;">This email has been sent to administrators only.</p>
              </td>
            </tr>
          <tr>
            <td align="center" colspan="2" style="text-align:center; border-top:1px solid #e7e7e7; padding:20px 38px; font-size:11px; line-height:16px; font-family: 'roboto', system-ui, 'Open Sans', 'Helvetica Neue', sans-serif; color:#445566;">
              <p>View this email in your browser.</p>
            </td>
          </tr>
            <!-- Footer Section -->
            <tr>
              <td align="center" colspan="2" style="padding: 20px 0; background-color: #333333; color: #ffffff; font-family: 'roboto', system-ui, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: 12px;">
                <p style="margin: 0;padding-bottom:6px;">&copy; ${currentYear} Heber Martin Rodríguez Portfolio</p>
                <a href="https://4hmartin.com/" target="_blank" style="color:#0096ff;">Developed by Heber Martin Rodríguez.</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
      `;
}
