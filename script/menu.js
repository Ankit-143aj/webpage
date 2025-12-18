

      fetch("navbar.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("nav").innerHTML = data;

        let currentPage = window.location.pathname.split("/").pop();
        //menu me anchor tag tak pahuchne ka tarika
        let links = document.querySelectorAll(".menu .menubar ul li a");

        if(!currentPage || currentPage == "#"){
            currentPage="index.html";
        }
        //har anchor tag ko process karege
        links.forEach(link => {
          console.log("currentPage=" , currentPage);
          let linkPage =  link.getAttribute("href");
          
          if(linkPage == currentPage){
            link.closest("li").classList.add("underline_current");
          }

          if (window.innerWidth <= 576){
                const menu = document.querySelector(".menu");
                const menuBar = document.querySelector(".menu .menubar ul");
                const mobileBar = document.querySelector(".menu .mobilebar");

                if (mobileBar && !mobileBar.querySelector(".hamburger")){
                      const di = document.createElement("div");
                      di.className = "hamburger";
                      di.setAttribute("aria-label","Toggle menu")
                      dv.setAttribute("tabindex","0");
                      di.innerHTML = "<span></span>";

                      mobileBar.appendChild(di);

                      di.addEventListener("click", function(e){
                            e.stopPropagation();
                            menu.classList.toggle("mobile-open");
                      });
                }
          }
        });
      });





