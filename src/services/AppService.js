const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
module.exports = {
    async buscar(url) {
        const response = [];
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const content = await page.content();
        const $ = cheerio.load(content);

        $('.roomName').each(function () {
            const nome = $(this).find('.excerpt h5 a').text().trim();
            const descricao = $(this).find('.excerpt .description').text().trim();
            const preco = $(this).find('.sincePrice h6').text().trim();

            const imagens = [];

            $(this).find('.roomSlider .slide').each(function () {
                const imagemURL = 'https://myreservations.omnibees.com' + $(this).find('img').attr('src');
                imagens.push(imagemURL);
            });

            const item = {
                nome,
                descricao,
                preco,
                imagens
            }

            response.push(item);
        });

        browser.close();

        return response;
    }
}