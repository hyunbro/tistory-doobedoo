# v3.0.2 (March 14, 2014)

## Apple Touch Icons
애플 터치 아이콘 사이즈 수정과 MS 아이콘 추가. 

> apple-touch-icon overview - http://mathiasbynens.be/notes/touch-icons 

* `57×57px` – non-Retina iPhone and iPod Touch
* `72×72px` – iPad mini and the first- and second-generation iPad on iOS ≤ 6
* `76×76px` – iPad mini and the first- and second-generation iPad on iOS ≥ 7
* `114×114px` – iPhone 4+ (with Retina Display) on iOS ≤ 6
* `120×120px` – iPhone 4+ (with Retina Display) on iOS ≥ 7
* `144×144px` – iPad 3+ (with Retina Display)
* `152×152px` – iPad 3+ (with Retina Display)

> msapplication

* msapplication-114x114
* msapplication-TileColor : #222222;

## Navigation 

- `nav`에 대한 모든 코드를 간결하고 읽고 쓰기 쉽게 수정 & 정리
- 커스터마이징 확장성을 위해 테블릿 이하 디자인 변경
- 자바스크립트를 변경했으며 디자인은 purescss.io와 동일

## RSS 피드 최신글 목록 
최신글 목록 레퍼런스는 업데이트 후 제공할 것입니다.  

- 날짜 포함. 자바스크립트에서 {kdate} 
- 주요 이미지 선택 가능. 자바스크립트에서 {featuredImageUrl} 
- 주요 이미지를 작성 하지 않으면 자동으로 기존의 방식과 마찬가지로 포스팅의 첫 번째 이미지가 출력

> 포스팅에서 이미지 태그에 alt="이미지 설명, featured입니다"와 같이 사용할 수 있습니다. alt=""는 이미지 태그에 반드시 작성할 것을 권합니다. 티스토리 에디터에서 이미지를 삽입하면 전역태그로 변환되기에 주요 이미지는 <img src="...jpg" alt="... featured">처럼 HTML 작성이 필요합니다. 

## CSS

- `.skeleton-nav`, `.skeleton-header`, `skeleton-footer` 등 오류 CSS 수정 thx [5penwater님](http://5penwater.com/)
- `.skeleton-nav` 서브메뉴 1픽셀 중복 오류 수정
- `.skeleton-nav`  Doo Be Doo의 경우 IE7의 z-index 핵 자바스크립트는 nav에만 적용 
- `.mid-banner`와 `.mid-search`는 각각 `.mid-content`와 `.mid-aside`로 클래스명이 변경 
- `<section>`의 의미 없는 id를 클래스로 변경
- `.widget` 관련 CSS 정리

## HTML 

- `nav`는 `header` 안에 포함
- 레이아웃과 관련된 요소는 HTML5 태그 내에서 적용되도록 수정 

### 구글 애드센스(반응형-비동기코드)
구글 애드센스 적용 방법은 커뮤니티의 쓰레드를 참고하시기 바랍니다. thx [TommyMax님](http://tommymax.co.kr), [EagleK님](http://pobl.net/)
> http://community.markquery.com/?p=75

### 커뮤니티에 대해서 
커뮤니티는 게시판에서 포럼 프로그램으로 변경했습니다. 기존의 게시판에 많은 자료가 쌓여있으니 삭제하지는 않을 것입니다. 단 기존의 코드들은 업데이트에 따라 적용되지 않을 수 있으니 주의가 필요합니다. 게시판에서는 로그인 없이 운영 했으나, 각종 스팸에 대한 처리가 필요했습니다. 새로운 커뮤니티 프로그램에서는 부득이하게 로그인을 하게 되었습니다. 또한 포럼에서는 쓰레드를 이어갈 수 있습니다. 질문/답변의 코드 중복이 없는 커뮤니티 운영을 부탁드립니다.  

# v3.0.1 (March 6, 2014)

- `Hotfix` 사이드바 태그 목록 오류 수정 form Nightowlkr 밤샌부엉이님 

오류 수정 코드는 다음과 같습니다. 코드 정리는 다음 업데이트에서 진행합니다. 

## tistory-spidersweb 
> HTML수정  : https://github.com/markquery/tistory-spidersweb/commit/49729b0e6a3e81a36ea9c338c977a942bceb616e
> CSS추가 : https://github.com/markquery/tistory-spidersweb/commit/2e4ff07b18b33549dcb60e0544619625b6f60a97

## tistory-doobedoo
> HTML수정 : https://github.com/markquery/tistory-doobedoo/commit/0f9f0dbaea5b95964dfccf9e4d239d4412049544
> CSS추가 : https://github.com/markquery/tistory-doobedoo/commit/73c77c7214d71337321a6427dbd2f04efa2ce30c

# v3.0.0 (March 5, 2014)
v3.0.0은 마크쿼리 스켈레톤 정규 릴리즈입니다. 

## New features & Issue 
- 마크쿼리의 `Code is content`로 구호를 변경했습니다. 
- 가이드 문서 제작을 위해 GitHub에 docs 저장소를 생성했습니다. 유저 누구나 참여 가능하며, 블로그에 포스팅한 내용 링크도 가능합니다. Git 사용이 어렵다면 wiki 페이지에서 markdown으로 쉽게 작성할 수 있습니다. (github 회원가입 필요)
	> docs 저장소 - https://github.com/markquery/docs
	> docs wiki - https://github.com/markquery/docs/wiki

- bootstrap v2.3.1 스켈레톤 삭제. 더이상 다운로드를 지원하지 않습니다. 
- IE7 브라우저 사용자에게는 다음의 문구가 표시됩니다. 
	> Windows XP는 2014년 4월 8일 지원 종료됩니다. Microsoft로부터 보안 업데이트 등의 Windows XP 관련 업데이트가 더 이상 제공되지 않습니다. 

- `dist` 폴더 생성. grunt를 설치&실행하지 않는 유저들을 위해 커스터마이징된 bootstrap의 모든 항목이 포함되어 있는 `CSS`와 `JavaScript` 파일 제공
- `test` 폴더 생성. 예제 등의 코드가 포함될 예정

## Grunt 

- `/grunt` 폴더를 `/src`로 폴더명 변경 
- bootstrap의 `CSS`와 `JavaScript` 스켈레톤에서 사용 안하는 항목 코멘트 처리
> 이는 `CSS`와 `JavaScript`의 용량을 많이 줄인 작업입니다. bootstrap의 모든 항목이 포함된 파일은 `/dist` 폴더에 추가

- `bootstrap.min.js`와 `script.js` 파일을 `app.js`로 통합
> ! CSS도 하나의 파일로 통합하는 것이 좋지만 티스토리 유저들이 티스토리의 특성상 관리자 페이지에서 style.css 편집을 하기에 `bootstrap.css`와 `style.css`는 유지됩니다. 만약 더이상 CSS 수정이 필요 없는 유저들을 위해 `Gruntfile.js` 수정 방법을 가이드로 제공. 

https://github.com/markquery/tistory-doobedoo/issues/3
thanks Powerkiki 

### middle-banner

- 소셜 버튼 추가. `페이스북`, `트위터`, `구글+`, `카카오톡`, `카카오스토리`. 카카오톡과 카카오스토리는 테블릿 이하에서만 활성
> 카카오톡과 카카오스토리 아이콘은 png 파일이며, kakao.link.js 추가 
> https://github.com/kakao/kakaolink-web

### tags style for sidebar & tags page

- 사이드바 태그 위젯을 `inline`으로 변경하고 bootstrap의 라벨 사용 중단
> 유저들의 공통되고 빈번한 요청이었으며 <ul>에 inline 클래스 지정만으로는 완전히 해결이 안되어 `widget-inline-inner`로 구분

### bootstrap v3

- `navbar.less`에 margin-bottom 코멘트 처리 

### Icon

- 아이콘 일부 [flaticon](http://www.flaticon.com/)의 아이콘으로 변경 
> 아이콘은 svg 파일이며, CSS Sprites 처리 보다는 유저가 아이콘 변경 및 추가 편의를 위해 개별 아이콘으로 제공

thanks 밤샌부엉이

### npm 

- `tistory-spidersweb`, `tistory-doobedoo` 업데이트. v3.0.0 이전 npm 패키지 레지스트리 삭제
> - "grunt-contrib-less": "~0.10.0"
> - "grunt-contrib-uglify": "~0.4.0"

# v3.0.0b (February 9, 2014)
v3.0.0b는 pre-release입니다. history.md에 기재하지 않은 수정 또는 변경 사항이 있을 수 있습니다.

## IE7+ 이슈
- Bootstrap 3 for IE7(beta) 추가 https://github.com/coliff/bootstrap-ie7 
> `Requirements` Boostrap 3 uses the box-sizing property for layouts which is not natively supported by IE7. The polyfill 'boxsizing.htc' is required: https://github.com/Schepp/box-sizing-polyfill

- 티스토리의 경우 `ie.css`로 IE7+ 지원
> ie.css 수정 `.ie7`, `.ie8` 브라우저 감지

- 티스토리의 경우 `flaunt.min.js` 메뉴 스크립트 추가
> bootstrap3의 내비게이션(navbar) 닫음

- `html5shiv` 업데이트 `v3.6.2`에서 `v3.7.0`으로 업데이트 https://github.com/aFarkas/html5shiv
> IE7, IE8에 `main` HTML5 태그지원 스크립트 삭제

- IE7부터 `해피브라우저` 적용, 한글 추가 http://browsehappy.com/

## Scripts

- `respond-1.4.2.min.js` `v1.1.0`에서 `v1.4.2`로 업데이트 https://github.com/scottjehl/Respond
- `jQuery` 업데이트 `v1.10.1`에서 `v1.10.2`로 업데이트 https://developers.google.com/speed/libraries/devguide
- `bootstrap.js` 자바스크립트는 `bootstrap.min.js`로 변경
- script.js 일부수정 
> `#none` 없애고 `#`만으로 수정

## bootstrap v3

- v3.1.0 업데이트 http://blog.getbootstrap.com/2014/01/30/bootstrap-3-1-0-released/
- `.container-fluid` 추가(정규 클래스) 
- `col-*-nospace-*` 개별 클래스 삭제 
- 티스토리의 경우 `navbar.less`와 `navs.less` 각주 처리 
> navbar 사용 시 navbar.less에서 `border` 각주 처리

- print.less 업데이트 
>.skeleton-nav,.skeleton-header,.skeleton-mid-banner,.alert,.actionTrail,.paging,form,aside,.tistorytoolbar,.scrollup {display: none !important;}

## Skeleton

### navbar
- `skeleton-nav` 티스토리의 경우 bootstrap의 navbar 대신 IE7+ 지원을 위한 가벼운 스크립트 `flaunt` 적용

### header

- `skeleton-header` 사이트 헤더에 Spider's Web 스킨은 커버 이미지(1170px * 400px) 적용, Doo Be Doo 스킨은 커버 이미지(1700 * 600) 적용
> 커버 이미지는 CSS에서 background cover이며, Spider's Web의 경우 400/1170 = 0.3418% = `padding-top: 34.18%` 값으로 계산

- 사이트 헤더의 hgroup `h1`, `h2`는 text-indent: -9999로 적용 
- 사이트 헤더는 메인 페이지에서만 출력
> 개별 페이지에서는 `display: none`

### middle-banner

- `skeleton-mid-banner` 사이트 중간 배너 추가 - 폰트 리사이즈, 폰트 패밀리 변경, 프린트 버튼 등 적용 영역 
> 티스토리의 개별 페이지마다의 중복 코드 삭제, 내비게이션 메뉴에 적용했던 검색 input을 미들 배너에 적용

### etc

- 사이트 내 중요 링크들에 `.global-links` 적용
- 최신글 위젯 IE7 CSS 버그 수정
- 아이콘 font-awesome v3.2.1 대신에 개별 아이콘 `SVG` 파일이며 IE9 이하에서는 `png` 파일로 대체
- font-awesome v3.2.1 사용 시 skin.html의 &lt;head&gt;에 코드 추가(유저 선택)
> &lt;link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet"&gt;
>
> &lt;!--[if IE 7]&gt;
> &lt;link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome-ie7.min.css" rel="stylesheet"&gt;
> &lt;![endif]--&gt;

- style.css 파일에서 ie.css에 포함되지 않는 속성은 `\9`로 적용 
- style.css에서 `.text-justify` 삭제. bootstrap.less에 정규 클래스로 추가
- style.css에서 `.img-center` 삭제. bootstrap.less에 정규 클래스로 추가
- license-links를 `footer-links`로 수정 
- `.entry-content img`에 IE 핵 추가 
- 파비콘 링크수정./images/favicon.ico

## npm

- `npm` tistory-spidersweb-grunt와 tistory-doobedoo-grunt 버전 `1.1.0`으로 업데이트 
> grunt에서 `grunt-recess` 삭제, `grunt-contrib-less` 추가, 참고 bootstrap 3 blog http://blog.getbootstrap.com/2014/01/30/bootstrap-3-1-0-released/

- npm 구성요소
> nodejs v0.10.24
> - "grunt": "~0.4.2",
> - "grunt-contrib-clean": "~0.5.0",
> - "grunt-contrib-jshint": "~0.8.0",
> - "grunt-contrib-uglify": "~0.3.2",
> - "grunt-contrib-watch": "~0.5.3",
> - "grunt-contrib-less": "~0.9.0"

# v1.2.2 (October 20, 2013)

- `admin`, `local`, `tags` 등 링크 추가

# v1.2.1 (October 6, 2013)

- 카테고리 소분류 CSS 추가
- 위젯 타이틀 오류 수정

# v1.2.0 (September 29, 2013)

- `grunt.js` 추가.
- `widget-inner` 썸네일 지원 최신글목록에서는 변경. (thanks 막쿼러버님)

# v1.0.2 (September 14, 2013)

- `티에디션` 지원. 단, 작은 썸네일 포함된 리스트 (유저선택)
-`.imageblock` 위지윅에디터 이미지 삽입가능 (thanks for an anonymous tip)
- `Media Queries` 콘텐츠와 사이드바 영역 구분선 768px 이하 삭제
- `col-lg-*` bootstrap v3 공식 업데이트 전 사용하던 불필요한 grid 삭제
- `figure`, `figcaption` 여백 재설정 caption에 margin:10px 0; 
- `문단간격 없음 사용` 설정 해제. 기존의 콘텐츠에서는 에디터모드에서 체크 해제
- `entry-title` 본문 제목 폰트 사이즈 18px로 설정 
- `pagination`의 `interword` 오류 수정
- `video` `iframe` `object` `embed`에 max-width:100%; `.media-container` 추가

# v1.0.1 (September 3, 2013)

- `bootstrap.css` 레이아웃 추가 및 수정
- `ie.css` for IE8 support. 티스토리에서는 respond.js 사용불가
- `html5shiv.js` 링크 변경
- `Media Queries` 미디어쿼리 변경
- `.img-center` 이미지 가운데 정렬 class 추가 (@정재복 http://jaebok.tistory.com/)

# v1.0.0 (July 1, 2013)

- **Initial release**

