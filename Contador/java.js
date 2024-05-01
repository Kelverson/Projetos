const value = document.querySelector('#value')

function OnIncrement(){
    value.innerHTML = parseInt(value.innerHTML) + 1
}

function OnDecrement(){
    value.innerHTML = parseInt(value.innerHTML) - 1
}