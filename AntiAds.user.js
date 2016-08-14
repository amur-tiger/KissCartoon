// ==UserScript==
// @name         Anti Ads
// @namespace    org.tiger
// @version      0.0.1
// @description  Anti Ads
// @author       TigeR
// @match        http://kisscartoon.me/*
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    $("iframe:not('#dsq-app2')").remove();
    $(".divCloseBut").remove();
})();