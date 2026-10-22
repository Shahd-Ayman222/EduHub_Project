// ================= REGISTER =================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("registerName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const error =
            document.getElementById("registerError");


        if (password !== confirmPassword) {

            error.textContent =
                "Passwords do not match.";

            return;
        }


        let users =
            JSON.parse(localStorage.getItem("users")) || [];


        const existingUser =
            users.find(user => user.email === email);


        if (existingUser) {

            error.textContent =
                "This email is already registered.";

            return;
        }


        const newUser = {

            id: Date.now(),

            name: name,

            email: email,

            password: password,

            enrolledCourses: [],

            progress: {}

        };


        users.push(newUser);


        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );


        // Login user automatically

        localStorage.setItem(
            "currentUser",
            JSON.stringify(newUser)
        );


        window.location.href = "dashboard.html";

    });

}


// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        const error =
            document.getElementById("loginError");


        const users =
            JSON.parse(localStorage.getItem("users")) || [];


        const user =
            users.find(
                user =>
                    user.email === email &&
                    user.password === password
            );


        if (!user) {

            error.textContent =
                "Invalid email or password.";

            return;
        }


        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );


        window.location.href = "dashboard.html";

    });

}