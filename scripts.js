$('document').ready(function () {
    console.log('document ready callback fn is invoked')
    $('.menu-body').hide()
})

$('body').on('click', '.drp-down-btn', function () {
    $('.menu-body').toggle()
})

$("#button").click(function() {
    $('.transform').toggleClass('transform-active');
});

function fade_in() {
    document.getElementById('button');
    $('.fade_in').toggleClass('.fade_in_active');
}

function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

function fadeIn() {
    const element = document.getElementById('fadeEl');
    console.log(element.style);
      // Initilize the opacity with 0.1
      let initOpacity = 0.1;
      element.style.display = 'block';
      // Update the opacity with 0.1 every 10 milliseconds
      const timer = setInterval(function () {
        if (initOpacity >= 1) {
          clearInterval(timer);
        }
        element.style.opacity = initOpacity;
        element.style.filter = 'alpha(opacity=' + initOpacity * 100 + ")";
        initOpacity += initOpacity * 0.1;
      }, 500);
    }
    
fadeIn()