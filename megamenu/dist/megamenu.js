parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"n4jc":[function(require,module,exports) {
module.exports="/down-arrow.cb67a1a5.png";
},{}],"w13r":[function(require,module,exports) {
"use strict";var t=n(require("../assets/down-arrow.png"));function n(t){return t&&t.__esModule?t:{default:t}}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function s(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,n,e){return n&&s(t.prototype,n),e&&s(t,e),t}function a(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?l(t):n}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}function r(t){var n="function"==typeof Map?new Map:void 0;return(r=function(t){if(null===t||!f(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return m(t,arguments,b(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),p(e,t)})(t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function m(t,n,e){return(m=c()?Reflect.construct:function(t,n,e){var i=[null];i.push.apply(i,n);var s=new(Function.bind.apply(t,i));return e&&p(s,e.prototype),s}).apply(null,arguments)}function f(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function p(t,n){return(p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(n){function e(){return i(this,e),a(this,b(e).call(this))}return o(e,r(HTMLElement)),u(e,[{key:"render",value:function(){this.innerHTML='\n\t\t<style>\n\t\t/* General styling */\n\t\t* {\n\t\t\tbox-sizing: border-box;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\tfont-family: sans-serif;\n\t\t}\n\t\tbody {\n\t\tbackground: #f1f1f1;\n\t\t}\n\t\tul {\n\t\t\tlist-style-type: none;\n\t\t}\n\t\ta {\n\t\t\tcolor: white;\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t.submenu-icon {\n\t\t\tcolor: #111;\n\t\t}\n\t\ta:hover {\n\t\t\ttext-decoration: underline;\n\t\t}\n\t\timg {\n\t\t\tmax-width: 100%;\n\t\t}\n\t\t.menu {\n\t\t\tbackground-color: darkslateblue;\n\t\t}\n\t\t.submenu {\n\t\tborder: 1px solid #ccc;\n\t\t}\n\t\t.menu li {\n\t\t\tpadding: 10px;\n\t\t}\n\t\t.menu-icon {\n\t\t\tcolor: white;\n\t\t\tmargin-left: 10px;\n\t\t\tfont-size: 14px;\n\t\t}\n\t\t/* Flexbox rules */\n\t\t.menu {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\ttext-align: center;\n\t\t\twidth: 90vw;\n\t\t\tmargin: 10px 5vw;\n\t\t\theight: 60px;\n\t\t\tposition: relative;\n\t\t}\n\t\t.menu-item {\n\t\t\tflex: 1;\n\t\t}\n\t\t.menu-item > a {\n\t\t\tline-height: 40px;\n\t\t}\n\t\t.submenu {\n\t\t\twidth: 90vw;\n\t\t\tposition: absolute;\n\t\t\ttop: 60px;\n\t\t\tleft: 0;\n\t\t\ttext-align: left;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\t\t.submenu-item {\n\t\t\tpadding: 15px;\n\t\t}\n\t\t.submenu-top {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\t\t}\n\t\t.submenu-bottom {\n\t\t\tdisplay: flex;\n\t\t}\n\t\t.submenu-bottom-item {\n\t\t\tflex: 1;\n\t\t}\n\t\t/* Submenu general styling */\n\t\t.submenu-top li {\n\t\t\tpadding-left: 0;\n\t\t}\n\t\t.submenu a {\n\t\t\tcolor: #111;\n\t\t}\n\t\t.submenu-top-item {\n\t\t\tmax-width: 33.333%;\n\t\t}\n\t\t.submenu .submenu-title {\n\t\t\tfont-weight: bold;\n\t\t\tcolor: darkslateblue;\n\t\t}\n\t\t.submenu .submenu-title:hover {\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t.submenu-list,\n\t\t.submenu-bottom {\n\t\t\tmargin-top: 10px;\n\t\t}\n\n\t\t/* Submenu: Thumbnail list */\n\t\t.thumb-list .submenu-list > li {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t}\n\t\t.submenu-thumbnail {\n\t\t\tmargin-right: 10px;\n\t\t}\n\n\t\t/* Submenu: Description list */\n\t\t.desc-list .submenu-list > li {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\t\t.submenu-desc {\n\t\t\tmargin-top: 10px;\n\t\t\tcolor: #555;\n\t\t}\n\n\t\t/* Submenu: Icon list */\n\t\t.submenu-icon {\n\t\t\twidth: 32px;\n\t\t}\n\n\t\t/* Submenu bottom */\n\t\t.submenu-bottom-title {\n\t\t\tpadding-left: 10px;\n\t\t}\n\t\t.submenu-bottom figcaption {\n\t\t\tmargin-top: 5px;\n\t\t\tfont-weight: bold;\n\t\t}\n\t\t.submenu-bottom a:hover {\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t/* Hover rule */\n\t\t.submenu { \n\t\t\tdisplay: none;\n\t\t}\n\t\t.menu-item:hover .submenu {\n\t\t\tdisplay: flex;\n\t\t}\n\t\t.menu-item:hover > a {\n\t\t\ttext-decoration: underline;\n\t\t}\n\n\t\t.menu-item-with-arrow a {\n\t\t\tpadding-right: 10px;\n\t\t}\n\n\t\t.icon {\n\t\t\twidth: 10px;\n\t\t\theight: 10px;\n\t\t}\n\t\t</style>\n\t\t<nav>\n\t\t<ul class="menu">\n\t\t  <li class="menu-item"><a href="#">Home</a></li>\n\t\t  <li class="menu-item menu-item-with-arrow"><a href="#">Holidays</a><img class="icon" src='.concat(t.default,'></img>\n\t\t\t<ul class="submenu">\n\t\t\t  <li class="submenu-item">\n\t\t\t\t<ul class="submenu-top">\n\t\t\t\t  <li class="submenu-top-item thumb-list">\n\t\t\t\t\t<a href="#" class="submenu-title">Holiday types</a>\n\t\t\t\t\t<ul class="submenu-list">\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<span class="submenu-thumbnail"><img src="https://picsum.photos/id/1067/32/32" alt="City breaks"></span>\n\t\t\t\t\t\t<a href="#">City breaks</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<span class="submenu-thumbnail"><img src="https://picsum.photos/id/173/32/32" alt="Adventure tours"></span>\n\t\t\t\t\t\t<a href="#">Adventure tours</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<span class="submenu-thumbnail"><img src="https://picsum.photos/id/1038/32/32" alt="Cruises"></span>\n\t\t\t\t\t\t<a href="#">Cruises</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<span class="submenu-thumbnail"><img src="https://picsum.photos/id/1015/32/32" alt="Beach holidays"></span>\n\t\t\t\t\t\t<a href="#">Beach holidays</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t  <li class="submenu-top-item desc-list">\n\t\t\t\t\t<a href="#" class="submenu-title">Holiday packages</a>\n\t\t\t\t\t<ul class="submenu-list">\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<a href="#">Families</a>\n\t\t\t\t\t\t<span class="submenu-desc">Take advantage of our special holiday packages for families.</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<a href="#">Students</a>\n\t\t\t\t\t\t<span class="submenu-desc">Take advantage of our special holiday packages for students.</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<a href="#">Couples</a>\n\t\t\t\t\t\t<span class="submenu-desc">Take advantage of our special holiday packages for couples.</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t  <li class="submenu-top-item icon-list">\n\t\t\t\t\t<a href="#" class="submenu-title">Our services</a>\n\t\t\t\t\t<ul class="submenu-list">\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<i class="submenu-icon fas fa-plane-departure"></i>\n\t\t\t\t\t\t<a href="#">Plane tickets</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<i class="submenu-icon fas fa-car"></i>\n\t\t\t\t\t\t<a href="#">Car rental</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<i class="submenu-icon fas fa-luggage-cart"></i>\n\t\t\t\t\t\t<a href="#">Luggage pickup</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<i class="submenu-icon fas fa-phone-alt"></i>\n\t\t\t\t\t\t<a href="#">24/7 customer service</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<i class="submenu-icon fas fa-dollar-sign"></i>\n\t\t\t\t\t\t<a href="#">30-day cancellation policy</a>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t  <li class="submenu-top-item">\n\t\t\t\t\t<a href="#" class="submenu-title">Last minute offers</a>\n\t\t\t\t\t<ul class="submenu-list">\n\t\t\t\t\t  <li><a href="#">New York</a></li>\n\t\t\t\t\t  <li><a href="#">Stockholm</a></li>\n\t\t\t\t\t  <li><a href="#">Madrid</a></li>\n\t\t\t\t\t  <li><a href="#">Buenos Aires</a></li>\n\t\t\t\t\t  <li><a href="#">Tokyo</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t</ul>\n\t\t\t  </li>\n\t\t\t  <li class="submenu-item">\n\t\t\t\t<a href="#" class="submenu-title submenu-bottom-title">Trending destinations</a>\n\t\t\t\t<ul class="submenu-bottom">\n\t\t\t\t  <li class="submenu-bottom-item">\n\t\t\t\t\t<figure>\n\t\t\t\t\t  <img class="submenu-img-lg" src="https://picsum.photos/id/1016/640/260">\n\t\t\t\t\t  <figcaption><a href="#">Mountains</a></figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t  </li>\n\t\t\t\t  <li class="submenu-bottom-item">\n\t\t\t\t\t<figure>\n\t\t\t\t\t  <img class="submenu-img-lg" src="https://picsum.photos/id/1040/640/260">\n\t\t\t\t\t  <figcaption><a href="#">Castles</a></figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t  </li>\n\t\t\t\t  <li class="submenu-bottom-item">\n\t\t\t\t\t<figure>\n\t\t\t\t\t  <img class="submenu-img-lg" src="https://picsum.photos/id/1039/640/260">\n\t\t\t\t\t  <figcaption><a href="#">Waterfalls</a></figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t  </li>\n\t\t\t\t  <li class="submenu-bottom-item">\n\t\t\t\t\t<figure>\n\t\t\t\t\t  <img class="submenu-img-lg" src="https://picsum.photos/id/164/640/260">\n\t\t\t\t\t  <figcaption><a href="#">Historical towns</a></figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t  </li>\n\t\t\t\t</ul>\n\t\t\t  </li>\t  \n\t\t\t</ul>\n\t\t  </li>\n\t\t  <li class="menu-item"><a href="#">About</a></li>\n\t\t  <li class="menu-item"><a href="#">Blog</a></li>\n\t\t  <li class="menu-item"><a href="#">Contact</a></li>\n\t\t</ul>\n\t  </nav>')}},{key:"connectedCallback",value:function(){this.render()}},{key:"attributeChangedCallback",value:function(t,n,e){console.log("callback changed"),this.render()}}],[{key:"observedAttributes",get:function(){}}]),e}();window.customElements.define("mega-menu",h);
},{"../assets/down-arrow.png":"n4jc"}]},{},["w13r"], null)
//# sourceMappingURL=/megamenu.js.map