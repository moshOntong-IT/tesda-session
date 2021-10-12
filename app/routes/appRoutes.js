'use strict';
module.exports = function(app){
    var tesda_session_1 = require('..controller/tesdaController');

    //tesda Routes

    app.route('/assets-group')
    .get(tesda.list_all_assets_groups)
    .post(tesda.create_a_task);

    app.route('assets-group/:id')
    .get(tesda.read_a_assets_groups)
    .put(tesda.update_a_assets_groups)
    .delete(tesda_delete_a_assets_groups);
};