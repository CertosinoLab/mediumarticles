<?php
include 'restaurant-menu.php';

$restaurantMenu = new SimpleXMLElement($xmlstr);

for($i = 0; $i < count($restaurantMenu->food); $i++) {
    echo '
<div style="width: 95vw; display: flex;">
    <div style="float: left;">
        <img style="border-radius: 20%;" width="120" height="160" src='.$restaurantMenu->food[$i]->image.' />
    </div>
    <div style="float: right; line-height: 2; font-size: 16px; padding-left: 15px;">
        Name: '.$restaurantMenu->food[$i]->name.'<br>
        Price: '.$restaurantMenu->food[$i]->price.'<br>
        Description: '.$restaurantMenu->food[$i]->desc.'<br>
        Calories: '.$restaurantMenu->food[$i]->calories.'<br>
        Photo by: '.'<a href='.$restaurantMenu->food[$i]->source.'>'.$restaurantMenu->food[$i]->source.'</a><br>
    </div>
</div>
<br>
<br>';
 }

