/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'movieRentalApp.Application',

    name: 'movieRentalApp',

    requires: [
        // This will automatically load all classes in the movieRentalApp namespace
        // so that application classes do not need to require each other.
        'movieRentalApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'movieRentalApp.view.main.Main'
});
