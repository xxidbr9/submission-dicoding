// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/sass/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/svg/bangkit_logo.svg":[function(require,module,exports) {
module.exports = '#1344a100e1a13094b806f2115503d50a';
},{}],"assets/svg/message-circle.svg":[function(require,module,exports) {
module.exports = '#d29c0b8fd8ad609a257c86f199322674';
},{}],"assets/svg/bell.svg":[function(require,module,exports) {
module.exports = '#9221ff8c7e69f873857575c99d237702';
},{}],"assets/svg/align-justify.svg":[function(require,module,exports) {
module.exports = '#6c6ecd9f97c0b18a3987432bab43978c';
},{}],"assets/images/profile.jpg":[function(require,module,exports) {
module.exports = "/profile.fd20e9e1.jpg";
},{}],"assets/svg/search.svg":[function(require,module,exports) {
module.exports = '#962849c90817e6e09652bc442ad91c5e';
},{}],"assets/svg/more-horizontal.svg":[function(require,module,exports) {
module.exports = '#608ae7fca959a219531a81b2511d4c51';
},{}],"assets/js/helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListedItem = exports.changeTime = exports.GetId = void 0;

var _moreHorizontal = _interopRequireDefault(require("../svg/more-horizontal.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetId = function GetId(id) {
  return document.getElementById(id);
};

exports.GetId = GetId;

var changeTime = function changeTime(time) {
  return new Date(time).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  });
};

exports.changeTime = changeTime;

var ListedItem = function ListedItem(item) {
  var isAssigment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "\n".concat(!!isAssigment ? "\n<div class=\"my-1\">\n    <span class=\"small\">\n        ".concat(item.class, "\n    </span>\n    ") : "", "\n    <li class=\"").concat(!!isAssigment ? "py-0" : "", "\">\n        ").concat(item.name, "\n        <span class=\"list__listed__menu cursor\">\n            <svg>\n                <use xlink:href=\"").concat(_moreHorizontal.default, "\" />\n            </svg>\n        </span>\n    </li>\n    ").concat(!!isAssigment ? "\n    <span class=\"small\">\n        ".concat(item.time, "\n    </span>\n</div>\n") : "", "\n");
};

exports.ListedItem = ListedItem;
},{"../svg/more-horizontal.svg":"assets/svg/more-horizontal.svg"}],"assets/js/navbar.js":[function(require,module,exports) {
"use strict";

var _bangkit_logo = _interopRequireDefault(require("../svg/bangkit_logo.svg"));

var _messageCircle = _interopRequireDefault(require("../svg/message-circle.svg"));

var _bell = _interopRequireDefault(require("../svg/bell.svg"));

var _alignJustify = _interopRequireDefault(require("../svg/align-justify.svg"));

var _profile = _interopRequireDefault(require("../images/profile.jpg"));

var _search = _interopRequireDefault(require("../svg/search.svg"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Menu
var hamburger = (0, _helpers.GetId)("navbar__menus_btn");
hamburger.innerHTML = "\n<svg>\n    <use xlink:href=\"".concat(_alignJustify.default, "\" />\n</svg>\n"); // Logo Start

var logo = (0, _helpers.GetId)("navbar__brand__logo");
logo.innerHTML = "\n<svg>\n    <use xlink:href=\"".concat(_bangkit_logo.default, "\" />\n</svg>\n"); // Search

var search = (0, _helpers.GetId)("navbar__search__icon");
search.innerHTML = "\n<svg>\n    <use xlink:href=\"".concat(_search.default, "\" />\n</svg>\n"); // Msg Here

var msgMenu = (0, _helpers.GetId)("navbar__menus__item__msg");
msgMenu.innerHTML = "\n<svg>\n    <use xlink:href=\"".concat(_messageCircle.default, "\" />\n</svg>\n");
var notifMenu = (0, _helpers.GetId)("navbar__menus__item__notif");
notifMenu.innerHTML = "\n<svg>\n    <use xlink:href= \"".concat(_bell.default, "\" />\n</svg>\n");
var profileMenu = (0, _helpers.GetId)("navbar__menus__item__profile");
profileMenu.innerHTML = "\n    <img src=\"./".concat(_profile.default, "\" />\n");
},{"../svg/bangkit_logo.svg":"assets/svg/bangkit_logo.svg","../svg/message-circle.svg":"assets/svg/message-circle.svg","../svg/bell.svg":"assets/svg/bell.svg","../svg/align-justify.svg":"assets/svg/align-justify.svg","../images/profile.jpg":"assets/images/profile.jpg","../svg/search.svg":"assets/svg/search.svg","./helpers":"assets/js/helpers.js"}],"assets/svg/settings.svg":[function(require,module,exports) {
module.exports = '#74291afc7a476d64c200ab83f1ec3f56';
},{}],"assets/js/profile_card.js":[function(require,module,exports) {
"use strict";

var _settings = _interopRequireDefault(require("../svg/settings.svg"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// handle change setting to svg
var settings = document.querySelectorAll("#setting");
settings.forEach(function (item) {
  item.innerHTML = "\n        <svg>\n           <use xlink:href=\"".concat(_settings.default, "\" />\n        </svg>\n    ");
}); // Class 

var classList = [{
  id: 1,
  name: "Machine Learning 1"
}, {
  id: 2,
  name: "Cloud Computing"
}, {
  id: 3,
  name: "Calculus"
}, {
  id: 4,
  name: "UI / UX"
}];
var outNode = "";
var listedClass = (0, _helpers.GetId)("listed__class");
classList.forEach(function (item) {
  outNode += (0, _helpers.ListedItem)(item);
});
listedClass.innerHTML = outNode;
},{"../svg/settings.svg":"assets/svg/settings.svg","./helpers":"assets/js/helpers.js"}],"assets/js/assigment__card.js":[function(require,module,exports) {
"use strict";

var _helpers = require("./helpers");

// Class 
var classList = [{
  id: 1,
  name: "Test UAS",
  time: "12/3/2021",
  class: "Cloud Computing"
}, {
  id: 2,
  name: "Reading Section",
  time: "15/3/2021",
  class: "Bhs Inggris"
}, {
  id: 3,
  name: "Math Basic UTS",
  time: "1/3/2021",
  class: "Calculus"
}, {
  id: 4,
  name: "Praktek Design",
  time: "2/3/2021",
  class: "Design Digital"
}];
var outNode = "";
var listedClass = (0, _helpers.GetId)("listed__assigment");
classList.forEach(function (item) {
  outNode += (0, _helpers.ListedItem)(item, true);
});
listedClass.innerHTML = outNode;
},{"./helpers":"assets/js/helpers.js"}],"assets/svg/chevron-down.svg":[function(require,module,exports) {
module.exports = '#b54959ccc0e6a76db670b55a8fc3b782';
},{}],"assets/js/breakline.js":[function(require,module,exports) {
"use strict";

var _helpers = require("./helpers");

var _chevronDown = _interopRequireDefault(require("../svg/chevron-down.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ceret = (0, _helpers.GetId)("filter__tagline__drop__ceret");
ceret.innerHTML = "\n<svg>\n    <use xlink:href=\"".concat(_chevronDown.default, "\" />\n</svg>\n");
},{"./helpers":"assets/js/helpers.js","../svg/chevron-down.svg":"assets/svg/chevron-down.svg"}],"assets/svg/image.svg":[function(require,module,exports) {
module.exports = '#8b8afac84409d850a237be5e001cf64a';
},{}],"assets/dummy/data.json":[function(require,module,exports) {
module.exports = {
  "data": [{
    "image_url": "",
    "author_pic": "https://source.unsplash.com/random/400x401",
    "author_name": "Keanu McGlynn",
    "content": "Beatae minima quae. Omnis ut molestias non aut. Incidunt fugit unde mollitia quo itaque doloremque perferendis blanditiis. Vitae sed vero porro aut. Veniam eos quod aperiam. Laudantium corporis dolores quod nihil impedit officia est suscipit.\n \rEst minima eaque. Et velit sed voluptatem in at odit. Officiis ipsum consectetur sit eum in autem veritatis nam ipsum. Magni reiciendis est vel reprehenderit hic incidunt.\n \rRerum est delectus voluptatibus quam. Omnis rerum cumque. Praesentium fugit dolorem corporis asperiores voluptas explicabo porro velit atque. Et perspiciatis rerum vero in earum exercitationem.",
    "id": "f3bf94e2-0b3e-4a8e-8218-ce24917f10e8",
    "time": "2020-10-18T07:07:41.282Z"
  }, {
    "image_url": "https://source.unsplash.com/random/1",
    "author_pic": "https://source.unsplash.com/random/400x402",
    "author_name": "Barbara Pollich",
    "content": "Suscipit tempore aut tempora rerum voluptate. Quis velit officiis dolor eos voluptates ut quae molestias nemo. Quibusdam sed iste fugit quasi modi cumque porro. Deserunt quis similique aperiam commodi accusamus.\n \rModi ut labore aut in et. In nihil officiis aut eos et sed tempora. Quos et molestiae impedit similique ipsum in aspernatur eligendi est. Repellat dolores eos.\n \rDolores ut cumque aut aliquid nesciunt harum. Occaecati sequi vero earum qui. Explicabo nesciunt sequi provident et voluptatibus fugit veniam. Omnis soluta architecto occaecati dolorem quas et incidunt. Voluptatem veritatis similique nostrum rerum non maiores est ut.",
    "id": "0adbd6f7-375f-44fa-a950-5e314a8091b8",
    "time": "2020-09-03T04:34:01.354Z"
  }, {
    "image_url": "https://source.unsplash.com/random/2",
    "author_pic": "https://source.unsplash.com/random/400x403",
    "author_name": "Jessika Upton",
    "content": "Qui reprehenderit quia. Harum tempora vel. Cumque omnis voluptate non aut illum voluptate explicabo. Perspiciatis voluptatem fugiat temporibus. Qui nihil et quo deserunt dolorum.\n \rIn dicta repellendus eos aut voluptas. Velit adipisci quia quis consequuntur. Consequuntur accusantium asperiores quis aut amet soluta saepe est voluptatem. Quod officia velit nam corrupti provident id maiores repudiandae non. Numquam consequuntur et corrupti eos quo natus quo molestiae quisquam.\n \rRem corporis omnis repellat ipsam dolores omnis voluptatem maxime quam. Officiis cum consectetur at in quod accusamus autem repudiandae. Vitae quaerat sint reprehenderit. Vel provident ea nam in.",
    "id": "125d05d4-e0a7-42cc-a3e5-5b9f8757847d",
    "time": "2020-10-09T22:36:36.430Z"
  }, {
    "image_url": "https://source.unsplash.com/random/3",
    "author_pic": "https://source.unsplash.com/random/400x404",
    "author_name": "Landen Hudson",
    "content": "Tenetur deleniti quasi voluptas sed. Fuga ducimus sed quo laudantium temporibus vero accusamus et quasi. Nesciunt earum distinctio. Modi beatae repudiandae laudantium perspiciatis porro. Excepturi fugit repellat deleniti quae voluptatem unde ut. Autem natus tenetur sapiente laborum aut.\n \rIure quod provident consequuntur doloremque aliquam qui. Quae non quae ut nulla blanditiis reiciendis repellendus. Officiis fugiat quis culpa. Totam voluptas officia tenetur.\n \rA excepturi odio consequuntur. Enim neque fuga et voluptas aut necessitatibus praesentium quis. Neque perspiciatis eligendi est ipsum vero et dolorem. Deleniti voluptatum dolores animi sit natus qui. Ex quos odio accusantium dolorem minus.",
    "id": "e3d7ad83-a197-4b81-a3b0-794ac849c00f",
    "time": "2020-08-14T09:55:25.732Z"
  }, {
    "image_url": "",
    "author_pic": "https://source.unsplash.com/random/400x405",
    "author_name": "Stanley Littel",
    "content": "Exercitationem eos maxime tenetur qui ut cum dolores. Rerum vitae iste facere inventore pariatur. Nulla nam nobis in ea fuga sed quo quo natus. Et consequatur voluptates. Ut modi dolorum. Adipisci et eum ipsum id numquam et consequuntur.\n \rRepellat ut veniam beatae quibusdam sit quo rerum nemo et. Deleniti id ipsam illo unde. Similique natus ex et consequuntur sit nostrum earum.\n \rDeserunt aut voluptas. Libero blanditiis blanditiis ratione. Libero illo dolorum dolorem. Ipsa dolorum quae qui tempora eveniet qui eligendi.",
    "id": "0a331273-e479-4960-9038-dde0571a1051",
    "time": "2020-07-19T10:15:52.074Z"
  }, {
    "image_url": "https://source.unsplash.com/random/5",
    "author_pic": "https://source.unsplash.com/random/400x406",
    "author_name": "Cullen Jenkins",
    "content": "Sed voluptas sit quia placeat minima eius. Ad perferendis sint sint omnis deserunt. Libero non nisi autem blanditiis voluptatum ut expedita aut qui. Quia et aut veritatis velit eaque sit illum. Autem sunt eaque aut.\n \rQuia cumque qui tenetur. Porro id placeat nulla. Accusamus sed incidunt fuga quae iste molestiae sint ut.\n \rHic facilis voluptatem. Voluptates voluptates saepe voluptatem et. Assumenda consequatur veritatis possimus nostrum assumenda eum quaerat. Deleniti sint qui vel atque mollitia est blanditiis aliquam non. Accusantium aut nihil consequuntur minus ut ullam repellat. Et similique aliquid suscipit.",
    "id": "ceea32b3-58e3-42dd-a607-6c51506723ec",
    "time": "2021-02-03T11:58:54.080Z"
  }, {
    "image_url": "",
    "author_pic": "https://source.unsplash.com/random/400x407",
    "author_name": "Dr. Jeanie Hodkiewicz",
    "content": "Est maiores optio iure. Necessitatibus cupiditate iusto dolor. Eaque modi laborum labore praesentium soluta est consectetur. Voluptatem dolor blanditiis sed praesentium. Cupiditate minima officiis molestias modi.\n \rNihil aut non aut rem dolor aliquid in beatae. Minus magni perferendis. Qui eos odio vitae. Et tempora possimus est ut. Consequatur earum incidunt nihil assumenda.\n \rNihil corporis facere est rerum voluptas doloribus est ea. Optio quas nihil quia nostrum possimus qui id labore. Non possimus consequatur quia exercitationem possimus molestiae autem. Aspernatur non maxime molestias eaque et porro molestiae tempora voluptate.",
    "id": "15de752e-c5af-4a80-bc88-e01a12179aca",
    "time": "2020-12-03T10:24:29.780Z"
  }, {
    "image_url": "https://source.unsplash.com/random/7",
    "author_pic": "https://source.unsplash.com/random/400x408",
    "author_name": "Gabe Towne",
    "content": "Fugiat adipisci voluptas et sapiente. Cupiditate eum earum fugiat. Sequi autem hic qui magni ut aut cumque accusamus.\n \rDistinctio ut vero cupiditate ut cupiditate. Quisquam sapiente officia delectus tempora officiis rerum. Sit nihil neque occaecati. Rerum aspernatur est quis rerum qui tempora. Et quis deleniti.\n \rQuis sed ratione ut nihil. Qui fuga ratione voluptas voluptatum. Repudiandae ex autem fugit dolor est sint cum quia. Natus voluptate minus qui ipsam. Alias sit et consequatur similique ea. Est vitae ea id laboriosam dolores eveniet.",
    "id": "5d5bddc5-0739-4bcd-8790-0cd0867fe86d",
    "time": "2020-10-24T08:07:29.135Z"
  }, {
    "image_url": "https://source.unsplash.com/random/8",
    "author_pic": "https://source.unsplash.com/random/400x409",
    "author_name": "Neal Langworth",
    "content": "Veritatis eum eos voluptatum rem voluptatem magni sit. Laboriosam dignissimos deserunt illo. Aperiam et voluptatem soluta molestiae autem. Voluptas aut non.\n \rQuis voluptatem ipsam quisquam quas incidunt. Qui ea non numquam eligendi. Labore optio accusamus dolorem eaque eum quis mollitia cupiditate quae. Dolores debitis velit corrupti fugiat mollitia laudantium minima.\n \rNesciunt sit facere soluta occaecati harum quisquam quos. Odit eum magnam sed est aut magni corrupti. Ab deleniti earum sit enim quaerat error.",
    "id": "2adbf1f2-ed26-437f-af20-4af76334f1b6",
    "time": "2020-03-24T19:58:18.238Z"
  }, {
    "image_url": "",
    "author_pic": "https://source.unsplash.com/random/400x410",
    "author_name": "Litzy Blanda",
    "content": "Temporibus ab et rerum. Quam necessitatibus at est et id eius. Ex iusto eos repudiandae aut molestias perspiciatis. Labore cumque omnis ut itaque aut quis perspiciatis. Ipsam rerum rem assumenda quia.\n \rConsequatur harum sequi. Quas eum consequatur. Aspernatur molestiae enim qui.\n \rNumquam est quasi voluptatem autem cumque ut sunt sit. Voluptatem facere ut et sequi sint quasi voluptates quis id. Repellendus excepturi nobis. Eos voluptatem rerum doloremque voluptate aut in quod autem et.",
    "id": "1ee3a940-9f27-4ba3-8c6f-b62268eca2b9",
    "time": "2020-05-03T17:59:53.197Z"
  }]
};
},{}],"assets/js/articles.js":[function(require,module,exports) {
"use strict";

var _moreHorizontal = _interopRequireDefault(require("../svg/more-horizontal.svg"));

var _image = _interopRequireDefault(require("../svg/image.svg"));

var _data = _interopRequireDefault(require("../dummy/data.json"));

var _profile = _interopRequireDefault(require("../images/profile.jpg"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Foreach Article
var outHtml = "";

_data.default.data.forEach(function (article) {
  outHtml += "\n    <article class=\"article card spacing-y\">\n    <div class=\"article__head spacing-x\">\n        <div class=\"article__head__profile\">\n            <img src=\"".concat(article.author_pic, "\" alt=\"\" class=\"article__head__profile__pic\">\n            <div class=\"article__head__profile__group\">\n                <span class=\"article__head__profile__group__name\">").concat(article.author_name, "</span>\n                <span class=\"article__head__profile__group__create-at\">").concat((0, _helpers.changeTime)(article.time), "</span>\n            </div>\n        </div>\n        <div class=\"article__head__menu\" id=\"article__head__menu\">\n\n        </div>\n    </div>\n    <p class=\"article__content spacing-x\">\n        ").concat(article.content, "\n    </p>\n    <img src=\"").concat(article.image_url, "\" alt=\"\" srcset=\"\" class=\"article__img\">\n    <div class=\"article__footer spacing-x\">\n        <div class=\"article__footer__top\">\n            <ul class=\"article__footer__top__list\" id=\"article__footer__top__list\">\n                <!-- \n            <li class=\"article__footer__top__item\"></li>\n            <li class=\"article__footer__top__item\"></li>\n            <li class=\"article__footer__top__item\"></li> \n            -->\n            </ul>\n        </div>\n        <div class=\"article__footer__bottom\">\n            <img src=\"").concat(_profile.default, "\" alt=\"\" class=\"article__footer__bottom__img\">\n            <div class=\"article__footer__bottom__field\">\n                <input type=\"text\" class=\"article__footer__bottom__field__input\" placeholder=\"Komentari....\">\n                <span class=\"article__footer__bottom__field__icon\" id=\"article__footer__bottom__field__icon\">\n                    <!-- svg -->\n                </span>\n            </div>\n\n        </div>\n    </div>\n</article>\n");
});

var articleSection = (0, _helpers.GetId)("articles");
articleSection.innerHTML = outHtml; // Inject menus svg

var articleMenus = document.querySelectorAll("#article__head__menu");
articleMenus.forEach(function (item) {
  item.innerHTML = "\n<span class=\"article__head__menu__svg cursor\">\n    <svg>\n        <use xlink:href=\"".concat(_moreHorizontal.default, "\" />\n    </svg>\n</span>\n");
}); // Footer

var articleInputIcons = document.querySelectorAll("#article__footer__bottom__field__icon");
articleInputIcons.forEach(function (item) {
  item.innerHTML = "\n        <span class=\"article__footer__bottom__field__icon__svg cursor\">\n            <svg>\n                <use xlink:href=\"".concat(_image.default, "\" />\n            </svg>\n        </span>\n");
});
},{"../svg/more-horizontal.svg":"assets/svg/more-horizontal.svg","../svg/image.svg":"assets/svg/image.svg","../dummy/data.json":"assets/dummy/data.json","../images/profile.jpg":"assets/images/profile.jpg","./helpers":"assets/js/helpers.js"}],"assets/js/index.js":[function(require,module,exports) {
"use strict";

require("./navbar");

require("./profile_card");

require("./assigment__card");

require("./breakline");

require("./articles");
},{"./navbar":"assets/js/navbar.js","./profile_card":"assets/js/profile_card.js","./assigment__card":"assets/js/assigment__card.js","./breakline":"assets/js/breakline.js","./articles":"assets/js/articles.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./assets/sass/style.scss");

require("./assets/js");
},{"./assets/sass/style.scss":"assets/sass/style.scss","./assets/js":"assets/js/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37773" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Submission.e31bb0bc.js.map