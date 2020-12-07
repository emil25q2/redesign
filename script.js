window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    //animationer
    document.querySelector("#hitit").classList.add("zoom_in_fade");

    //hide stuff
    document.querySelector("#header").classList.add("hide");
    document.querySelector("video").classList.add("hide");
    document.querySelector("#images_container").classList.add("hide");
    document.querySelector("#my_footer").classList.add("hide");

    //hitit -> forside
    document.querySelector("#hitit").addEventListener("click", forside);
}

function forside() {
    console.log("forside");

    //hide stuff
    document.querySelector("#hitit").classList.add("hide");
    document.querySelector("#hitit").classList.add("hide");
    document.querySelector("#images_container").classList.remove("hide");

    //show stuff
    document.querySelector("#header").classList.remove("hide");
    document.querySelector("video").classList.remove("hide");
    document.querySelector("#my_footer").classList.remove("hide");

    //afspil video
    document.querySelector("video").play();
}
