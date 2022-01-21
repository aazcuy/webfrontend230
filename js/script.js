var year = new Date().getFullYear();
var date = `&copy; Agustina Azcuy | ${year} | Colombia`;
document.getElementsByTagName('footer')[0].innerHTML = date;


function lastEdit(){
var latestDate =  new Date(document.lastModified);
document.getElementById("lastModify").innerHTML = latestDate;}
