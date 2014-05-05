# v3.0.5 (April 27, 2014)
이번 버전부터 티스토리의 메인 페이지를 꾸미는 티에디션이 완벽하게 반응형웹 디자인이 됩니다. 티스토리의 기능은 살아있습니다. 단 유저가 썸네일 크기를 각각 다르게 사용할 때 레이아웃이 깨지는 것을 방지하기 위해 `ie-row-fix.js`가 추가됩니다.  반응형 티에디션 코드는 마크쿼리의 skin.html에 포함되는 것이 아니며 `/test/tiedition` 폴더의 개별 문서로 제공합니다. 유저가 원하는 형태를 선택할 수 있습니다. 크게는 썸네일과 텍스트를 동일하게 가로로 나열하는 방법과 썸네일은 왼쪽에 텍스트는 오른쪽으로 나열하는 두 가지 방법이 있습니다. 

> 티에디션을 사용할 경우 html/css를 수정하면 사이즈가 초기화 됩니다. html/css 수정 시에는 화면설정 -> 해제하기를 선택하고, 수정 완료 후 사용하기를 선택하면서 마크쿼리를 활용하시기 바랍니다.  

> 티에디션 각 항목의 타이틀 기능은 사용하지 않고, style.css의 `.tiedtion-title` 으로 대체됩니다. 또한 썸네일 자르기 기능은 제공하지 않습니다. 썸네일 자르기는 네이버, 티스토리 블로거들의 활용도를 보면 매우 효율적이지 않은 상황입니다. crop 기능을 완벽하게 제공되는 것이 아니라면 원본 비율에 맞춰 그대로 보여주는 것이 좀더 일반적인 모습으로 활용될 수 있을 것입니다. 또한 썸네일의 크기가 달라도 레이아웃이 깨지지 않도록 합니다. 물론 썸네일이 원본비율로 사이즈가 다소 줄어드는 것이라면 로딩 속도가 느려지기 때문에 가능한 메인 페이지에서 티에디션 항목을 최소로 사용하는 것이 좋을 것입니다.    

> v3.0.5 테스트 버전과 정규 배포 버전의 티에디션 HTML 코드가 수정되었습니다. 마이크로포멧 hnews 스펙이 적용되었습니다. 

## 최신글 목록 rss 주소 수정 
썸네일 지원 최신글 목록을 위한 rss 주소는 `http://도메인/rss/xml`입니다.  최신글이 나타나지 않거나 딜레이가 되는 부분이 해결될 것입니다. 

``` javascript 
$(".widget-feed").rss("http://도메인/rss/xml", {
```
## script 

* 1. 티스토리 에디터의 각주 사용을 위해 수정했던 코드를 다시 `a[href=#]`로 수정합니다. https://github.com/markquery/tistory-doobedoo/issues/7 thx [bluenlive](https://github.com/bluenlive)님
* 2. .entry-content 내부에만 적용하던 것을 삭제합니다.  

``` javascript
$("a[href=#]").click(function(e) {
```

## HTML

* 마이크로포멧 데이터 구조 중 HTML5의 <time> 태그에 published를 updated로 변경합니다. skin.html에서 `ctrl + f` 명렁어로 모든 `published`를 찾아 `updated`로 변경합니다. publised는 옵셥입니다. 반드시 수정해야하는 사항은 아니지만, 구글 웹마스터도구에서 누락된 `updated` 오류를 해결하기 위해서는 이 변경사항을 적용하시기 바랍니다. 그리고 모든 <time> 태그에 `pubdate`를 추가합니다. 10곳을 수정해야 합니다. thx [블로그인](http://markquery.com/community/7853) 

https://github.com/markquery/tistory-doobedoo/commit/c305414265a6cf32472524bbc4b1a19e24ab8972

``` html
<time class="updated" datetime="티스토리 날짜 치환자" pubdate>
```

* 파비콘 경로를 수정합니다. `./images`를 삭제합니다. 파비콘 뿐만 아니라 터치 아이콘을 유저의 아이콘으로 수정해서 사용하시기 바랍니다. thx [이바구님](http://www.ibagu.co.kr/) 

``` html
<link rel="shortcut icon" href="/favicon.ico">
```

* 블로거 이름의 티스토리 치환자를 수정합니다. 3곳을 수정해야 합니다. thx DivaGuskA님

https://github.com/markquery/tistory-doobedoo/commit/8475db2b93da9b59d778c8c162eefd2eee111b70

``` html
<span class="fn">[##_article_rep_author_##]</span>
```

* footer의 `write`를 대문자로 수정합니다. thx [sms200207](https://github.com/sms200207)
* 메타 태그에서 chrome=1을 삭제합니다. 

``` html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

## CSS
* `.updated`를 추가합니다. 

``` css
.updated { color:#999; }
```

* 내비게이션 메뉴의 모바일에서 펼침 버튼이 이미지 밑으로 내려앉는 오류 수정합니다. 

``` css
   .menu-link {
   ... 
    z-index: 1000;
  }
```

* .scrollup의 모바일에서 버튼이 터치되지 않는 오류 수정합니다. thx 미도님

``` css
  .scrollup {
  ...
  z-index: 1000;
  }
```

* 서브 카테고리를 좀더 구별하기 쉽도록 글꼴 크기를 작게 합니다. `font-size: 10px`를 추가하며, `content:"\003e";`로 변경합니다. 

``` css
.widget-inner li li li a {font-size:10px;} /* 추가 */
.widget-inner li li li a:before {content:"\003e"; padding-right:10px;} /* 수정 */
```

* 최신글 목록의 높이 간격을 60px에서 80px로 수정합니다.

``` css
.widget-feed li { min-height: 80px; }
```

* Spider's Web의 경우 `.skeleton`, `.skeleton-mid-banner`의 여백을 IE7에서만 표현하도록 수정합니다. 

``` css
.skeleton {
  *padding: 0 20px;
}

.skeleton-mid-banner { 
  *padding: 0 20px;
}
```

* Spider's Web의 경우 `.skeleton-footer`의 미디어쿼리 767px 이하에서 여백을 삭제합니다. 

``` css
  .skeleton-footer {
    font-size: 10px;
    padding: 30px 0; /* 삭제 */
    text-align:center;
  }
```

## 이미지 파일 최적화 
svg, png 파일 등 이미지 파일을 최적화합니다. thx [sms200207](https://github.com/sms200207)

* https://github.com/markquery/tistory-spidersweb/pull/5
* https://github.com/markquery/tistory-spidersweb/pull/6

## 티에디션

### style.css 

* style.css에서 다음의 코드를 삭제합니다. 

``` css
body.tistory_grid_350 div#ttCanvas,
body.tistory_grid_385 div#ttCanvas,
body.tistory_grid_420 div#ttCanvas,
body.tistory_grid_455 div#ttCanvas,
body.tistory_grid_490 div#ttCanvas,
body.tistory_grid_525 div#ttCanvas,
body.tistory_grid_560 div#ttCanvas,
body.tistory_grid_595 div#ttCanvas,
body.tistory_grid_630 div#ttCanvas,
body.tistory_grid_665 div#ttCanvas,
body.tistory_grid_700 div#ttCanvas,
body.tistory_grid_735 div#ttCanvas,
body.tistory_grid_770 div#ttCanvas,
body.tistory_grid_805 div#ttCanvas,
body.tistory_grid_840 div#ttCanvas,
body.tistory_grid_875 div#ttCanvas,
body.tistory_grid_910 div#ttCanvas,
body.tistory_grid_945 div#ttCanvas,
body.tistory_grid_980 div#ttCanvas,
body.tistory_grid_1015 div#ttCanvas,
body.tistory_grid_1050 div#ttCanvas { max-width: 100% !important; }
.tt-span-1,
.tt-span-2,
.tt-span-3,
.tt-span-4,
.tt-span-5,
.tt-span-6,
.tt-span-7,
.tt-span-8,
.tt-span-9,
.tt-span-10,
.tt-span-11,
.tt-span-12 {
max-width: 100% !important;
}
@media screen and (max-width: 1200px) {
.tt-span-1,
.tt-span-2,
.tt-span-3,
.tt-span-4,
.tt-span-5,
.tt-span-6,
.tt-span-7,
.tt-span-8,
.tt-span-9,
.tt-span-10,
.tt-span-11,
.tt-span-12 { width:100% !important; }
}
```

* style.css에 앞서 삭제한 코드 대신에 다음의 코드로 수정합니다. 티에디션에서 margin, padding 여백 속성을 강제로 지우는 코드가 있기 때문에 강제로 각 행(col)에 여백이 필요합니다. 또한 선택자에 margin과 padding의 문자열이 있을 경우에는 767px 이하 스크린부터 0px의 값으로 여백을 없애버립니다. 모바일에서 여백 없이 표현되는 티에디션에서 적용됩니다. 이는 마크쿼리 초기 버전부터 포함되어 있는 코드에 의해 유지됩니다. 

``` css
/* Tiedition  
   ------------------------------------------------ */
#ttCanvas { max-width: 100%!important; }
.tt-span-1,
.tt-span-2,
.tt-span-3,
.tt-span-4,
.tt-span-5,
.tt-span-6,
.tt-span-7,
.tt-span-8,
.tt-span-9,
.tt-span-10,
.tt-span-11,
.tt-span-12 {
max-width: 100%!important;
}

/* Tiedition use the hNews microformat 
-------------------------------------------------- */
.tiedition .entry-header { }
.tiedition .entry-title { }
.tiedition .entry-summary { }
.tiedition .entry-content-asset { }
.tiedition .entry-content { }
.tiedition .byline { }
.tiedition .updated { }
.tiedition .entry-tags { }

/* Tiedition entry
-------------------------------------------------- */
.tiedition-title {
  margin: 0 0 10px!important;
  padding: 0 0 10px!important;
  font-size: 16px!important;
  font-family: inherit!important;
  border-bottom:1px solid #eee!important;
} 
.tt-post-title {
  font-weight: bold!important;
  letter-spacing: normal!important;
  font-size: 14px!important;
  text-align: left!important;
  margin: 0 0 5px!important;
  padding: 0!important;  
}
.tt-post-thumb {
  padding-bottom: 5px!important;
}
.tt-post-summary {
  text-align: justify!important;
  font: inherit!important;
}
.tt-post-etcinfo {
  font: inherit!important;
  letter-spacing: normal!important;
  text-align: left!important;
}
.tt-post-etcinfo * {
  white-space:initial!important;
}
.tt-post-etcinfo p {
  font-size:8px!important;
  margin: 5px 0 20px!important;
}
.tt-post-category, 
.tt-post-author,
.tt-post-date,
.tt-post-comment { 
  font: inherit!important;
  letter-spacing: normal!important;
  line-height: 1.8!important;
}
.multi-columns-row .first-in-row {
  clear: left;
}
.multi-columns-row .col-xs-6:nth-child(2n + 3) { clear: left; }
.multi-columns-row .col-xs-4:nth-child(3n + 4) { clear: left; }
.multi-columns-row .col-xs-3:nth-child(4n + 5) { clear: left; }
.multi-columns-row .col-xs-2:nth-child(6n + 7) { clear: left; }
.multi-columns-row .col-xs-1:nth-child(12n + 13) { clear: left; }
@media (min-width: 768px) {
  .multi-columns-row .col-xs-6:nth-child(2n + 3) { clear: none; }
  .multi-columns-row .col-xs-4:nth-child(3n + 4) { clear: none; }
  .multi-columns-row .col-xs-3:nth-child(4n + 5) { clear: none; }
  .multi-columns-row .col-xs-2:nth-child(6n + 7) { clear: none; }
  .multi-columns-row .col-xs-1:nth-child(12n + 13) { clear: none; }
  .multi-columns-row .col-sm-6:nth-child(2n + 3) { clear: left; }
  .multi-columns-row .col-sm-4:nth-child(3n + 4) { clear: left; }
  .multi-columns-row .col-sm-3:nth-child(4n + 5) { clear: left; }
  .multi-columns-row .col-sm-2:nth-child(6n + 7) { clear: left; }
  .multi-columns-row .col-sm-1:nth-child(12n + 13) { clear: left; }
}
@media (min-width: 992px) {
  .multi-columns-row .col-sm-6:nth-child(2n + 3) { clear: none; }
  .multi-columns-row .col-sm-4:nth-child(3n + 4) { clear: none; }
  .multi-columns-row .col-sm-3:nth-child(4n + 5) { clear: none; }
  .multi-columns-row .col-sm-2:nth-child(6n + 7) { clear: none; }
  .multi-columns-row .col-sm-1:nth-child(12n + 13) { clear: none; }
  .multi-columns-row .col-md-6:nth-child(2n + 3) { clear: left; }
  .multi-columns-row .col-md-4:nth-child(3n + 4) { clear: left; }
  .multi-columns-row .col-md-3:nth-child(4n + 5) { clear: left; }
  .multi-columns-row .col-md-2:nth-child(6n + 7) { clear: left; }
  .multi-columns-row .col-md-1:nth-child(12n + 13) { clear: left; }
}
@media (min-width: 1200px) {
  .multi-columns-row .col-md-6:nth-child(2n + 3) { clear: none; }
  .multi-columns-row .col-md-4:nth-child(3n + 4) { clear: none; }
  .multi-columns-row .col-md-3:nth-child(4n + 5) { clear: none; }
  .multi-columns-row .col-md-2:nth-child(6n + 7) { clear: none; }
  .multi-columns-row .col-md-1:nth-child(12n + 13) { clear: none; }
  .multi-columns-row .col-lg-6:nth-child(2n + 3) { clear: left; }
  .multi-columns-row .col-lg-4:nth-child(3n + 4) { clear: left; }
  .multi-columns-row .col-lg-3:nth-child(4n + 5) { clear: left; }
  .multi-columns-row .col-lg-2:nth-child(6n + 7) { clear: left; }
  .multi-columns-row .col-lg-1:nth-child(12n + 13) { clear: left; }
}
```

* 미디어쿼리 767px 이하에 있는 margin, paddng, height 크기를 0px로 만드는 코드에 !important를 추가합니다. 티에디션을 위한 속성에 !important가 붙기 때문입니다. 

``` css
  body [class*="padding"] {
    padding: 0!important;
  }
  body [class*="margin"] {
    margin: 0!important;
  }
  body [class*="height"] {
    height: auto!important;
  } 
```

### Javascript for IE

* `ie-row-fix.js` 파일을 `/images` 폴더에 추가합니다. thx [sixfootsixdesigns](https://github.com/sixfootsixdesigns)

### HTML 유저 선택

* `/test/tiedition` 폴더에 티에디션을 위한 HTML은 패턴에 따라 유저가 선택해서 사용합니다. 함께 있는 CSS 파일은 유저가 직접 style.css에 추가해야 합니다. 

> 메인페이지에서 티에디션을 활성화시키고, 아이탬 탭에서 무엇이든 선택 후, 디자인 탭에서 HTML 버튼을 누르면 HTML을 수정할 수 있습니다. 
> 아이템 선택은 무엇이든지 가능합니다. 단 항목에 맞는 썸네일 크기를 맞추기 위해서라면, 모든 아이탬을 가능한 썸네일 크기가 큰 아이템으로 선택하는 것이 좋습니다. 
> 모바일에서 1개의 열로 썸네일이 보이도록 할 경우 썸네일 크기가 작은 아이템은 화면에 작게 표시됩니다. 

# v3.0.4 (April 4, 2014)

## bootstrap 
유저의 커스터마이징 편의를 위해 프레임워크 bootstrap의 의존도를 낮추는 작업이 계속 진행되었습니다. 이 과정에서 style.css 파일의 코드는 다소 늘어났지만, 전체 CSS의 용량은 매우 많이 줄어들었습니다. bootstrap의 모든 CSS와 JavaScript의 기능을 추가할 유저는 /dist 폴더의 bootstrap.css와 app.js 파일을 사용하시면 됩니다. 하지만 모든 기능을 사용하지 않는다면 불필요한 코드까지 방문자들에게 로딩을 하게 만듭니다. 사용하고자 하는 기능만 추가하기를 권해드리며, [grunt](http://markquery.com/docs/installing-git-and-nodejs-and-grunt/)를 실행하시기 바랍니다.   

### less
bootstrap.less에서 mid-search에 쓰기 위해 input-groups를 추가하며 , button-groups와 list-group의 CSS는 더이상 사용하지 않습니다. 

* `@import "component-animations.less";` 추가 
* `@import "input-groups.less";` 추가
* `@import "button-groups.less";` 제외 
* `@import "list-group.less";` 제외 

## skeleton 

* Doo Be Doo는 게시트북 페이지와 개별 포스팅 댓글 부분에 container로 감싸주어 가운데 정렬합니다. 

## CSS

* 스켈레톤의 모바일을 위한 미디어쿼리 768px에서 767px로 수정합니다. 아이패드 스크린 사이즈는 데스크탑 스크린 사이즈와 동일하게 표현됩니다. thx 5penwater님 

> @media screen and (max-width: 767px) { }

* 모바일에서 nav와 header 겹치는 오류 수정합니다. 

> .skeleton-mid-banner { padding: 50px 15px 0; }

* 내비게이션 서브메뉴의 `display:none`을 `left: -9999em`으로 수정합니다. 마우스오버 시 `left: auto`가 되며 자바스크립트를 지원하지 않는 브라우저 또는 스크린리더에서도 키보드 제어가 가능합니다.

css: 

``` css
..nav ul li ul {
  position:absolute;
  left:-9999em;
  z-index:1030;
}
.nav ul li:hover ul {
  left:auto;
}
```

* `.mid-content`에 line-height:2  추가하고 `.social-group`는 삭제합니다. 
* `.mid-aside`에 검색창을 100%로 변경하고 bootstrap의 input-groups를 사용합니다.
* `.btn-mq`를 `.btn-none`로 변경합니다. 
* `.skeleton-aside` 오타를 수정합니다. thx success님 
* font-family는 `나눔고딕`을 기본으로 변경하고, 애플 유저가 나눔고딕이 없을 시에는 `애플 SD 고딕 Neo`으로 설정. 두 글꼴이 모두 없을 경우에는 `돋움`으로 설정합니다.

> @font-family-korean: "나눔고딕", NanumGothic, 'Apple SD Gothic Neo', "돋움", dotum, Arial, sans-serif;

* `.svgicon`에 text-indent: -9999px; 추가합니다. HTML에서 아이콘의 span 태그에 의미에 맞는 텍스트를 입력합니다. 

HTML example:

``` html
<span class="facebook-icon svgicon">페이스북 공유 버튼</span>
```

* `.social-svgicon` 선택자를 삭제하고, `.svgicon`으로 통합합니다. 
* 사이트 top으로 가기 버튼의 `.scrollup`은 모든 디바이스에서 출력합니다. 미디어쿼리 767px 이하에서는 bottom: 40px; right: 0; 값을 설정합니다.  
* bootstrap의 `.list-inline`는 IE7을 지원합니다. 

css: 

``` css
.list-inline li {
  *display:inline;
  *zoom:1;  
}
```

## HTML
* 소셜 글보내기 버튼 IE9 이하 오류를 수정합니다. HTML에서 페이스북 글보내기 버튼의 경우 `facebook-share-dialog`를 `facebooksharedialog`처럼 줄표(dash)를 삭제합니다. 트위터와 구글플러스 버튼도 마찬가지입니다. thx 쫄이님 
* mid-banner 부분 HTML 수정 및 ARIA 추가합니다. 
* write 글쓰기 버튼 추가합니다. thx songjeyoon님
* 글꼴 변환에 `나눔바른고딕` 추가. 영어를 위한 글꼴 변환은 제외하며, 기존의 코드는 /test 폴더에 포함해 둡니다.

## script 
* 티스토리 에디터의 각주 기능을 사용할 수 있습니다. 의미 없는 앵커 사용 방지를 위한 스크립트를 수정합니다. thx bluenlive님 

JavaScript:

``` javascript
// 콘텐츠 본문에만 사용됩니다
$(".entry-content [href=#]").click(function(e) {
```

css:

``` css
sup.footnote { 
position:static;
vertical-align:super;
} 
```

* `/dist` 폴더에 bootstrap의 모든 자바스크립트를 포함하고 있는 파일명 app.js로 변경합니다. 

## npm 업데이트
[jshint](https://www.npmjs.org/package/grunt-contrib-jshint), [watch](https://www.npmjs.org/package/grunt-contrib-watch), [less](https://www.npmjs.org/package/grunt-contrib-less)가 업데이트 되었습니다. 

> "grunt-contrib-jshint": "~0.10.0",
> "grunt-contrib-watch": "~0.6.1",
> "grunt-contrib-less": "~0.11.0"

# v3.0.3 (March 14, 2014)
alt 속성 수정

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

> 포스팅에서 이미지 태그에 alt="이미지 설명, featured입니다"와 같이 사용할 수 있습니다. alt=""는 이미지 태그에 반드시 작성할 것을 권합니다. 티스토리 에디터에서 이미지를 삽입하면 전역태그로 변환되기에 주요 이미지는 &lt;img src="...jpg" alt="... featured"&gt;처럼 HTML 작성이 필요합니다. 

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

