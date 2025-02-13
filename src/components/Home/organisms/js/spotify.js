    //Esto hace que el nav se despliegue cuando se presione el menu
    let menu = document.querySelector(".x");
    let navlist = document.querySelector(".sidebar");
    let containerNotif = document.querySelector(".showSideMenu");
    let headerr = document.querySelector("#headerr");
    
    menu.onclick = () => {
        menu.classList.toggle("bx-x");
        navlist.classList.toggle("openNav");
        if (navlist.classList.contains("openNav")) {
            console.log('hola2')
            headerr.style.zIndex = "0";
        } else {
            console.log('hola3')
            headerr.style.zIndex = "1";
        }
    };