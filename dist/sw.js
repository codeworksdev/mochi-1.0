(function()
{
    var CACHE = {
        VERSION : 1.0,
        DATE : '2018-07-11',
        NAME : 'mochi-sw-cache-master',
        LIST : [
            './',
            'bootstrap/css/bootstrap.css',
            'bootstrap/css/bootstrap.min.css',
            'bootstrap/css/bootstrap-grid.css',
            'bootstrap/css/bootstrap-grid.min.css',
            'bootstrap/css/bootstrap-reboot.css',
            'bootstrap/css/bootstrap-reboot.min.css',
            'bootstrap/js/bootstrap.bundle.js',
            'bootstrap/js/bootstrap.bundle.min.js',
            'bootstrap/js/bootstrap.js',
            'bootstrap/js/bootstrap.min.js',
            'frontend/css/print.css',
            'frontend/css/style.css',
            'frontend/img/brand/launcher-icon-1x.png',
            'frontend/img/brand/launcher-icon-4x.png',
            'frontend/js/onload.js',
            'index.html',
            'mochi/css/helpers/animate.less/dist/css/animate.css',
            'mochi/js/helpers/basil.min.js',
            'mochi/js/helpers/Chart.bundle.min.js',
            'mochi/js/helpers/font-awesome-free/js/all.js',
            'mochi/js/helpers/holder.min.js',
            'mochi/js/helpers/iScroll/build/iscroll.js',
            'mochi/js/helpers/iScroll/build/iscroll.min.js',
            'mochi/js/helpers/iScroll/build/iscroll-infinite.js',
            'mochi/js/helpers/iScroll/build/iscroll-infinite.min.js',
            'mochi/js/helpers/iScroll/build/iscroll-lite.js',
            'mochi/js/helpers/iScroll/build/iscroll-lite.min.js',
            'mochi/js/helpers/iScroll/build/iscroll-probe.js',
            'mochi/js/helpers/iScroll/build/iscroll-probe.min.js',
            'mochi/js/helpers/iScroll/build/iscroll-zoom.js',
            'mochi/js/helpers/iScroll/build/iscroll-zoom.min.js',
            'mochi/js/helpers/modernizr-custom.js',
            'mochi/js/helpers/popper.min.js',
            'mochi/js/helpers/sprintf.min.js',
            'mochi/js/helpers/underscore.string.min.js',
            'mochi/js/helpers/underscore-min.js',
            'mochi/js/helpers/ViewerJS/example.local.css',
            'mochi/js/helpers/ViewerJS/HeaderCompiled.html',
            'mochi/js/helpers/ViewerJS/HeaderCompiled.js',
            'mochi/js/helpers/ViewerJS/images/kogmbh.png',
            'mochi/js/helpers/ViewerJS/images/nlnet.png',
            'mochi/js/helpers/ViewerJS/images/texture.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-download.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-fullscreen.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-menuArrows.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-pageDown.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-pageUp.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-presentation.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-zoomIn.png',
            'mochi/js/helpers/ViewerJS/images/toolbarButton-zoomOut.png',
            'mochi/js/helpers/ViewerJS/index.html',
            'mochi/js/helpers/ViewerJS/index-template.html',
            'mochi/js/helpers/ViewerJS/ODFViewerPlugin.css',
            'mochi/js/helpers/ViewerJS/ODFViewerPlugin.js',
            'mochi/js/helpers/ViewerJS/PDFViewerPlugin.css',
            'mochi/js/helpers/ViewerJS/PDFViewerPlugin.js',
            'mochi/js/helpers/ViewerJS/PluginLoader.js',
            'mochi/js/helpers/ViewerJS/tools/replaceByFileContents.js',
            'mochi/js/helpers/ViewerJS/viewer.css',
            'mochi/js/helpers/ViewerJS/viewer.js',
            'mochi/js/helpers/ViewerJS/viewerTouch.css',
            'mochi/js/jquery/jquery.min.js',
            'mochi/js/jquery/ui/images/ui-icons_444444_256x240.png',
            'mochi/js/jquery/ui/images/ui-icons_555555_256x240.png',
            'mochi/js/jquery/ui/images/ui-icons_777620_256x240.png',
            'mochi/js/jquery/ui/images/ui-icons_777777_256x240.png',
            'mochi/js/jquery/ui/images/ui-icons_cc0000_256x240.png',
            'mochi/js/jquery/ui/images/ui-icons_ffffff_256x240.png',
            'mochi/js/jquery/ui/jquery-ui.css',
            'mochi/js/jquery/ui/jquery-ui.js',
            'mochi/js/jquery/ui/jquery-ui.min.css',
            'mochi/js/jquery/ui/jquery-ui.min.js',
            'mochi/js/jquery/ui/jquery-ui.structure.css',
            'mochi/js/jquery/ui/jquery-ui.structure.min.css',
            'mochi/js/jquery/ui/jquery-ui.theme.css',
            'mochi/js/jquery/ui/jquery-ui.theme.min.css',
            'mochi/js/libraries.js',
            'mochi/js/mochi.js',
            'mochi/js/mochi.min.js',
            'mochi/js/plugins/dialog/dist/dialog.js',
            'mochi/js/plugins/dialog/dist/dialog.min.js',
            'mochi/js/plugins/veeva/dist/veeva.js',
            'mochi/js/plugins/veeva/dist/veeva.min.js',
            'mochi/js/plugins/veeva/dist/veeva-library.js',
            'mochi/js/plugins/veeva/dist/veeva-library.min.js',
            'offline.html',
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
