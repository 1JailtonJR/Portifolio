function toggleMode() { 
       const html = document.documentElement;
       html.classList.toggle("light"); 
     
       const img = document.querySelector("#profile img"); 

       if (html.classList.contains("light")) { 
              img.setAttribute("src", "img/Imagem_Claro.jpeg"); 
       }    else  {
              img.setAttribute("src", "img/Imagem_Escuro.jpeg"); 
       }
}