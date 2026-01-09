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