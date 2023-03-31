import { Response } from "@/functions/utils"
var nodemailer = require('nodemailer');
import CONSTANTS from "@/constants";

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'farge.album@gmail.com',
        pass: process.env.emailpassword
    }
});
function formatizeEmailToSelf(body) {
    let keys = Object.keys(body)
    let out = "";
    keys.forEach(key => {
        out += key + " : " + body[key] + "\n"
    })
    return out
}
function formatizeEmailReceipt(body, code) {
    const bookName = body.book_name;
    let bookCost = undefined;
    CONSTANTS.books.forEach(book => {
        if (book.name === bookName) bookCost = book.cost;
    });
    const emailReceiptBody = `
Ordrekode: ${code}
Dette er en kvittering fra Farge Album om at du har gått gjennom kjøpsprossessen, ikke nødvendigvis at du har betalt.
Du har kjøpt følgende:

${bookName}: ${bookCost}kr
bilde restaurering: 1000kr
totalt: ${bookCost + 1000}kr

Du vil få ditt farget album tilbake så fort som mulig. Svar på denne eposten eller ring +47 406 44 339 om du har noen henvendelser.
Telefon nummeret er kun åpent fra klokka 16 til klokka 22 på ukedager.

mvh: Farge Album`
    return emailReceiptBody
}
async function sendEmail(from, to, subject, text) {
    let mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
const genRand = (len) => {
    return Math.random().toString(36).substring(2,len+2);
}

export default async function handler(req, res) {
    try {
        let body = JSON.parse(req.body)
        if (req.method === "POST") {
            const code = genRand(10);
            const emailReceiptBody = formatizeEmailReceipt(body, code)
            await sendEmail("farge.album@gmail.com", body.user_email, "Kvittering Farge Album", emailReceiptBody); // Send email to user
            const emailToSelfBody = formatizeEmailToSelf(body)
            await sendEmail(body.user_email, "farge.album@gmail.com", "NyKunde " + body.user_email, emailToSelfBody);
            const dataRes = new Response(null, code);
            return res.status(200).json(dataRes);
        }
        else {
            const errorRes = new Response("Only POST requests are allowed for this endpoint", null)
            res.status(404).json(errorRes)
        }
    }
    catch (err) {
        return res.status(500).json(err)
    }
}