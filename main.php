<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === 'dog' && $password === 'dog') {
        header('Location: welcome.php');
        exit;
    }
}
?>