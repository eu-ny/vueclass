<template>
    <section id="textType" class="text__wrap scroll " :class="attr">
        <span>ANIMALS</span>
        <h2 class="mb70">애니멀 유치원을 소개합니다.</h2>
        <div class="text__inner" :class="layout">
            <div class="text t1">
                <h3 class="text__title">홈페이지</h3>
                <p class="text__desc">애니멀 유치원의 공식 홈페이지 입니다. 애니멀 유치원의 각 과정과 활동 사진 등을 확인하실 수 있습니다.</p>
                <a class="text_btn" href="/">더보기</a>
            </div>
            <div class="text t2">
                <h3 class="text__title">공지사항</h3>
                <p class="text__desc">애니멀 유치원의 행사, 일정, 모집 등 중요 사항들을 확인할 수 있습니다.</p>
                <a class="text_btn" href="/">더보기</a>
            </div>
            <div class="text t3">
                <h3 class="text__title">주의해요</h3>
                <p class="text__desc">당신의 반려 동물에 대한 주의점(알레르기, 행동, 성격 등)을 작성할 수 있습니다.</p>
                <a class="text_btn" href="/">더보기</a>
            </div>
            <div class="text t4">
                <h3 class="text__title">칭찬해요</h3>
                <p class="text__desc">이 달의 베스트 애니멀 학생을 확인할 수 있습니다.</p>
                <a class="text_btn" href="/">더보기</a>
            </div>
            <div class="text t5">
                <h3 class="text__title">추천해요</h3>
                <p class="text__desc">칭찬해요와 서운해요에 해당하는 투표를 진행하는 곳입니다.</p>
                <a class="text_btn" href="/">더보기</a>
            </div>
            <div class="text t6">
                <h3 class="text__title">서운해요</h3>
                <p class="text__desc">각 학생들의 벌점을 확인할 수 있습니다.</p>
                <a class="text_btn" href="/">더보기</a>
            </div>
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
/* text Type */
.text__wrap span {
    display: block;
    color: #666;
    text-align: center;
    font-size: 16px;
    text-underline-position: underline;
    margin-bottom: 16px;
}
.text__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.text {
    width: 32%;
    margin-bottom: 2%;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    transition: background 0.3s;
}
.text:hover {
    background: #f5f5f5;
}
.text__title {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    padding-top: 75px;
}
.text__title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: url(../../assets/img/text_icons01.svg);
}
.text.t1 .text__title::before {
    background-position: 0 0;
}
.text.t2 .text__title::before {
    background-position: -60px 0;
}
.text.t3 .text__title::before {
    background-position: -120px 0;
}
.text.t4 .text__title::before {
    background-position: -180px 0;
}
.text.t5 .text__title::before {
    background-position: -240px 0;
}
.text.t6 .text__title::before {
    background-position: -300px 0;
}
.text__desc {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 20px;
    color: #666;
}
.text_btn {
    font-size: 16px;
    line-height: 1;
    text-decoration: underline;
    text-underline-position: under; /* 언더라인이 글자에서 쪼금 더 내려온다. */
    color: #666;
}

/* 반응형 */
@media (max-width: 960px) {
    .text {
        width: 49%;
        background: #F5F5F5;
    }
}
@media (max-width: 600px) {
    .text__title {
        font-size: 24px;
    }
    .text__desc {
        font-size: 16px;
    }
}
@media (max-width: 480px) {
   .text {
        width: 100%;
   }
}


</style>