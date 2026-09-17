(function(){
  function fix(){
    const svg=document.getElementById('world');
    if(!svg)return;
    // game.js uses pixel coordinates, so an early/zero-size viewBox can hide the whole map.
    svg.removeAttribute('viewBox');
    svg.removeAttribute('preserveAspectRatio');
  }
  window.addEventListener('resize',fix);
  [0,100,500,1000,2000,4000,8000].forEach(ms=>setTimeout(fix,ms));
})();
