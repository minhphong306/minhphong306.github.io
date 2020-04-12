<div class="bg bg-info mp-padding-10">
    <h3 class="text-danger">Mã hóa SHA</h3>

    <blockquote>
        <p>- Viết tắt của: <span class="mp-text-bold">Secure Hash Algorithm</span></p>
        <!--<p>- Độ dài:  <span class="mp-text-bold">32 kí tự</span></p>-->
        <footer><cite title="Theo wiki"><a target="_blank" href="https://vi.wikipedia.org/wiki/SHA">Wiki mã hóa SHA</a></cite></footer>
    </blockquote>
</div>

<form method="POST" role="form">
    <div class="form-group">
        <label for="str_analysis">Input string</label>
        <div class="input-group">
            <div class="input-group-addon">
                <span aria-hidden="true" class="glyphicon glyphicon-console"></span>
            </div>
            <input ng-model="security.input_str" id="mp_security_input_str" type="text" placeholder="Nhập vào string cần mã hóa MD5" required="required" autofocus="autofocus" class="form-control"> 
            <span class="input-group-btn">
                <button ng-click="security.sha()" class="btn btn-primary">
                    <span aria-hidden="true" class="fa fa-cogs"></span>
                    Mã hóa
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
            <td>
                SHA-1
                <i ng-if="security.compare_result.sha1" class="fa fa-check mp-color-green"></i>
                <i ng-if="!security.compare_result.sha1" class="fa fa-times mp-color-red"></i>
            </td>
            <td>
                <div class="input-group {{security.compare_result.sha1 === true ? 'has-success' : 'has-error'}}">
                    <input id="sha1" ng-model="security.security_result.sha1" type="text" placeholder="SHA 1" required="required" class="form-control">
                    <span class="input-group-btn">
                        <button onclick="copy_to_clipboard('sha1')" class="btn btn-primary">
                            <span aria-hidden="true" class="fa fa-clipboard"></span>
                            Copy
                        </button>
                    </span>

                </div>
            </td>
        </tr>
        <tr>
            <td>
                SHA-256
                <i ng-if="security.compare_result.sha256" class="fa fa-check mp-color-green"></i>
                <i ng-if="!security.compare_result.sha256" class="fa fa-times mp-color-red"></i>
            </td>
            <td>
                <div class="input-group  {{security.compare_result.sha256 === true ? 'has-success' : 'has-error'}}">
                    <input id="sha256" ng-model="security.security_result.sha256" type="text" placeholder="MD5 lần 2" required="required" class="form-control"> 
                    <span class="input-group-btn">
                        <button onclick="copy_to_clipboard('sha256')" class="btn btn-primary">
                            <span aria-hidden="true" class="fa fa-clipboard"></span>
                            Copy
                        </button>
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                SHA-384
                <i ng-if="security.compare_result.sha384" class="fa fa-check mp-color-green"></i>
                <i ng-if="!security.compare_result.sha384" class="fa fa-times mp-color-red"></i>
            </td>
            <td>
                <div class="input-group  {{security.compare_result.sha384 === true ? 'has-success' : 'has-error'}}">
                    <input id="sha384" ng-model="security.security_result.sha384" type="text" placeholder="MD5 lần 2" required="required" class="form-control"> 
                    <span class="input-group-btn">
                        <button onclick="copy_to_clipboard('sha384')" class="btn btn-primary">
                            <span aria-hidden="true" class="fa fa-clipboard"></span>
                            Copy
                        </button>
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                SHA-512
                <i ng-if="security.compare_result.sha512" class="fa fa-check mp-color-green"></i>
                <i ng-if="!security.compare_result.sha512" class="fa fa-times mp-color-red"></i>
            </td>
            <td>
                <div class="input-group  {{security.compare_result.sha512 === true ? 'has-success' : 'has-error'}}">
                    <input id="sha512" ng-model="security.security_result.sha512" type="text" placeholder="MD5 lần 2" required="required" class="form-control"> 
                    <span class="input-group-btn">
                        <button onclick="copy_to_clipboard('sha512')" class="btn btn-primary">
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
            <input ng-model="security.compare_str" id="mp_security_input_str" type="text" placeholder="Nhập vào string cần so sánh" required="required" class="form-control"> 
            <span class="input-group-btn">
                <button ng-click="security.compare('sha')" class="btn btn-primary">
                    <span aria-hidden="true" class="fa fa-cogs"></span>
                    So sánh
                </button>
            </span>
        </div>
    </div>
</form>
<!--End compare-->
