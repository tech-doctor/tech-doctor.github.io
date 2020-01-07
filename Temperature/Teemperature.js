//TO CHECK FOR CURRENT WEATHER IN A PLACE, CONSUMING 'API' IS CONSUMED.

//Acess DOM Elemnt
const tempSection = document.getElementById('temp-report');
const valueSection = document.getElementById('value-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');


//To make HTTP request, an XMLHTTP reqeust object is needed

let apiRequest = new XMLHttpRequest();


//there will be a submit call back on the submit button i.e adding an event listner

// MY WEATHER API IS;
//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ba03294cc122c7abd1b1a2fa4f719b97


cityForm.addEventListener('submit', ($event) => {
    $event.preventDefault();
    const chosenCity = cityInput.value;
    
    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&units=metric' + '&APPID=ba03294cc122c7abd1b1a2fa4f719b97');
    apiRequest.send();
    });

//capturing the data that is gotten by our GET reply API.
// the openweathermap API is returned as a JSON object.
    
   apiRequest.onreadystatechange = () => {
       if (apiRequest.readyState === 4) {
           if (apiRequest.status === 404) {
               return tempSection.textContent = 'City not found!';
           }
           const response = JSON.parse(apiRequest.response);
           tempSection.textContent = ' The Temperature in ' + response.name + ' : '; 
           valueSection.textContent = response.main.temp +'°C';
           
           
               
               
            
               }
               }
   
   
