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



// password eye
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



// mockapi

const apiurl = "https://69303698778bbf9e00706081.mockapi.io/userdetail";
const userform = document.getElementById("userForm");
const userId = document.getElementById("userid");
const nameinput=document.getElementById("name");
const addressinput=document.getElementById("address");
const emailinput=document.getElementById("email");
const pwdinput=document.getElementById("pwd");
 const confpwdinput=document.getElementById("confpwd");
const mobileinput=document.getElementById("mobile");
const cityinput=document.getElementById("city");

//fetch and display user
async function fetchuserdetails() {
  const res = await fetch(apiurl);
  const users = await res.json();
//   console.log(users);

}
fetchuserdetails();
userform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = userId.value;
  const userdata = {
    name: nameinput.value,
    mobile: mobileinput.value,
    email: emailinput.value,
    password: pwdinput.value,
    address: addressinput.value,
    city: cityinput.value,

  };

  if (!id) {
    //save
    await fetch(apiurl, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userdata),
    });
  } else {
    // alert("email id already exist")
    update
    await fetch(`${apiurl}/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userdata),
    });
  }
fetchuserdetails();
// window.location.href = "success.html";
if (Validate()) {
        
        window.location.href = "success.html"; // navigate if validation passes
    }
});

async function searchuser() {
    // Get input values
    const useremail = document.getElementById("floatingInput").value;
    const userpwd = document.getElementById("floatingPassword").value;

    
    if (!useremail || !userpwd) {
        alert("Please enter email and password");
        return;
    }

    try {
        // Fetch user data from API (replace with your API URL)
        const apiurl = "https://69303698778bbf9e00706081.mockapi.io/userdetail";
        const res = await fetch(apiurl);
        const users = await res.json();
         const user = users.find(u => u.email === useremail);

        if (user && user.password === userpwd) {
            alert("login success")
            window.location.href = "touristpage.html";
        } else {
            alert("Invalid email or password");
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        alert("Something went wrong. Try again later.");
    }
}









