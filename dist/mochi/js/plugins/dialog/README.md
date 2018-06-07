# Dialog.js
_Dialog plugin for Mochi._

> [v1.0](https://github.com/codeworksdev/mochi/blob/master/dist/mochi/js/plugins/dialog/CHANGELOG.md)

This plugin uses the **[jQuery UI Dialog Widget](https://jqueryui.com/dialog/)** as a base and introduces new features while not obstructing the options already provided by the standard widget.

## INSTALLATION
To use Dialog.js in your app, simply drop this single file as a `<script>` import in your HTML files (i.e., just before your `onload.js` is loaded). The plugin will register itself as `$m.dialog`, making it instantly accessible by the rest of your application. That's it! You now have a reliable dialog widget installed as a Mochi plugin.

**FILES**
* mochi/js/plugins/dialog/dist/dialog.js

```html
...
        <script src="mochi/js/mochi.min.js"></script>
        <script src="mochi/js/plugins/dialog/dist/dialog.min.js"></script>
        <script src="frontend/js/onload.js"></script>
    </body>
</html>
```

As you may have already guessed, you can do a bunch of stuff with Dialog.js when you combine it with jQuery or add your own CSS rules. For example, you can dynamically open a simple dialog with:

```javascript
$m.dialog.open(
    '<p>Hello, world!</p>'
    );
```

The statement above would:

1. Open a new dialog with [modal](http://api.jqueryui.com/dialog/#option-modal) behavior.
2. Add "Confirm" as the [title](http://api.jqueryui.com/dialog/#option-title) of the dialog.
3. Add a [button](http://api.jqueryui.com/dialog/#option-buttons) labeled "OK" (clicking it immediately closes the dialog).
4. Add "Hello, world!" to the body of the dialog.

## GENERATED HTML EXAMPLE
_**Note:** The code below is generated automatically by the dialog widget._
```html
<div
  tabindex="-1"
  role="dialog"
  class="ui-dialog ui-corner-all mochi-plugin-dialog ui-widget ui-widget-content ui-front ui-dialog-buttons"
  aria-describedby="mochi-plugin-dialog"
  aria-labelledby="ui-id-1"
  style="height: auto; width: 640px; top: 0px; left: 599.5px; z-index: 101;">
    <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix">
        <span id="ui-id-1" class="ui-dialog-title">Confirm</span>
        <button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="close">
            <span class="ui-button-icon ui-icon ui-icon-closethick"></span>
            <span class="ui-button-icon-space"></span>close
        </button>
    </div>
    <div
      data-mochi="plugin"
      id="mochi-plugin-dialog"
      class="ui-dialog-content ui-widget-content"
      style="width: auto; min-height: 13.078px; max-height: none; height: auto;">
        <p>Hello, world!</p>
    </div>
    <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
        <div class="ui-dialog-buttonset">
            <button type="button" class="ui-button ui-corner-all ui-widget">OK</button>
        </div>
    </div>
</div>
```

## THEMING
You can easily theme your dialogs by studying the standard HTML example above, or by digging through your own HTML source code. For example, to alter the border radius of your dialogs you can do:

```css
.ui-dialog.mochi-plugin-dialog {
    border-radius: 10px;
    }
```
_**Note:** You can use the [classes](http://api.jqueryui.com/dialog/#option-classes) option if you'd like to alter the CSS classes defined for each of your dialogs. This is especially useful if you have multiple dialog instances that require unique styles per instance._

___
# API

## PUBLIC METHODS

> ### html
> _instance_ **$m.dialog.html(** _string_ **html** [, _string_ selector] **)**
>
> Inserts `html` into the body of the dialog (or the child elements identified by the optional CSS `selector`). Any existing HTML (i.e., from a previously opened dialog) would be replaced. See the "generated html example" section below as a reference. This method does not open the dialog or alter it's visibility.

> ### open
> _instance_ **$m.dialog.open(** _string_ **html** [, _object_ options] [, _function_ onOpen] **)**
>
> Opens the dialog and inserts the given `html` to the body of the dialog. Any existing HTML (i.e., from a previously opened dialog) would be replaced. `options` are identical to the [options](http://api.jqueryui.com/dialog/) provided by the standard jQuery UI distribution, but with different default values (see "options" section below). The `onOpen` parameter is an optional function you'd like to be called once the dialog is generated. If provided, the `onOpen` function would have `this` reference the dialog container in jQuery object form.

## OPTIONS
_**Note:** See [jQuery UI dialog widget options](http://api.jqueryui.com/dialog/) for detailed documentation on each option listed below._
```
OPTION NAME   | DEFAULT VALUE
---------------------------------------------------------------------------------------------------------
appendTo      | 'body'
autoOpen      | true
buttons       | {OK : function(){$(this).dialog('close')}}
classes       | {'ui-dialog': 'ui-corner-all mochi-plugin-dialog', 'ui-dialog-titlebar': 'ui-corner-all'}
closeOnEscape | false
closeText     | 'close'
draggable     | false
height        | 'auto'
hide          | null
maxHeight     | false
maxWidth      | false
minHeight     | 150
minWidth      | 150
modal         | true
position      | {my : 'top', at : 'center top', of : window}
resizable     | false
show          | null
title         | null
width         | (function(w){return w>670?640:(w-30)})($('body').width())
```

___
And there you have it! What a ride. Please head on over to [jQuery UI](http://api.jqueryui.com/dialog/) for detailed documentation and to take full advantage of what the dialog widget can offer.

# LICENSE
Dialog.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)
