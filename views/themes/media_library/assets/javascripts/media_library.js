!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){"use strict";function i(e){var i=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,t=e.match(i);return t&&11==t[2].length?t[2]:void 0}function t(i,o){this.$element=e(i),this.options=e.extend({},t.DEFAULTS,e.isPlainObject(o)&&o),this.init()}var o="qor.medialibrary.action",a="enable."+o,n="disable."+o,r="blur."+o,d="focus."+o,s="switched.qor.tabbar.radio",l='[data-toggle="qor.tab.radio"]',f='[name="QorResource.SelectedType"]',c=".qor-medialibrary__container",u=".qor-video__link",h=".qor-medialibrary__video-link",m=".qor-medialibrary__video",v=".qor-medialibrary__desc",b=".qor-file__options";return t.prototype={constructor:t,init:function(){this.bind(),this.initMedia()},bind:function(){e(document).on(s,l,this.resetMediaData.bind(this)).on(r,u,this.setVideo).on(r,v,this.setImageDesc).on(d,u,this.initVideo)},unbind:function(){e(document).off(s,l,this.resetMediaData.bind(this)).off(r,u,this.setVideo).off(r,v,this.setImageDesc).off(d,u,this.initVideo)},setImageDesc:function(i){var t,o,a=e(i.target);t=this.$mediainfo&&this.$mediainfo.length?this.$mediainfo.find(b):a.closest(c).find(b),o=JSON.parse(t.val()),o.Description=a.val(),t.val(JSON.stringify(o))},initVideo:function(i){this.originalLink=e(i.target).val()},initMedia:function(){e(m).each(function(){var i=e(this),t=i.data().videolink,o=t&&t.match(/\.mp4$|\.m4p$|\.m4v$|\.m4v$|\.mov$|\.mpeg$|\.webm$|\.avi$|\.ogg$|\.ogv$/);o&&(i.closest("tr").data("isUploadedVideo",!0),i.parent().addClass("qor-table--video qor-table--video-internal").html('<video width=100% height=100% controls><source src="'+t+'" type="video/'+o[0].replace(".","")+'"></video>'))}),e(h).each(function(){var t=e(this),o=t.data("videolink"),a=i(o);a&&(t.closest("tr").data("isExternalVideo",!0),t.parent().addClass("qor-table--video qor-table--video-external").html('<iframe width="100%" height="100%" src="//www.youtube.com/embed/'+a+'?rel=0" frameborder="0" allowfullscreen></iframe>'))})},setVideo:function(t){var o=e(t.target),a=o.closest("[data-tab-source]"),n=o.closest(l),r=n.find(b),d=JSON.parse(r.val()),s=o.val(),f=a.find("iframe"),c=i(s);s!=this.originalLink&&(d.SelectedType="video",d.Video=s,r.val(JSON.stringify(d)),c&&(f.length&&f.remove(),a.append('<iframe width="100%" height="400" src="//www.youtube.com/embed/'+i(s)+'?rel=0" frameborder="0" allowfullscreen></iframe>')))},resetMediaData:function(i,t,o){var a=e(t),n=a.find(b),r=a.find('[data-tab-source="video"] .qor-fieldset__alert'),d=JSON.parse(n.val());this.$mediainfo=a,d.SelectedType=o,"video"==o&&(d.Video=a.find(u).val(),r.length&&r.remove()),e(f).val(o),n.val(JSON.stringify(d))},destroy:function(){this.unbind()}},t.DEFAULTS={},e.fn.qorSliderAfterShow=e.fn.qorSliderAfterShow||{},e.fn.qorSliderAfterShow.renderMediaVideo=function(){var t=e('[data-tab-source="video"]'),o=e(v),a=t.length&&t.data().videourl;o.length&&o.val(o.data().imageInfo.Description),t.length&&a&&t.append('<iframe width="100%" height="400" src="//www.youtube.com/embed/'+i(a)+'?rel=0&fs=0&modestbranding=1&disablekb=1" frameborder="0" allowfullscreen></iframe>')},t.plugin=function(i){return this.each(function(){var a,n=e(this),r=n.data(o);if(!r){if(/destroy/.test(i))return;n.data(o,r=new t(this,i))}"string"==typeof i&&e.isFunction(a=r[i])&&a.apply(r)})},e(function(){var i=".qor-table--medialibrary";e(document).on(n,function(o){t.plugin.call(e(i,o.target),"destroy")}).on(a,function(o){t.plugin.call(e(i,o.target))}).triggerHandler(a)}),t});