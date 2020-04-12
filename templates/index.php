<script src='https://www.google.com/recaptcha/api.js'></script>
<p>Một số tính năng tớ đang dần hoàn thiện nên có thể thiếu/lỗi.</p>
<p>Góp ý với mình qua Facebook: <a href="https://fb.com/dominhphong.18">Do Minh Phong</a>, gmail: <a href="mailto:dominhphong306@gmail.com">dominhphong306@gmail.com</a></p>
<p>hoặc điền vào form sau:</p>

<form class="form-horizontal" ng-submit="index.submitContact()">
    <div class="form-group">
        <label for="index_email" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
            <input ng-model ="index.contact.email" type="email" class="form-control" id="index_email" placeholder="Email">
        </div>
    </div>
    <div class="form-group">
        <label for="index_phone" class="col-sm-2 control-label">SĐT</label>
        <div class="col-sm-10">
            <input  ng-model ="index.contact.phone"  type="number" class="form-control" id="index_phone" placeholder="Số điện thoại">
        </div>
    </div>
    <div class="form-group">
        <label for="index_content" class="col-sm-2 control-label">Nội dung</label>
        <div class="col-sm-10">
            <textarea  ng-model ="index.contact.content"  class="form-control" rows="3" placeholder="Nội dung nhắn gửi"></textarea>
        </div>
    </div>
    <!--<div class="g-recaptcha" data-sitekey="6LdY8WAUAAAAABrrEt7hB8uU2XcLRgmyHN5t8O8i"></div>-->
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Gửi</button>
        </div>
    </div>
</form>