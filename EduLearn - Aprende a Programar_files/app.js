/* Navbar */
function deleteClassesInElement(lista, clase) {
    lista.forEach(i => i.classList.remove(clase)) //Recorre cada item de la lista y le remueve la clase active
}
const itemsLinks = document.querySelectorAll('.nav__link')
itemsLinks.forEach(link => { //lista de links
    deleteClassesInElement(itemsLinks, 'nav__link--active')
    link.addEventListener('click', () => { // Al hacer click

        link.classList.add('nav__link--active')// luego se le agrega el active solo al itemLink
    })

});

const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver( // observer avisa cuanso sale y entra de la pantalla
    (enteries) => { // es la lista que esta observando en este caso las secciones        
        enteries.forEach(entry => {//recorrer la lista
            if (!entry.isIntersecting) return; //valida que este visible
            const idSection = entry.target.id // recupero el id de la seccion
            deleteClassesInElement(itemsLinks, 'nav__link--active') // elimino la clase active de los elementos 
            itemsLinks.forEach(link => {

                if (link.getAttribute('href') == `#${idSection}`) { // recorro y valido que existsa ese id
                    link.classList.add('nav__link--active') // agrego la clase al elemento
                }
            })
        })
    }
)
sections.forEach(section => observer.observe(section)); // a cada section le estamos aplicando el observer

/* hero counter */
const numbersCount = document.querySelectorAll('.hero__stat-number span')



let current = 0
function increaseNumbers(element, number) {
    const hasDecimal = String(number).includes('.');
    const step = hasDecimal ? 0.1 : 1; // si tiene decimal, sumar 0.1, si no sumar 1
    let increment = 0
    const timer = setInterval(() => {
        increment += step

        if (increment >= number) {
            element.textContent = number

            clearInterval(timer)
        } else {
            element.textContent = hasDecimal ? increment.toFixed(1) : Math.floor(increment);
        }

    }, 5)
}
numbersCount.forEach(element => {
    let numElement = element.textContent;
    increaseNumbers(element, numElement)

});


/* Filters */
const filtersButtons = document.querySelectorAll('.filter-btn')
const coursesList = document.querySelector('.courses__grid')
const categoriesFilter = [...document.querySelectorAll('article[data-category]')]
filtersButtons.forEach(element => {
    
    element.addEventListener('click', () => {
        filtersButtons.forEach(button => {
            button.classList.remove('filter-btn--active')
        });
        element.classList.add('filter-btn--active')
        
        if (element.dataset.filter == "todos") {
            categoriesFilter.forEach(element => {
                coursesList.append(element)
            });
        } else {
            const f = categoriesFilter.filter(e => e.dataset.category === element.dataset.filter)
            coursesList.innerHTML = ''
            f.forEach(element => {
                coursesList.append(element)
            });
        }

    })
});



/* categoriesFilter.forEach(element => {
    console.log(element);
     
}); */

