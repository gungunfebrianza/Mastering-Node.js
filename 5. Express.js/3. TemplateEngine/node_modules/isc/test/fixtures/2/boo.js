(function(w) {

    /** @build("app", "foo") */

    var System = {};
    /**
     * @include("hoi.js", {export: "System.Query", module: true})
     * @include("foobar.js", {if: 'app'})
     **/


    w.this_is_a_logn_name = function () {
        System.Query('test');
    }

}(window));
