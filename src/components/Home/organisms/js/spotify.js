    //Esto hace que el nav se despliegue cuando se presione el menu
    let menu = document.querySelector(".x");
    let navlist = document.querySelector(".sidebar");
    let containerNotif = document.querySelector(".showSideMenu");
    let headerr = document.querySelector("#headerr");
    let footerr = document.querySelector("#footerr");
    
    menu.onclick = () => {
        menu.classList.toggle("bx-x");
        navlist.classList.toggle("openNav");
        if (navlist.classList.contains("openNav")) {
            headerr.style.zIndex = "0";
        } else {
            headerr.style.zIndex = "1";
        }
        if (navlist.classList.contains("openNav")) {
            footerr.style.position = "static";
        } else {
            footerr.style.position = "relative";
        }
    };