/*
O mínimo que você precisa saber de HTML

HTML é a sigla para Hypertext Markup Language,
ou Linguagem de Marcação para Hipertexto.

Utilizamos HTML para criar estruturas para páginas
‘web’: seções, parágrafos, cabeçalhos, divisões, links,
etc.

Toda página na ‘internet’ que você acessa se você
clicar com o botão do mouse no navegador e pedir
para ver o código-fonte será mostrado o conteúdo
HTML da página.

Ao trabalhar com HTML nós codificamos estruturas
(tags e atributos) para marcar a página de um site,
por isso o HTML é chamado linguagem de marcação.


Um arquivo HTML tem extensão ‘.html’.


De forma geral, uma página ‘web’ é dividida em 3 áreas
principais: header, body e footer.

Header: Usado para tags de informação sobre o
site, aplicação de estilos css, etc.

Body: Conteúdo do site apresentado ao
cliente.

Footer: Geralmente usado para carregamento de
'scripts' Javascript e apresentação de dados de
rodapé.

OBS: O footer fica na área de conteúdo.


Uma página ‘web’ é renderizada pelo navegador
de cima para baixo, linha a linha.

Para exemplo de uma página html mínima, vá para:

aulas/secao02_base_da_programacao_web/exemplos/exemplo1.html

Linha 1: Informa ao navegador que o
documento é do tipo HTML.

Linha 2: Tag de abertura do documento
HTML, que está sendo fechado na linha 10.

Linha 3: Tag de abertura da ‘cabeça' da
página HTML, que está sendo fechada na
linha 6.

Linha 4: Tag de configuração da codificação
da página para UTF-8. Veja que não fecha.

Linha 5: Tag de título da página. É o texto
que aparece na barra de título.

Linha 7: Tag de abertura do body (conteúdo)
da página, que está sendo fechada na linha
9.

Linha 8: Tag de parágrafo. Tudo que estiver
dentro desta tag fará parte do mesmo
parágrafo.


Note algumas coisas:

1 - As tags HTML formam uma hierarquia de
elementos.

2 - Algumas tags abrem nas não fecham.

As tags HTML são subdivididas em dois grupos
principais:

Elementos de bloco: utilizam tod0 o espaço
disponível e começam uma nova linha no documento.

Elementos em linha: utilizam apenas o espaço
necessário e não criam uma quebra de linha.

OBS: iremos entender melhor a diferença entre
eles nos exemplos desta aula.


Tags mais utilizadas nos elementos de bloco:

<html> </html>: É o elemento de maior nível
que está em todas as páginas HTML.

<head> </head>: Possui informações do meta
como título e charset da página.

<body> </body>: Engloba todos os elementos
que são mostrados na página.

<h1>, <h2>, <h3>, <h4>, <h5>, <h6>: Cabeçalhos
com níveis de 1 a 6, onde o 1 é o maior nível
e o 6 o menor.

<div> </div>: Divisões de seções de conteúdo.

<p> </p>: Parágrafo.

<blockquote> </blockquote>: Bloco de citações.

<ol> </ol>: Listas ordenadas.

<ul> </ul> Listas não ordenadas.

<li> </li>: Item de listas.


Tags mais utilizadas nos elementos de linha:

<strong> </strong>: Renderiza um texto em negrito.

<em> </em>: Renderiza um texto em itálico.

<a> </a>: Cria um link para outra página ou documento.

<img>: Adiciona imagem na página.


O HTML foi criado pelo pesquisador Tim Berners-Lee no
CERN e é atualmente mantido pelo W3C - World Wide Web
Consortium contanto inclusive com um escritório no Brasil.

Você encontra muita documentação e material para estudo
no site do consórcio.

Fonte: http://www.w3c.br/Home/WebHome
 */