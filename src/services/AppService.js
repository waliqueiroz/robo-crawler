const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
module.exports = {
    async buscar(url) {
        let response = [];
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        let content = await page.content();
        let $ = cheerio.load(content);

        $('.roomName').each(function () {
            let nome = $(this).find('.excerpt  h5  a').text().trim();
            let descricao = $(this).find('.excerpt .description').text().trim();
            let preco = $(this).find('.sincePrice h6').text().trim();

            let imagens = [];

            $(this).find('.roomSlider .slide').each(function () {
                const imagemURL = 'https://myreservations.omnibees.com' + $(this).find('img').attr('src');
                imagens.push(imagemURL);
            });

            let item = {
                nome,
                descricao,
                preco,
                imagens
            }

            response.push(item);
        });

        return response;
    }
}