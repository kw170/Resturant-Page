function createHeader(){
    const header = document.createElement('header')
    header.classList.add("header")

    const resturantName = document.createElement('h1')
    resturantName.classList.add("resturantName")
    resturantName.textContent = "Purple Spoon"

    header.appendChild(resturantName)

    return header;
}

function createNavBar(){
    const navBar = document.createElement("div")
    navBar.classList.add("navBar")

    const home = document.createElement("button")
    home.classList.add("home")
    home.textContent = "Home"

    const menu = document.createElement("button")
    menu.classList.add = "menu"
    menu.textContent = "Menu"

    const contact = document.createElement("button")
    contact.classList.add = "contact"
    contact.textContent = "Contact"
    
    navBar.appendChild(home)
    navBar.appendChild(menu)
    navBar.appendChild(contact)

    return navBar;
}


function createMain(){
    const main = document.createElement('div');
    main.classList.add('main');
  
    const content = document.createElement('p');
    content.textContent = 'This is the main content.';
  
    main.appendChild(content);
  
    return main;
}


function loadPage(){
    const content = document.querySelector(".content")

    const header = createHeader()
    content.appendChild(header)

    const navBar = createNavBar()
    header.appendChild(navBar)

    const main = createMain()
    content.appendChild(main)
}

export default loadPage;