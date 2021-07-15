import nodemailer from 'nodemailer'

async function createMailer(service, user, pass) {
    return {
        send: async ({ text, subject }, to) => {
            const transporter = nodemailer.createTransport({
                service: service,
                auth: { user: user, pass: pass }
            })

            await transporter.sendMail({
                from: user,
                to: to,
                subject: subject,
                text: text
            })
            console.log("Email Sent");
        }
    }
}

export default createMailer