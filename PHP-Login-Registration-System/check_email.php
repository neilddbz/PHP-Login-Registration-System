<?php

require 'config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid request method.'
    ]);
    exit;
}

$email = strtolower(trim($_POST['email'] ?? ''));

if ($email === '') {
    echo json_encode([
        'status' => 'invalid',
        'message' => 'Email is required.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'status' => 'invalid',
        'message' => 'Invalid email format.'
    ]);
    exit;
}

$stmt = $conn->prepare(
    "SELECT id
     FROM users
     WHERE email = ?
     LIMIT 1"
);

if (!$stmt) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Database error.'
    ]);
    exit;
}

$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {

    echo json_encode([
        'status' => 'taken',
        'message' => 'This email is already registered.'
    ]);

} else {

    echo json_encode([
        'status' => 'available',
        'message' => 'Email is available.'
    ]);
}

$stmt->close();