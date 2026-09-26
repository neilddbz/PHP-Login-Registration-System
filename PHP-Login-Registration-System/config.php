<?php

$servername = "localhost";
$username   = "logregs";
$password   = "LogRegs@2026";
$dbname     = "mydatabase";

$conn = new mysqli(
    $servername,
    $username,
    $password,
    $dbname
);

if ($conn->connect_error) {
    die("Database connection failed.");
}

$conn->set_charset("utf8mb4");

