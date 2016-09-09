// ==UserScript==
// @name         Anti Ads
// @namespace    org.tiger
// @version      0.0.2
// @description  Anti Ads
// @author       TigeR
// @license      MIT
// @match        http://kisscartoon.me/*
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    $("iframe:not('#dsq-app2')").remove();
    $(".divCloseBut").remove();

    $(".barContent .clear, .barContent .clear2").remove();
    $(".barContent > div > :nth-child(1)").css('padding-bottom', '55px');
    $(".barContent > div > :nth-child(2)").remove();
    $(".barContent > div > :nth-child(6)").remove();
    $(".barContent > div > :nth-child(6)").remove();
})();