(self.webpackChunknew_site_webpack_build=self.webpackChunknew_site_webpack_build||[]).push([[826],{838:function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n,r,o;n=e(document.querySelectorAll(".hero__btn")),r=document.getElementById("question"),o=document.getElementById("questionBack"),(n.length||r)&&(n.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),r.classList.add("active")}))})),o.addEventListener("click",(function(e){e.preventDefault(),r.classList.remove("active")}))),function(){var t=e(document.querySelectorAll(".question__box-no-btn")),n=document.getElementById("darkBoxModal");(t.length||n)&&t.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),n.classList.add("active")}))}))}(),function(){var e=document.getElementById("lightBoxModal"),t=document.getElementById("form");(e||t)&&t.addEventListener("submit",(function(t){t.preventDefault(),e.classList.add("active")}))}()},9:function(e,t,n){"use strict";var r=function(e){return e.keys().forEach(e)};document.addEventListener("DOMContentLoaded",(function(){r(n(545)),r(n(712))}))},712:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=712,e.exports=t},545:function(e,t,n){var r={"./Question/Question.js":838};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=545}},0,[[9,557]]]);