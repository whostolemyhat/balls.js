<?php require_once('../../includes/head.php');?>
<style>
canvas {
    position:absolute;
    top:0;
    left:0;
    z-index:-10;
}
</style>
<canvas id="canvas" width="300" height="300"></canvas>

<header>
<h1 id="huge">Balls!</h1>
</header>

<nav id="nav" class="grid_2">
    <?php include('../../includes/nav.html'); ?>
</nav>

<script type="text/javascript" src="/js/libs/jquery-1.5.1.min.js"></script>

<script type="text/javascript" src="balls.js"></script>

<?php require_once('includes/footer.php');?>