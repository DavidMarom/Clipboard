function aa(){
  
var str='davidmarom.product@gmail.com';
// Create new element
var el = document.createElement('textarea');
// Set value (string to be copied)
el.value = str;
// Set non-editable to avoid focus and move outside of view
el.setAttribute('readonly', '');
el.style = {position: 'absolute', left: '-9999px'};
document.body.appendChild(el);
// Select text inside element
el.select();
// Copy text to clipboard
document.execCommand('copy');
// Remove temporary element
document.body.removeChild(el);        


}

function clickHandler(e) {
    setTimeout(aa, 1000);
  }
  
  function main() {
    // Initialization work goes here.
  }
  
  // Add event listeners once the DOM has fully loaded by listening for the
  // `DOMContentLoaded` event on the document, and adding your listeners to
  // specific elements when it triggers.
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', clickHandler);
    main();
  });