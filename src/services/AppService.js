const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
module.exports = {
    async buscar(url) {
        const resposta = [];
        const browser = await puppeteer.launch();
        const pagina = await browser.newPage();
        await pagina.goto(url);

        const conteudo = await pagina.content();
        const $ = cheerio.load(conteudo);

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

            resposta.push(item);
        });

        browser.close();

        return resposta;
    }
}