(function()
{
    var CACHE = {
        VERSION : 1.0,
        DATE : '2018-02-26',
        NAME : 'mochi-sw-cache-master',
        LIST : [
            './',
            'index.html',
            'bootstrap/css/bootstrap.css',
            'bootstrap/css/bootstrap.min.css',
            'bootstrap/css/bootstrap-grid.min.css',
            'bootstrap/css/bootstrap-grid.css',
            'bootstrap/css/bootstrap-reboot.min.css',
            'bootstrap/css/bootstrap-reboot.css',
            'mochi/js/helpers/ViewerJS/example.local.css',
            'mochi/js/helpers/font-awesome/svg-with-js/css/fa-svg-with-js.css',
            'mochi/css/print.css',
            'mochi/css/style.css',
            'frontend/css/print.css',
            'frontend/css/style.css',
            'bootstrap/js/bootstrap.js',
            'bootstrap/js/bootstrap.min.js',
            'bootstrap/js/bootstrap.bundle.min.js',
            'bootstrap/js/bootstrap.bundle.js',
            'mochi/js/jquery/jquery.min.js',
            'mochi/js/mochi.min.js',
            'mochi/js/mochi.js',
            'mochi/js/helpers/sprintf.min.js',
            'mochi/js/helpers/underscore-min.js',
            'mochi/js/helpers/popper.min.js',
            'mochi/js/helpers/ViewerJS/webodf.js',
            'mochi/js/helpers/ViewerJS/compatibility.js',
            'mochi/js/helpers/ViewerJS/ui_utils.js',
            'mochi/js/helpers/ViewerJS/pdfjsversion.js',
            'mochi/js/helpers/ViewerJS/text_layer_builder.js',
            'mochi/js/helpers/ViewerJS/pdf.worker.js',
            'mochi/js/helpers/ViewerJS/pdf.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fontawesome-all.min.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fa-solid.min.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fa-brands.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fa-v4-shims.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fa-v4-shims.min.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fa-solid.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fontawesome.min.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fa-regular.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fa-brands.min.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fontawesome.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fa-regular.min.js',
            'mochi/js/helpers/font-awesome/svg-with-js/js/fontawesome-all.js',
            'mochi/js/helpers/underscore.string.min.js',
            'mochi/js/helpers/basil.min.js',
            'mochi/js/helpers/holder.min.js',
            'mochi/js/helpers/modernizr-custom.js',
            'frontend/js/onload.js',
            'mochi/js/helpers/ViewerJS/images/kogmbh.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-presentation.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-menuArrows.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-fullscreen.png',
            'mochi/js/helpers/ViewerJS/images/nlnet.png',
            'mochi/js/helpers/ViewerJS/images/texture.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-pageUp.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-zoomOut.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-download.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-zoomIn.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-pageDown.png',
            'frontend/img/brand/launcher-icon-1x.png',
            'frontend/img/brand/launcher-icon-4x.png',
            ],
        };

    self.addEventListener(
        'install',
        function(event)
        {
            self.skipWaiting();

            event.waitUntil(
                caches
                  .open(CACHE.NAME)
                  .then(
                    function(cache)
                    {
                        console.log('Opened cache: '+CACHE.NAME+' (v'+CACHE.VERSION.toString()+' - '+CACHE.DATE+')');
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

    self.addEventListener(
        'activate',
        function(event)
        {
            event.waitUntil(
                caches
                  .keys()
                  .then(
                    function(cacheNames)
                    {
                        return Promise.all(
                            cacheNames.map(
                                function(cacheName)
                                {
                                    if (cacheName != CACHE.NAME)
                                    {
                                        return caches.delete(cacheName)
                                    }
                                }
                                )
                            );
                    }
                    )
                );
        }
        );
}
)();
