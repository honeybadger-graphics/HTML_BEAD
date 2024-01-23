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

            $(document).ready(function () {
              $("#responseError1").hide();
              document.getElementById("indokok").onchange = function() {
                var x=document.getElementById("indokok");
                var txt;
                if( x.value=="error")
                {  
                  txt = "Mivel hibát észlelt a weblapunkon kérjük adja meg a dátumot mikor tapasztalta."
                  document.getElementById("responseError2").innerHTML = txt;
                  $("#responseError1").show();
                }
                else{
                  txt ="";
                  document.getElementById("responseError2").innerHTML = txt;
                  $("#responseError1").hide();
                }
              }
              $("#validate").click(function () {
                  var nameValid= false;
                  var emailValid= false;
                  var messageValid= false;
                  var reasonValid = false;
                  var contactName=$("#contactName").val();
                  var gdpr = document.getElementById("GDPR");
                  var contactEmail=$("#contactEmail").val();
                  var contactMessage=$("#contactMessage").val();
                  var reason =$("#indokok").val();
                  $("#contactName").css('border','1px solid #ccc');
                  $("#contactEmail").css('border','1px solid #ccc');
                  $("#contactMessage").css('border','1px solid #ccc');
                  $("#indokok").css('border','1px solid #ccc');
                  if(!gdpr.checked){
                    alert("Fogadja el a a Adatkezeést!");
                    return;
                }
                  if(contactName==""){
                      alert("Név megadása kötelezö.");
                      $("#contactName").css('border','2px solid #ff0000');
                      return;
                  }
                  else{
                    nameValid= true;
                  }
                  if(reason==""){
                    alert("Adjon meg indokot.");
                    $("#indokok").css('border','2px solid #ff0000');
                    return;
                  }
                  else{
                    reasonValid=true;
                  }
                  if(contactEmail==""){
                      alert("Kapcsolatba lépési emailcím megadása kötelező.");
                      $("#contactEmail").css('border','2px solid #ff0000');
                      return;
                  }
                  else{
                    emailValid=true;
                  }
                  if(contactMessage==""){
                      alert("Nincs üzenet.");
                      $("#contactMessage").css('border','2px solid #ff0000');
                      return;
                  }
                  else{
                    messageValid=true;
                  }
                  if(nameValid && reasonValid && emailValid && messageValid && gdpr.checked) {
                   
                      var txt;
                      if (confirm("Biztos el akarja küldeni?")) {
                          txt = "Elküldtük az üzenetét.";
                      } else {
                          txt = "Semmi nem történt.";
                      }
                      document.getElementById("response").innerHTML = txt;
                  }
                 
              });
             
          });