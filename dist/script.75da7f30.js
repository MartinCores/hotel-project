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
})({"consts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableNone = exports.tableBody = exports.msgCheckOut = exports.inputDni = exports.checkOutNone = exports.checkInNone = exports.hideList = exports.hideCheckOut = exports.msgLog = exports.hideCheckIn = exports.formCheckOut = exports.formWhole = exports.clientNights = exports.clientKids = exports.clientAdults = exports.clientEmail = exports.clientName = exports.clientDNI = exports.clientsOld = exports.clientsNow = exports.rooms = exports.store = void 0;
var store = {
  rooms: rooms,
  clientsNow: clientsNow,
  clientsOld: clientsOld
};
exports.store = store;
var rooms = [{
  id: 1,
  beds: 1,
  price: 25,
  occupied: true
}, {
  id: 2,
  beds: 3,
  price: 75,
  occupied: false
}, {
  id: 3,
  beds: 2,
  price: 50,
  occupied: false
}, {
  id: 4,
  beds: 4,
  price: 100,
  occupied: true
}, {
  id: 5,
  beds: 2,
  price: 50,
  occupied: true
}, {
  id: 6,
  beds: 6,
  price: 150,
  occupied: true
}, {
  id: 7,
  beds: 4,
  price: 100,
  occupied: false
}, {
  id: 8,
  beds: 1,
  price: 25,
  occupied: false
}];
exports.rooms = rooms;
var clientsNow = [{
  dni: "447858F",
  name: "Juanfran",
  email: "juanfran@celta.com",
  adults: 1,
  kids: 3,
  nights: 2,
  idRoom: 5
}, {
  dni: "555858V",
  name: "Djalminha",
  email: "djalma@depor.com",
  adults: 2,
  kids: 0,
  nights: 7,
  idRoom: 1
}, {
  dni: "443458C",
  name: "Mauro Silva",
  email: "mauro@depor.com",
  adults: 2,
  kids: 2,
  nights: 3,
  idRoom: 4
}, {
  dni: "777858A",
  name: "Mostovoi",
  email: "alexander@celta.com",
  adults: 2,
  kids: 3,
  nights: 5,
  idRoom: 6
}];
exports.clientsNow = clientsNow;
var clientsOld = [];
exports.clientsOld = clientsOld;
var clientDNI = document.querySelector("#identifier");
exports.clientDNI = clientDNI;
var clientName = document.querySelector("#name");
exports.clientName = clientName;
var clientEmail = document.querySelector("#email");
exports.clientEmail = clientEmail;
var clientAdults = document.querySelector("#adults");
exports.clientAdults = clientAdults;
var clientKids = document.querySelector("#kids");
exports.clientKids = clientKids;
var clientNights = document.querySelector("#nights");
exports.clientNights = clientNights;
var formWhole = document.querySelector("#form-whole");
exports.formWhole = formWhole;
var formCheckOut = document.querySelector("#form-checkout");
exports.formCheckOut = formCheckOut;
var hideCheckIn = document.querySelector("#hideCheckIn");
exports.hideCheckIn = hideCheckIn;
var msgLog = document.querySelector("#msglog");
exports.msgLog = msgLog;
var hideCheckOut = document.querySelector("#hideCheckOut");
exports.hideCheckOut = hideCheckOut;
var hideList = document.querySelector("#hideList");
exports.hideList = hideList;
var checkInNone = document.querySelector("#checkInDNone");
exports.checkInNone = checkInNone;
var checkOutNone = document.querySelector("#checkOutDNone");
exports.checkOutNone = checkOutNone;
var inputDni = document.querySelector("#inputdni");
exports.inputDni = inputDni;
var msgCheckOut = document.querySelector("#msgcheckout");
exports.msgCheckOut = msgCheckOut;
var tableBody = document.querySelector("#tablebody");
exports.tableBody = tableBody;
var tableNone = document.querySelector("#tablenone");
exports.tableNone = tableNone;
},{}],"occupiedSwap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.occupiedSwap = void 0;

var _consts = require("./consts.js");

var occupiedSwap = function occupiedSwap(obj) {
  var roomSwap = _consts.rooms.find(function (value) {
    return value.id === obj.idRoom;
  });

  if (roomSwap === undefined) {
    return "error occupiedswap";
  }

  if (roomSwap.occupied === true) {
    roomSwap.occupied = false;
  } else {
    roomSwap.occupied = true;
  }

  return roomSwap;
};

exports.occupiedSwap = occupiedSwap;
},{"./consts.js":"consts.js"}],"list.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = void 0;

var _consts = require("./consts.js");

var list = function list() {
  _consts.clientsNow.forEach(function (value) {
    return _consts.tableBody.insertAdjacentHTML("afterbegin", "<tr><td>".concat(value.name, "</td>\n    <td>").concat(value.idRoom, "</td>\n    <td>").concat(value.adults + value.kids, "</td>\n    <td>").concat(value.dni, "</td></tr>"));
  });

  return;
};

exports.list = list;
},{"./consts.js":"consts.js"}],"unList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reList = void 0;

var _consts = require("./consts.js");

var _list = require("./list.js");

var reList = function reList() {
  _consts.tableBody.innerHTML = "";
  (0, _list.list)(_consts.clientsNow);
  return;
};

exports.reList = reList;
},{"./consts.js":"consts.js","./list.js":"list.js"}],"checkAvailableRoom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAvailableRoom = void 0;

var _consts = require("./consts.js");

var _occupiedSwap = require("./occupiedSwap.js");

var _unList = require("./unList.js");

var checkAvailableRoom = function checkAvailableRoom(objcli) {
  var fittingRooms = _consts.rooms.filter(function (value) {
    return value.beds === parseInt(objcli.adults) + parseInt(objcli.kids);
  });

  console.log(fittingRooms);
  var availableRooms = fittingRooms.find(function (value) {
    return value.occupied === false;
  });
  console.log(availableRooms);
  console.log("\xA1Habitaci\xF3n ".concat(availableRooms.id, " asignada!"));
  objcli.idRoom = availableRooms.id;

  _consts.clientsNow.push(objcli);

  (0, _occupiedSwap.occupiedSwap)(objcli);

  _consts.msgLog.insertAdjacentHTML("afterbegin", "<div class=\"alert alert-success mt-3\">Habitaci\xF3n ".concat(availableRooms.id, " asignada!</div>"));

  console.log(_consts.rooms);
  console.log(_consts.clientsNow);
  (0, _unList.reList)(_consts.clientsNow);
  return;
};

exports.checkAvailableRoom = checkAvailableRoom;
},{"./consts.js":"consts.js","./occupiedSwap.js":"occupiedSwap.js","./unList.js":"unList.js"}],"addIdRoom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addIdRoom = void 0;

var _consts = require("./consts.js");

var _checkAvailableRoom = require("./checkAvailableRoom.js");

var addIdRoom = function addIdRoom(obj) {
  var clientId = (0, _checkAvailableRoom.checkAvailableRoom)(obj);
  obj.idRoom = clientId.id;
  console.log(clientId);
  return;
};

exports.addIdRoom = addIdRoom;
},{"./consts.js":"consts.js","./checkAvailableRoom.js":"checkAvailableRoom.js"}],"printBill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printBill = void 0;

var _consts = require("./consts.js");

var printBill = function printBill(obj) {
  var compareRooms = _consts.rooms.findIndex(function (value) {
    return value.id === obj.idRoom;
  });

  if (!compareRooms) {
    return "erro ao comparar o id da habita e o idroom do cliente";
  }

  var bill = _consts.rooms[compareRooms].price * obj.nights;

  _consts.msgCheckOut.insertAdjacentHTML("afterbegin", "<div class=\"d-flex justify-content-center mt-2\"><button id=\"getBill\" class=\"btn btn-primary\">\n    Imprimir Factura\n  </button></div> ");

  document.querySelector("#getBill").addEventListener("click", function () {
    document.querySelector("#getBill").insertAdjacentHTML("afterend", "<div class=d-flex\">\n        <h4>Agradec\xE9moslle que escollera os nosos servizos.</h4>\n       <p>O prezo da s\xFAa estancia \xE9 de\n        ".concat(bill, "\u20AC.</p>\n        <p>Aplicando o IVE, de\n       ").concat(bill * 0.1, "\u20AC</p>\n        <p>Ascende as\xED a un total de\n        ").concat(Math.trunc(bill * 1.1), "\u20AC</p>\n  </div>"));
  });
  return;
}; //msgCheckOut.insertAdjacentHTML(
//  `afterbegin`,
//  `<div class="alert alert-success mt-2">
//        Agradecémoslle que escollera os nosos servizos,
//       o prezo da súa estancia é de,
//        ${bill}€.
//        Aplicando o IVE, de
//       ${bill * 0.1}€,
//        ascende a un total de
//        ${Math.trunc(bill * 1.1)}€
//  </div>`
//);


exports.printBill = printBill;
},{"./consts.js":"consts.js"}],"checkOut.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkOut = void 0;

var _consts = require("./consts.js");

var _occupiedSwap = require("./occupiedSwap.js");

var _printBill = require("./printBill.js");

var _unList = require("./unList.js");

var checkOut = function checkOut(objcli) {
  var selectObjectClient = _consts.clientsNow.find(function (value) {
    return value.dni === objcli;
  });

  if (!selectObjectClient) {
    console.log("non se atopa o cliente");
    return;
  }

  console.log(selectObjectClient);

  var clientIndex = _consts.clientsNow.findIndex(function (value) {
    return value.idRoom === selectObjectClient.idRoom;
  });

  if (clientIndex === -1) {
    console.log(value);
    console.log("Cliente non atopado");
    return;
  }

  console.log(clientIndex);

  _consts.clientsOld.unshift(selectObjectClient);

  console.log(_consts.clientsOld);
  (0, _occupiedSwap.occupiedSwap)(selectObjectClient);

  _consts.clientsNow.splice(clientIndex, 1);

  (0, _printBill.printBill)(selectObjectClient);
  (0, _unList.reList)(_consts.clientsNow);
  console.log(_consts.rooms);
  return;
};

exports.checkOut = checkOut;
},{"./consts.js":"consts.js","./occupiedSwap.js":"occupiedSwap.js","./printBill.js":"printBill.js","./unList.js":"unList.js"}],"script.js":[function(require,module,exports) {
"use strict";

var _consts = require("./consts.js");

var _addIdRoom = require("./addIdRoom.js");

var _checkAvailableRoom = require("./checkAvailableRoom.js");

var _checkOut = require("./checkOut.js");

var _list = require("./list.js");

console.log(_consts.msgLog);

_consts.formWhole.addEventListener("submit", function (event) {
  event.preventDefault();
  (0, _checkAvailableRoom.checkAvailableRoom)( //Convertir isto en obxecto
  {
    dni: _consts.clientDNI.value,
    name: _consts.clientName.value,
    email: _consts.clientEmail.value,
    adults: parseInt(_consts.clientAdults.value),
    kids: parseInt(_consts.clientKids.value),
    nights: _consts.clientNights.value
  });
});

_consts.formCheckOut.addEventListener("submit", function (event) {
  event.preventDefault();
  (0, _checkOut.checkOut)(_consts.inputDni.value);
});

_consts.hideCheckIn.addEventListener("click", function () {
  _consts.checkInNone.classList.toggle("d-none");

  _consts.checkOutNone.classList.add("d-none");

  _consts.tableNone.classList.add("d-none");
});

_consts.hideCheckOut.addEventListener("click", function () {
  _consts.checkOutNone.classList.toggle("d-none");

  _consts.checkInNone.classList.add("d-none");

  _consts.tableNone.classList.add("d-none");
});

_consts.hideList.addEventListener("click", function () {
  _consts.tableNone.classList.toggle("d-none");

  _consts.checkInNone.classList.add("d-none");

  _consts.checkOutNone.classList.add("d-none");
});

(0, _list.list)();
},{"./consts.js":"consts.js","./addIdRoom.js":"addIdRoom.js","./checkAvailableRoom.js":"checkAvailableRoom.js","./checkOut.js":"checkOut.js","./list.js":"list.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51189" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map