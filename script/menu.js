

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
        });
      });
