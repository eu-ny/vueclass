<template>
    <section id="imageType" :class="'image__wrap scroll ' + attr">
        <h2>애니멀 유치원</h2>
        <p>🐶 당신의 반려 동물에 맞는 반을 골라주세요!🐱</p>
        <div class="image__inner" :class="layout">
            <article class="image img1">
                <h3 class="image__title">멍멍 유치원</h3>
                <p class="image__desc">
                    강아지는 매우 귀엽습니다. 활동적인 모습이 귀엽습니다. 강아지는
                    기뻐할 때도 귀엽고 시무룩할 때도 귀엽습니다.
                </p>
                <a href="#" title="자세히 보기" class="image__btn">자세히 보기</a>
            </article>
            <article class="image img2">
                <h3 class="image__title">야옹 유치원</h3>
                <p class="image__desc">
                    고양이는 매우 귀엽습니다. 도도하면서도 애교가 많습니다. 고양이는
                    은근하게 다가오는 것이 매력적입니다.
                </p>
                <a href="#" title="자세히 보기" class="image__btn yellow">자세히 보기</a>
            </article>
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
/* img type */
.image__inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.image {
    width: 49%;
    height: 370px;
    color: #fff;
    padding: 200px 30px 30px 30px;
    border-radius: 10px;
    box-sizing: border-box;
}
.image.img1 {
    background: url(../../assets/img/img_bg01_01.jpg) no-repeat center;
    background-size: cover;
}
.image.img2 {
    background: url(../../assets/img/img_bg01_02.jpg) no-repeat center;
    background-size: cover;
}
.image__title {
    font-size: 32px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.image__desc {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 10px;
    line-height: 1.5;
    /* 2줄 효과 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-right: 30px;
}
.image__btn {
    font-size: 16px;
    color: #fff;
    background-color: #a7844f;
    padding: 10px 20px;
    display: inline-block;
    transition: all 0.3s ease;
    border-radius: 20px;
}
.image__btn.yellow {
    background-color: #687553;
}
.image__btn:hover {
    background: #fff;
    color: #000;
}

/* 반응형 */
@media(max-width: 960px){}
@media(max-width: 600px){
    .image__inner {
        flex-direction: column;
    }
    .image {
        width: 100%;
        padding: 205px 20px 20px 20px;
    }
    .image:first-child {
        margin-bottom: 20px;
    }
    .image__title {
        font-size: 24px;
    }
    .image__desc {
        font-size: 16px;
    }
}
</style>