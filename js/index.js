function clock() {
  currentDate = new Date();


  hour = currentDate.getHours();
  min = currentDate.getMinutes();
  sec = currentDate.getSeconds();

  formatedTime = String( hour ).padStart( 2, '0' ) + ":" + String( min ).padStart( 2, '0' ) + ":" + String( sec ).padStart( 2, '0' );

  let timeTaskbar = document.querySelector( ".time" );
  timeTaskbar.textContent = formatedTime;
};
clock();
setInterval( clock, 1000 );
