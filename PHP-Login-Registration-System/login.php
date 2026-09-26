<?php

session_start();
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: index.php");
    exit;
}

$email = strtolower(trim($_POST['loginEmail'] ?? ''));
$password = $_POST['loginPassword'] ?? '';

/* Required fields */
if ($email === '') {
    $_SESSION['login_error'] = 'Email is required.';
    header("Location: index.php#login");
    exit;
}

if ($password === '') {
    $_SESSION['login_error'] = 'Password is required.';
    header("Location: index.php#login");
    exit;
}

/* Email format */
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $_SESSION['login_error'] = 'Please enter a valid email address.';
    header("Location: index.php#login");
    exit;
}

/* Find account */
$stmt = $conn->prepare(
    "SELECT id, fname, password
     FROM users
     WHERE email = ?
     LIMIT 1"
);

if (!$stmt) {
    $_SESSION['login_error'] = 'Database error. Please try again later.';
    header("Location: index.php#login");
    exit;
}

$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

/* Account does not exist */
if ($stmt->num_rows === 0) {
    $stmt->close();

    $_SESSION['login_error'] =
        'No account is registered with this email. Please register first.';

    header("Location: index.php#login");
    exit;
}

/* Get account data */
$stmt->bind_result(
    $user_id,
    $fname,
    $hashed_password
);

$stmt->fetch();

/* Verify password */
if (!password_verify($password, $hashed_password)) {
    $stmt->close();

    $_SESSION['login_error'] =
        'Incorrect password.';

    header("Location: index.php#login");
    exit;
}

$stmt->close();

/* Successful login */
session_regenerate_id(true);

$_SESSION['user_id'] = $user_id;
$_SESSION['user_name'] = $fname;

unset($_SESSION['login_error']);

header("Location: dashboard.php");
exit;