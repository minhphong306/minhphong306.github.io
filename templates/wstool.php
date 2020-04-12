<div class="col-md-7 form-horizontal">
    <h3 id="WS_status" class="text-danger text-center">
        Connection information
    </h3>
    <div class="form-group">
        <label for="ws_uri" class="col-sm-2 control-label">WS URI</label>
        <div class="col-sm-10">
            <div class="col-md-3 mp-padding-left-0">
                <select class="form-control" ng-model="ws_scheme">
                    <option value="ws://">WS</option>
                    <option value="wss://">WSS</option>
                </select>
            </div>
            <div class="col-md-9 mp-padding-left-0">
                <select class="form-control" ng-model="ws_uri">
                    <option ng-repeat="item in pattern_ws_uri" value="{{item}}">{{item}}</option>
                    <option value="other">Other..</option>
                </select>
            </div>

            <div class="col-md-9 col-md-offset-3" style="margin-top: 4px">
                <input ng-if="ws_uri == 'other'" ng-model="ws_other_uri" type="text" class="form-control" id="ws_other_uri" placeholder="ws_uri">
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="field_num" class="col-sm-2 control-label">Number of field</label>
        <div class="col-sm-10">
            <div class="col-md-3">
                <input ng-model="field_length" type="number" class="form-control" id="field_num" max="99" min ="1" placeholder="field_num">
            </div>
            <div class="col-md-9">
                <button ng-click="generateField()" class="btn btn-primary">
                    <i class="fa fa-hand-o-up"></i>
                    Generate field
                </button>
                <button ng-click="addOneField()" class="btn btn-primary">
                    <i class="fa fa-plus-square"></i>
                    Add 1 field
                </button>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row col-md-offset-1">
            <button ng-click="connectWS()" class="btn btn-primary">
                <i class="fa fa-plug"></i>
                Connect WS
            </button>
            <button ng-click="disConnectWS()" class="btn btn-danger">
                <i class="fa fa-chain-broken"></i>
                Disconnect WS
            </button>
        </div>
    </div>
    <div style="padding: 10px" ng-if="fields.length > 0">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th width="30%">Field name</th>
                    <th>Field value</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="item in fields track by $index">
                    <td>
                        <input ng-model="item.key" type="text" placeholder="Enter field name" required="required"  class="form-control"> 
                    </td>
                    <td>
                        <input ng-model="item.value" type="text" placeholder="Enter value" required="required"  class="form-control"> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="form-group">
        <div class="row col-md-offset-1">
            <button ng-click="sendMessage()"  class="btn btn-success">
                <i class="fa fa-paper-plane"></i>
                Send message
            </button>
        </div>
    </div>
    <div class="form-group">
        <label for="request_name" class="col-sm-2 control-label">Save request</label>
        <div class="col-sm-10">
            <div class="col-md-9">
                <input ng-model="request_name" type="text" class="form-control" id="field_num" max="99" min ="1" placeholder="request_name">
            </div>
            <div class="col-md-3">
                <button ng-click="saveRequest()" class="btn btn-primary">
                    <i class="fa fa-floppy-o"></i>
                    Save
                </button>
            </div>
        </div>
    </div>
</div>

<div class="col-md-5">
    <div class="panel panel-info" style="max-width: 700px">
        <div class="panel-heading">
            Saved request
        </div>
        <div class="panel-body" style="padding: 0px">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th width="50%">Name</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr ng-repeat="item in saved_request">
                    <!--<tr >-->
                        <td>{{item}}</td>
                        <td>
                            <button class="btn btn-success" ng-click="getSavedRequest(item)">Load</button>
                            <button class="btn btn-danger" ng-click="removeSavedRequest(item)">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <h3 class="text-danger">
        WS status : <b><span ng-bind="ws_status"></span></b>
    </h3>
    <div class="panel panel-primary" style="max-width: 700px">
        <div class="panel-heading">
            Websocket monitor
            <button class="btn btn-primary" ng-click="testMonitor()">test</button>
        </div>
        <div class="panel-body" style="padding: 0px">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th width="30%">Even</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr ng-repeat="item in monitor_data">
                        <td>{{item.event}}</td>
                        <td>{{item.data}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>