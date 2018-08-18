(function () {

    /** @include '1.js' */

    /**
     * @type({string})
     */
    var blaat = 'foo';

    /**
     * Some docs here.
     * @include('2.js')
     * Some more stuff here.
     */

    /**
     * @include('3a.js')
     * @include('3b.js')
     */

    /** @include('HelloWorld.js', {export : "henk", module : true}) */

}());
