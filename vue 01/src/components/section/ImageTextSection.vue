<template>
    <section id="imgTextType" class="imgText__wrap scroll" :class="attr">
        <h2 class="blind">애니멀 유치원 살펴보기</h2>
        <div class="imgText__inner" :class="layout">
            <div class="imgText__txt">
                <span>{{ titles[0].smallTitle }}</span>
                <h3>{{ titles[0].title }}</h3>
                <p>
                    {{ titles[0].desc }}
                </p>
                <ul>
                    <li v-for="imgText in imgTexts" v-bind:key="imgText">
                        <a href="#">{{ imgText.list }}</a>
                    </li>
                </ul>
            </div>
            <div class="imgText__img" v-for="imgText2 in imgTexts2" v-bind:key="imgText2" :class="`${imgText2.className}`">
                <li><a href="#">{{ imgText2.btn }}</a></li>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        attr: String,
        layout: String,
    },

    data: function () {
        return {
            titles: [
                {
                    smallTitle: "ANIMALS",
                    title: "애니멀 유치원 살펴보기",
                    desc: "교육 및 사회성이 필요한 반려동물들의 애니멀 유치원 소개 사이트 입니다.",
                },
            ],
            imgTexts: [
                {
                    list: "애니멀 유치원 사이트",
                },
                {
                    list: "댕댕꾸러기 소개",
                },
                {
                    list: "칭찬해요",
                },
                {
                    list: "서운해요",
                },
                {
                    list: "공지사항",
                },
                {
                    list: "ANIMALS Youtube",
                },
            ],
            imgTexts2: [
                {
                    className: "img1",
                    btn: "멍멍 유치원 사이트",
                },
                {
                    className: "img2",
                    btn: "야옹 유치원 사이트",
                },
            ],
        };
    },
};
</script>

<style>
/* imgText Type */
.imgText__wrap {
    background: rgb(255, 255, 255);
}
.imgText__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.imgText__inner > div {
    width: 32%;
    height: 500px;
}
.imgText__txt span {
    font-size: 16px;
    color: rgb(133, 133, 133);
    text-decoration: underline;
    text-underline-position: under;
    margin-bottom: 20px;
    display: block;
    text-align: left;
}
.imgText__txt h3 {
    font-size: 50px;
    font-weight: 400;
    color: #6f6257;
    word-break: keep-all;
    line-height: 1.4;
    margin-bottom: 20px;
}
.imgText__txt p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5;
    color: #666;
    margin-bottom: 10px;
}
.imgText__txt ul {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.6;
}
.imgText__txt ul li {
    position: relative;
    padding-left: 20px;
}
.imgText__txt ul li a {
    color: #666;
}
.imgText__txt ul li::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    top: 9px;
    background: #666;
}
.imgText__img {
    border-radius: 10px;
    position: relative;
}
.imgText__img a {
    position: absolute;
    left: 30px;
    bottom: 30px;
    background-color: #181715;
    color: #fff;
    font-size: 18px;
    padding: 10px 30px;
    border-radius: 30px;
    display: inline-block;
}
.imgText__img a:hover {
    background-color: #ededed;
    color: #181818;
}
/* .imgText__img a.blue {
    background-color: #7c2b39;
} */
.imgText__img.img1 {
    background: url(../../assets/img/imgText_bg01.jpg) no-repeat center / cover;
}
.imgText__img.img2 {
    background: url(../../assets/img/imgText_bg02.jpg) no-repeat center / cover;
}

/* 반응형 */
@media (max-width: 960px) {
    .imgText__inner {
        flex-wrap: wrap;
    }

    .imgText__txt h3 {
        font-size: 40px;
    }

    .imgText__txt p {
        margin-bottom: 60px;
    }

    .imgText__inner > div.imgText__txt {
        width: 100%;
        height: auto;
        text-align: center;
    }

    .imgText__inner > div.imgText__txt ul {
        display: none;
    }

    .imgText__inner > div.imgText__img {
        width: 49%;
    }
}
@media (max-width: 600px) {
    .imgText__txt span {
        text-align: center;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .imgText__txt h3 {
        font-size: 40px;
    }

    .imgText__txt p {
        margin-bottom: 50px;
        font-size: 16px;
    }

    .imgText__inner > div.imgText__img {
        width: 100%;
        height: 200px;
    }
    .imgText__inner > div.imgText__img.img1 {
        margin-bottom: 20px;
    }

    .imgText__img a {
        left: 20px;
        bottom: 20px;
    }
}
</style>
