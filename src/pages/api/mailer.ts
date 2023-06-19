import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';


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



    // const getEmailTemplate1 = (recepientEmail: any, item: any) => {
    //     return {
    //         from: EMAIL_ADDRESS,
    //         to: recepientEmail,
    //         subject: 'Someone has placed a higher bid for ' + item.title,
    //         text: 'Someone has placed a higher bid for ' + item.title + ' Please visit the website to place a higher bid. https://cspxysma.art Thank you',
    //         html: `<h1>Someone has placed a higher bid for ' ${item.title} </h1><br/><p>Please visit the website to place a higher bid.</p><br/><p>https://cspxysma.art</p><br/><p>Thank you.</p>`
    //     }
    // }



}
