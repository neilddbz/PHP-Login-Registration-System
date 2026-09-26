<?php

session_start();
require 'config.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

/* Return to register */
function returnToRegister($message)
{
    $_SESSION['register_error'] = $message;
    header("Location: index.php#register");
    exit;
}

/* Only POST */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: index.php");
    exit;
}

/* Get form data */
$fname = trim($_POST['fname'] ?? '');
$mname = trim($_POST['mname'] ?? '');
$lname = trim($_POST['lname'] ?? '');

$email = strtolower(trim($_POST['email'] ?? ''));
$confirmEmail = strtolower(trim($_POST['confirmEmail'] ?? ''));

$password = $_POST['password'] ?? '';
$confirmPassword = $_POST['confirmPassword'] ?? '';

/* Required fields */
if ($fname === '') {
    returnToRegister('First name is required.');
}

if ($mname === '') {
    returnToRegister(
        'Middle name is required. Enter N/A if you do not have one.'
    );
}

if ($lname === '') {
    returnToRegister('Last name is required.');
}

if ($email === '') {
    returnToRegister('Email is required.');
}

if ($confirmEmail === '') {
    returnToRegister('Confirm email is required.');
}

if ($password === '') {
    returnToRegister('Password is required.');
}

if ($confirmPassword === '') {
    returnToRegister('Confirm password is required.');
}

/* Name validation */
$nameRegex = '/^[A-Za-z\s]{3,}$/';

if (!preg_match($nameRegex, $fname)) {
    returnToRegister(
        'First name must be at least 3 letters and contain letters only.'
    );
}

if (
    strtoupper($mname) !== 'N/A' &&
    !preg_match($nameRegex, $mname)
) {
    returnToRegister(
        'Middle name must be at least 3 letters or N/A.'
    );
}

if (!preg_match($nameRegex, $lname)) {
    returnToRegister(
        'Last name must be at least 3 letters and contain letters only.'
    );
}

/* Email validation */
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    returnToRegister(
        'Please enter a valid email address.'
    );
}

if ($email !== $confirmEmail) {
    returnToRegister(
        'Emails do not match.'
    );
}

/* Password validation */
if (strlen($password) < 8) {
    returnToRegister(
        'Password must be at least 8 characters.'
    );
}

if (!preg_match('/[A-Z]/', $password)) {
    returnToRegister(
        'Password must contain at least 1 uppercase letter.'
    );
}

if (!preg_match('/\d/', $password)) {
    returnToRegister(
        'Password must contain at least 1 number.'
    );
}

if (!preg_match('/[^A-Za-z0-9]/', $password)) {
    returnToRegister(
        'Password must contain at least 1 special character.'
    );
}

if ($password !== $confirmPassword) {
    returnToRegister(
        'Passwords do not match.'
    );
}

/* Check existing email */
$stmt = $conn->prepare(
    "SELECT id
     FROM users
     WHERE email = ?
     LIMIT 1"
);

if (!$stmt) {
    returnToRegister(
        'Database error while checking email.'
    );
}

$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->close();

    returnToRegister(
        'This email is already registered.'
    );
}

$stmt->close();

/* Hash password */
$hashedPassword = password_hash(
    $password,
    PASSWORD_DEFAULT
);

if ($hashedPassword === false) {
    returnToRegister(
        'Unable to secure your password.'
    );
}

/* Insert user */
$stmt = $conn->prepare(
    "INSERT INTO users
    (fname, mname, lname, email, password)
    VALUES (?, ?, ?, ?, ?)"
);

if (!$stmt) {
    returnToRegister(
        'Database error while creating your account.'
    );
}

$stmt->bind_param(
    "sssss",
    $fname,
    $mname,
    $lname,
    $email,
    $hashedPassword
);

if ($stmt->execute()) {

    $stmt->close();

    $_SESSION['register_success'] =
        'Registration successful! You can now sign in.';

    header("Location: index.php#login");
    exit;
}

$stmt->close();

returnToRegister(
    'Failed to register. Please try again later.'
);