// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"provider\\providers.json":[function(require,module,exports) {
module.exports = {
    "providers": [{
        "name": "Netatmo",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "link": "https://www.netatmo.com/fr-FR/site/",
        "image": "netatmo_opt.png",
        "devices": [{
            "name": "Thermostat",
            "icon": "fas fa-thermometer-quarter fa-w-16"
        }, {
            "name": "Station météo",
            "icon": "fas fa-tint fa-w-16"
        }],
        "prerequisites": [],
        "datatypes": [{
            "name": "Température ambiante",
            "device": "Station et thermostat",
            "timestep": "10 minutes"
        }, {
            "name": "Température de consigne et mode",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }, {
            "name": "Planning de chauffe",
            "device": "Thermostat",
            "timestep": "hebdomadaire"
        }, {
            "name": "Temps de fonctionnement de la chaudière",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }, {
            "name": "Taux d'humidité",
            "device": "Station",
            "timestep": "10 minutes"
        }, {
            "name": "Bruit",
            "device": "Station",
            "timestep": "10 minutes"
        }, {
            "name": "Taux de Co2",
            "device": "Station",
            "timestep": "10 minutes"
        }],
        "purposes": [{
            "id": "now-home",
            "name": "En ce moment chez moi"
        }, {
            "id": "simulateur-chauffage",
            "name": "Le simulateur de chauffage"
        }, {
            "id": "qai",
            "name": "Le bilan qualité de l'air"
        }, {
            "id": "g2",
            "name": "Le bilan gaz"
        }]
    }, {
        "name": "Atlantic",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "link": "https://www.netatmo.com/fr-FR/site/",
        "image": "atlantic_opt.jpg",
        "devices": [{
            "name": "Radiateur",
            "icon": "fas fa-fire fa-w-16"
        }],
        "datatypes": [{
            "name": "Index des radiateurs",
            "device": "Radiateur",
            "timestep": "journalier"
        }, {
            "name": "Température de consigne",
            "device": "Radiateur",
            "timestep": "journalier"
        }],
        "purposes": [{
            "id": "simulateur-chauffage",
            "name": "simulateur de chauffage"
        }, {
            "id": "now-home",
            "name": "En ce moment chez moi"
        }, {
            "id": "part-chauffage ",
            "name": "Part chauffage connecté"
        }, {
            "id": "suivi-conso-chauffage",
            "name": "Suivi des conso chauffage par pièce"
        }]
    }, {
        "name": "Qivivo",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "link": "https://www.netatmo.com/fr-FR/site/",
        "image": "qivivo_opt.png",
        "devices": [{
            "name": "Thermostat",
            "icon": "fas fa-thermometer-quarter fa-w-16"
        }],
        "prerequisites": [],
        "datatypes": [{
            "name": "Température ambiante",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }, {
            "name": "Température de consigne",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }, {
            "name": "Planning de chauffe",
            "device": "Thermostat",
            "timestep": "hebdomadaire"
        }, {
            "name": "Temps de présence",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }, {
            "name": "Taux d'humidité",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }],
        "purposes": [{
            "id": "now-home",
            "name": "En ce moment chez moi"
        }, {
            "id": "simulateur-chauffage",
            "name": "Le simulateur de chauffage"
        }, {
            "id": "qai",
            "name": "Le bilan qualité de l'air"
        }, {
            "id": "g2",
            "name": "Le bilan gaz"
        }]
    }, {
        "name": "Deltadore",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "link": "https://www.netatmo.com/fr-FR/site/",
        "image": "deltadore_opt.png",
        "devices": [{
            "name": "Thermostat",
            "icon": "fas fa-thermometer-quarter fa-w-16"
        }],
        "prerequisites": [],
        "datatypes": [{
            "name": "Température ambiante",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }, {
            "name": "Température de consigne et mode du thermostat",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }],
        "purposes": [{
            "id": "now-home",
            "name": "En ce moment chez moi"
        }, {
            "id": "simulateur-chauffage",
            "name": "Le simulateur de chauffage"
        }]
    }, {
        "name": "Honeywell",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "link": "https://www.netatmo.com/fr-FR/site/",
        "image": "honeywell_opt.jpg",
        "devices": [{
            "name": "Thermostat",
            "icon": "fas fa-thermometer-quarter fa-w-16"
        }],
        "prerequisites": [],
        "datatypes": [{
            "name": "Température ambiante",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }, {
            "name": "Température de consigne et mode du thermostat",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }, {
            "name": "Planning de chauffe",
            "device": "Thermostat",
            "timestep": "hebdomadaire"
        }],
        "purposes": [{
            "id": "now-home",
            "name": "En ce moment chez moi"
        }, {
            "id": "simulateur-chauffage",
            "name": "Le simulateur de chauffage"
        }]
    }, {
        "name": "Comwatt",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "link": "https://www.netatmo.com/fr-FR/site/",
        "image": "comwatt_opt.jpg",
        "devices": [{
            "name": "Panneaux solaires",
            "icon": "fas fa-sun fa-w-16"
        }],
        "prerequisites": [{
            "name": "Compteur Linky",
            "icon": "fas fa-bolt fa-w-16"
        }],
        "datatypes": [{
            "name": "Production d'éléctricité",
            "device": "Box",
            "timestep": "2 minutes"
        }, {
            "name": "Consommation globale d'éléctricité",
            "device": "Box",
            "timestep": "2 minutes"
        }],
        "purposes": [{
            "id": "autoconsumption",
            "name": "Autoconsommation"
        }]
    }, {
        "name": "Nest",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "link": "https://www.netatmo.com/fr-FR/site/",
        "image": "nest_opt.png",
        "devices": [{
            "name": "Thermostat",
            "icon": "fas fa-thermometer-quarter fa-w-16"
        }],
        "prerequisites": [],
        "datatypes": [{
            "name": "Température",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }, {
            "name": "Température de consigne et mode",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }, {
            "name": "Humidité",
            "device": "Thermostat",
            "timestep": "10 minutes"
        }],
        "purposes": [{
            "id": "now-home",
            "name": "En ce moment chez moi"
        }, {
            "id": "simulateur-chauffage",
            "name": "Le simulateur de chauffage"
        }]
    }]
};
},{}],"provider\\provider.service.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProviderByName = exports.getProviderNames = undefined;

var _providers = require('./providers.json');

var getProviderNames = exports.getProviderNames = function getProviderNames(_) {
    return _providers.providers.map(function (provider) {
        return provider.name;
    });
};

var getProviderByName = exports.getProviderByName = function getProviderByName(name) {
    return _providers.providers.find(function (provider) {
        return provider.name === name;
    });
};

exports.default = {
    getProviderNames: getProviderNames,
    getProviderByName: getProviderByName
};
},{"./providers.json":"provider\\providers.json"}],"common\\index.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var clearChildren = exports.clearChildren = function clearChildren(container) {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
};

var createLinkElement = exports.createLinkElement = function createLinkElement(_ref) {
    var content = _ref.content,
        href = _ref.href,
        className = _ref.className;

    var link = document.createElement('a');
    link.appendChild(document.createTextNode(content));
    if (className) {
        link.className = link.className + ' ' + className;
    }
    link.href = href;
    return link;
};
},{}],"provider\\provider.component.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _providerService = require('./provider.service.js');

var _providerService2 = _interopRequireDefault(_providerService);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newListItem = function newListItem(content, icon) {
    var li = document.createElement("li");
    var i = document.createElement("i");
    i.className = icon;
    li.appendChild(i);
    li.appendChild(document.createTextNode(content));
    return li;
};

/*const newDataTypeItem = (dataType, timestep) => {
    const li = document.createElement("li")
    const dataTypeSpan = document.createElement("span")
    dataTypeSpan.className = "data-type"
    dataTypeSpan.appendChild(document.createTextNode(dataType))
    const timeStepSpan = document.createElement("span")
    timeStepSpan.className = "time-step"
    timeStepSpan.appendChild(document.createTextNode(timestep))
    li.appendChild(dataTypeSpan);
    li.appendChild(document.createTextNode(' au pas de temps '))
    li.appendChild(timeStepSpan);
    return li;
}*/

var newDataTypeItemTable = function newDataTypeItemTable(dataType, device, timestep) {
    var tr = document.createElement("tr");
    var datatypeColum = document.createElement("td");
    var deviceColum = document.createElement("td");
    var timestepColum = document.createElement("td");

    datatypeColum.appendChild(document.createTextNode(dataType));
    deviceColum.appendChild(document.createTextNode(device));
    timestepColum.appendChild(document.createTextNode(timestep));

    tr.appendChild(datatypeColum);
    tr.appendChild(deviceColum);
    tr.appendChild(timestepColum);

    return tr;
};

var newPurposeItem = function newPurposeItem(id, name) {
    var li = document.createElement("li");

    var link = (0, _common.createLinkElement)({
        content: name,
        href: '#' + id
    });
    li.appendChild(link);
    return li;
};

var ProviderComponent = function () {
    function ProviderComponent(providerName) {
        _classCallCheck(this, ProviderComponent);

        this.provider = _providerService2.default.getProviderByName(providerName);
    }

    _createClass(ProviderComponent, [{
        key: 'createElement',
        value: function createElement() {
            var template = document.getElementById('provider-template');
            var instance = template.content.cloneNode(true);

            var _provider = this.provider,
                name = _provider.name,
                image = _provider.image,
                description = _provider.description,
                link = _provider.link,
                devices = _provider.devices,
                prerequisites = _provider.prerequisites,
                datatypes = _provider.datatypes,
                purposes = _provider.purposes;


            instance.querySelector('.provider-name').textContent = name;
            instance.querySelector('.provider-name').id = name;
            instance.querySelector('.provider-description').textContent = description;
            instance.querySelector('.provider-link').href = link;

            var logoElement = instance.querySelector('img.provider-image');
            logoElement.src = 'public/images/partners/' + image;
            logoElement.alt = name;

            if (devices && devices.length > 0) {
                var list = instance.querySelector('ul.device-list');
                (0, _common.clearChildren)(list);
                devices.map(function (_ref) {
                    var name = _ref.name,
                        icon = _ref.icon;
                    return newListItem(name, icon);
                }).forEach(function (x) {
                    return list.appendChild(x);
                });
            }

            if (prerequisites && prerequisites.length > 0) {
                var _list = instance.querySelector('ul.prerequisite-list');
                (0, _common.clearChildren)(_list);
                prerequisites.map(function (_ref2) {
                    var name = _ref2.name,
                        icon = _ref2.icon;
                    return newListItem(name, icon);
                }).forEach(function (x) {
                    return _list.appendChild(x);
                });
            }

            if (datatypes && datatypes.length > 0) {
                /*const list = instance.querySelector('ul.collected-data')
                datatypes.map(({name, timestep}) => newDataTypeItem(name, timestep)).forEach(x => list.appendChild(x));*/

                var listTable = instance.querySelector('table.collected-data-table');
                datatypes.map(function (_ref3) {
                    var name = _ref3.name,
                        device = _ref3.device,
                        timestep = _ref3.timestep;
                    return newDataTypeItemTable(name, device, timestep);
                }).forEach(function (x) {
                    return listTable.appendChild(x);
                });
            }

            if (purposes && purposes.length > 0) {
                var _list2 = instance.querySelector('ul.purpose-list');
                purposes.map(function (_ref4) {
                    var id = _ref4.id,
                        name = _ref4.name;
                    return newPurposeItem(id, name);
                }).forEach(function (x) {
                    return _list2.appendChild(x);
                });
            }

            return instance;
        }
    }]);

    return ProviderComponent;
}();

exports.default = ProviderComponent;
},{"./provider.service.js":"provider\\provider.service.js","../common":"common\\index.js"}],"feature\\features.json":[function(require,module,exports) {
module.exports = {
    "features": [{
        "id": "autoconsumption",
        "name": "Autoconsommation",
        "image": "autoconsumption.png",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "id": "now-home",
        "name": "En ce moment chez moi",
        "image": "home.png",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "id": "simulateur-chauffage",
        "name": "Simulateur de chauffage",
        "image": "chart.png",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "id": "qai",
        "name": "Bilan qualité de l'air",
        "image": "air.png",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "id": "g2",
        "name": "Bilan gaz",
        "image": "radiator.png",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }]
};
},{}],"feature\\feature.service.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFeatureById = exports.getFeatureIdNames = undefined;

var _features = require('./features.json');

var getFeatureIdNames = exports.getFeatureIdNames = function getFeatureIdNames(_) {
    return _features.features.map(function (f) {
        return {
            id: f.id,
            name: f.name
        };
    });
};

var getFeatureById = exports.getFeatureById = function getFeatureById(id) {
    return _features.features.find(function (f) {
        return f.id === id;
    });
};

exports.default = {
    getFeatureIdNames: getFeatureIdNames,
    getFeatureById: getFeatureById
};
},{"./features.json":"feature\\features.json"}],"feature\\feature.component.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _feature2 = require('./feature.service');

var _feature3 = _interopRequireDefault(_feature2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FeatureComponent = function () {
    function FeatureComponent(featureId) {
        _classCallCheck(this, FeatureComponent);

        this.feature = _feature3.default.getFeatureById(featureId);
    }

    _createClass(FeatureComponent, [{
        key: 'createElement',
        value: function createElement() {
            var template = document.getElementById('feature-template');
            var instance = template.content.cloneNode(true);

            var _feature = this.feature,
                id = _feature.id,
                name = _feature.name,
                description = _feature.description,
                image = _feature.image;


            instance.querySelector('.feature-name').textContent = name;
            instance.querySelector('.feature-name').id = id;
            instance.querySelector('.feature-description').textContent = description;

            var logoElement = instance.querySelector('img.feature-image');
            logoElement.src = 'public/images/features/' + image;
            logoElement.alt = name;
            return instance;
        }
    }]);

    return FeatureComponent;
}();

exports.default = FeatureComponent;
},{"./feature.service":"feature\\feature.service.js"}],"index.js":[function(require,module,exports) {
'use strict';

var _provider = require('./provider/provider.service');

var _provider2 = _interopRequireDefault(_provider);

var _providerComponent = require('./provider/provider.component.js');

var _providerComponent2 = _interopRequireDefault(_providerComponent);

var _feature = require('./feature/feature.service');

var _feature2 = _interopRequireDefault(_feature);

var _featureComponent = require('./feature/feature.component.js');

var _featureComponent2 = _interopRequireDefault(_featureComponent);

var _common = require('./common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newMenuItem = function newMenuItem(link) {
    var menuItem = document.createElement('li');
    menuItem.appendChild(link);
    return menuItem;
};

var partnerList = document.getElementById("partners");
(0, _common.clearChildren)(partnerList);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = _provider2.default.getProviderNames()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var name = _step.value;

        var link = (0, _common.createLinkElement)({
            content: name,
            href: '#' + name,
            className: "menu-item"
        });
        partnerList.appendChild(newMenuItem(link));
        document.querySelector('main').appendChild(new _providerComponent2.default(name).createElement());
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var featureList = document.getElementById("features");
(0, _common.clearChildren)(featureList);
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = _feature2.default.getFeatureIdNames()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var feature = _step2.value;

        var link = (0, _common.createLinkElement)({
            content: feature.name,
            href: '#' + feature.id,
            className: "menu-item"
        });
        featureList.appendChild(newMenuItem(link));
        document.querySelector('main').appendChild(new _featureComponent2.default(feature.id).createElement());
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}
},{"./provider/provider.service":"provider\\provider.service.js","./provider/provider.component.js":"provider\\provider.component.js","./feature/feature.service":"feature\\feature.service.js","./feature/feature.component.js":"feature\\feature.component.js","./common":"common\\index.js"}],"..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '54086' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/equilibre-connect.b0921d78.map