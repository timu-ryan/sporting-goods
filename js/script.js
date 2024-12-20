let currentIndex = 0; // Индекс текущего слайда
const slides = document.querySelectorAll('.slide'); // Получаем все слайды
const totalSlides = slides.length; // Количество слайдов

// Функция для переключения на следующий слайд
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Увеличиваем индекс слайдера, если индекс больше чем количество слайдов, сбрасываем его на 0
    updateSlider(); // Обновляем слайдер
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Уменьшаем индекс слайдера с учетом зацикливания
    updateSlider(); // Обновляем слайдер
}

// Обновляем слайдер, сдвигая его
function updateSlider() {
    const slidesContainer = document.querySelector('.slides');
    const offset = -currentIndex * 100; // Рассчитываем смещение для слайдера
    slidesContainer.style.transform = `translateX(${offset}%)`; // Перемещаем слайды
}

// Настроим кнопки для переключения
document.querySelector('.prev-button').addEventListener('click', prevSlide);
document.querySelector('.next-button').addEventListener('click', nextSlide);

// Автоматическое переключение слайдов каждые 5 секунд
setInterval(nextSlide, 10000); // Переключение слайдов каждые 5 секунд

const slideButtons = document.getElementsByClassName("heroes__button");
const slidesDescriptions = document.getElementsByClassName("heroes__description");

console.log(slideButtons.length)

Array.from(slideButtons).forEach((button, index) => {
    button.addEventListener('click', () => {
        if (Array.from(slidesDescriptions[index].classList).includes('visually-hidden')) {
            slidesDescriptions[index].classList.remove('visually-hidden')
        } else {
            slidesDescriptions[index].classList.add('visually-hidden')
        }
    })
})

// slideButtons[0].addEventListener('click', () => {
//     slidesDescriptions[0].classList.add('visually-hidden');
//     console.log()
// })


function toggleRecipe(recipeId) {
    // Получаем панель, которую нужно открыть/закрыть
    const recipeDetails = document.getElementById(recipeId);
    
    // Проверяем, открыта ли панель
    const isCurrentlyOpen = recipeDetails.style.display === "block";

    // Закрываем все панели
    const allRecipeDetails = document.querySelectorAll('.recipe-details');
    allRecipeDetails.forEach((panel) => {
        panel.style.display = "none"; // Скрываем все панели
    });

    // Если панель была закрыта, то открываем только текущую
    if (!isCurrentlyOpen) {
        recipeDetails.style.display = "block"; // Показываем выбранную панель
    }
}



const tg = {
    token: "7837159160:AAGsZq3MimHnFBC-7KsuTc4ldaB006gQJY8", // Your bot's token that got from @BotFather
    chat_id: "458563677", // The user's(that you want to send a message) telegram chat id
}

/**
 * By calling this function you can send message to a specific user
 * @param {String} the text to send
 *
*/
function sendMessage(text, id) {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${id}&text=${text}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
}

const formInputs = document.querySelectorAll('.form__input');
const formButton = document.querySelector('.form__button')

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    const message = `имя: ${formInputs[0].value} %0Aномер телефона: ${formInputs[1].value}`

    sendMessage(message, tg.chat_id);
    formInputs[0].value = ""
    formInputs[1].value = ""
})


// Now you can send any text(even a form data) by calling sendMessage function.
// For example if you want to send the 'hello', you can call that function like this:

// sendMessage("hello");


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.querySelectorAll(".slider__image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

Array.from(imgs).forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
})


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}