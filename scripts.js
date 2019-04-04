const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container'); //<div class="container"></div>


app.appendChild(container);



// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://swapi.co/api/planets/', true);

// console.log(request)

request.onload = function () {
    // console.log(request.responseText)
  
    var data = JSON.parse(this.response);


    if (request.status >= 200 & request.status < 400) {
        data.results.forEach(output => {

            const table = document.createElement("tr");
            // const h4 = document.createElement("h4");
            // h4.textContent = 1;
            
            const baris1 = document.createElement("td");
            baris1.textContent = output.name;

            const baris2 = document.createElement("td");
            baris2.textContent = output.rotation_period;

            const baris3 = document.createElement("td");
            baris3.textContent = output.orbital_period;

            const baris4 = document.createElement("td");
            baris4.textContent = output.diameter;

            const baris5 = document.createElement("td");
            baris5.textContent = output.climate;

            const baris6 = document.createElement("td");
            baris6.textContent = output.gravity;

            const baris7 = document.createElement("td");
            baris7.textContent = output.terrain;

            const baris8 = document.createElement("td");
            baris8.textContent = output.surface_water;

            const baris9 = document.createElement("td");
            baris9.textContent = output.population;

            const baris10 = document.createElement("td");
            baris10.textContent = output.residents;

            const baris11 = document.createElement("td");
            baris11.textContent = output.films;

            const baris12 = document.createElement("td");
            baris12.textContent = output.created;

            const baris13 = document.createElement("td");
            baris13.textContent = output.edited;

            const baris14 = document.createElement("td");
            baris14.textContent = output.url;


            

            container.appendChild(table);
            // table.appendChild(h4);
            table.appendChild(baris1);
            table.appendChild(baris2);
            table.appendChild(baris3);
            table.appendChild(baris4);
            table.appendChild(baris5);
            table.appendChild(baris6);
            table.appendChild(baris7);
            table.appendChild(baris8);
            table.appendChild(baris9);
            table.appendChild(baris10);
            table.appendChild(baris11);
            table.appendChild(baris12);
            table.appendChild(baris13);
            table.appendChild(baris14);
            // h4.textContent = h4.textContent + 1

        });
       
 
    
    };
        
  
 

  };


// Send request
request.send();