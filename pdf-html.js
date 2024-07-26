const pdf2html = require('pdf2html');

async function convertPdfToHtml() {
    const html = await pdf2html.html('Hospital Bill.pdf');
    console.log(html);
}

convertPdfToHtml();