

            function setCookie(name, id) {
                let element = document.getElementById(id);
                let elementValue = escape(element.value);//sifruje vrednost koju sam dodao u element

                document.cookie = name + "=" + elementValue + "; path=/; expires=" + expiry.toGMTString();//kreiranje kukija
                console.log(document.cookie);//ispis
            }
             
            function storeValues(form) {
                setCookie("email", form.email - field.value);
                return true;
            }

            function displayCookieValue(name) {
                let value = getCookie(name);
                let element = document.getElementById("value");
                element.innerHTML = "Cookie name: "+ name + ", value " + value;

            }

            function getCookie(name) {//desifruje ono sto smo sifrovali
                let re = new RegExp(name + "=([^;]+)");
                let value = re.exec(document.cookie);
                return (value != null) ? unescape(value[1]) : null;
            }

           
           
            function Klikni(){
            let myJSON = '{ "name":"Alola Vulpix","cena":49.99 }';
            let myObj = JSON.parse(myJSON);
            alert ("Model: "+ myObj.name);
            alert ("Cena: "+myObj.cena);
            }
            function Klikni1(){
                let myJSON = '{ "name":"Pikachu with Flower","cena":49.99}';
                let myObj = JSON.parse(myJSON);
                alert ("Model: "+ myObj.name);
                alert ("Cena: "+myObj.cena);
                }
            function Klikni2(){
            let myJSON = '{ "name":"Cynthia Plush Toy","cena":59.99 }';
            let myObj = JSON.parse(myJSON);
            alert ("Model: "+ myObj.name);
            alert ("Cena: "+myObj.cena);
            }
            function Klikni3(){
            let myJSON = '{ "name":"Litten Poké Plush","cena":49.99 }';
            let myObj = JSON.parse(myJSON);
            alert ("Model: "+ myObj.name);
            alert ("Cena: "+myObj.cena);
            }

            function checkUserEntry()
            {
                let userEntry = document.getElementById('emailField').value;
                if(userEntry.length == 0)
                {
                    alert ('please provide an email address');
                }
                else if(userEntry.indexOf('@')===-1)
                {
                    alert ('please provide a valid email address');
                }
                document.getElementById('console').innerHTML =
                "<h3 style='color:green'> Your email is: </h3>" + userEntry;
            }
            
            function validateEntry()
            {
                try
                {
                 checkUserEntry();
                }
                catch(error)
                {
                 document.getElementById('console').innerHTML =
                "<h3 style='color:red'> Warning: </h3>" + error;
                }
            }

     function Objekat(){     
        let VlasnikRadnje={
            ime: 'Stefan',
            prezime:'Mesaroski',
            kontakt: '060/108-10-85'
        }
        document.getElementById("out").innerHTML='Vlasnik radnje:'+ VlasnikRadnje.ime+ VlasnikRadnje.prezime+'<br>'+' Telefon: '+VlasnikRadnje.kontakt;
    }

 