<?php
session_start();

$show = $_GET['show'] ?? '';

$registerSuccess = $_SESSION['register_success'] ?? '';
$registerError = $_SESSION['register_error'] ?? '';
$loginError = $_SESSION['login_error'] ?? '';

$loginActive =
    $show === 'login' ||
    $registerSuccess !== '' ||
    $loginError !== '';

$registerActive = !$loginActive;

unset(
    $_SESSION['register_success'],
    $_SESSION['register_error'],
    $_SESSION['login_error']
);
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        <?= $loginActive ? 'Sign In' : 'Sign Up' ?>
    </title>

    <link rel="stylesheet" href="styles.css">

</head>

<body>

<div class="container">

    <!-- LOGIN -->

    <form
        id="loginForm"
        class="<?= $loginActive ? 'active' : '' ?>"
        method="POST"
        action="login.php"
        novalidate
    >

        <h2>Sign In</h2>

        <?php if ($registerSuccess): ?>

            <div class="success-message">
                <?= htmlspecialchars($registerSuccess) ?>
            </div>

        <?php endif; ?>


        <div class="field">

            <input
                type="email"
                name="loginEmail"
                id="loginEmail"
                placeholder="Email"
                autocomplete="email"
            >

            <div
                id="loginEmailError"
                class="field-error"
            ></div>

        </div>


        <div class="field">

            <div class="password-wrapper">

                <input
                    type="password"
                    name="loginPassword"
                    id="loginPassword"
                    placeholder="Password"
                    autocomplete="current-password"
                >

                <button
                    type="button"
                    class="toggle-password"
                    data-target="loginPassword"
                >
                    Show
                </button>

            </div>

            <div
                id="loginPasswordError"
                class="field-error"
            ></div>

        </div>


        <?php if ($loginError): ?>

            <div class="server-error">
                <?= htmlspecialchars($loginError) ?>
            </div>

        <?php endif; ?>


        <button
            type="submit"
            class="submit-button"
        >
            Sign In
        </button>


        <p class="form-switch">

            Don't have an account?

            <button
                type="button"
                id="loginToRegister"
            >
                Sign Up
            </button>

        </p>

    </form>


    <!-- REGISTER -->

    <form
        id="registerForm"
        class="<?= $registerActive ? 'active' : '' ?>"
        method="POST"
        action="register.php"
        novalidate
    >

        <h2>Sign Up</h2>


        <!-- FIRST NAME -->

        <div class="field">

            <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
                autocomplete="given-name"
            >

            <div
                id="fnameError"
                class="field-error"
            ></div>

        </div>


        <!-- MIDDLE NAME -->

        <div class="field">

            <input
                type="text"
                name="mname"
                id="mname"
                placeholder="Middle Name (or N/A)"
                autocomplete="additional-name"
            >

            <div
                id="mnameError"
                class="field-error"
            ></div>

        </div>


        <!-- LAST NAME -->

        <div class="field">

            <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Last Name"
                autocomplete="family-name"
            >

            <div
                id="lnameError"
                class="field-error"
            ></div>

        </div>


        <!-- EMAIL -->

        <div class="field">

            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autocomplete="email"
            >

            <div
                id="emailError"
                class="field-error"
            ></div>

        </div>


        <!-- CONFIRM EMAIL -->

        <div class="field">

            <input
                type="email"
                name="confirmEmail"
                id="confirmEmail"
                placeholder="Confirm Email"
                autocomplete="email"
            >

            <div
                id="confirmEmailError"
                class="field-error"
            ></div>

        </div>


        <!-- PASSWORD -->

        <div class="field">

            <div class="password-wrapper">

                <input
                    type="password"
                    name="password"
                    id="regPassword"
                    placeholder="Password"
                    autocomplete="new-password"
                >

                <button
                    type="button"
                    class="toggle-password"
                    data-target="regPassword"
                >
                    Show
                </button>

            </div>

            <div
                id="passwordError"
                class="field-error"
            ></div>

            <div
                id="passwordRequirements"
                class="password-requirements"
            >
                <div data-rule="length">
                    8 or more characters
                </div>

                <div data-rule="uppercase">
                    At least 1 uppercase letter
                </div>

                <div data-rule="number">
                    At least 1 number
                </div>

                <div data-rule="special">
                    At least 1 special character
                </div>
            </div>

        </div>


        <!-- CONFIRM PASSWORD -->

        <div class="field">

            <div class="password-wrapper">

                <input
                    type="password"
                    name="confirmPassword"
                    id="regConfirmPassword"
                    placeholder="Confirm Password"
                    autocomplete="new-password"
                >

                <button
                    type="button"
                    class="toggle-password"
                    data-target="regConfirmPassword"
                >
                    Show
                </button>

            </div>

            <div
                id="confirmPasswordError"
                class="field-error"
            ></div>

        </div>


        <button
            type="submit"
            class="submit-button"
        >
            Sign Up
        </button>


        <p class="form-switch">

            Already have an account?

            <button
                type="button"
                id="registerToLogin"
            >
                Sign In
            </button>

        </p>

    </form>

</div>


<script src="script.js"></script>

</body>
</html>
