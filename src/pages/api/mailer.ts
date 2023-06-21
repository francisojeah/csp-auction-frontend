import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');

const {
    EMAIL_ADDRESS,
    EMAIL_SERVICE,
    EMAIL_PASSWORD,
} = process.env;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { to, subject, text } = req.body;


        const transporter = nodemailer.createTransport({
            service: EMAIL_SERVICE,
            auth: {
                user: EMAIL_ADDRESS,
                pass: EMAIL_PASSWORD,
            }
        });

        const mailOptions = {
            from: EMAIL_ADDRESS,
            to,
            subject,
            text,
        }

        try {


            const result = await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' })

        } catch (error) {
            res.status(500).json({ message: 'Failed to send email' })

        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })

    }

}