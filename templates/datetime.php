<div class="bg bg-info mp-padding-10">
    <p class="">Thời gian hiện tại: {{dt.info.current_time}}</p>
    <p class="">Unix time: {{dt.info.current_unixtime}}</p>
</div>
<h3 class="text-center text-danger">Unix time <=> Human time</h3>
<div class="col-md-12">
    <form class="form-horizontal">
        <div class="form-group">
            <label for="choose_mode" class="col-sm-2 control-label">Chọn chế độ</label>
            <div class="col-sm-10">
                <label class="radio">
                    <input checked ng-model="dt.mode" type="radio" name="choose_mode" id="radio_unix_to_human" value="unix_to_human"> Unix time to human time
                </label>
                <label class="radio">
                    <input ng-model="dt.mode" type="radio" name="choose_mode" id="radio_human_to_unix" value="human_to_unix"> Human time to unix time
                </label>
            </div>
        </div>

        <div ng-if="dt.mode === 'unix_to_human'">
            <div class="form-group">
                <label for="input_unix" class="col-sm-2 control-label">Nhập unix time</label>
                <div class="col-sm-10">
                    <input ng-model="dt.input_unix" id="input_unix" type="text" placeholder="Nhập vào unix time cần chuyển đổi" required="required" class="form-control">
                </div>
            </div>

            <div class="form-group">
                <label for="output_human" class="col-sm-2 control-label">Human time</label>
                <div class="col-sm-10">
                    <div class="input-group">
                        <input id="output_human" ng-model="dt.output_human" type="text" placeholder="Thời gian chuyển đổi" class="form-control"> 
                        <span class="input-group-btn">
                            <button onclick="copy_to_clipboard('output_human')" class="btn btn-primary">
                                <span aria-hidden="true" class="fa fa-clipboard"></span>
                                Copy
                            </button>
                        </span>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <button ng-click="dt.convertToHuman()" class="btn btn-primary pull-right mp-margin-right-10">
                    <i class="fa fa-random menu-icon"></i>
                    Convert
                </button>
            </div>
        </div>

        <div ng-if="dt.mode === 'human_to_unix'">
            <div class="form-group">
                <label for="input_unix" class="col-sm-2 control-label">Nhập human time</label>
                <div class="col-sm-10">
                    <div class="col-sm-2">
                        <input  class="form-control" ng-model="dt.input_human.year" type="number">
                    </div>
                    <div class="col-sm-2">
                        <input class="form-control" ng-model="dt.input_human.month" type="number">
                    </div>
                    <div class="col-sm-2">
                        <input class="form-control" ng-model="dt.input_human.day" type="number">
                    </div>
                    <div class="col-sm-2">
                        <input  class="form-control" ng-model="dt.input_human.hour" type="number">
                    </div>
                    <div class="col-sm-2">
                        <input  class="form-control" ng-model="dt.input_human.min" type="number">
                    </div>
                    <div class="col-sm-2">
                        <input  class="form-control" ng-model="dt.input_human.sec" type="number">
                    </div>
                 
                </div>
            </div>

            <div class="form-group">
                <label for="output_human" class="col-sm-2 control-label">Human time</label>
                <div class="col-sm-10">
                    <div class="input-group">
                        <input id="output_human" ng-model="dt.output_unix" type="text" placeholder="Thời gian chuyển đổi" class="form-control"> 
                        <span class="input-group-btn">
                            <button onclick="copy_to_clipboard('output_human')" class="btn btn-primary">
                                <span aria-hidden="true" class="fa fa-clipboard"></span>
                                Copy
                            </button>
                        </span>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <button ng-click="dt.convertToUnix()" class="btn btn-primary pull-right mp-margin-right-10">
                    <i class="fa fa-random menu-icon"></i>
                    Convert
                </button>
            </div>
        </div>
    </form>
</div>

