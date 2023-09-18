// NodeList contendo todos os elementos do slider
const slider = document.querySelectorAll('.slider-img');
const text = document.querySelectorAll('.slider-text')
// botões de voltar e avançar
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

// índice para navegação entre os itens
let currentSlide = 0;

// oculta cada um dos itens/imagens do slide
function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
    text.forEach(item=> item.classList.remove('on'))
}

// exibe apenas o slide do indice 
function showSlider() {
    slider[currentSlide].classList.add('on')
    text[currentSlide].classList.add('on')
}

// função para avançar no slide
function nextSlider() {
    // oculta todos
    hideSlider()
    // verifica se o item atual é o ultimo:
    if(currentSlide === slider.length -1) {
        // se é, retorna para o primeiro item
        currentSlide = 0
    } else {
        // se não, avança
        currentSlide++
    }
    // exibe apenas o item no indice [currentSlide]
    showSlider()
}

// função para retroceder no slide
function prevSlider() {
    // oculta todos
    hideSlider()
    // verifica se o item atual é o primeiro:
    if(currentSlide === 0) {
        // se é, avança até o último item
        currentSlide = slider.length -1
    } else {
        // se não, retrocede
        currentSlide--
    }
    // exibe apenas o item no indice [currentSlide]
    showSlider()
}

// verifica todos os eventos de click nos botões prev e next
btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
