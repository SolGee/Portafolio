const getData = async(url) => {
    const response = await fetch(url);
    return await response.json();
};

const dataApi = "./projects.json";

const main = async() => {
    const fullData = await getData(dataApi);
    showData(fullData);
};

const projects = document.getElementById('project-container');



const templateStringForProjects = (element) => {
    return `<div class="card" style="background-image:url('${element.imgDesktop}')">
    <div class="card-hover">
       <div class="text">
          <h3 class="title">${element.name}</h3>
          <p class="description">${element.description}</p>
          <p>
          <i class="${element.html}"></i>
          <i class="${element.css}"></i>
          <i class="${element.js}"></i>
          <i class="${element.node}"></i> 
             </p>
             <p class="links">
                <a href="${element.ghpages}" target="_blank">
                   <i class="fas fa-external-link-alt"></i>
                </a> 
                <a href="${element.repository}" target="_blank">
                   <i class="fab fa-github"></i>
                </a>
          </p>
       </div>
       </div>
    
 </div>
    `

};

const showData = (data) => {
    let items = '';
    data.forEach((element) => {
        items +=
            templateStringForProjects(element);
    });
    return projects.innerHTML = items;
};

window.addEventListener('load', main);