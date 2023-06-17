import { google } from 'googleapis';

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
                startingBid: row[4],
                currentBid: row[5],
                bidIncrement: row[6],
                isClosed: row[7],
                bidder: row[8],
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
        const response = await sheets.spreadsheets.values.get({ spreadsheetId: process.env.GOOGLE_SHEET_ID_1, range: `ArtWork!A2:I`, });

        const rows = response.data.values;
        if (rows?.length) {
            const artwork = rows.find((row) => row[0] == id);
            return rows.map((row: any[]) => ({
                id: row[0],
                title: row[1],
                author: row[2],
                description: row[3],
                startingBid: row[4],
                currentBid: row[5],
                bidIncrement: row[6],
                isClosed: row[7],
                bidder: row[8],
            }));
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

