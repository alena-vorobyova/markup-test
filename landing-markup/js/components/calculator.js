var sliderSum = document.getElementById('js-calculator__slider-sum');
var sliderDate = document.getElementById('js-calculator__slider-date');
var sum=document.getElementById('js-calculator__sum');
var date=document.getElementById('js-calculator__date');
var payment=document.getElementById('js-calculator__payment');
var rate=Number.parseInt(document.getElementById('js-calculator__rate').innerHTML);
var koef;

noUiSlider.create(sliderSum, {
    start: 500000,
    step: 1000,
    connect: 'lower',
    range: {
        'min': 90000,
        'max': 2000000
    },
    format: wNumb({
        decimals: 0
    })
});

noUiSlider.create(sliderDate, {
    start: 36,
    step: 1,
    connect: 'lower',
    range: {
        'min': 13,
        'max': 60
    },
    format: wNumb({
        decimals: 0
    })
});

sliderSum.noUiSlider.on('update', function (values, handle) {
    var rez = values[handle];
    var outrez = (rez+'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    sum.innerHTML = outrez;
    calculator();
});

sliderDate.noUiSlider.on('update', function (values, handle) {
    date.innerHTML = values[handle];
    calculator();
});

function calculator() {
  var i = (rate / 12) / 100;
  var koef = (i * (Math.pow(1 + i, sliderDate.noUiSlider.get()))) / (Math.pow(1 + i, sliderDate.noUiSlider.get()) - 1);
  var rez = (sliderSum.noUiSlider.get() * koef).toFixed()
  var outrez = (rez+'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  payment.innerHTML=outrez;
}
