const projects = [
    // {
    //     idProject : 1,
    //     imgProject: "https://menucolombiano.com/wp-content/uploads/2023/08/como-hacer-el-arequipe-dulce-de-leche-colombiano-delicioso-y-tradicional-jpg.webp",
    //     titleProject: "chat Bidireccional",
    //     descripcionProject: "Este es un chat trabajado con una herramienta llamada socket.io",
    //     linkProject : ""
    // },

    // {
    //     idProject : 1,
    //     imgProject: "https://menucolombiano.com/wp-content/uploads/2023/08/como-hacer-el-arequipe-dulce-de-leche-colombiano-delicioso-y-tradicional-jpg.webp",
    //     titleProject: "chat Bidireccional",
    //     descripcionProject: "Este es un chat trabajado con una herramienta llamada socket.io",
    //     linkProject : ""
    // }

];

const references = [

    {
        name : "Yeferson Orozco Loaiza",
        ocupation : "Ingeniero de Sistemas",
        company: "Lapoint ICT",
        phone : "3217269985"
    },

    {
        name : "Martha Echeverri Palacio",
        ocupation : "Estilista",
        company: "Peluquería La Mona",
        phone : "3127366129"
    }
];

const experiences =[
    {
        nameLenguaje : "HTML",
        porcentajeProgress: 70,
        imageLenguaje: "https://res.cloudinary.com/dxre84abu/image/upload/v1718890434/logo-html_h2ogzz.png",
        description: "Intermedio"
    },

    {
        nameLenguaje : "CSS",
        porcentajeProgress: 70,
        imageLenguaje: "https://res.cloudinary.com/dxre84abu/image/upload/v1718821053/logo-css_ujmtwd.png",
        description: "Intermedio"
    },

    {
        nameLenguaje : "git",
        porcentajeProgress: 60,
        imageLenguaje: "https://res.cloudinary.com/dxre84abu/image/upload/v1718821071/logo-git_w44con.png",
        description: "Intermedio"
    }
];

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    
    if(target){
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }
});
});

loadSectionProjects()
function loadSectionProjects(){
    projects.forEach(project => createCardProjects(project))
}

loadSectionReferences()
function loadSectionReferences(){
    references.forEach(reference => createCardReferences(reference))
}

loadSectionExperiences();
function loadSectionExperiences() {
    experiences.forEach(experience => createCardExperiences(experience));
}

function createCardProjects(project){
    const cardProject = document.createElement('div')
    cardProject.classList.add ('card-projects')

    const containerImg = document.createElement('div')
    containerImg.classList.add('container-img-card')

    const imgCard = document.createElement('img')
    imgCard.src = project.imgProject
    imgCard.alt = project.titleProject

    const containerDescripcion = document.createElement('div')
    containerDescripcion.classList.add('container-descripcion-card')

    const titleCard = document.createElement('h3')
    titleCard.textContent = project.titleProject

    const descripcionCard = document.createElement('p')
    descripcionCard.textContent = project.descripcionProject

    const goToProject = document.createElement('a')
    goToProject.href = project.linkProject

    goToProject.setAttribute('target', '_blank')
    goToProject.textContent = 'Ir a proyecto'

    cardProject.appendChild(containerImg)
    cardProject.appendChild(containerDescripcion)

    containerImg.appendChild(imgCard)
    containerDescripcion.appendChild(titleCard)
    containerDescripcion.appendChild(descripcionCard)
    containerDescripcion.appendChild(goToProject)

    document.querySelector('.container-cards').appendChild(cardProject)
}

function createCardReferences(reference){
    const cardReference = document.createElement('div')
    cardReference.classList.add ('card-reference')

    const pName = document.createElement('p')
    pName.textContent = 'Nombre: '
    const spanName = document.createElement('span')
    spanName.textContent = reference.name
    pName.appendChild(spanName)

    const pOcupation = document.createElement('p')
    pOcupation.textContent = 'Cargo: '
    const spanOcupation = document.createElement('span')
    spanOcupation.textContent = reference.ocupation
    pOcupation.appendChild(spanOcupation)

    const pCompany = document.createElement('p')
    pCompany.textContent = 'Empresa: '
    const spanCompany= document.createElement('span')
    spanCompany.textContent = reference.company
    pCompany.appendChild(spanCompany)

    const pPhone = document.createElement('p')
    pPhone.textContent = 'Teléfono: '
    const spanPhone = document.createElement('span')
    spanPhone.textContent = reference.phone
    pPhone.appendChild(spanPhone)

    cardReference.appendChild(pName)
    cardReference.appendChild(pOcupation)
    cardReference.appendChild(pCompany)
    cardReference.appendChild(pPhone)

    document.querySelector('.card-references').appendChild(cardReference)


}

function createCardExperiences(experience){
    const cardExperience = document.createElement('div')
    cardExperience.classList.add ('card-experience')

    const imgExperience = document.createElement('img')
    imgExperience.src = experience.imageLenguaje
    imgExperience.alt = experience.nameLenguaje

    const titleExperience = document.createElement('h4')
    titleExperience.textContent = experience.nameLenguaje

    const progressExperience = document.createElement('progress')
    progressExperience.classList.add('progress-bar')
    progressExperience.value = experience.porcentajeProgress
    progressExperience.max = 100

    const textExperience = document.createElement ('h5')
    textExperience.textContent = experience.description

    cardExperience.appendChild(imgExperience)
    cardExperience.appendChild(titleExperience)
    cardExperience.appendChild(progressExperience)
    cardExperience.appendChild(textExperience)

    document.querySelector('.container-experiences').appendChild(cardExperience)
}
