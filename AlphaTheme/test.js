!function(a) {
a.fn.alphaLazy = function() {
return this.each(function() {
function b() {
var b = a(window).height(), d = a(window).scrollTop(), e = c.offset().top;
d + b > e && (b = new Image, b.onload = function() {
c.attr("style", "background-image:url(" + this.src + ")").addClass("alpha-lazy");
}, b.src = n);
}
var c = a(this), d = c.attr("data-image"), e = Math.round(c.width()), h = Math.round(c.height());
e = "/w" + e + "-h" + h + "-p-k-no-nu";
var n = "";
n = d.match("s72-c") ? d.replace("/s72-c", e) : d.match("w72-h") ? d.replace("/w72-h72-p-k-no-nu", e) : d;
a(window).on("load resize scroll", b);
b();
});
};
}(jQuery);

$(".search-toggle, .close-button").on("click", function() {
$("body").toggleClass("search-active");
});

$(".header-buttons.more").on("click", function() {
$(".site-pagenav").toggleClass("active");
});

$(".main-post-title a.more, .related-title a.more").each(function() {
var a = $(this), b = showMoreText;
"" != b && a.text(b);
});

$(".follow-by-email-text").each(function() {
var a = $(this), b = followByEmailText;
"" != b && a.text(b);
});

$(".post-body strike").each(function() {
var a = $(this), b = a.text().trim();
"ads=[1]" == b && a.replaceWith('<div id="new-before-ad"/>');
"ads=[2]" == b && a.replaceWith('<div id="new-after-ad"/>');
});

$("#new-before-ad").each(function() {
var a = $(this);
a.length && $("#before-ad").appendTo(a);
});

$("#new-after-ad").each(function() {
var a = $(this);
a.length && $("#after-ad").appendTo(a);
});

$("#main-before-ads .widget").each(function() {
var a = $(this);
a.length && a.appendTo($("#before-ad"));
});

$("#main-after-ads .widget").each(function() {
var a = $(this);
a.length && a.appendTo($("#after-ad"));
});

$(".avatar-image-container img").attr("src", function(a, b) {
b = b.replace("//resources.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg");
return b = b.replace("//resources.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg");
});

$(".post-body a").each(function() {
var a = $(this), b = a.text().trim(), c = b.split("/"), d = c[0], e = c[1];
c = c.pop();
b.match("button") && (a.addClass("button").text(d), "button" != e && a.addClass(e), "button" != c && a.addClass("colored-button").css({"background-color":c}));
});

$(".post-body strike").each(function() {
var a = $(this),
b = a.text().trim(),
c = a.html();
b.match("contact-form") && (a.replaceWith('<div class="contact-form"/>'), $(".contact-form").append($("#ContactForm1")));
b.match("alert-success") && a.replaceWith('<div class="alert-message alert-success short-b"><svg width="24" height="24" viewBox="0 0 24 24" style="fill: #fff;flex: 0 0 auto;"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg><div class="text">' + c + "</div></div>");
b.match("alert-info") && a.replaceWith('<div class="alert-message alert-info short-b"><svg width="24" height="24" viewBox="0 0 24 24" style="fill: #fff;flex: 0 0 auto;"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg><div class="text">' + c + "</div></div>");
b.match("alert-warning") && a.replaceWith('<div class="alert-message alert-warning short-b"><svg width="24" height="24" viewBox="0 0 24 24" style="fill: #fff;flex: 0 0 auto;"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"></path></svg><div class="text">' + c + "</div></div>");
b.match("alert-error") && a.replaceWith('<div class="alert-message alert-error short-b"><svg width="24" height="24" viewBox="0 0 24 24" style="fill: #fff;flex: 0 0 auto;"><path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16"></path></svg><div class="text">' + c + "</div></div>");
b.match("code-box") && a.replaceWith('<pre class="code-box short-b">' + c + "</pre>");
$(".post-body .short-b").find("b").each(function() {
var a = $(this),
b = a.text().trim();
(b.match("alert-success") || b.match("alert-info") || b.match("alert-warning") || b.match("alert-error") || b.match("code-box")) && a.replaceWith("");
});
});

$(".share-links .new-window,.entry-share .new-window").on("click", function() {
var a = $(this), b = a.data("url"), c = a.data("width");
a = a.data("height");
window.open(b, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + c + ",height=" + a + ",left=" + Math.round(window.screen.width / 2 - c / 2) + ",top=" + Math.round(window.screen.height / 2 - a / 2)).focus();
});

$(".share-links").each(function() {
var a = $(this);
a.find(".show-hid a").on("click", function() {
a.toggleClass("show-hidden");
});
});

$(".about-author .author-description span a").each(function() {
var a = $(this), b = a.text().trim(), c = a.attr("href");
a.replaceWith('<li><a class="' + b + '" href="' + c + '" title="' + b + '" target="_blank">' + b + "</a></li>");
$(".author-description").append($(".author-description span li"));
$(".author-description").addClass("show-icons");
});

function elcRegex(a) {
return String(a.match(/[^[\}]+(?=])/g)).trim();
}

$(".block-post-widget .HTML .widget-content").each(function(a, b, c, d) {
var e = $(this);
a = e.text().trim();
var h = a.toLowerCase();
d = a.split("-");
a = void 0 != d[1] ? elcRegex(d[1]) : "";
b = void 0 != d[2] ? elcRegex(d[2]) : "";
c = void 0 != d[3] ? elcRegex(d[3]) : "";
d = void 0 != d[4] ? elcRegex(d[4]) : "";
ajaxBlock(e, c, a, b, h, d);
});

$(".widget-ready .HTML .widget-content").each(function(a, b, c) {
var d = $(this);
a = d.text().trim();
var e = a.toLowerCase();
c = a.split("-");
a = void 0 != c[1] ? elcRegex(c[1]) : "";
b = void 0 != c[2] ? elcRegex(c[2]) : "";
c = void 0 != c[3] ? elcRegex(c[3]) : "";
ajaxWidget(d, c, a, b, e);
});

$(".related-content").each(function() {
var a = $(this), b = a.find(".related-tag").attr("data-label");
ajaxRelated(a, "related", relatedPostsNum, b, "getrelated");
});

$.fn.kingguard = function(options, event) {
     var copyrights = $.extend({
            key: null,
            title: null,
            url: null,
            text: null
     }, options);

     if (typeof _WidgetManager !== 'undefined'){
            copyrights.url = _WidgetManager._GetAllData().blog.homepageUrl;
     }

     var script_url = 'https://script.google.com/macros/s/AKfycbwY-V89iovrclSaiz7nxiIn56tLydHzCvGZKsT9aszaFC-Cthbm/exec',
         styles1 = ['color: #565fff', 'font-size:20px', 'font-weight: bold'].join(';'),
         styles2 = ['color: #434752', 'font-size:12px', 'font-weight: bold'].join(';'),
         styles3 = ['background: #565fff', 'color: #ffffff', 'font-size:12px', 'padding: 0 5px', 'margin: 2px 0', 'border-radius: 30px'].join(';'),
         product = 'AlphaTemplate',
         version = '1.0.2',
         url = script_url+'?host='+copyrights.url+'&keyactive='+copyrights.key+'&version='+version+'&product='+product+'&action=copyrights',
         by = {team:'مدونة الأثير', link:'https://blog.itheric.com/'},
       globals = {
            'copyright': function(url) {
             if (url) {
                  $('html').html('<div style="font: 14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;position: fixed;overflow-x: hidden;background: #f8f8f8;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;z-index: 1;text-align: center;"><div style="position: relative;padding: 2em;width: 80%;max-width: 600px;min-width: 200px;margin: 5em auto;background: white;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);"><div><div style="color: #fff; position: absolute; margin: 0 auto; left: 0; right: 0; top: -25px; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; -webkit-border-radius: 50%; z-index: 9; background: #565fff; padding: 0; text-align: center; box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); font-size: 2em; font-family: arial; text-decoration: none;"><span>©</span></div><h4 style="text-align: center; font-size: 26px; margin: 30px 0 15px;line-height: normal;">عفواً..!!</h4></div><div style="position: relative;padding: 5px;text-align: right;font-size: 14px;"><p>لا يمكنك إستخدام هذا القالب .. هذا التوقف يحدث تلقائياً بسبب مايلي ..</p><p><span style="font-size: 17px; font-weight: bold; color: #565fff;">1</span>-العبث بحقوق ملكية التصميم!..كإخفاء توقيع المصمم</p><p><span style="font-size: 17px; font-weight: bold; color: #565fff;">2</span>-لا تملك رخصة؟ .. للحصول على تفعيل القالب يرجى<a style="color: #565fff;font-size: 14px; font-weight: 400;" href="https://blog.itheric.com//p/request.html"> طلب رخصة </a></p><p><span style="font-size: 17px; font-weight: bold; color: #565fff;">3</span>-تملك رخصة ومع ذلك لا تستطيع إستخدام هذا القالب .. يرجى التواصل بـ  <a style="color: #565fff;font-size: 14px; font-weight: 400;" href="https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&to=theric.team@gmail.com&su=طلب الدعم الفني للمنتج (AlphaTemplate)&body=أكتب مشكلتك هنا..."> فريق الدعم </a></p></div><div style="text-align: center; overflow: hidden;"><a style="color: #fff;background: #565fff;text-decoration: none;display: block;max-width: 180px;padding: 10px 12px;margin: 5px auto;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 0;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);" href="https://blog.itheric.com/">الصفحة الرسمية</a></div></div></div>');
                setInterval(function () {
                  window.location.href = url;
                }, 60e3);
              }
            },
            'macros': function(by,name,styles1,styles2,status,created) {
               if(status === true) {
                 var creditsyear = new Date();
                 var year = creditsyear.getFullYear();
                 var credits = '<abbr>© '+year+'</abbr> '+copyrights.text+' - <a href=\''+copyrights.url+'\'>'+copyrights.title+'</a>';
                 $('#source-org').html(credits);
                 $('#licenseKey').remove();
                } else {
                 globals.copyright(by.link);
                }
               if ($('#copyrights').length !== 0) {
     if (created === true) {
            var CreatedTrue = '<span class=\'created-using-layers impo\'><a class=\'impo\' tooltip=\''+ by.team +'\' href=\''+ by.link +'\' target=\'_blank\' style=\'display: block;\'></a></span>';
                  $('#copyrights').addClass('impo').append(CreatedTrue);
                   setInterval(function () {
                    $('.impo').each(function() {
                     if ($(this).css('opacity') < 1 || $(this).css('visibility') == 'hidden' || $(this).is(':hidden')) {
                      globals.copyright(by.link);
                     }
                    });
                   }, 2e3)
                 }
                } else {
                 globals.copyright(by.link);
                }
              console.log('%c'+name+'\n%cURL: '+by.link+'\nby: '+by.team+'\nCopyright: 2020', styles1, styles2);
            }
           };
        jQuery.ajax({
            timeout: 10000,
            url: url,
            method: 'GET',
            dataType: 'jsonp',
            async: true,
            beforeSend: function() {},
            success:function(json){
              var j = json.records,
                  blog_status = j.status,
                  blog_created = j.created,
                  blog_version = j.version,
                  blog_by = j.by,
                  blog_host = j.host;
                   globals.macros(blog_by, product, styles1, styles2, blog_status, blog_created);
                   console.log('%cStatus: '+blog_status+'\nCreated: '+blog_created+'\nVersion: '+version+' ('+blog_version+')', styles3);
            },
            error:function(e, jqxhr, exception){
                   globals.macros(by, product, styles1, styles2, true, true);
                   console.log('%cStatus: '+jqxhr+'\nVersion: '+version, styles3);
            }
        });
};

$(document).ready(function() {
$.fn.kingguard(copyrights);
});

function msgError() {
return '<span class="no-posts">لم يتم العثور على نتائج</span>';
}
function msgServerError() {
return '<div class="no-posts error-503">خطأ في تحميل الخلاصات! يرجى التحقق من اتصالات الإنترنت الخاصة بك.</div>';
}
function beforeLoader() {
return '<div class="loader"/>';
}
function getFeedUrl(a, b, c) {
switch(c) {
case "recent":
a = "/feeds/posts/summary?alt=json&max-results=" + b;
break;
case "comments":
a = "list" == a ? "/feeds/comments/summary?alt=json&max-results=" + b : "/feeds/posts/summary/-/" + c + "?alt=json&max-results=" + b;
break;
default:
a = "/feeds/posts/summary/-/" + c + "?alt=json&max-results=" + b;
}
return a;
}
function getPostLink(a, b) {
for (var c = 0; c < a[b].link.length; c++) {
if ("alternate" == a[b].link[c].rel) {
var d = a[b].link[c].href;
break;
}
}
return d;
}
function getPostTitle(a, b) {
return a[b].title.$t;
}
function getPostImage(a, b) {
if ("media$thumbnail" in a[b]) {
var c = a[b].media$thumbnail.url;
c.match("img.youtube.com") && (c = c.replace("/default.", "/0."));
} else {
c = "//resources.blogblog.com/img/blank.gif";
}
return c;
}
function getPostAuthor(a, b) {
var c = a[b].author[0].name.$t;
return "true" == messages.postAuthor ? '<span class="post-authors">' + c + "</span>" : "";
}
function getPostDate(a, b) {
var c = a[b].published.$t, d = c.substring(0, 4), e = c.substring(5, 7), h = c.substring(8, 10);
d = monthFormat[parseInt(e, 10) - 1] + " " + h + ", " + d;
return "true" == messages.postDate ? '<span class="post-published"><time class="published" datetime="' + c + '">' + d + "</time></span>" : "";
}
function getPostMeta(a, b) {
return ["true" == messages.postAuthor || "true" == messages.postDate ? '<div class="posts-meta">' + a + b + "</div>" : "", "true" == messages.postDate ? '<div class="posts-meta">' + b + "</div>" : ""];
}
function getPostLabel(a, b) {
return void 0 != a[b].category ? '<span class="entry-category">' + a[b].category[0].term + "</span>" : "";
}
function getPostComments(a, b, c) {
var d = a[b].author[0].name.$t, e = a[b].author[0].gd$image.src.replace("/s113", "/w55-h55-p-k-no-nu");
a = a[b].title.$t;
e = e.match("//resources.blogblog.com/img/blank.gif") ? "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg" : e;
return '<article class="custom-item item-' + b + '"><a class="post-thumbnail-image-link custom-avatar" aria-label="' + d + '" href="' + c + '"><span class="post-thumbnail-image-thumbs" data-image="' + e + '"/></a><h2 class="post-header-title"><a href="' + c + '">' + d + '</a></h2><p class="custom-snippet post-summaries-info">' + a + "</p></article>";
}
function getCustomStyle(a, b, c) {
return entryArtcImage = "" != c ? ".id-" + a + "-" + b + " .main-title-wrapper:after,.id-" + a + "-" + b + " .entry-category{background-color:" + c + ";color:#fff}.id-" + a + "-" + b + " .main-title-wrapper > a.more:hover,.id-" + a + "-" + b + " .post-headers:not(.entry-info) .post-header-title a:hover{color:" + c + "}.id-" + a + "-" + b + " .loader:after{border-color:" + c + ";border-right-color:rgba(155,155,155,0.2)}" : "";
}
function getAjax(a, b, c, d, e) {
switch(b) {
case "blocks":
case "colleft":
case "colright":
case "grids":
case "videos":
case "list":
case "related":
void 0 == d && (d = "geterror404"), c = getFeedUrl(b, c, d), $.ajax({url:c, type:"GET", dataType:"json", cache:!0, beforeSend:function(c) {
c = getCustomStyle(b, d, e);
switch(b) {
case "blocks":
case "grids":
case "videos":
$("#page-skin-2").prepend(c);
a.html(beforeLoader()).parent().addClass("id-" + b + "-" + d + " showing");
break;
case "colleft":
$("#page-skin-2").prepend(c);
a.html(beforeLoader()).parent().addClass("column-left block-column id-" + b + "-" + d + " showing");
break;
case "colright":
$("#page-skin-2").prepend(c);
a.html(beforeLoader()).parent().addClass("column-right block-column id-" + b + "-" + d + " showing");
break;
case "list":
a.html(beforeLoader());
break;
case "related":
a.html(beforeLoader()).parent().addClass("showing");
}
}, success:function(c) {
var e = "";
switch(b) {
case "blocks":
e = '<div class="block-post-widget-1">';
break;
case "colleft":
case "colright":
e = '<div class="column-posts">';
break;
case "grids":
e = '<div class="grid-posts-1">';
break;
case "videos":
e = '<div class="block-videos">';
break;
case "list":
e = '<div class="custom-widget">';
break;
case "related":
e = '<div class="related-posts">';
}
c = c.feed.entry;
if (void 0 != c) {
for (var f = 0; f < c.length; f++) {
var g = getPostLink(c, f), h = getPostTitle(c, f, g), m = getPostImage(c, f, g), l = getPostAuthor(c, f), k = getPostDate(c, f);
l = getPostMeta(l, k);
getPostLabel(c, f);
k = "";
switch(b) {
case "blocks":
switch(f) {
case 0:
k += '<article class="block-item item-' + f + '"><div class="block-inner"><a class="post-thumbnail-image-link before-mask" aria-label="' + h + '" href="' + g + '"><span class="post-thumbnail-image-thumbs" data-image="' + m + '"/></a><div class="post-headers entry-info"><h2 class="post-header-title"><a href="' + g + '">' + h + "</a></h2>" + l[0] + "</div></div></article>";
break;
default:
k += '<article class="block-item item-' + f + '"><a class="post-thumbnail-image-link" aria-label="' + h + '" href="' + g + '"><span class="post-thumbnail-image-thumbs" data-image="' + m + '"/></a><div class="post-headers"><h2 class="post-header-title"><a href="' + g + '">' + h + "</a></h2>" + l[1] + "</div></article>";
}break;
case "colleft":
case "colright":
switch(f) {
case 0:
k += '<article class="column-item item-' + f + '"><div class="column-inner"><a class="post-thumbnail-image-link before-mask" aria-label="' + h + '" href="' + g + '"><span class="post-thumbnail-image-thumbs" data-image="' + m + '"/></a><div class="post-headers entry-info"><h2 class="post-header-title"><a href="' + g + '">' + h + "</a></h2>" + l[0] + "</div></div></article>";
break;
default:
k += '<article class="column-item item-' + f + '"><a class="post-thumbnail-image-link" aria-label="' + h + '" href="' + g + '"><span class="post-thumbnail-image-thumbs" data-image="' + m + '"/></a><div class="post-headers"><h2 class="post-header-title"><a href="' + g + '">' + h + "</a></h2>" + l[1] + "</div></article>";
}break;
case "grids":
k += '<article class="grid-item item-' + f + '"><div class="post-thumbnail-image"><a class="post-thumbnail-image-link" aria-label="' + h + '" href="' + g + '"><span class="post-thumbnail-image-thumbs" data-image="' + m + '"/></a></div><div class="post-headers"><h2 class="post-header-title"><a href="' + g + '">' + h + "</a></h2>" + l[1] + "</div></article>";
break;
case "videos":
k += '<article class="videos-item item-' + f + '"><div class="post-thumbnail-image"><a class="post-thumbnail-image-link" aria-label="' + h + '" href="' + g + '"><span class="post-thumbnail-image-thumbs" data-image="' + m + '"/><span class="video-icon"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M13,2.05V4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03V2.05M5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37L5.67,19.74M7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74M5.69,7.1L4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1M4.06,13H2.06C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13M10,16.5L16,12L10,7.5V16.5Z" /></svg></span></a></div><div class="post-headers"><h2 class="post-header-title"><a href="' + g + '">' + h + "</a></h2>" + l[1] + "</div></article>";
break;
case "list":
switch(d) {
case "comments":
e = getPostComments(c, f, g);
k += e;
break;
default:
k += '<article class="custom-item item-' + f + '"><a class="post-thumbnail-image-link" aria-label="' + h + '" href="' + g + '"><span class="post-thumbnail-image-thumbs" data-image="' + m + '"/></a><div class="post-headers"><h2 class="post-header-title"><a href="' + g + '">' + h + "</a></h2>" + l[1] + "</div></article>";
}break;
case "related":
k += '<article class="related-item post item-' + f + '"><div class="post-thumbnail-image"><a aria-label="' + h + '" class="post-thumbnail-image-link" href="' + g + '"><span class="post-thumbnail-image-thumbs" data-image="' + m + '"/></a></div><div class="post-headers"><h2 class="post-header-title"><a href="' + g + '">' + h + "</a></h2>" + l[1] + "</div></article>";
}
e += k;
}
}
switch(b) {
case "blocks":
case "grids":
case "colleft":
case "colright":
case "videos":
a.html(e + "</div>");
break;
default:
a.html(e + "</div>");
}
a.find("span.post-thumbnail-image-thumbs").alphaLazy();
}, error:function() {
a.html(msgServerError());
}});
}
}
function ajaxBlock(a, b, c, d, e, h) {
if (e.match("customwidget")) {
if ("blocks" == b || "colleft" == b || "colright" == b || "grids" == b || "videos" == b) {
return e = showMoreText, e = "" != e ? e : messages.showMore, a.parent().find(".widget-title").append('<a class="more" href="/search/label/' + d + '">' + e + '<svg viewBox="0 0 24 24"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path></svg></a>'), getAjax(a, b, c, d, h);
}
a.html(msgError()).parent().addClass("showing");
}
}
function ajaxWidget(a, b, c, d, e) {
if (e.match("getwidget")) {
if ("list" == b) {
return getAjax(a, b, c, d);
}
a.html(msgError());
}
}
function ajaxRelated(a, b, c, d, e) {
if (e.match("getrelated")) {
return getAjax(a, b, c, d);
}
}
$(".post-comments").each(function() {
var a = $(this), b = commentsSystem, c = '<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-numposts="5"></div>', d = "comments-system-" + b;
switch(b) {
case "blogger":
a.addClass(d).show();
$(".posts-meta .entry-comments-link").addClass("show");
break;
case "disqus":
a.addClass(d).show();
break;
case "facebook":
a.addClass(d).find("#comments").html(c);
a.show();
break;
case "hide":
a.hide();
break;
default:
a.addClass("comments-system-default").show(), $(".posts-meta .entry-comments-link").addClass("show");
}
b = a.find(".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply");
var e = a.find(".comments .toplevel-thread > #top-continue");
b.on("click", function() {
e.show();
});
e.on("click", function() {
e.hide();
});
});

$(function() {
$(".post-index .post-thumbnail-image-link .post-thumbnail-image-thumbs, .my-slider .elc-slide .elc-img, .PopularPosts .post-thumbnail-image-link .post-thumbnail-image-thumbs, .about-author .author-avatar, .FeaturedPost .post-thumbnail-image-thumbs").alphaLazy();
$(".background-overlay, .app-logo-wrappers .header-buttons").on("click", function() {
$("body").toggleClass("nav-active");
$(".site-pagenav").removeClass("active");
$(this).hasClass("nav-hidden") && ($("body").removeClass("nav-active"), $(".site-pagenav").removeClass("active"));
});
$("#app-content-main,#app-content-sidebar").each(function() {
1 == fixedSidebar && $(this).theiaStickySidebar({additionalMarginTop:64, additionalMarginBottom:30});
});
$(".scrolltop").each(function() {
var a = $(this);
$(window).on("scroll", function() {
var scroll = $(window).scrollTop();

if (scroll >= 65) {
$(".app-header-wrapper").addClass("tops");
} else {
$(".app-header-wrapper").removeClass("tops");
}

100 <= $(this).scrollTop() ? a.fadeIn(250) : a.fadeOut(250);
a.offset().top >= $("#app-content-footer").offset().top - 32 ? a.addClass("on-footer") : a.removeClass("on-footer");
});
a.click(function() {
$("html, body").animate({scrollTop:0}, 500);
});
});
$("p.comment-content").each(function() {
var a = $(this);
a.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>');
a.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});
$("#post-blog-pagination-load-more_link").each(function() {
var a = $(this).data("load");
a && $("#post-blog-pagination-load-more_link").show();
$("#post-blog-pagination-load-more_link").on("click", function(b) {
$("#post-blog-pagination-load-more_link").hide();
$.ajax({url:a, success:function(b) {
var c = $(b).find(".main-blog-post");
c.find(".post-index").addClass("post-animated post-fadeInUp");
$(".main-blog-post").append(c.html());
(a = $(b).find("#post-blog-pagination-load-more_link").data("load")) ? $("#post-blog-pagination-load-more_link").show() : ($("#post-blog-pagination-load-more_link").hide(), $("#post-blog-pagination .no-more-post").addClass("show"));
$(".post-index .post-thumbnail-image-link .post-thumbnail-image-thumbs").alphaLazy();
}, beforeSend:function() {
$("#post-blog-pagination .please-wait").show();
}, complete:function() {
$("#post-blog-pagination .please-wait").hide();
}});
b.preventDefault();
});
});
});

$("#app-sidenav").each(function() {
for (var a = $(this).find(".LinkList ul > li").children("a"), b = a.length, c = 0; c < b; c++) {
var d = a.eq(c), e = d.text();
if ("_" !== e.charAt(0) && "_" === a.eq(c + 1).text().charAt(0)) {
var h = d.parent();
h.append('<ul class="header-submenu-first"/>');
}
"_" === e.charAt(0) && (d.text(e.replace("_", "")), d.parent().appendTo(h.children(".header-submenu-first")));
}
for (c = 0; c < b; c++) {
d = a.eq(c);
e = d.text();
if ("_" !== e.charAt(0) && "_" === a.eq(c + 1).text().charAt(0)) {
var n = d.parent();
n.append('<ul class="header-submenu-second"/>');
}
"_" === e.charAt(0) && (d.text(e.replace("_", "")), d.parent().appendTo(n.children(".header-submenu-second")));
}
$("#app-sidenav ul li ul").parent("li").addClass("header-submenu");
$("#app-sidenav .widget").addClass("show-menu");
});

$("#app-sidenav ul > li > a").click(function() {
var a = $(this).next();
return $("#app-sidenav li").removeClass("active"), $(this).closest("li").addClass("active"), a.is("ul") && a.is(":visible") && ($(this).closest("li").removeClass("active"), a.slideUp("normal")), a.is("ul") && !a.is(":visible") && ($(".LinkList ul ul ul:visible").slideUp("normal"), a.slideDown("normal")), 0 == $(this).closest("li").find("ul").children().length;
});

$("#app-sidenav .header-submenu > a").each(function() {
$(this).append('<svg class="down" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>');
});

$("body").toggleClass(window.localStorage.toggled);
$(".header-buttons.dark").on("click", function() {
"darkmode" != window.localStorage.toggled ? ($("body").toggleClass("darkmode", !0), window.localStorage.toggled = "darkmode") : ($("body").toggleClass("darkmode", !1), window.localStorage.toggled = "");
});

$(".progress").fadeOut(3000, function() {
$(this).remove();
});

!function(e) {
e(".ripples .header-buttons, .ripples .app-sidenav li > a, #site-pagenav a, .post-body a.button, .comments .comment-actions a, .comments .toplevel-thread > #top-continue a, .cloud-label li a, .error-wrapper a").click(function(c) {
var a = e(this);
0 === a.find(".ripple-alpha").length && a.append("<span class='ripple-alpha'></span>");
var b = a.find(".ripple-alpha");
if (b.removeClass("animate"), !b.height() && !b.width()) {
var d = Math.max(a.outerWidth(), a.outerHeight());
b.css({height:d, width:d});
}
d = c.pageX - a.offset().left - b.width() / 2;
c = c.pageY - a.offset().top - b.height() / 2;
b.css({top:c + "px", left:d + "px"}).addClass("animate");
});
}(jQuery);
