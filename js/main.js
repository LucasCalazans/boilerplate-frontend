require.config({
    baseUrl: 'js',
    paths: {
        'ember': 'libs/ember.min',
        'ko': 'libs/knockout-3.4.2',
        'vue': 'libs/vue-2.4.0.min',
        'vue-1': 'libs/vue-1.0.28.min',
        'jquery': 'libs/jquery-3.2.1.min',
    }
});

require(['app']);