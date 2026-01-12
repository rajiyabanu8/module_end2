function Validate(){
const name=document.getElementById("name").value;
    const mobile=document.getElementById("mobile").value;
    const email=document.getElementById("email").value;
    const pwd=document.getElementById("pwd").value;
    const confpwd=document.getElementById("confpwd").value;
    const address=document.getElementById("address").value;
    const city=document.getElementById("city").value;

   const nameerror=document.getElementById("name-error");
   const mobError=document.getElementById("mobile-error");
   const emailerror=document.getElementById("email-error");
   const pwdError=document.getElementById("pwd-error");
   const confpwdError=document.getElementById("confpwd-error");
   const addresserror=document.getElementById("address-error");
   const cityError=document.getElementById("city-error");
   const checkerror=document.getElementById("check-error");
   
   nameerror.textContent="";
   mobError.textContent="";
   emailerror.textContent="";
   pwdError.textContent="";
   confpwdError.textContent="";
    addresserror.textContent="";
     cityError.textContent="";
        // name validation
        if(name==""|| (/\d/.test(name)))              
        {
            nameerror.textContent="Plz Enter ur name properly";
            return false;
        }

        // mobile validation
         const regex_mob = /^[6-9]\d{9}$/;
        if (!regex_mob.test(mobile)) {
            mobError.textContent = "Please enter a valid mobile number";
            return false;
        }

      let regex_mail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!regex_mail.test(email))
        {
            // alert("email")
            emailerror.textContent="Pz enter email with valid @,. symbol";
            return false;
        }
        let regex_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9\s])(?=\S+$).{8,}$/

        if(!regex_pwd.test(pwd)){
            // alert("password")
            pwdError.textContent="Password must be 8+ chars with uppercase, lowercase and number";
            return false;
        }
        else {
            pwdError.textContent = "";
        }
        if (confpwd === "") {
    confpwdError.textContent = "Please confirm password";
    return false;
}
         if (pwd !== confpwd) {
    confpwdError.textContent = "Passwords do not match";
    return false;
} else {
    confpwdError.textContent = "";
}
       
         
         if(address=="")
        {
            addresserror.textContent="Plz enter address";
            return false;
        }
       
         if(city=="")
        {
            cityError.textContent="Plz enter city";
            return false;
        }
        
        
        return true;
        

}

// Mock Api

const apiurl = "https://69303698778bbf9e00706081.mockapi.io/userdetail";

document.addEventListener("DOMContentLoaded", () => {

  const userform = document.getElementById("userForm");
  if (!userform) return; 

  const nameinput = document.getElementById("name");
  const mobileinput = document.getElementById("mobile");
  const emailinput = document.getElementById("email");
  const pwdinput = document.getElementById("pwd");
  const confpwdinput = document.getElementById("confpwd");
  const addressinput = document.getElementById("address");
  const cityinput = document.getElementById("city");

  userform.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!Validate()) return;

    const userdata = {
      name: nameinput.value.trim(),
      mobile: mobileinput.value.trim(),
      email: emailinput.value.trim(),
      password: pwdinput.value,
      address: addressinput.value.trim(),
      city: cityinput.value.trim(),
    };

    try {
      const res = await fetch(apiurl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userdata),
      });

      if (!res.ok) throw new Error();

      window.location.href = "success.html";
    } catch (err) {
      alert("Error saving data");
      console.error(err);
    }
  });
});

function togglePassword(inputId, iconId) {
  const password = document.getElementById(inputId);
  const icon = document.getElementById(iconId);

  if (password.type === "password") {
    password.type = "text";
    icon.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    password.type = "password";
    icon.classList.replace("bi-eye-slash", "bi-eye");
  }
}

