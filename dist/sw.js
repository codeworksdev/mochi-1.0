(function(){

    var CACHE = {
        ENABLED : true,
        NAME : 'my-mochi-site-cache-v1',
        LIST : [
            '/',
            '/bootstrap/css/bootstrap-theme.min.css',
            '/bootstrap/css/bootstrap.min.css',
            '/bootstrap/js/bootstrap.min.js',
            '/frontend/css/ie.css',
            '/frontend/css/print.css',
            '/frontend/css/style.css',
            '/frontend/img/brand/launcher-icon-1x.png',
            '/frontend/img/brand/launcher-icon-4x.png',
            '/frontend/js/onload.js',
            '/mochi/css/ext/font-awesome/css/font-awesome.min.css',
            '/mochi/css/print.css',
            '/mochi/css/style.css',
            '/mochi/js/helpers/basil.min.js',
            '/mochi/js/helpers/modernizr-min.js',
            '/mochi/js/helpers/sprintf.min.js',
            '/mochi/js/helpers/underscore-min.js',
            '/mochi/js/helpers/underscore.string.min.js',
            '/mochi/js/jquery/jquery.min.js',
            '/mochi/js/mochi.min.js',
            ]
        };

    if (CACHE.ENABLED)
    {
        self.addEventListener(
            'install',
            function(event)
            {
                event.waitUntil(
                    caches
                      .open(CACHE.NAME)
                      .then(
                        function(cache)
                        {
                            console.log('Opened cache: '+CACHE.NAME);
                            return cache.addAll(CACHE.LIST);
                        }
                        )
                    );
            }
            );

        self.addEventListener(
            'fetch',
            function(event)
            {
                event.respondWith(
                    caches.match(event.request)
                      .then(
                        function(response)
                        {
                            if (response) return response;
                            else var fetchRequest = event.request.clone();

                            return fetch(fetchRequest).then(
                                function(response)
                                {
                                    if (
                                      !response
                                      || response.status !== 200
                                      || response.type !== 'basic')
                                    {
                                        return response
                                    }

                                    var responseToCache = response.clone();

                                    caches
                                      .open(CACHE.NAME)
                                      .then(
                                        function(cache)
                                        {
                                            cache.put(
                                                event.request,
                                                responseToCache
                                                );
                                        }
                                        );

                                    return response
                                }
                                );
                        }
                        )
                    );
            }
            );
    }
})();
