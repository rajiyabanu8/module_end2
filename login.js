const apiurl = "https://69303698778bbf9e00706081.mockapi.io/userdetail";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("userForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("floatingInput").value.trim();
    const password = document.getElementById("floatingPassword").value;

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await fetch(apiurl);
      const users = await res.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        alert("Login successful");
        window.location.href = "touristpage.html";
        
      } else {
        alert("Invalid email or password");
      }
    } catch {
      alert("Server error");
    }
  });
});
