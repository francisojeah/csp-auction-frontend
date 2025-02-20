import NextAuth, { getServerSession } from "next-auth/next";
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
require('dotenv').config();
import clientPromise from "@/lib/mongodb";
import { NextAuthOptions, Session } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";

const adminEmails = [process.env.ADMIN_EMAIL_1, process.env.ADMIN_EMAIL_2, process.env.ADMIN_EMAIL_3, process.env.ADMIN_EMAIL_4, process.env.ADMIN_EMAIL_5]

export const authOptions: NextAuthOptions = {
    secret: process.env.SECRET,
    session: {
        maxAge: 3600,
        updateAge: 600,

    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        session: async ({ session, user }: any): Promise<any> => {
            session.user.role = 'user';
            if (adminEmails.includes(session?.user?.email)) {
                session.user.role = 'admin';
            }
            return session;
        }
        // async jwt({ token, user }) {
        //     if (user && user.email) {
        //         if (adminEmails.includes(user.email)) {
        //             token.userRole = 'admin'
        //         } else {
        //             token.userRole = 'user'
        //         }
        //     }
        //     return token
        // }

        // session: ({ session, user }: any): Promise<any> => {
        //     session.user = { ...session.user, role: 'user' }
        //     if (adminEmails.includes(session?.user?.email)) {
        //         session.user = { ...session.user, role: 'admin' }
        //     } else {
        //         session.user = { ...session.user, role: 'user' }
        //     }
        //     return session;
        // }


    }
}

export default NextAuth(authOptions);

// export async function isAdminRequest(req: NextApiRequest,
//     res: NextApiResponse) {
//     const session: any = await getServerSession(req, res, authOptions);
//     if (!adminEmails.includes(session?.user?.email)) {
//         throw session?.user?.email
//     }

// }