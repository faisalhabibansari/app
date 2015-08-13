$( document ).on( "ready", function(){
  $('#calcTip').on('click', calcTip);
  $('#saveSettings').on('click', saveSettings);

  var tipPercentSetting = localStorage.getItem('tipPercentage');

  if (tipPercentSetting) {
   tipPercent = parseFloat(tipPercentSetting);
  }

  $('#tipPercentage').val(tipPercent);
});



	
var tipPercent =20;
var calcTip = function() {

//alert("hello");

  var billAmt = Number( $('#billAmount').val() );
    var tipAmt = billAmt * tipPercent/100 ;
    var totalAmt = billAmt + tipAmt;
    $('#tipAmount').text('$' + tipAmt.toFixed(2));
  $('#totalAmount').text('$' + totalAmt.toFixed(2));
//$('#totalAmount').text('$' + billAmt.toFixed(2));

};

var saveSettings = function() {
  try {
   var tipPct = parseFloat( $('#tipPercentage').val() );
   localStorage.setItem('tipPercentage', tipPct);
   tipPercent = tipPct;
   window.history.back();

  } catch (ex) {
   alert('Tip percentage must be a decimal value');
  }
};
