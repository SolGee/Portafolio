const getData = async url => {
    const response = await fetch(url);
    return await response.json();
};

const dataApi = './projects.json';

const main = async() => {
    const fullData = await getData(dataApi);
    showData(fullData);
};

const projects = document.getElementById('project-container');

const templateStringForProjects = element => {
    return `<div class="card">
    <figure>
        <img class="img-project" src="${element.imgDesktop}" alt="${element.name}"/>
    </figure>
       <div class="caption">
       <div class="caption-container">
            <div class="header-project">
                <h3 class="title">${element.name}</h3>
                <p class="links">
                    <a href="${element.ghpages}" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                    </a> 
                    <a href="${element.repository}" target="_blank">
                        <i class="fab fa-github"></i>
                     </a>
                </p>
            </div>
            <p class="description">${element.description}</p>
            <p class="icons">
                <i class="${element.html}"></i>
                <i class="${element.css}"></i>
                <img src="${element.js}" alt="javascript" class="js"/>
                <i class="${element.node}"></i>
                <i class="${element.reactjs}"></i>
                <i class="${element.sass}"></i> 
            </p>
        </div>
       </div>
    
 </div>
    `;
};

const showData = data => {
    let items = '';
    data.forEach(element => {
        items += templateStringForProjects(element);
    });
    return (projects.innerHTML = items);
};

window.addEventListener('load', main);

/* MENU */

const show = id => document.getElementById(id).classList.add('show');

const hide = id => document.getElementById(id).classList.add('hide');

const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close');

const showMenu = () => {
    show('mobile-menu-list');
};

// const hideMenu = () => {

//     hide('mobile-menu-list');
// };

menuBtn.addEventListener('click', showMenu);
// closeBtn.addEventListener('click', hideMenu);