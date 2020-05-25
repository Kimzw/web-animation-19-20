document.querySelector('#Eindpunt-boven').addEventListener('click', driehoekAchtergrond)


function driehoekAchtergrond() {
  document.body.classList.toggle("driehoekAchtergrond")
  document.querySelector('#Eindpunt-boven').classList.toggle("clicked")
}


document.querySelector('#Eindpunt-rechts').addEventListener('click', cirkelAchtergrond)


function cirkelAchtergrond() {
  document.body.classList.toggle("cirkelAchtergrond")
  document.querySelector('#Eindpunt-rechts').classList.toggle("clicked")
}

document.querySelector('#Eindpunt-onder').addEventListener('click', vierkantAchtergrond)


function vierkantAchtergrond() {
  document.body.classList.toggle("vierkantAchtergrond")
  document.querySelector('#Eindpunt-onder').classList.toggle("clicked")
}






document.querySelector('#motoren').addEventListener('click', startMotoren)


function startMotoren() {
  document.querySelector('#Vliegtuig').classList.toggle("startVliegtuig")
}







window.addEventListener('keydown', toggle)

function toggle(event) {
    if(event.keyCode === 39){
    document.querySelector('#Vliegtuig').classList.toggle('draaiRechts');
    }
    else if (event.keyCode === 37) {
    document.querySelector('#Vliegtuig').classList.toggle('draaiLinks');
    }
}

document.querySelector('#Vleugel-rechts').addEventListener('click', rechtsDraaien)

function rechtsDraaien (){
    document.querySelector('#Vliegtuig').classList.toggle("draaiRechts")
}

document.querySelector('#Vleugel-links').addEventListener('click', linksDraaien)

function linksDraaien (){
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
    setTimeout(function(){
    document.querySelector('#Vliegtuig').classList.remove("startVliegtuig")
    }, 2000);
    
}

document.querySelector('#lanceren').addEventListener('click', bloemenDraaien)

function bloemenDraaien() {  
document.querySelector('#bloemen').classList.add("bloemendraai")
    
setTimeout(function(){
    document.querySelector('#bloemen').classList.remove("bloemendraai")
    }, 5000);}