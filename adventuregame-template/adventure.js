
var levels = {

startpagina:{
    jpg: "img/startpagina.png"
}


}
var zicht = document.createElement("img");
zicht.setAttribute("src", levels.startpagina.jpg);
var background = document.getElementById("game-container").appendChild(zicht);


//om die tekst te verwijderen 

var descriptionw1 = document.getElementById("description")
descriptionw1.innerHTML = ""
document.getElementById("inventoryItem").style.visibility = "hidden"

		var button1a = document.getElementById("button1")
        var button2b = document.getElementById("button2")
        var button3c = document.getElementById("button3")
        var button4d = document.getElementById("button4")

            //buttons om te navigeren

			button1a.style.top = "40%";
			button1a.style.left = "76%";
			button1a.style.height = "10%"
            button1a.style.width = "5%"
          
            button2b.style.top = "55%"
            button2b.style.left = "70%"
            button2b.style.height = "10%"
            button2b.style.width = "5%"

            button3c.style.top = "55%"
            button3c.style.left = "80%"
            button3c.style.height = "10%"
            button3c.style.width = "5%"


		//pagina 1...............................................................................

        pagina1()

        function pagina1()
        {

        zicht.setAttribute("src", "img/startpagina.png");

        button1a.style.visibility = "visible"
        button1a.innerHTML = "Vooruit";
        button1a.onclick = pagina2;
        button1a.style.width = "600%";
        button1a.style.height = "600%";
        button1a.style.top = "-10%";
        button1a.style.left = "-10%";
        button1a.style.opacity = "0";

        button2b.style.visibility = "hidden";
        button2b.innerHTML = "Links";
        //buttonw2.onclick = #;


        button3c.style.visibility = "hidden"
        button3c.innerHTML = "Rechts";
        //buttonw3.onclick = #;

        }

        //pagina 2...............................................................................

        function pagina2()
        {
        zicht.setAttribute("src", "img/begin.png");

        button1a.style.visibility = "visible"
        button1a.innerHTML = "Vooruit";
        button1a.onclick = pagina4;
        button1a.style.width = "100px";
        button1a.style.height = "100px";
        button1a.style.top = "50%";
        button1a.style.left = "75%";
        button1a.style.opacity = "1";

        button2b.style.visibility = "visible";
        button2b.innerHTML = "links";
        button2b.onclick = pagina3;


        button3c.style.visibility = "hidden"
        button3c.innerHTML = "Rechts";
        //button3c.onclick = #;
        }

        //pagina 3..............................................................................

        function pagina3()
        {
        zicht.setAttribute("src", "img/chest.png");

        button1a.style.visibility = "visible"
        button1a.innerHTML = "Terug";
        button1a.onclick = pagina5;

        button2b.style.visibility = "hidden";
        button2b.innerHTML = "links";
        //button2a.onclick = #;


        button3c.style.visibility = "hidden"
        button3c.innerHTML = "Rechts";
        //button3c.onclick = #;
        }

		//pagina 4..............................................................................

        function pagina4()
        {
        zicht.setAttribute("src", "img/blocked.png");

        button1a.style.visibility = "visible"
        button1a.innerHTML = "Terug";
        button1a.onclick = pagina2;

        button2b.style.visibility = "hidden";
        button2b.innerHTML = "links";
        //button2b.onclick = #;


        button3c.style.visibility = "hidden"
        button3c.innerHTML = "Rechts";
        //button3c.onclick = #;
        }

		//pagina 5..............................................................................

        function pagina5()
        {
        zicht.setAttribute("src", "img/pass.png");

        button1a.style.visibility = "visible"
        button1a.innerHTML = "Vooruit";
       	button1a.onclick = pagina6;

        button2b.style.visibility = "hidden";
        button2b.innerHTML = "links";
        //button2b.onclick = #;


        button3c.style.visibility = "hidden"
        button3c.innerHTML = "Rechts";
        //button3c.onclick = #;
        }

        //pagina 6..............................................................................

        function pagina6()
        {
        zicht.setAttribute("src", "img/begintunnel.png");

        button1a.style.visibility = "hidden"
        button1a.innerHTML = "Vooruit";
       	//button1a.onclick = #;

        button2b.style.visibility = "visible";
        button2b.innerHTML = "links";
        button2b.onclick = pagina7;


        button3c.style.visibility = "visible"
        button3c.innerHTML = "Rechts";
        button3c.onclick = pagina8;
        }

        //pagina 7..............................................................................

        function pagina7()
        {
        zicht.setAttribute("src", "img/verloren1.png");

        button1a.style.visibility = "hidden"
        button1a.innerHTML = "Vooruit";
       	//button1a.onclick = #;

        button2b.style.visibility = "hidden";
        button2b.innerHTML = "links";
        //button2b.onclick = #;


        button3c.style.visibility = "hidden"
        button3c.innerHTML = "Rechts";
        //button3c.onclick = #;
        }

        //pagina 8..............................................................................
            
        function pagina8()
        {
        zicht.setAttribute("src", "img/tunnelmidden.png");

        button1a.style.visibility = "visible"
        button1a.innerHTML = "Vooruit";
       	button1a.onclick = pagina9;

        button2b.style.visibility = "hidden";
        button2b.innerHTML = "links";
        //button2b.onclick = #;


        button3c.style.visibility = "hidden"
        button3c.innerHTML = "Rechts";
        //button3c.onclick = #;
        }

		//pagina 9..............................................................................	
           
		function pagina9()
        {
        zicht.setAttribute("src", "img/pressbutton.png");

        button1a.style.visibility = "visible"
        button1a.innerHTML = "volgende";
       	button1a.onclick = pagina10;

        button2b.style.visibility = "hidden";
        button2b.innerHTML = "links";
        //button2b.onclick = #;


        button3c.style.visibility = "visible"
        button3c.innerHTML = "Rechts";
        button3c.onclick = pagina11;

        button1a.style.opacity = "0";
        button1a.style.top = "30%";
        button1a.style.left = "39%";
        button1a.style.height = "100px";
        button1a.style.width = "100px";

        }

		//pagina 10..............................................................................	

		function pagina10()
        {
        zicht.setAttribute("src", "img/verloren2.png");

        button1a.style.visibility = "hidden"
        button1a.innerHTML = "Vooruit";
       	//button1a.onclick = #;

        button2b.style.visibility = "hidden";
        button2b.innerHTML = "links";
        //button2b.onclick = #;


        button3c.style.visibility = "hidden"
        button3c.innerHTML = "Rechts";
        //button3c.onclick = #;
        }

        //pagina 11..............................................................................

        function pagina11()
        {
        zicht.setAttribute("src", "img/epic.png");

        button1a.style.visibility = "visible"
        button1a.innerHTML = "Vooruit";
       	button1a.onclick = pagina13;

       	button1a.style.opacity = "0";
        button1a.style.top = "22%";
        button1a.style.left = "66%";
        button1a.style.height = "100px";
        button1a.style.width = "100px";


        button2b.style.visibility = "visible";
        button2b.innerHTML = "links";
        button2b.onclick = pagina12;

        button2b.style.opacity = "0";
        button2b.style.top = "22%";
        button2b.style.left = "28%";
        button2b.style.height = "100px";
        button2b.style.width = "100px";


        button3c.style.visibility = "hidden"
        button3c.innerHTML = "Rechts";
        //button3c.onclick = #;
        }

        //pagina 12..............................................................................

        function pagina12()
        {
        zicht.setAttribute("src", "img/win.png");

        button1a.style.visibility = "hidden"
        button1a.innerHTML = "Vooruit";
       	button1a.onclick = pagina9;

        button2b.style.visibility = "hidden";
        button2b.innerHTML = "links";
        //button2b.onclick = #;


        button3c.style.visibility = "hidden"
        button3c.innerHTML = "Rechts";
        //button3c.onclick = #;
        }

        //pagina 13..............................................................................

        function pagina13()
        {
        zicht.setAttribute("src", "img/verloren3.png");

        button1a.style.visibility = "hidden"
        button1a.innerHTML = "Vooruit";
       	//button1a.onclick = #;

        button2b.style.visibility = "hidden";
        button2b.innerHTML = "links";
        //button2b.onclick = #;


        button3c.style.visibility = "hidden"
        button3c.innerHTML = "Rechts";
        //button3c.onclick = #;
        }