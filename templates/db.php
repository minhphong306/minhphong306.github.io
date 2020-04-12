<h3 class="text-danger text-center">DBUtil Generator</h3>

<form class="form-horizontal">
    <div class="form-group">
        <label for="table_name" class="col-sm-2 control-label">Tên bảng</label>
        <div class="col-sm-10">
            <input ng-model="table_name" type="text" class="form-control" id="table_name" autofocus="autofocus" placeholder="table_name">
        </div>
    </div>
    <div class="form-group">
        <label for="field_num" class="col-sm-2 control-label">Số trường</label>
        <div class="col-sm-10">
            <div class="col-md-8">
                <input ng-model="field_length" type="number" class="form-control" id="field_num" max="99" min ="1" placeholder="field_num">
            </div>
            <div class="col-md-4">
                <button ng-click="generateField()" class="btn btn-primary">
                    Generate field
                </button>
            </div>
        </div>
    </div>
    <div style="padding: 10px">
        <table class="table table-hover" ng-if="field_length > 0">
            <thead>
                <tr>
                    <th width="30%">Tên trường</th>
                    <th width="30%">Biến tương ứng</th>
                    <th>Kiểu dữ liệu</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-danger">
                    <td>
                        <input ng-model="field_key" type="text" placeholder="Nhập tên trường" required="required"  class="form-control"> 

                    </td>
                    <td>
                        <input ng-model="variable_key" type="text" placeholder="Nhập tên biến" required="required"  class="form-control"> 
                    </td>
                    <td>
                        <select class="form-control">
                            <option value="string">String</option>
                            <option value="int">Int</option>
                            <option value="double">Double</option>
                        </select>
                    </td>
                </tr>
                <tr ng-repeat="item in field_names track by $index">
                    <td>
                        <input ng-model="field_names[$index]" type="text" placeholder="Nhập tên trường" required="required"  class="form-control"> 
                    </td>
                    <td>
                        <input ng-model="variable_names[$index]" type="text" placeholder="Nhập vào biến tương ứng" required="required"  class="form-control"> 
                    </td>
                    <td>
                        <select class="form-control">
                            <option value="string">String</option>
                            <option value="int">Int</option>
                            <option value="double">Double</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-10 col-sm-2">
            <button ng-click="generateCode()" type="submit" class="btn btn-default">Generate</button>
        </div>
    </div>
</form>
<h3 class="text-danger text-center">Kết quả</h3>
<div>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
            <a data-target="#php_code" aria-controls="php_code" role="tab" data-toggle="tab">PHP</a>
        </li>
        <li role="presentation">
            <a data-target="#java_code" aria-controls="java_code" role="tab" data-toggle="tab">Java</a>
        </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content" style="padding:15px">
        <div role="tabpanel" class="tab-pane active" id="php_code">
            <h4 class="text-danger">Get query</h4>
            <pre>{{php_code.getQuery}}</pre>
            <h4 class="text-danger">Insert query</h4>
            <pre>{{php_code.insertQuery}}</pre>
            <h4 class="text-danger">Update query</h4>
            <pre>{{php_code.updateQuery}}</pre>
            <h4 class="text-danger">TMP delete query</h4>
            <pre>{{php_code.tmpDeleteQuery}}</pre>
        </div>
        <div role="tabpanel" class="tab-pane" id="java_code">
            Java code
        </div>
    </div>

</div>
