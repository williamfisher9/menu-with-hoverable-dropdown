const loginBtn = document.querySelector(".btn.login-btn");
const signupBtn = document.querySelector(".btn.signup-btn");

loginBtn.addEventListener("mouseenter", (event) => {
    console.log(event.offsetX);

    //loginBtn.style.background = `radial-gradient(circle at 0%, blue, blue)`;
    
    //loginBtn.appendChild(div);
})


loginBtn.addEventListener("mouseleave", (event) => {
    console.log("left")
    //loginBtn.style.background = "radial-gradient(circle at 0%, rgb(190, 160, 61), transparent)";
  //  loginBtn.removeChild(document.getElementById("custom"))
})

signupBtn.addEventListener("mouseenter", (event) => {
    console.log(event.offsetX)
})

signupBtn.addEventListener("mouseleave", (event) => {
    console.log(event.offsetX)
})