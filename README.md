# FlickCarousel
A simple, slick and responsive javascript carousel. The concept is to just use classes and data attributes to initialize the carousel and use it without writing any javascript code. It is very simple and easy to setup and use it.
## Install
Bower: `bower install FlickCarousel --save`
## Initialize
CSS file to include in your HTML document
``` html
<link type="text/css" rel="stylesheet" href="../dist/css/flick-carousel.min.css" />
```
Javascript files to include in your HTML document
``` html
<script type="text/javascript" src="../bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="../bower_components/jquery-ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="../dist/js/flick-carousel.min.js"></script>
```
HTML structure to setup the carousel
``` html
<div class="flick-carousel flick-carousel-single" data-horizontal="true" data-auto="true" data-easing="easeOutExpo">
    <div class="flick-content">
        <div class="flick-item" style="background-image: url('images/img1.jpg');"></div>
        <div class="flick-item" style="background-image: url('images/img2.jpg');"></div>
        <div class="flick-item" style="background-image: url('images/img3.jpg');"></div>
    </div>
    <button class="flick-prev" type="button"></button>
    <button class="flick-next" type="button"></button>
    <div class="flick-bullets"></div>
</div>
```
## License
FlickCarousel is released under the [MIT license](http://desandro.mit-license.org). Have at it.
* * *
Made by Ammaar Latif
