<?php

session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: index.php#login");
    exit;
}

$userName = $_SESSION['user_name'] ?? 'User';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Dashboard</title>

    <link
        rel="stylesheet"
        href="styles.css"
    >
</head>

<body>

<div class="dashboard">

    <h2>
        Welcome, <?= htmlspecialchars($userName) ?>!
    </h2>

    <p>You are successfully logged in.</p>

    <a
        href="logout.php"
        class="logout-button"
    >
        Logout
    </a>

</div>

</body>
</html>