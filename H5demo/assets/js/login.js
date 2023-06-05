$(function() {
    $('#link-reg').on('click', function() {
        $('.login-box').hide();
        $('.reg-box').show();
    })

    $('#link-login').on('click', function() {
        $('.reg-box').hide();
        $('.login-box').show();
    })

    var form = layui.form;
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repwd: function(value) {
            var pwd = $('.reg-box [name=password]').val();
            if (pwd !== value) {
                return '两次密码不一致，请重新输入！';
            }
        }
    })

    $('#form-reg').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'http://ajax.frontend.itheima.net/api/reguser',
            data: {
                username: $('#form-reg [name=username]').val(),
                password: $('#form-reg [name=password]').val()
            },
            success: function(res) {
                if (res.status !== 0) {
                    return console.log(res.message);
                }
                console.log('注册成功！')
            }
        });
    })

    $('#form-login').on('submit', function(e) {
        if ($('#user').val() === 'admin123' && $('#pwd').val() === '123456') {
            e.preventDefault();
            location.href = 'index.html';
        }
    })
})