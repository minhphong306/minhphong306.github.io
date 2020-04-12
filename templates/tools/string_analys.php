<form method="POST" role="form">
    <div class="form-group">
        <label for="str_analysis">String analysis</label>
        <div class="input-group">
            <div class="input-group-addon">
                <span aria-hidden="true" class="glyphicon glyphicon-console"></span>
            </div>
            <input ng-model="str.input_str" id="mp_input_str" type="text" placeholder="Nhập vào string cần phân tích" required="required" autofocus="autofocus" class="form-control"> 
            <span class="input-group-btn">
                <button ng-click="str.analysis()" type="submit" class="btn btn-primary">
                    <span aria-hidden="true" class="glyphicon glyphicon-search"></span>
                    Phân tích
                </button>
            </span>
        </div>
    </div>
</form>
<table class="table table-hover">
    <thead>
        <tr>
            <th>Tiêu chí</th>
            <th>Kết quả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Số từ</td>
            <td>{{str.analysis_result.word_num}}</td>
        </tr>
        <tr>
            <td>Số dấu cách</td>
            <td>{{str.analysis_result.numchar_space - str.analysis_result.numchar_nospace}}</td>
        </tr>
        <tr>
            <td>Số kí tự (no space)</td>
            <td>{{str.analysis_result.numchar_nospace}}</td>
        </tr>
        <tr>
            <td>Số kí tự (space)</td>
            <td>{{str.analysis_result.numchar_space}}</td>
        </tr>
        <tr>
            <td>Số kí tự hoa</td>
            <td>{{str.analysis_result.numchar_upper}}</td>
        </tr>
        <tr>
            <td>Số kí tự thường</td>
            <td>{{str.analysis_result.numchar_lower}}</td>
        </tr>
        <tr>
            <td>Số kí tự đặc biệt</td>
            <td>{{str.analysis_result.numchar_special}}</td>
        </tr>
        
        <tr>
            <td>Bỏ dấu</td>
            <td>
                <div class="input-group">
                    <input id="latin_str" ng-model="str.analysis_result.latin_str" type="text" placeholder="String bỏ dấu" required="required" class="form-control"> 
                    <span class="input-group-btn">
                        <button onclick="copy_to_clipboard('latin_str')" class="btn btn-primary">
                            <span aria-hidden="true" class="fa fa-clipboard"></span>
                            Copy
                        </button>
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>Bỏ kí tự đặc biệt</td>
            <td>
                <div class="input-group">
                    <input id="non_special_str" ng-model="str.analysis_result.non_special_str" type="text" placeholder="String bỏ dấu" required="required" class="form-control"> 
                    <span class="input-group-btn">
                        <button onclick="copy_to_clipboard('non_special_str')" class="btn btn-primary">
                            <span aria-hidden="true" class="fa fa-clipboard"></span>
                            Copy
                        </button>
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>Bỏ dấu cách</td>
            <td>
                <div class="input-group">
                    <input id="non_space_str" ng-model="str.analysis_result.non_space_str" type="text" placeholder="String bỏ dấu" required="required" class="form-control"> 
                    <span class="input-group-btn">
                        <button onclick="copy_to_clipboard('non_space_str')" class="btn btn-primary">
                            <span aria-hidden="true" class="fa fa-clipboard"></span>
                            Copy
                        </button>
                    </span>
                </div>
            </td>
        </tr>
    </tbody>
</table>