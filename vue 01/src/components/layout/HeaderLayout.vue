<template>
    <header id="headerType" class="header__warp" :class="fonts">
		<div class="header__inner">
			<div class="header__logo">
			<a href="#">
				WEB <em>SITE</em>
			</a>
			</div>
			<div class="menu__bar"></div>
			<div class="header__menu">
				<ul>
					<li>
						<a href="#sliderType">슬라이드 영역</a>
					</li>
					<li><a href="#imageType">이미지 영역</a></li>
					<li><a href="#imgTextType">이미지 텍스트 영역</a></li>
					<li><a href="#cardType">카드 영역</a></li>
					<li><a href="#bannerType">배너 영역</a></li>
					<li><a href="#textType">텍스트 영역</a></li>
					<li><a href="#footerType">푸터 영역</a></li>
				</ul>
			</div>
			<div class="header__member">
			<a href="#">로그인</a>
			</div>
			<div class="header__ham">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</header>
</template>

<script>
    export default {
        props: {
            fonts: String,
    },
};
</script>

<style>
    /* headerType : 스코프 설정 가능 */
    .header__inner {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        box-sizing: border-box;
        /* border-bottom: 1px solid #ccc; */
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10000;
        background: #1a1a1a;
    }
    .header__logo {
        width: 10%;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
    }
    .header__logo a {
        color: #F1F1F1;
    }
    .header__logo em {
        color: #6b6b6b;
        font-size: 18px;
        font-weight: 400;
    }
    .header__menu {
        width: 80%;
        text-align: center;
    }
    .header__menu li {
        display: inline;
    }
    .header__menu li a {
        display: inline-block;
        color: #F1F1F1;
        padding: 8px 30px;
        margin: 0 5px;
        transition: background-color 0.3s;
    }
    .header__menu li a:hover {
        background-color: #F1F1F1;
        color: #000;
        border-radius: 5px;
    }
    .header__member {
        width: 10%;
        text-align: right;
    }
    .header__member a {
        font-size: 16px;
        border: 1px solid #F1F1F1;
        padding: 10px 30px;
        border-radius: 50px;
        transition: all 0.3s;
        color: #F1F1F1;
    }
    .header__member a:hover {
        background-color: #F1F1F1;
        color: #000;
    }
    .header__ham {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 1000;
        width: 50px;
        height: 50px;
        display: none;
        cursor: pointer;
    }
    .header__ham span {
        display: block;
        background: #F1F1F1;
        width: 30px;
        height: 2px;
        border-radius: 3px;
        margin-left: 10px;
        margin-top: 5px;
        transition: 0.25s margin 0.25s, 0.25s transform;
    }
    .header__ham span:nth-child(1){
        margin-top: 18px;
    }
    .header__ham.active span {
        transition: 0.25s margin, 0.25s transform 0.25s;
    }
    .header__ham.active span:nth-child(1){
        margin-top: 25px;
        margin-bottom: -7px;
        transform: rotate(45deg);
    }
    .header__ham.active span:nth-child(2){
        transform: rotate(45deg);
    }
    .header__ham.active span:nth-child(3){
        margin-top: -2px;
        transform: rotate(135deg);
    }

    /* media */
    @media (max-width: 1300px){
        .header__menu {
            position: fixed;
            right: -100%;
            top: 69px;
            background: #1a1a1a;
            width: 35%;
            height: 100vh;
            padding: 20px;
            text-align: right;
            transition: right 0.4s ease-in;
        }
        .header__menu ul li {
            display: block;
            margin: 20px;
        }
        .header__menu ul li a {
            padding: 10px;
            color: #F1F1F1;
            white-space: nowrap;
        }
        .header__menu.active {
            right: 0;
        }
        .header__member {
            margin-right: 50px;
        }
        .header__ham {
            display: block;
        }
        .header__logo {
            width: 50%;
        }
        .header__member {
            width: 50%;
        }
    }
    @media (max-width: 600px){
        .header__menu {
            width: 45%;
        }
    }
</style>