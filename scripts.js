let mybutton = document.getElementById("myBtn");
let loadbutton = document.getElementById("fogadBtn");
let parody = document.getElementsByClassName("parody");
            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function() {scrollFunction()};
            
            function scrollFunction() {
              if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                mybutton.style.display = "block";
              } else {
                mybutton.style.display = "none";
              }
            }
            
            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
            window.onload =function() {
              loadbutton.style.display = "block"
            }
            function acceptFunction() {
                
                loadbutton.style.display="none";
                parody.item(0).style.display="none";
                

            }