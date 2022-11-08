<template>
    <section id="bannerType" class="banner__wrap scroll" :class="attr">
        <h2 class="blind">배너 영역</h2>
        <div class="banner__inner">
            <h3 class="title">HAPPY ANIMALS</h3>
            <p class="desc">
                바쁜 당신의 귀여운 강아지, 고양이들을 위한 안식처 한 번 맡겨보세요!
                <a href="#" title="고양이 보러가기">
                    애니멀 유치원 GO
                </a>
            </p>
            <span class="small">CUTE ANIMALS</span>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            attr: String,
            layout: String
    },
};
</script>

<style>
/* banner Type */
.banner__inner {
    background-image: url(../../assets/img/banner_type01.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    text-align: center;
    padding: 120px 0;
    color: #fff;
}
.banner__inner .title {
    font-size: 60px;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 40px;
}
.banner__inner .desc {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 300;
    margin-bottom: 70px;
}
.banner__inner .desc a {
    color: #fff;
    display: block;
}
.banner__inner .desc a:hover {
    text-decoration: underline;
}
.banner__inner .small {
    font-size: 16px;
    text-decoration: underline;
}

/* 반응형 */
@media(max-width: 960px){
    .banner__inner {
        padding: 100px 0;
    }
}
@media(max-width: 600px){
    .banner__inner {
        padding: 80px 0;
    }
    .banner__inner .title {
        font-size: 30px;
        margin-bottom: 20px;
    }
    .banner__inner .desc {
        font-size: 16px;
        margin-bottom: 40px;
    }
}
</style>