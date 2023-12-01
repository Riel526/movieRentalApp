/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'thirdClassicTest.Application',

    name: 'thirdClassicTest',

    requires: [
        // This will automatically load all classes in the thirdClassicTest namespace
        // so that application classes do not need to require each other.
        'thirdClassicTest.*'
    ],

    // The name of the initial view to create.
    mainView: 'thirdClassicTest.view.main.Main'
});
