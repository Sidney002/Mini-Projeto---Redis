/*(function readyJS(win,doc)
{'use strict';
           
let form = document.getelementById("#getkey");
let email = document.getelementById("#gmail");
let rowPost = document.getelementById("#rowpost")


 function sendForm(event){
     event.preventDefault();
     let ajax= new XMLHttpRequest();
     let params='email=' + email.value;
     ajax.open('GET','//localhost:3000/verposts');
     ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
     ajax.onreadystatechange=function(){ 
         if(ajax.status === 200 && ajax.readyState === 4)
             let post=json.parse(ajax.responseText);
             rowpost.innerHTML="<td>user:" + email.value + " Rascunho:" + post + "</td>";
     }
     ajax.send(params);
 }
form.addEventListener('submit',sendForm,false);
})(window,document);*/
