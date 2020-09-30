<title> リクナビ2021 リクナビらくらく設定フォーム</title>
<link rel="stylesheet" href="https://unpkg.com/buefy/dist/buefy.min.css">
<link rel="stylesheet" href="/assets/css/bulma.css">
<link rel="stylesheet" href="/assets/css/app.css">
<link rel="stylesheet" href="/assets/css/dashboard.css">
<link rel="stylesheet" href="/assets/css/icons.min.css">
<link rel="stylesheet" href="/assets/css/jquery.dropdown.min.css">
<link rel="stylesheet" href="/assets/css/ie.css">
<link rel="stylesheet" href="//cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
<style>
.custom-select {
position: relative;
display: block;
overflow: hidden;
padding: 0 0 0 18px;
height: 41px;
line-height: 40px;
border: 1px solid #dbdbdb;
background-color: #fff;
/* color: #888; */
text-decoration: none;
white-space: nowrap;
font-size: 16px;
border-radius: 4px;
}

.gyoushu-box select {
width: 100%;
}

.is-borderd::after {
content: "|";
margin-right: -0.75rem;
padding-left: 0.75rem;
}
[v-cloak] {
display:none;
}
    .control.is-colon {
        width: auto;
    }
    .dropdown-menu .select {
        margin-right: 0;
        width: auto;
    }
    .dropdown-menu {
        margin-top: -1em;
    }
.catWrap {
  margin-bottom: 50px;
}

.catBox {
  margin-bottom: 30px;
}

.side-preview .company-box .co-info .data dl {
  display: flex;
}

.side-preview .company-box .co-info .data dl dt {
  margin-right: 10px;
}

.side-preview .company-box .co-info .feature ul li .img-box {
  padding-top: 0;
}

.side-preview .company-box .co-info .feature ul li .txt-box {
  width: 69%;
}

.side-preview .flex.justify-between {
    display: flex;
    justify-content: space-between;
}

.catWrap .catTitle {
  font-size: 18px;
  border-left: 3px solid #AAA;
  padding-left: 10px;
}

.side-preview .company-box .co-info .data {
  padding: 20px 0 0;
}

.progressList li {
  position: relative;
}

.progressList li:after {
  content: "↓";
  position: absolute;
  left: 30px;
  font-size: 18px;
  bottom: -30px;
}

.progressList li:last-child:after {
  content: none;
}

.content table .ts-h-_company-employLeaver-table-cell {
  background-color: #f5f5f5;
  text-align: center;
}

.content table .ts-h-_company-employLeaver-table-cell_head {
  background-color: #b2d1e9;
  text-align: center;
}

.content table .ts-h-_company-employLeaver-table-cell_dataHead {
  background-color: #d9e8f4;
  text-align: center;
}

.content table td,
.content table th {
  border: 1px solid #fff;
}

.data-text {
  font-size: 12px;
}

.jq-dropdown .jq-dropdown-menu label, .jq-dropdown .jq-dropdown-menu li>a {
  padding: 10px 15px;
}

#drag-drop-area .drag-drop-inside {
  border: 2px dashed #d0d0d0 !important;
}

.content pre {
    padding: 0;
    background: none;
    white-space: pre-wrap ;
}
.tooltipicon {
    background-color: #3dacf4;
    color: #fff;
    border-radius: 100%;
    margin-left: 5px;
    width:15px;
    height:15px;
    display:inline-block;
    line-height:15px;
    text-align:center;
    text-decoration:none;
    font-size:12px;
    position: relative;
    z-index: 2;
}
.tooltipicon:hover {
  color:#fff;
  opacity:0.7;
  text-decoration:none;
}
.tooltip {
  visibility: hidden;
  text-align: center;
  position: absolute;
  z-index: 999 !important;
  opacity: 0;
  transition: opacity 500ms;
  width: 350px;
  bottom: 125%;
  left: 50%; 
  margin-left: -35px;
  text-align:left;
}
.tooltip > .text {
  background-color: black;
  color: #fff;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: normal;
  display: inline-block;
}
.tooltip > .text::after {
  content: " ";
  position: absolute;
  bottom: -3px;
  left: 50%;
  margin-left: -145px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
a.tooltipicon:hover > .tooltip {
  visibility: visible;
  opacity: 1;
}
.column-input .text-note {
  color: #858585;
}
.fieldtextarea2 .required {
  
  /* display: none; */
}
.fieldtextarea2.readOnly .column-ttl .textarea {
  pointer-events : none;

}
</style>

<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-142704041-1', 'auto');

<?php if(isset($company) && isset($company->user_depcd) && \Auth::user()->role == 1){ ?>
  var dimensionValue1 = '{{$company->user_depcd}}';
  ga('set', 'dimension1', dimensionValue1);
  ga('set', 'dimension2', dimensionValue2);
<?php } else if(\Auth::user() != null){ ?>
  var dimensionValue1 = '{{\Auth::user()->role}}';
  ga('set', 'dimension1', dimensionValue1);
<?php } ?>

ga('send', 'pageview');
</script>
<!-- End Google Analytics -->


