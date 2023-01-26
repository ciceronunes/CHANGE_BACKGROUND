const input = document.getElementById("switch-shadow")

const changeBackground = () => {
        
    const img = document.getElementById('background')
    
    if (input.checked){
    img.src = "./assets/anoitecer.jpg"
    }
    
    if(!input.checked){
        img.src = "./assets/amanhecer.jpg"
    }
}

input.addEventListener('click', changeBackground)