import CONSTANTS from "@/constants";
export function queryToUrlParams(query) {
    let urlParams = "";
    let keys = Object.keys(query);
    for(let i in keys) {
        let key = keys[i];
        let value = query[key];
        urlParams += key + "=" + value + "&"
    }
    return urlParams
}
export async function sendEmail(body) {
    if (!body) return new Response("No body object provided", null)
    const res = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(body)
    })
    return await res.json()
}
export class Response {
    constructor(error, data) {
        this.error = error; // error message if error
        this.data = data;   // data if success 
    }
}
export function getBookCost(bookName) {
    const books = CONSTANTS.books;
    let cost = NaN;
    books.forEach(book => {
        if (book.name === bookName) cost = book.cost;
    })
    return cost
}