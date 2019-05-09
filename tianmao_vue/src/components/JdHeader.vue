<template>
    <div class="jd-home-header">
        <div class="jd-home-header_menu">
            <span></span>
        </div>
        <div class="jd-home-header_seach">
            <i></i>
            <span></span>
            <input type="text" placeholder="清风抽纸">
        </div>
        <div class="jd-home-header_login">
            <span @click="Login">登陆</span>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        Login(){
            this.$router.push('/login')
        }
    }
}
</script>

<style lang='scss' scoped>
    .jd-home-header{
        width: 3.75rem;
        height: 0.44rem;
        font-size: 0.14rem;
        position: fixed;
        &_menu{
            float: left;
            width: 0.4rem;
            height: 0.44rem;
            span{
                margin: 0.1rem 0.1rem;
                width: 0.2rem;
                height: 0.2rem;
                display: inline-block;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgAgMAAAAdw9KTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwDjSYAlncUAAAAbSURBVBjTY5j/Hwq+MdTDmH+RmUgK6AuGhcsAU5tyB6Ji+x0AAAAASUVORK5CYII=) no-repeat;
                background-size: 100% 100%;
            }
        }
        &_seach{
            float: left;
            width: 2.73rem;
            height: 0.3rem;
            margin-left: 0.2rem;
            border:0.01rem solid #ffffff;
            border-radius: 0.2rem;
            margin: 0.07rem 0;
            background-color: #fff;
            overflow: hidden;
            input{
                height: 0.3rem;
                width: 1.95rem;
                outline:none;
                border: none;
                margin-left: 0.05rem;
            }
            i{
              float: left;
              width: 0.2rem;
              height: 0.2rem;
              margin-left: 0.2rem;
              margin-top: 0.05rem;
              border-right: 0.01rem solid #CFCFCF;
              display: inline-block;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeBAMAAACs80HuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTOk7Puo7PfE+SP9SUuo7Peo8Pu0/Qeo7Peo7Peo7Pek7Peo7Pes8Pus8P+k7PaLYf6IAAAAPdFJOUwCjwREGj1sg9Hrd6bFINxDM6d8AAAD3SURBVCjPY2AAAv3/nxnk////sUo1nQEOoIIgoOaARfD/WmyC/wNQBL+lzZQCCn5FEfwCZJX2//8/AV2Qoej//3YMQWb9/x8xBBkq/v8vwBBk/f8/AUOQ/f9/AQxBhvX/N2AKnv//AVMwHsjBEJz//zs2lVgE5bFpx2pR//8FUMEvcEE+mOPX/2+AC/JAvcnyH6gDJvj+/w8DEM0G0gEVZN8PDfpqkA6o4O3//5tBtGX//98OEEHmJGAkXWBgCNQC0t9Abv4aKrMewmYAR6sAAzyKfydABX8yIASFGSCCjQ/ggr+mg61WOjgXnHwmKSnpiM4FO5EBAIlo6/K7pNY1AAAAAElFTkSuQmCC) no-repeat;
              background-size: 100% 100%;
            }
            span{
                float: left;
                margin-left: 0.08rem;
                margin-top: 0.07rem;
                display: inline-block;
                width: 0.18rem;
                height: 0.15rem;
                background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline) no-repeat;
                background-position: -0.8rem 0;
                background-size: 2rem;
            }

        }
        &_login{
            float: left;
            width: 0.4rem;
            height: 0.44rem;
            margin-left:0.20rem; 
            span{
                height: 0.22rem;
                width: 0.28rem;
                line-height: 0.2rem;
                text-align: center;                
                display: inline-block;
                color: #ffffff;
                margin: 0.1rem 0;
            }
        }
    }
</style>
