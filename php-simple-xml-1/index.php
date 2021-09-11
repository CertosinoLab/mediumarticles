<?php
include 'restaurant-menu.php';

$restaurantMenu = new SimpleXMLElement($xmlstr);

for($i = 0; $i < count($restaurantMenu->food); $i++) {
    echo '<div style="width: 95vw; display: flex;">';
    echo '<div style="float: left;">';
    echo "<img style='border-radius: 20%;' width='120' height='160' src=".$restaurantMenu->food[$i]->image." />";
    echo "</div>";
    echo '<div style="float: right; line-height: 2; font-size: 16px; padding-left: 15px;">';
    echo "Name: ".$restaurantMenu->food[$i]->name."<br>";
    echo "Price: ".$restaurantMenu->food[$i]->price."<br>";
    echo "Description: ".$restaurantMenu->food[$i]->desc."<br>";
    echo "Calories: ".$restaurantMenu->food[$i]->calories."<br>";
    echo "Photo by: "."<a href=".$restaurantMenu->food[$i]->source.">"
        .$restaurantMenu->food[$i]->source."</a>"."<br>";
    echo "</div>";
    echo "</div>";
    echo "<br>";
    echo "<br>";
 }

