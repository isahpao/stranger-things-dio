
// header
let bgPrincipal = document.querySelector('#id-bg-principal');
let imgHeader = document.querySelector('#id-img-header');
let pHeader = document.querySelector('#id-p-header')
let buttonHeader = document.querySelector('#id-button-header')

// imagens criança e monstro
let imgCriançasBike = document.querySelector('#id-img-crianças-bike')
let imgMonstroCorrendo = document.querySelector('#id-img-monstro-correndo')

// backgrounds
let bgNormal = document.querySelector('#id-bg-normal')
let bgFlorest = document.querySelector('#id-bg-florest')

// sessão do mundo-invertido
let h1MundoInvertido = document.querySelector('#id-h1-mundo-invertido')
let pMundoInvertido = document.querySelector('#id-p-mundo-invertido')
let imgMundoInvertido = document.querySelector('#id-img-mundo-invertido')

// imagens em cima do video que precisam sumir quando clicado
let imgEmCimaVideo = document.querySelector('#id-img-video')
let playEmCimaVideo = document.querySelector('#id-play-video')

// sessao do video
let h1Video = document.querySelector('#id-h1-video')
let pVideo = document.querySelector('#id-p-video')

// sessao do netflix
let netflix = document.querySelector('#id-netflix')
let h1Netflix = document.querySelector('#id-h1-netflix')
let imgNetflix01 = document.querySelector('#id-img-netflix1')
let imgNetflix02 = document.querySelector('#id-img-netflix2')
let imgNetflix03 = document.querySelector('#id-img-netflix3')
let imgLampadasNatal = document.querySelector('#id-img-lampadas')

// clube
let h1Clube = document.querySelector('#id-h1-clube')
let h1Clube2 = document.querySelector('#id-h1-clube2')
let pClube = document.querySelector('#id-p-clube')

// formulario
let formulario = document.querySelector('#id-formulario')
let spanFormulario = document.querySelector('#id-span-formulario')

// footer
let footer = document.querySelector('#id-footer')
let imgFita0 = document.querySelector('#id-footer-fita')
let imgFita01 = document.querySelector('#id-footer-fita1')


buttonHeader.addEventListener('click', function() {
    bgPrincipal.classList.toggle('bg-principal-invertido');
    bgPrincipal.classList.toggle('bg-principal');

    imgHeader.classList.toggle('header-img-invertido');
    pHeader.classList.toggle('header-p-invertido');
    pHeader.classList.toggle('invertido');
    pMundoInvertido.classList.toggle('invertido');
    pVideo.classList.toggle('invertido');
    pClube.classList.toggle('invertido');
    h1Clube2.classList.toggle('invertido');
    
    imgNetflix01.classList.toggle('imagens-netflix-invertido');
    imgNetflix02.classList.toggle('imagens-netflix-invertido');
    imgNetflix03.classList.toggle('imagens-netflix-invertido');
    buttonHeader.classList.toggle('fonte-invertido');

    h1MundoInvertido.style.fontFamily = "'Rubik Glitch', system-ui";
    h1Netflix.style.fontFamily = "'Rubik Glitch', system-ui";
    h1Video.style.fontFamily = "'Rubik Glitch', system-ui";
    h1Clube.style.fontFamily = "'Rubik Glitch', system-ui";
    h1Clube2.style.fontFamily = "'Rubik Glitch', system-ui";
    spanFormulario.classList.toggle('fonte-invertido');

    imgCriançasBike.src = "./images/characters/inverted-world-monster.svg";
    imgMonstroCorrendo.src = "./images/characters/kids-on-the-bike.svg";

    imgCriançasBike.classList.toggle('crianças-bike');
    imgCriançasBike.classList.toggle('crianças-bike-invertido');
    imgMonstroCorrendo.classList.toggle('monstro-correndo');
    imgMonstroCorrendo.classList.toggle('monstro-correndo-invertido');

    imgMundoInvertido.classList.toggle('imagem-mundo-invertido');

    imgLampadasNatal.classList.toggle('lampadas-cor-invertido');

    imgNetflix01.src = "./images/content/serie-image-03.png";
    imgNetflix03.src = "./images/content/serie-image-01.png";

    netflix.classList.toggle('netflix-invertido');

    footer.classList.toggle('footer-invertido');
    imgFita0.classList.toggle('footer-fitas-invertido');
    imgFita01.classList.toggle('footer-fitas-invertido');

    bgFlorest.classList.toggle('bg-florest-invertido');
    bgNormal.classList.toggle('bg-invertido');
    buttonHeader.classList.toggle('button-invertido');
    formulario.classList.toggle('cores');
    formulario.classList.toggle('cores-invertido');


            buttonHeader.addEventListener('click', function() {

            let estilo = window.getComputedStyle(h1MundoInvertido,h1Netflix,h1Video,h1Clube,h1Clube2);
            let fonteAtual = estilo.fontFamily;

            if (fonteAtual.includes('Rubik Glitch')) {  
                h1MundoInvertido.style.fontFamily = "'Archivo Black', sans-serif";
                h1Netflix.style.fontFamily = "'Archivo Black', sans-serif";
                h1Video.style.fontFamily = "'Archivo Black', sans-serif";
                h1Clube.style.fontFamily = "'Archivo Black', sans-serif";
                h1Clube2.style.fontFamily = "'Archivo Black', sans-serif";
            } else { 
           
            }});


            buttonHeader.addEventListener('click', function() {

                if (imgCriançasBike.src.includes("inverted-world-monster.svg")) {  
                imgCriançasBike.src = "./images/characters/kids-on-the-bike.svg"; 
            } else { 
                imgCriançasBike.src = "./images/characters/inverted-world-monster.svg"; 
            
            }});

            buttonHeader.addEventListener('click', function() {

                if (imgMonstroCorrendo.src.includes("kids-on-the-bike.svg")) {  
                    imgMonstroCorrendo.src = "./images/characters/inverted-world-monster.svg"; 
            } else { 
                imgMonstroCorrendo.src = "./images/characters/kids-on-the-bike.svg"; 
            
            }});

            buttonHeader.addEventListener('click', function() {

                    if (imgNetflix01.src.includes("serie-image-03.png")) {  
                    imgNetflix01.src = "./images/content/serie-image-01.png"; 
                } else { 
                    imgNetflix01.src = "./images/content/serie-image-03.png"; 
                
                }});
                

                buttonHeader.addEventListener('click', function() {

                    if (imgNetflix03.src.includes("serie-image-01.png")) {  
                    imgNetflix03.src = "./images/content/serie-image-03.png"; 
                } else { 
                    imgNetflix03.src = "./images/content/serie-image-01.png";   
                }});
});

playEmCimaVideo.addEventListener('click', function() {
    if (imgEmCimaVideo.style.display === "none") {
        imgEmCimaVideo.style.display = "block"; 
    } else {
        imgEmCimaVideo.style.display = "none"; 
    }
});

playEmCimaVideo.addEventListener('click', function() {
    if (playEmCimaVideo.style.display === "none") {
        playEmCimaVideo.style.display = "block"; 
    } else {
        playEmCimaVideo.style.display = "none"; 
    }
});
