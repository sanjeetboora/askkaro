(function(){var e;ActiveAdmin.PerPage=function(){function e(e,t){this.options=e,this.element=t,this.$element=$(this.element),this._init(),this._bind()}return e.prototype._init=function(){return this.$params=this._queryParams()},e.prototype._bind=function(){return this.$element.change(function(e){return function(){return e.$params.per_page=e.$element.val(),delete e.$params.page,"undefined"!=typeof Turbolinks?Turbolinks.visit(window.location.href.split("?")[0]+"?"+$.param(e.$params)):location.search=$.param(e.$params)}}(this))},e.prototype._queryParams=function(){var e,t,n,i;for(n=window.location.search.substring(1),t={},i=/([^&=]+)=([^&]*)/g;e=i.exec(n);)t[this._decode(e[1])]=this._decode(e[2]);return t},e.prototype._decode=function(e){return decodeURIComponent(e.replace(/\+/g,"%20"))},e.prototype.option=function(e,t){return $.isPlainObject(e)?this.options=$.extend(!0,this.options,e):null!=e?this.options[e]:this.options[e]=t},e}(),$.widget.bridge("perPage",ActiveAdmin.PerPage),e=function(){return $(".pagination_per_page select").perPage()},$(document).ready(e).on("page:load turbolinks:load",e)}).call(this);