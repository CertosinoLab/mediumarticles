<?php
function getComponent()
{
  $numero = rand(0, 1);
  if ($numero === 0) {
    echo '<testo-colorato mio-testo="' . "è uscito 0" . '"></testo-colorato>';
  } else {
    echo '<testo-colorato mio-testo="' . "è uscito 1" . '"></testo-colorato>';
  }
}

?>
<!doctype html>
<html dir="ltr" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
  <title>Stencil Component Starter</title>
  <script type="module" src="../www/build/stencil-chartjs.esm.js" data-stencil></script>
  <script nomodule="" src="../www/build/stencil-chartjs.js" data-stencil></script>
</head>
<body>
<?php getComponent(); ?>
<dataset-selector></dataset-selector>
<chart-container></chart-container>

</body>
</html>
