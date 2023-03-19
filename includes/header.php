<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="includes/style.css" />
    <script src="includes/index.js"></script>
    <title>MemesHub</title>
</head>

<body>
    <header>
        <div class="headerLogo">
            <a href="#" id="logo">MemesHub</a>
        </div>
        <div class="headerNav" onclick="toggleNav('headerNav')">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <div id="mySidenav" class="sidenav">
            <p onclick="document.getElementById('loginForm').style.display='block'">
                Login
            </p>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
    </header>