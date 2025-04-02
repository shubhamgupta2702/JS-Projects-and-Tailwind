console.log("Hello from Script !");

document.getElementById("buttonText").addEventListener('click', () => {
    console.log(this);
    let para = document.getElementById("paragraph");
    para.textContent = "The paragraph is changed!"
    
})