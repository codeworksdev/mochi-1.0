function mochi_init()
{
    this.setOption(
        {
            CLICK_NAME              : 'auto',
            ENABLE_SERVICE_WORKER   : false,
            SW_VERBOSE_SYNCING      : true,
            SW_UPDATE_NOTIFICATIONS : true,
        }
        );
};

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function mochi_onmutation   (mutation) {};
function mochi_page0_load   ()         {};
function mochi_page0_unload ()         {};
function mochi_view0_load   ()         {};
function mochi_view0_unload ()         {};
function mochi_last         ()         {};

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
            function() {
                this.onload()
                }
            );
    }
    );

/*
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
*/

function MyMochiApplication()
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
