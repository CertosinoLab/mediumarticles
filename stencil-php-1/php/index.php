<?php
function getComponent($name, $imgUrl, $price) {
    echo '<restaurant-menu-item name="'.$name.'" price="'.$price.'"
                      image-url="'.$imgUrl.'"></restaurant-menu-item>';
}

?>
<!doctype html>
<html dir="ltr" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
  <title>Stencil Component Starter</title>
  <script type="module" src="../www/build/stencil-php-1.esm.js" data-stencil></script>
  <script nomodule="" src="../www/build/stencil-php-1.js"></script>
</head>
<body>

<form method="post">
    <label>Select Pizza: </label>
    <input type="submit" name="button1" value="Pizza 1" />
    <input type="submit" name="button2" value="Pizza 2" />
    <input type="submit" name="button3" value="Pizza 3" />
</form>
<br />

<?php
if(array_key_exists('button1', $_POST)) {
    button1();
}
else if(array_key_exists('button2', $_POST)) {
    button2();
}
else if(array_key_exists('button3', $_POST)) {
    button3();
}

function button1() {
    getComponent("Pizza 1", "../www/assets/images/pizza-1.jpg", 5);
}
function button2() {
    getComponent("Pizza 2", "../www/assets/images/pizza-2.jpg", 7);
}
function button3() {
    getComponent("Pizza 3", "../www/assets/images/pizza-3.jpg", 10);
}
?>

</body>
</html>
