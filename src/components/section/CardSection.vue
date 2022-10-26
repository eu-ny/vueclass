<template>
    <section id="cardType" class="card__wrap scroll " :class="attr">
        <h2>애니멀 활동 소개 📝</h2>
        <p>애니멀 유치원의 대표적인 활동 리스트 입니다.</p>
        <div class="card__inner" :class="layout">
            <article class="card">
                <figure class="card__header">
                    <img src="../../assets/img/card_bg01_01.jpg" alt="상업 전시" />
                </figure>
                <div class="card__body">
                    <h3 class="tit">개인 활동 시간</h3>
                    <p class="desc">
                        당신의 각각의 반려동물의 맞춤 교육 활동입니다. 각 애니멀들의 성향 및 고칠점에 대하여 전문가들과 분석하고 1:1 맞춤형으로 교육이 진행됩니다.
                    </p>
                    <a class="btn" href="#">
                        더 자세히 보기
                        <span aria-hidden="true">
                        <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black" />
                        </svg>
                        </span>
                    </a>
                </div>
            </article>
            <article class="card">
                <figure class="card__header">
                    <img src="../../assets/img/card_bg01_02.jpg" alt="미술 전시" />
                </figure>
                <div class="card__body">
                    <h3 class="tit">간식 시간</h3>
                    <p class="desc">
                        식사 훈련을 함께 동반하며 사료와 함께 수제로 만든 건강 간식이 제공됩니다. 필요에 따라 직접 선택할 수 있으며 주의 사항에 따라 해당 재료를 먹지 못하는 경우 따로 제공합니다.
                    </p>
                    <a class="btn" href="#">
                        더 자세히 보기
                        <span aria-hidden="true">
                        <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black" />
                        </svg>
                        </span>
                    </a>
                </div>
            </article>
            <article class="card">
                <figure class="card__header">
                    <img src="../../assets/img/card_bg01_03.jpg" alt="사진 전시" />
                </figure>
                <div class="card__body">
                    <h3 class="tit">단체 활동 시간</h3>
                    <p class="desc">
                        개인 활동과 달리 단체로 활동하는 시간이며 각 애니멀들의 사회성, 사교성을 기르기 위한 교육 시간 입니다. 각 성향에 따라 분리 하여 활동할 수 있습니다.
                    </p>
                    <a class="btn" href="#">
                        더 자세히 보기
                        <span aria-hidden="true">
                        <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black" />
                        </svg>
                        </span>
                    </a>
                </div>
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
.card__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; /* 중심을 기준으로 하여 정렬에 맞게 모아준다.*/
}
.card {
    width: 32%;
    border-radius: 10px;
    background: #f5f5f5;
}
.card img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.card__body {
    padding: 24px;
}
.card__body .tit {
    font-size: 24px;
    margin-bottom: 10px;
    /* 한줄 효과 - 텍스트가 한줄을 넘어가면 자동으로 ...처리 */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 20px;
}
.card__body .desc {
    font-size: 18px;
    line-height: 1.4;
    color: rgb(126, 126, 126);
    margin-bottom: 20px;
    font-weight: 300;
    /* 세줄 효과 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
.card__body span {
    margin-left: 10px;
}

/* 반응형 */
@media(max-width: 960px){
    .card__inner {
        flex-wrap: wrap;
    }
    .card {
        width: 48%;
    }

    .card:last-child {
        display: none;
    }

    .card__body .desc {
        font-size: 16px;
    }
}

@media(max-width: 600px){
    .card {
        width: 100%;
    }

    .card {
        margin-bottom: 20px;
    }

    .card__body {
        padding: 20px;
    }

    .card:last-child {
        display: inline-block;
    }
}
</style>