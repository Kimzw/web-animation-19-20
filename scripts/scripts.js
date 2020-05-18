document.querySelector('#Eindpunt-boven').addEventListener('click', driehoekAchtergrond)


function driehoekAchtergrond() {
  document.body.classList.toggle("driehoekAchtergrond")
}


document.querySelector('#Eindpunt-rechts').addEventListener('click', cirkelAchtergrond)


function cirkelAchtergrond() {
  document.body.classList.toggle("cirkelAchtergrond")
}

document.querySelector('#Eindpunt-onder').addEventListener('click', vierkantAchtergrond)


function vierkantAchtergrond() {
  document.body.classList.toggle("vierkantAchtergrond")
}






document.querySelector('#motoren').addEventListener('click', startMotoren)


function startMotoren() {
  document.querySelector('#Vliegtuig').classList.toggle("startVliegtuig")
}






document.querySelector('#Vleugel-rechts').addEventListener('click', draaiRechts)


function draaiRechts() {
  document.querySelector('#Vliegtuig').classList.toggle("draaiRechts") 
}

document.querySelector('#Vleugel-links').addEventListener('click', draaiLinks)


function draaiLinks() {
  document.querySelector('#Vliegtuig').classList.toggle("draaiLinks") 
}







document.querySelector('#lanceren').addEventListener('click', wegVliegen)


function wegVliegen() {
  document.querySelector('#Vliegtuig').classList.add("vliegWeg")
    setTimeout(function(){
    document.querySelector('#Vliegtuig').classList.remove("vliegWeg")
    }, 5000);
    setTimeout(function(){
    document.querySelector('.draaiRechts').classList.remove("draaiRechts")
    }, 2000);
    setTimeout(function(){
    document.querySelector('.draaiLinks').classList.remove("draaiLinks")
    }, 2000);
}