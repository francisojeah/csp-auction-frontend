import Imagess from '@/constants/imagess';
import { google } from 'googleapis';

const testting = (id: string) => {

    let pic = "0";
    if (id == "1") {
        pic = Imagess.Csp1;
    } else if (id == "2") {
        pic = Imagess.Csp2;
    } else if (id == "3") {
        pic = Imagess.Csp3;
    } else if (id == "4") {
        pic = Imagess.Csp4;
    } else if (id == "5") {
        pic = Imagess.Csp5;
    } else if (id == "6") {
        pic = Imagess.Csp6;
    } else if (id == "7") {
        pic = Imagess.Csp7;
    } else if (id == "8") {
        pic = Imagess.Csp8;
    } else if (id == "9") {
        pic = Imagess.Csp9;
    } else if (id == "10") {
        pic = Imagess.Csp10;
    } else if (id == "11") {
        pic = Imagess.Csp11;
    } else if (id == "12") {
        pic = Imagess.Csp12;
    } else if (id == "13") {
        pic = Imagess.Csp13;
    } else if (id == "14") {
        pic = Imagess.Csp14;
    } else if (id == "15") {
        pic = Imagess.Csp15;
    } else if (id == "16") {
        pic = Imagess.Csp16;
    } else if (id == "17") {
        pic = Imagess.Csp17;
    } else if (id == "18") {
        pic = Imagess.Csp18;
    } else if (id == "19") {
        pic = Imagess.Csp19;
    } else if (id == "20") {
        pic = Imagess.Csp20;
    } else if (id == "21") {
        pic = Imagess.Csp21;
    } else if (id == "22") {
        pic = Imagess.Csp22;
    } else if (id == "23") {
        pic = Imagess.Csp23;
    } else if (id == "24") {
        pic = Imagess.Csp24;
    } else if (id == "25") {
        pic = Imagess.Csp25;
    } else if (id == "26") {
        pic = Imagess.Csp26;
    } else if (id == "27") {
        pic = Imagess.Csp27;
    } else if (id == "28") {
        pic = Imagess.Csp28;
    }
    return pic
}


export async function getArtWorks() {
    try {
        const target = ['https://www.googleapis.com/auth/spreadsheets'];
        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            undefined,
            (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
            target
        );

        const sheets = google.sheets({ version: 'v4', auth: jwt });
        const response = await sheets.spreadsheets.values.get({ spreadsheetId: process.env.GOOGLE_SHEET_ID_1, range: 'ArtWork', });



        const rows = response.data.values;
        if (rows?.length) {
            let poss = 0;
            return rows.map((row: any[]) => ({
                id: row[0],
                title: row[1],
                author: row[2],
                description: row[3],
                minimumBid: row[4],
                currentBid: row[5],
                bidIncrement: row[6],
                isClosed: row[7],
                bidder: row[8],
                photo: testting(row[0])

            }));
        }
    } catch (err) {
        console.log(err);
    }
    return [];
}

export async function getArtById(id: string) {
    try {
        const target = ['https://www.googleapis.com/auth/spreadsheets'];
        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            undefined,
            (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
            target
        );

        const sheets = google.sheets({ version: 'v4', auth: jwt });
        const response = await sheets.spreadsheets.values.get({ spreadsheetId: process.env.GOOGLE_SHEET_ID_1, range: 'ArtWork', });

        const rows = response.data.values;
        if (rows?.length) {
            const artwork:any = rows.find((row) => row[0] == id);
            return ({
                id: artwork[0],
                title: artwork[1],
                author: artwork[2],
                description: artwork[3],
                minimumBid: artwork[4],
                currentBid: artwork[5],
                bidIncrement: artwork[6],
                isClosed: artwork[7],
                bidder: artwork[8],
                photo: testting(artwork[0])
            });
        }
    } catch (err) {
        console.log(err);
    }
    return [];
}

export const updateArtwork = async (
    id: string,
    currentBid: number,
    bidIncrement: number,
    bidder: string
) => {
    try {
        const target = ['https://www.googleapis.com/auth/spreadsheets'];
        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            undefined,
            (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
            target
        );

        const sheets = google.sheets({ version: 'v4', auth: jwt });

        const range = `ArtWork!F${id}:H${id}`;
        const values = [[currentBid, bidIncrement, bidder]];

        var request = {
            majorDimension: "ROWS",
            values
        }
        sheets.spreadsheets.values.update({ spreadsheetId: process.env.GOOGLE_SHEET_ID_1, range, valueInputOption: "PAW" });

        // const response = await sheets.spreadsheets.values.update({
        //     spreadsheetId: process.env.GOOGLE_SHEET_ID_1,
        //     range,
        //     // valueInputOption: 'RAW',
        //     resource: { values },
        // });
    } catch (err) {
        console.log(err);
    }
};

