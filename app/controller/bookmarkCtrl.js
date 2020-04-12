// function postmanCtrl($scope, $timeout) {
//     $scope.fields = [];
//     $scope.field_names = [];
//     $scope.variable_names = [];
//     $scope.monitor_data = [];
//     $scope.saved_request = [];
//
//     $scope.ws_handler = {};
//     $scope.ws_status = "WAITING";
//     $scope.ws_scheme = '';
//     $scope.ws_uri = '';
//     $scope.request_name = '';
//
//     $scope.pattern_ws_uri = [
//         'supporter.oo:8080/socket_server.php',
//         'srv.mpcc.vn:2301/',
//         'localhost:2301'
//     ];
//
//     $scope.generateField = function () {
//         $scope.fields = [];
//         $scope.field_names = [];
//         $scope.variable_names = [];
//         for (var i = 0; i < $scope.field_length; i++) {
//             $scope.field_names.push("");
//             $scope.variable_names.push("");
//             var obj = {};
//             obj['key'] = '';
//             obj['value'] = '';
//             $scope.fields.push(obj);
//         }
//     };
//
//     $scope.addOneField = function () {
//         var obj = {};
//         obj['key'] = '';
//         obj['value'] = '';
//         $scope.fields.push(obj);
//     };
//
//     $scope.connectWS = function () {
//         $scope.ws_status = "CONNECTING...";
//
//         if (!$scope.ws_scheme) {
//             show_notify('Warning', 'Please choose scheme (http/https)');
//             return;
//         }
//
//         if (!$scope.ws_uri) {
//             show_notify('Warning', 'Please enter/choose socket uri');
//             return;
//         }
//
//         $scope.ws_uri = $scope.ws_uri == 'other' ? $("#ws_other_uri").val() : $scope.ws_uri;
//
//         try {
//             $scope.ws_handler = new WebSocket($scope.ws_scheme + $scope.ws_uri);
//
//             $scope.ws_handler.onopen = function (data) {
//                 $timeout(function () {
//                     $scope.ws_status = "CONNECTED";
//                     show_notify('Thông báo', 'Đã kết nối websocket!', 'success');
//                 }, 1000);
//                 console.log("connected");
//                 var monitor = {};
//                 monitor['event'] = 'ws_onopen';
//                 monitor['data'] = JSON.stringify(data);
//                 $scope.monitor_data.push(monitor);
//
//             };
//             $scope.ws_handler.onclose = function (data) {
//                 $timeout(function () {
//                     $scope.ws_status = "CLOSED";
//                     show_notify('Thông báo', 'Đã ngắt kết nối websocket!', 'error');
//                 }, 1000);
//                 var monitor = {};
//                 monitor['event'] = 'ws_onclose';
//                 monitor['data'] = JSON.stringify(data);
//                 $scope.monitor_data.push(monitor);
//             };
//
//             $scope.ws_handler.onerror = function (data) {
//                 $timeout(function () {
//                     $scope.ws_status = "ERROR";
//                 }, 1000);
//                 var monitor = {};
//                 monitor['event'] = 'ws_onerror';
//                 monitor['data'] = JSON.stringify(data);
//                 $scope.monitor_data.push(monitor);
//             };
//
//             $scope.ws_handler.onmessage = function (data) {
//                 $timeout(function () {
//                     var monitor = {};
//                     monitor['event'] = 'on_message';
//                     monitor['data'] = JSON.stringify(data.data);
//                     $scope.monitor_data.push(monitor);
//                 }, 200);
//
//                 console.log(data.data);
//             };
//
//             $scope.ws_handler.ondisconnect = function (data) {
//                 $scope.ws_status = "DISCONNECTED";
//             };
//         } catch (e) {
//             show_notify('Lỗi', 'Có lỗi xảy ra', 'error');
//             console.log(e);
//         }
//
//     };
//
//     $scope.disConnectWS = function () {
//         $scope.ws_handler.close();
// //        $scope.ws_handler.onclose = function(){};
//     };
//
//     $scope.sendMessage = function () {
//         var data = {};
//         for (var i = 0; i < $scope.fields.length; i++) {
//             data[$scope.fields[i].key] = $scope.fields[i].value;
//         }
//         $scope.ws_handler.send(JSON.stringify(data));
//     };
//
//     $scope.getSavedRequest = function (name) {
//         if (name) {
//             var savedReq = JSON.parse(localStorage.getItem(name));
//             $scope.ws_scheme = savedReq['ws_scheme'];
//             $scope.ws_uri = savedReq['ws_uri'];
//             $scope.field_length = savedReq['field_length'];
//             $scope.fields = savedReq['fields'];
//             return;
//         }
//
//         $scope.saved_request = JSON.parse(localStorage.getItem('savedRequest'));
//     };
//
//     $scope.saveRequest = function () {
//         if (!$scope.request_name) {
//             show_notify('Lỗi', 'Vui lòng nhập vào tên request');
//             return;
//         }
//
//         // Save to list
//         $scope.saved_request.push($scope.request_name);
//         localStorage.setItem('savedRequest', JSON.stringify($scope.saved_request));
//         var request_data = {};
//         request_data['ws_scheme'] = $scope.ws_scheme;
//         request_data['ws_uri'] = $scope.ws_uri;
//         request_data['field_length'] = $scope.field_length;
//         request_data['fields'] = $scope.fields;
//
//         localStorage.setItem($scope.request_name, JSON.stringify(request_data));
//
//     };
//
//     $scope.removeSavedRequest = function (request_name) {
//         var index = $scope.saved_request.indexOf(request_name);
//         $scope.saved_request.splice(index, 1);
//
//         localStorage.setItem('savedRequest', JSON.stringify($scope.saved_request));
//         localStorage.removeItem(request_name);
//     };
//
//     $scope.testMonitor = function () {
//         var monitor = {};
//         monitor['event'] = '-- test';
//         monitor['data'] = '-- test data';
//         $scope.monitor_data.push(monitor);
//     };
//
//     $scope.getSavedRequest();
// }