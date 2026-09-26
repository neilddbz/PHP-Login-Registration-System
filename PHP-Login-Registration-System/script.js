document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // FORMS
    // =====================================================

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");


    // =====================================================
    // LOGIN FIELDS
    // =====================================================

    const loginEmail =
        document.getElementById("loginEmail");

    const loginPassword =
        document.getElementById("loginPassword");

    const loginEmailError =
        document.getElementById("loginEmailError");

    const loginPasswordError =
        document.getElementById("loginPasswordError");


    // =====================================================
    // REGISTER FIELDS
    // =====================================================

    const fname =
        document.getElementById("fname");

    const mname =
        document.getElementById("mname");

    const lname =
        document.getElementById("lname");

    const email =
        document.getElementById("email");

    const confirmEmail =
        document.getElementById("confirmEmail");

    const password =
        document.getElementById("regPassword");

    const confirmPassword =
        document.getElementById("regConfirmPassword");


    // =====================================================
    // REGISTER ERRORS
    // =====================================================

    const fnameError =
        document.getElementById("fnameError");

    const mnameError =
        document.getElementById("mnameError");

    const lnameError =
        document.getElementById("lnameError");

    const emailError =
        document.getElementById("emailError");

    const confirmEmailError =
        document.getElementById("confirmEmailError");

    const passwordError =
        document.getElementById("passwordError");

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");


    // =====================================================
    // PASSWORD REQUIREMENTS
    // =====================================================

    const passwordRequirements =
        document.getElementById(
            "passwordRequirements"
        );


    // =====================================================
    // REGEX
    // =====================================================

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nameRegex =
        /^[A-Za-z\s]+$/;


    // =====================================================
    // SAFETY CHECK
    // =====================================================

    if (
        !loginForm &&
        !registerForm
    ) {
        return;
    }


    // =====================================================
    // ERROR FUNCTIONS
    // =====================================================

    function showError(
        input,
        errorElement,
        message
    ) {

        if (!input || !errorElement) {
            return;
        }


        input.classList.add(
            "input-error"
        );

        input.classList.remove(
            "input-success"
        );


        errorElement.textContent =
            message;

        errorElement.classList.add(
            "visible"
        );
    }


    // =====================================================
    // SUCCESS FUNCTION
    // =====================================================

    function showSuccess(
        input,
        errorElement
    ) {

        if (!input || !errorElement) {
            return;
        }


        input.classList.remove(
            "input-error"
        );

        input.classList.add(
            "input-success"
        );


        errorElement.textContent =
            "";

        errorElement.classList.remove(
            "visible"
        );
    }


    // =====================================================
    // CLEAR ERROR
    // =====================================================

    function clearError(
        input,
        errorElement
    ) {

        if (!input || !errorElement) {
            return;
        }


        input.classList.remove(
            "input-error"
        );

        input.classList.remove(
            "input-success"
        );


        errorElement.textContent =
            "";

        errorElement.classList.remove(
            "visible"
        );
    }


    // =====================================================
    // FOCUS FIELD
    // =====================================================

    function focusField(input) {

        if (!input) {
            return;
        }


        input.focus();


        input.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }


    // =====================================================
    // LOGIN EMAIL VALIDATION
    // =====================================================

    function validateLoginEmail() {

        const value =
            loginEmail.value.trim();


        if (value === "") {

            showError(
                loginEmail,
                loginEmailError,
                "Email is required."
            );

            return false;
        }


        if (
            !emailRegex.test(value)
        ) {

            showError(
                loginEmail,
                loginEmailError,
                "Please enter a valid email address."
            );

            return false;
        }


        showSuccess(
            loginEmail,
            loginEmailError
        );

        return true;
    }


    // =====================================================
    // LOGIN PASSWORD VALIDATION
    // =====================================================

    function validateLoginPassword() {

        const value =
            loginPassword.value;


        if (value === "") {

            showError(
                loginPassword,
                loginPasswordError,
                "Password is required."
            );

            return false;
        }


        showSuccess(
            loginPassword,
            loginPasswordError
        );

        return true;
    }


    // =====================================================
    // FIRST NAME
    // =====================================================

    function validateFirstName() {

        const value =
            fname.value.trim();


        if (value === "") {

            showError(
                fname,
                fnameError,
                "First name is required."
            );

            return false;
        }


        if (value.length < 3) {

            showError(
                fname,
                fnameError,
                "First name must be at least 3 characters."
            );

            return false;
        }


        if (
            !nameRegex.test(value)
        ) {

            showError(
                fname,
                fnameError,
                "First name must contain letters only."
            );

            return false;
        }


        showSuccess(
            fname,
            fnameError
        );

        return true;
    }


    // =====================================================
    // MIDDLE NAME
    // =====================================================

    function validateMiddleName() {

        const value =
            mname.value.trim();


        if (value === "") {

            showError(
                mname,
                mnameError,
                "Middle name is required. Enter N/A if you do not have one."
            );

            return false;
        }


        if (
            value.toUpperCase() === "N/A"
        ) {

            showSuccess(
                mname,
                mnameError
            );

            return true;
        }


        if (value.length < 3) {

            showError(
                mname,
                mnameError,
                "Middle name must be at least 3 characters or N/A."
            );

            return false;
        }


        if (
            !nameRegex.test(value)
        ) {

            showError(
                mname,
                mnameError,
                "Middle name must contain letters only."
            );

            return false;
        }


        showSuccess(
            mname,
            mnameError
        );

        return true;
    }


    // =====================================================
    // LAST NAME
    // =====================================================

    function validateLastName() {

        const value =
            lname.value.trim();


        if (value === "") {

            showError(
                lname,
                lnameError,
                "Last name is required."
            );

            return false;
        }


        /*
         * 2 characters are allowed.
         * Example:
         * Sy
         * Co
         */

        if (value.length < 2) {

            showError(
                lname,
                lnameError,
                "Last name must be at least 2 characters."
            );

            return false;
        }


        if (
            !nameRegex.test(value)
        ) {

            showError(
                lname,
                lnameError,
                "Last name must contain letters only."
            );

            return false;
        }


        showSuccess(
            lname,
            lnameError
        );

        return true;
    }


    // =====================================================
    // REGISTER EMAIL
    // =====================================================

    function validateEmail() {

        const value =
            email.value.trim();


        if (value === "") {

            showError(
                email,
                emailError,
                "Email is required."
            );

            return false;
        }


        if (
            !emailRegex.test(value)
        ) {

            showError(
                email,
                emailError,
                "Please enter a valid email address."
            );

            return false;
        }


        showSuccess(
            email,
            emailError
        );

        return true;
    }


    // =====================================================
    // CONFIRM EMAIL
    // =====================================================

    function validateConfirmEmail() {

        const value =
            confirmEmail.value.trim();


        if (value === "") {

            showError(
                confirmEmail,
                confirmEmailError,
                "Please confirm your email."
            );

            return false;
        }


        if (
            value !== email.value.trim()
        ) {

            showError(
                confirmEmail,
                confirmEmailError,
                "Emails do not match."
            );

            return false;
        }


        showSuccess(
            confirmEmail,
            confirmEmailError
        );

        return true;
    }


    // =====================================================
    // SHOW PASSWORD REQUIREMENTS
    // =====================================================

    function showPasswordRequirements() {

        if (!passwordRequirements) {
            return;
        }


        passwordRequirements.style.display =
            "block";


        passwordRequirements.classList.add(
            "visible"
        );
    }


    // =====================================================
    // HIDE PASSWORD REQUIREMENTS
    // =====================================================

    function hidePasswordRequirements() {

        if (!passwordRequirements) {
            return;
        }


        passwordRequirements.style.display =
            "none";


        passwordRequirements.classList.remove(
            "visible"
        );
    }


    // =====================================================
    // UPDATE PASSWORD REQUIREMENTS
    // =====================================================

    function updatePasswordRequirements() {

        if (!passwordRequirements) {
            return false;
        }


        const value =
            password.value;


        const validLength =
            value.length >= 8;

        const validUppercase =
            /[A-Z]/.test(value);

        const validNumber =
            /[0-9]/.test(value);

        const validSpecial =
            /[^A-Za-z0-9]/.test(value);


        const lengthRule =
            passwordRequirements.querySelector(
                '[data-rule="length"]'
            );


        const uppercaseRule =
            passwordRequirements.querySelector(
                '[data-rule="uppercase"]'
            );


        const numberRule =
            passwordRequirements.querySelector(
                '[data-rule="number"]'
            );


        const specialRule =
            passwordRequirements.querySelector(
                '[data-rule="special"]'
            );


        if (lengthRule) {

            lengthRule.classList.toggle(
                "valid",
                validLength
            );
        }


        if (uppercaseRule) {

            uppercaseRule.classList.toggle(
                "valid",
                validUppercase
            );
        }


        if (numberRule) {

            numberRule.classList.toggle(
                "valid",
                validNumber
            );
        }


        if (specialRule) {

            specialRule.classList.toggle(
                "valid",
                validSpecial
            );
        }


        return (
            validLength &&
            validUppercase &&
            validNumber &&
            validSpecial
        );
    }


    // =====================================================
    // REGISTER PASSWORD
    // =====================================================

    function validatePassword() {

        const value =
            password.value;


        /*
         * Always update the checklist
         * while Password is being used.
         */

        showPasswordRequirements();


        const validLength =
            value.length >= 8;

        const validUppercase =
            /[A-Z]/.test(value);

        const validNumber =
            /[0-9]/.test(value);

        const validSpecial =
            /[^A-Za-z0-9]/.test(value);


        // Update visual checklist

        updatePasswordRequirements();


        // =================================================
        // EMPTY
        // =================================================

        if (value === "") {

            showError(
                password,
                passwordError,
                "Password is required."
            );

            return false;
        }


        // =================================================
        // LESS THAN 8
        // =================================================

        if (!validLength) {

            showError(
                password,
                passwordError,
                "Password must be at least 8 characters."
            );

            return false;
        }


        // =================================================
        // NO UPPERCASE
        // =================================================

        if (!validUppercase) {

            showError(
                password,
                passwordError,
                "Password must contain at least 1 uppercase letter."
            );

            return false;
        }


        // =================================================
        // NO NUMBER
        // =================================================

        if (!validNumber) {

            showError(
                password,
                passwordError,
                "Password must contain at least 1 number."
            );

            return false;
        }


        // =================================================
        // NO SPECIAL CHARACTER
        // =================================================

        if (!validSpecial) {

            showError(
                password,
                passwordError,
                "Password must contain at least 1 special character."
            );

            return false;
        }


        // =================================================
        // EVERYTHING VALID
        // =================================================

        clearError(
            password,
            passwordError
        );


        /*
         * IMPORTANT:
         *
         * Kapag valid na lahat:
         *
         * 8+
         * uppercase
         * number
         * special character
         *
         * mawawala mismo ang checklist.
         */

        hidePasswordRequirements();


        return true;
    }


    // =====================================================
    // CONFIRM PASSWORD
    // =====================================================

    function validateConfirmPassword() {

        const value =
            confirmPassword.value;


        if (value === "") {

            showError(
                confirmPassword,
                confirmPasswordError,
                "Please confirm your password."
            );

            return false;
        }


        if (
            value !== password.value
        ) {

            showError(
                confirmPassword,
                confirmPasswordError,
                "Passwords do not match."
            );

            return false;
        }


        showSuccess(
            confirmPassword,
            confirmPasswordError
        );

        return true;
    }


    // =====================================================
    // LOGIN SUBMIT
    // ONE FIELD AT A TIME
    // =====================================================

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                // EMAIL FIRST

                if (
                    !validateLoginEmail()
                ) {

                    focusField(
                        loginEmail
                    );

                    return;
                }


                // PASSWORD SECOND

                if (
                    !validateLoginPassword()
                ) {

                    focusField(
                        loginPassword
                    );

                    return;
                }


                /*
                 * Both valid.
                 * PHP can now process login.
                 */

                loginForm.submit();

            }
        );
    }


    // =====================================================
    // REGISTER SUBMIT
    // ONE FIELD AT A TIME
    // =====================================================

    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                // FIRST NAME

                if (
                    !validateFirstName()
                ) {

                    focusField(fname);

                    return;
                }


                // MIDDLE NAME

                if (
                    !validateMiddleName()
                ) {

                    focusField(mname);

                    return;
                }


                // LAST NAME

                if (
                    !validateLastName()
                ) {

                    focusField(lname);

                    return;
                }


                // EMAIL

                if (
                    !validateEmail()
                ) {

                    focusField(email);

                    return;
                }


                // CONFIRM EMAIL

                if (
                    !validateConfirmEmail()
                ) {

                    focusField(
                        confirmEmail
                    );

                    return;
                }


                // PASSWORD

                if (
                    !validatePassword()
                ) {

                    focusField(password);

                    return;
                }


                // CONFIRM PASSWORD

                if (
                    !validateConfirmPassword()
                ) {

                    focusField(
                        confirmPassword
                    );

                    return;
                }


                /*
                 * Everything is valid.
                 * PHP can now process registration.
                 */

                registerForm.submit();

            }
        );
    }


    // =====================================================
    // LOGIN EMAIL INPUT
    // =====================================================

    if (loginEmail) {

        loginEmail.addEventListener(
            "input",
            function () {

                validateLoginEmail();

            }
        );
    }


    // =====================================================
    // LOGIN PASSWORD INPUT
    // =====================================================

    if (loginPassword) {

        loginPassword.addEventListener(
            "input",
            function () {

                validateLoginPassword();

            }
        );
    }


    // =====================================================
    // LOGIN EMAIL FOCUS
    // =====================================================

    if (loginEmail) {

        loginEmail.addEventListener(
            "focus",
            function () {

                if (
                    loginEmail.value.trim() === ""
                ) {

                    showError(
                        loginEmail,
                        loginEmailError,
                        "Email is required."
                    );
                }

            }
        );
    }


    // =====================================================
    // LOGIN PASSWORD FOCUS
    // =====================================================

    if (loginPassword) {

        loginPassword.addEventListener(
            "focus",
            function () {

                if (
                    loginPassword.value === ""
                ) {

                    showError(
                        loginPassword,
                        loginPasswordError,
                        "Password is required."
                    );
                }

            }
        );
    }


    // =====================================================
    // FIRST NAME INPUT
    // =====================================================

    if (fname) {

        fname.addEventListener(
            "input",
            function () {

                validateFirstName();

            }
        );


        fname.addEventListener(
            "focus",
            function () {

                if (
                    fname.value.trim() === ""
                ) {

                    showError(
                        fname,
                        fnameError,
                        "First name is required."
                    );
                }

            }
        );
    }


    // =====================================================
    // MIDDLE NAME INPUT
    // =====================================================

    if (mname) {

        mname.addEventListener(
            "input",
            function () {

                validateMiddleName();

            }
        );


        mname.addEventListener(
            "focus",
            function () {

                if (
                    mname.value.trim() === ""
                ) {

                    showError(
                        mname,
                        mnameError,
                        "Middle name is required. Enter N/A if you do not have one."
                    );
                }

            }
        );
    }


    // =====================================================
    // LAST NAME INPUT
    // =====================================================

    if (lname) {

        lname.addEventListener(
            "input",
            function () {

                validateLastName();

            }
        );


        lname.addEventListener(
            "focus",
            function () {

                if (
                    lname.value.trim() === ""
                ) {

                    showError(
                        lname,
                        lnameError,
                        "Last name is required."
                    );
                }

            }
        );
    }


    // =====================================================
    // REGISTER EMAIL INPUT
    // =====================================================

    if (email) {

        email.addEventListener(
            "input",
            function () {

                validateEmail();


                if (
                    confirmEmail &&
                    confirmEmail.value !== ""
                ) {

                    validateConfirmEmail();

                }

            }
        );


        email.addEventListener(
            "focus",
            function () {

                if (
                    email.value.trim() === ""
                ) {

                    showError(
                        email,
                        emailError,
                        "Email is required."
                    );
                }

            }
        );
    }


    // =====================================================
    // CONFIRM EMAIL INPUT
    // =====================================================

    if (confirmEmail) {

        confirmEmail.addEventListener(
            "input",
            function () {

                validateConfirmEmail();

            }
        );


        confirmEmail.addEventListener(
            "focus",
            function () {

                if (
                    confirmEmail.value.trim() === ""
                ) {

                    showError(
                        confirmEmail,
                        confirmEmailError,
                        "Please confirm your email."
                    );
                }

            }
        );
    }


    // =====================================================
    // PASSWORD FOCUS
    // =====================================================

    if (password) {

        password.addEventListener(
            "focus",
            function () {

                /*
                 * Checklist appears ONLY when
                 * Password field is focused.
                 */

                showPasswordRequirements();


                updatePasswordRequirements();


                if (
                    password.value === ""
                ) {

                    showError(
                        password,
                        passwordError,
                        "Password is required."
                    );

                }

            }
        );


        // =================================================
        // PASSWORD INPUT
        // =================================================

        password.addEventListener(
            "input",
            function () {

                /*
                 * Re-check password every keystroke.
                 */

                validatePassword();


                /*
                 * If Confirm Password already
                 * contains text, update it too.
                 */

                if (
                    confirmPassword &&
                    confirmPassword.value !== ""
                ) {

                    validateConfirmPassword();

                }

            }
        );

    }


    // =====================================================
    // CONFIRM PASSWORD FOCUS
    // =====================================================

    if (confirmPassword) {

        confirmPassword.addEventListener(
            "focus",
            function () {

                if (
                    confirmPassword.value === ""
                ) {

                    showError(
                        confirmPassword,
                        confirmPasswordError,
                        "Please confirm your password."
                    );

                }

            }
        );


        // =================================================
        // CONFIRM PASSWORD INPUT
        // =================================================

        confirmPassword.addEventListener(
            "input",
            function () {

                validateConfirmPassword();

            }
        );

    }


    // =====================================================
    // SHOW / HIDE PASSWORD
    // =====================================================

    document
        .querySelectorAll(
            ".toggle-password"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const target =
                        button.getAttribute(
                            "data-target"
                        );


                    const input =
                        document.getElementById(
                            target
                        );


                    if (!input) {
                        return;
                    }


                    if (
                        input.type === "password"
                    ) {

                        input.type = "text";

                        button.textContent =
                            "Hide";

                    } else {

                        input.type = "password";

                        button.textContent =
                            "Show";

                    }

                }
            );

        });


    // =====================================================
    // LOGIN → REGISTER
    // =====================================================

    const loginToRegister =
        document.getElementById(
            "loginToRegister"
        );


    if (loginToRegister) {

        loginToRegister.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                if (loginForm) {

                    loginForm.classList.remove(
                        "active"
                    );

                }


                if (registerForm) {

                    registerForm.classList.add(
                        "active"
                    );

                }


                history.replaceState(
                    null,
                    "",
                    "#register"
                );

            }
        );

    }


    // =====================================================
    // REGISTER → LOGIN
    // =====================================================

    const registerToLogin =
        document.getElementById(
            "registerToLogin"
        );


    if (registerToLogin) {

        registerToLogin.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                if (registerForm) {

                    registerForm.classList.remove(
                        "active"
                    );

                }


                if (loginForm) {

                    loginForm.classList.add(
                        "active"
                    );

                }


                history.replaceState(
                    null,
                    "",
                    "#login"
                );

            }
        );

    }


    // =====================================================
    // INITIAL STATE
    // =====================================================

    clearError(
        loginEmail,
        loginEmailError
    );

    clearError(
        loginPassword,
        loginPasswordError
    );

    clearError(
        fname,
        fnameError
    );

    clearError(
        mname,
        mnameError
    );

    clearError(
        lname,
        lnameError
    );

    clearError(
        email,
        emailError
    );

    clearError(
        confirmEmail,
        confirmEmailError
    );

    clearError(
        password,
        passwordError
    );

    clearError(
        confirmPassword,
        confirmPasswordError
    );


    /*
     * Password requirements MUST be hidden
     * when the page first loads.
     */

    hidePasswordRequirements();

});
