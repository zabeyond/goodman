<template>
    <!--容器-->
    <div class="headerContaienr">
        <!--主题内容-->
        <div class="headerContent">
            <!--头部左边logo内容-->
            <div class="headerLeft">
                <img src="../../assets/img/logo.png" alt="">
                <div class="word">
                    <img src="../../assets/img/word.png" alt="">
                </div>
            </div>
            <!--头部导航-->
            <div class="headerMiddle">
                <ul>
                    <li :class="index == 1 ? 'active' : ''">首页</li>
                    <li :class="index == 2 ? 'active' : ''">产品市场</li>
                    <li :class="index == 3 ? 'active' : ''">创新研发</li>
                    <li :class="index == 4 ? 'active' : ''">精益生产</li>
                    <li :class="index == 5 ? 'active' : ''">增值服务</li>
                    <li :class="index == 6 ? 'active' : ''">可持续发展</li>
                    <li :class="index == 7 ? 'active' : ''">关于我们</li>
                </ul>
            </div>
            <!--头部切换语言和搜索-->
            <div class="headerRight">
                <div class="search">
                    <img src="../../assets/img/search.png" alt="">
                </div>
                <div class="switchLanguage">
                    <img src="../../assets/img/language.png" alt="">
                    <img src="../../assets/img/selectDown.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:['tabIndex','backgroundColor'],
        data() {
            return{
                index:0,
            }
        },
        mounted() {
            this.index = this.tabIndex
        },

    }
</script>

<style scoped lang="scss">
.headerContaienr{
    /*min-width: 1200px;*/
    min-width: 23rem;
    width: 100%;
    height: 99px;
    /*background-color: #000000;*/
    position: fixed;
    top: 0;
    left: 0;
    z-index:100;
    background: rgba(0,0,0,0.3);
    /*outline: none;*/
    /*主体内容*/
    .headerContent{
        /*width: 1191px;*/
        /*width: 70%;*/
        width: 100%;
        height: 99px;
        margin-left: 360px;
        display: flex;
        /*justify-content: space-around;*/
        align-items: center;
        /*左边logo*/
        .headerLeft{
            width: 92px;
            height: 99px;
            cursor: pointer;
            img{
                width: 92px;
                height: 54px;
                margin-top: 17px;
                display: block;
            }
            .word{
                width: 65px;
                height: 6px;
                img{
                    width: 92px;
                    height: 8px;
                    margin-top:3px;
                }
            }
        }
        /*导航部分*/
        .headerMiddle{
            /*width: 731px;*/
            margin: 0 50px 0 190px;
            ul{
                display: flex;
                align-items: center;
                li{
                    font-size:16px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    margin-left: 36px;
                    cursor: pointer;
                }
                li:hover{
                    color: #FE9C03;
                }
                .active{
                    color: #FE9C03;
                }
            }
        }
        /*切换语言和搜索*/
        .headerRight{
            display: flex;
            align-items: center;
            .search{
                width: 18px;
                height: 18px;
                margin-right: 35px;
                cursor: pointer;
                img{
                    width: 18px;
                    height: 18px;
                    display: block;
                }
            }
            .switchLanguage{
                display: flex;
                align-items: center;
                img{
                    width: 30px;
                    height: 18px;
                }
                img:last-child{
                    margin-left: 10px;
                    width: 10px;
                    height: 8px;
                    cursor: pointer;
                }
            }
        }
    }

}
</style>