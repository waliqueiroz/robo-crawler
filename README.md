# Robô Crawler

Este robô web crawler faz uma busca no e-comemerce de um hotel e retorna informações dos quartos disponíveis no período solicitado.

1. [Pré-requisitos](#pre-requisitos)
1. [Principais dependências](#principais-dependencias)
1. [Instalação](#instalacao)
1. [Testando a aplicação](#teste)


<a id="pre-requisitos"></a>
## 1. Pré-requisitos

- [Node.js 8.1.3+](https://nodejs.org/en/)

<a id="principais-dependencias"></a>
##  2. Principais dependências utilizadas
1. [Express JS](https://expressjs.com/pt-br/). Um framework JavaScript que contém a maioria das ferramentas necessárias para a construção de uma API web.

1. [Puppeter](https://developers.google.com/web/tools/puppeteer/?hl=pt-br). Um módulo do Node.js que fornece uma API detalhada para controlar o Headless Chrome.

1. [Cheerio](https://github.com/cheeriojs/cheerio). Uma implementação rápida, flexível e enxuta do jQuery, projetado especificamente para o servidor.

<a id="instalacao"></a>
##  3. Instalação

### Baixar dependências

Execute o comando abaixo pelo terminal dentro do diretório raiz da aplicação.

```
npm install
```

### Inicializar servidor de desenvolvimento

Após baixar as dependências, execute o comando abaixo no diretório raiz.

```
npm run serve
```

A aplicação iniciará um servidor local que escuta a porta 8080.

<a id="teste"></a>
## 4. Testando a aplicação

Com o servidor de desenvolvimento inicializado, envie um JSON via requisição POST para a url http://127.0.0.1:8080/api/buscar contendo o intervalo de datas a ser consultado, como no exemplo abaixo:

```
  {
	"checkin": "12/11/2019",
  	"checkout": "14/11/2019"
  }
```

Para enviar requisições você poderá utilizar ferramentas como o [Insomnia](https://insomnia.rest/download/) ou o [Postman](https://www.getpostman.com/).

A aplicação retornará um JSON com as informações básicas dos quartos disponíveis no período solicitado. Um exemplo de resposta pode ser visto a seguir:

```
 [
  {
    "nome": "Standard",
    "descricao": "Ideal para relaxar. Os quartos dispõem de diversos serviços para garantir uma estadia confortável e agradável. Todos os apartamentos Stan...",
    "preco": "R$ 560,50",
    "imagens": [
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189952.jpg",
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152609.jpg",
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189950.jpg"
    ]
  },
  {
    "nome": "Luxo Superior",
    "descricao": "Exclusividade e requinte. Todos os quartos luxo superior contam com Ar climatizado, TV LCD 32”, SKY, frigobar, telefone, cofre e secador ...",
    "preco": "R$ 560,50",
    "imagens": [
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152623.jpg",
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152624.jpg",
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152625.jpg"
    ]
  },
  {
    "nome": "Luxo",
    "descricao": "Confortavelmente decorado para fazer da sua estadia um momento de prazer e bem-estar. Os quartos da categoria Luxo contam Ar climatizado,...",
    "preco": "R$ 560,50",
    "imagens": [
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152620.jpg",
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152621.jpg",
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189959.jpg"
    ]
  },
  {
    "nome": "Master",
    "descricao": "São 6 quartos luxuosos, sofisticados e decorados com requinte, além de localização privilegiada em nosso hotel. Alguns possuem mezanino e...",
    "preco": "R$ 750,50",
    "imagens": [
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=192355.jpg",
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=192356.jpg",
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=192357.jpg",
      "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=192358.jpg"
    ]
  }
]
```

Caso a aplicação não encontre nenhuma informação para o perído solicitado, a resposta será um JSON vazio.

