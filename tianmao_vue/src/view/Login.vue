<template>
    <div class="jd-login">
        <div class="jd-login_header">
            <div class="jd-login_header-back" @click="back">
                <span></span>
            </div>
            <span class="jd-login_header-text">京东登陆</span> 
        </div>
        <div class="jd-login_input">
           <label class="jd-login_input-one"><input type="text" placeholder="用户名/邮箱/手机号"></label>
           <label class="jd-login_input-two"><input type="text" placeholder="请输入密码"><span>忘记密码?</span></label>
        </div>
        <div class="jd-login_btn">
            登陆
        </div>
        <div class="jd-login_rigester">
            <span class="jd-login_rigester-m">短信验证码登录</span><span class="jd-login_rigester-p">手机注册</span>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.push('/home')
        }
    }
}
</script>

<style lang='scss' scoped>
    .jd-login{
        font-size: 0.16rem;
        &_header{
            width: 100%;
            height: 0.44rem;
            &-back{
                height: 0.24rem;
                width: 0.24rem;
                margin-left: 0.2rem;
                position: relative;
                float: left;
                margin-top: 0.10rem;
                span{
                    position: absolute;
                    left: 0.05rem;
                    top:0.04rem;
                    height: 0.14rem;
                    width: 0.14rem;
                    display: block;
                    border-bottom:0.02rem solid #3B3B3B;
                    border-left:0.02rem solid #3B3B3B;
                    transform: rotateZ(45deg)
                }
            }
            &-text{
                margin-left: 1.30rem;
                font-size: 0.20rem;
                display: block;
                padding:0.12rem;
                line-height: 0.2rem;
                height: 0.2rem;
            }
        }
        &_input{
            &-one{
                display:block;
                width: 3.35rem;
                height: 0.50rem;
                margin-left: 0.2rem;
                input{
                    font-size: 0.2rem;
                    height: 0.29rem;
                    padding: 0.1rem 0;
                    outline: none;
                    width: 3.35rem;
                    border-radius: 0;
                    border: none;
                    border-bottom: 0.01rem solid #CCCCCC;
                }
            }
            &-two{
                display:block;
                width: 3.35rem;
                height: 0.50rem;
                margin-left: 0.2rem;
                input{
                    font-size: 0.2rem;
                    height: 0.29rem;
                    padding: 0.1rem 0;
                    outline: none;
                    width: 1.9rem;
                    border-radius: 0;
                    border: none;
                    border-bottom: 0.01rem solid #CCCCCC;
                }
                span{
                    display: inline-block;
                    margin-left: 0.5rem;
                    color: red;
                    cursor: pointer;
                }
            }
        }
        &_btn{
            margin-left: 0.2rem;
            width: 3.35rem;
            height: 0.50rem;
            text-align: center;  
            line-height: 0.50rem;   
            color: #ffffff;
            border-radius: 0.3rem;
            margin-top: 0.3rem;
            background-color: #EE3B3B;       
        }
        &_rigester{
            margin-top: 0.3rem;
            margin-left: 0.2rem;
            width: 3.35rem;
            height: 0.50rem;  
            font-size: 0.2rem;
            &-m{
                float: left;
                color: #999;
            }
            &-p{
                float: right;
                color: #999;                
            }         
        }
    }
</style>
