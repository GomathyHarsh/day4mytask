const xhr= new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();
xhr.responseType = "json";
xhr.onload=function displayResult(){
    var countries =xhr.response;
    console.log(countries);
    console.log(countries.length);
 for(var i=0;i<countries.length;i++)
   {
     console.log(`countryname is ${countries[i].name} and Flag is ${countries[i].flag}`);
   }
for(var i=0; i<countries.length;i++)
{
  console.log(`countryregion is ${countries[i].region} and subregion is ${countries[i].subregion}`);
}
for(var i=0; i<countries.length;i++)
{
  console.log(`country popolation: ${countries[i].population}`);
}
}