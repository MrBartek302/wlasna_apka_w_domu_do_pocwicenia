var wybrane = 0
function dodaj(){
    if(wybrane==0){
    const imie = document.getElementById("imie").value
    const nazwisko = document.getElementById("nazwisko").value

    const url = `${baseurl}/wyslijdobazy/${imie}/${nazwisko}`

    fetch(url)
    wybrane=1
    }
}

function zmienkolor1(){
    const inpt1 = document.getElementById("imie")
    inpt1.style.backgroundColor = "green"
}

function zmienkolor2(){
    const inpt2 = document.getElementById("nazwisko")
    inpt2.style.backgroundColor = "green"
}

function stradmn(){
    window.location.href = "admin/admin.html"
}