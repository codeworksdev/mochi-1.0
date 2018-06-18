function mochi_init()
{
    this.setOption({
        CLICK_NAME                      : this.getDefaultOption( 'CLICK_NAME'                      ),
        DEBUG_MODE                      : this.getDefaultOption( 'DEBUG_MODE'                      ),
        ENABLE_SERVICE_WORKER           : this.getDefaultOption( 'ENABLE_SERVICE_WORKER'           ),
        LAZY_LOAD_PLUGINS               : this.getDefaultOption( 'LAZY_LOAD_PLUGINS'               ),
        SW_UPDATE_NOTIFICATIONS         : this.getDefaultOption( 'SW_UPDATE_NOTIFICATIONS'         ),
        SW_UPDATE_NOTIFICATIONS_OPTIONS : this.getDefaultOption( 'SW_UPDATE_NOTIFICATIONS_OPTIONS' ),
        SW_VERBOSE_SYNCING              : this.getDefaultOption( 'SW_VERBOSE_SYNCING'              ),
        SW_VERBOSE_SYNCING_OPTIONS      : this.getDefaultOption( 'SW_VERBOSE_SYNCING_OPTIONS'      ),
        });
};

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function mochi_before       ()         {};
function mochi_load         (data)     {};
function mochi_load_page    (data)     {};
function mochi_load_page0   (data)     {};
function mochi_load_view    (data)     {};
function mochi_load_view0   (data)     {};
function mochi_unload       (data)     {};
function mochi_unload_page  (data)     {};
function mochi_unload_page0 (data)     {};
function mochi_unload_view  (data)     {};
function mochi_unload_view0 (data)     {};
function mochi_last         ()         {};
function mochi_onchange     (data)     {};
function mochi_onmutation   (mutation) {};

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

$(document).ready(
    function(event)
    {
        $m.extend(
            'app',
            MyMochiApplication,
            {},
            function() {
                if (this.onload) this.onload()
                }
            );
    }
    );

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function MyMochiApplication(meta)
{
    this._options();
    this._html();
    this._vars();
    this._init();
};

MyMochiApplication.prototype =
{
    _options : function(){},
    _html    : function(){},
    _vars    : function(){},
    _init    : function(){},
    onload   : function(){},
};
