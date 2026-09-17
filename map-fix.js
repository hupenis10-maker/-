(function(){
  function fitWorld(){
    const map=document.getElementById('map');
    const svg=document.getElementById('world');
    if(!map||!svg)return;
    const w=Math.max(1,map.clientWidth);
    const h=Math.max(1,map.clientHeight);
    svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
    svg.setAttribute('preserveAspectRatio','none');
  }
  window.addEventListener('load',fitWorld);
  window.addEventListener('resize',fitWorld);
  setTimeout(fitWorld,0);
  setTimeout(fitWorld,100);
})();
