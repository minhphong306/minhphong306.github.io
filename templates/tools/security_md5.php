<div class="bg bg-info mp-padding-10">
    <h3 class="text-danger">Mã hóa MD5</h3>

    <blockquote>
        <p>- Viết tắt của: <span class="mp-text-bold">Message Digest algorithm 5</span></p>
        <p>- Độ dài:  <span class="mp-text-bold">32 kí tự</span></p>
        <footer><cite title="Theo wiki"><a target="_blank" href="https://vi.wikipedia.org/wiki/MD5">Wiki mã hóa MD5</a></cite></footer>
    </blockquote>
</div>

<div class="form-group">
    <label for="str_analysis">Input string</label>
    <div class="input-group">
        <div class="input-group-addon">
            <span aria-hidden="true" class="glyphicon glyphicon-console"></span>
        </div>
        <input ng-model="security.input_str" id="mp_security_input_str" type="text" placeholder="Nhập vào string cần mã hóa MD5" required="required" autofocus="autofocus" class="form-control"> 
        <span class="input-group-btn">
            <button ng-click="security.md5()" class="btn btn-primary">
                <span aria-hidden="true" class="fa fa-cogs"></span>
                Mã hóa
            </button>
        </span>
    </div>
</div>

<table class="table table-hover">
    <thead>
        <tr>
            <th>Tiêu chí</th>
            <th>Kết quả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                MD5 lần 1
                <i ng-if="security.compare_result.md5_1" class="fa fa-check mp-color-green"></i>
                <i ng-if="!security.compare_result.md5_1" class="fa fa-times mp-color-red"></i>
            </td>
            <td>
                <div class="input-group {{security.compare_result.md5_1 === true ? 'has-success' : 'has-error'}}">
                    <input id="md5_1" ng-model="security.security_result.md5_1" type="text" placeholder="MD5 lần 1" required="required" class="form-control">
                    <span class="input-group-btn">
                        <button onclick="copy_to_clipboard('md5_1')" class="btn btn-primary">
                            <span aria-hidden="true" class="fa fa-clipboard"></span>
                            Copy
                        </button>
                    </span>

                </div>
            </td>
        </tr>
        <tr>
            <td>
                MD5 lần 2
                <i ng-if="security.compare_result.md5_2" class="fa fa-check mp-color-green"></i>
                <i ng-if="!security.compare_result.md5_2" class="fa fa-times mp-color-red"></i>
            </td>
            <td>
                <div class="input-group  {{security.compare_result.md5_2 === true ? 'has-success' : 'has-error'}}">
                    <input id="md5_2" ng-model="security.security_result.md5_2" type="text" placeholder="MD5 lần 2" required="required" class="form-control"> 
                    <span class="input-group-btn">
                        <button onclick="copy_to_clipboard('md5_2')" class="btn btn-primary">
                            <span aria-hidden="true" class="fa fa-clipboard"></span>
                            Copy
                        </button>
                    </span>
                </div>
            </td>
        </tr>
    </tbody>
</table>

<!--Compare-->
<form method="POST" role="form">
    <div class="form-group">
        <label for="str_analysis">So sánh</label>
        <div class="input-group">
            <div class="input-group-addon">
                <span aria-hidden="true" class="glyphicon glyphicon-console"></span>
            </div>
            <input ng-model="security.compare_str" type="text" placeholder="Nhập vào string cần so sánh" required="required" class="form-control"> 
            <span class="input-group-btn">
                <button ng-click="security.compare('md5')" class="btn btn-primary">
                    <span aria-hidden="true" class="fa fa-cogs"></span>
                    So sánh
                </button>
            </span>
        </div>
    </div>
</form>
<!--End compare-->
