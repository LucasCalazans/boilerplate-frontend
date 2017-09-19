define('app', [
    'ko'
], function(ko) {

    ko.components.register('list', {
        viewModel: { require: '' },
        template: { require: '' }
    });
    ko.applyBindings({});    
});