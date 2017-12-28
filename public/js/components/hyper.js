webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _TopImage = __webpack_require__(16);

var _TopImage2 = _interopRequireDefault(_TopImage);

var _OurStory = __webpack_require__(14);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(15);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "div",
    { "class": 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImage2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        (0, _hyperapp.h)(
          "h1",
          null,
          "Prime Beef"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "nav-menu" },
        (0, _hyperapp.h)(
          "nav",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Home"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Special Menu"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Review"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Our News"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Contact Us"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "OUR STORY"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Hammock shabby chic distillery schlitz, blog venmo retro brooklyn tousled gochujang air plant food truck. Kombucha hammock post-ironic selfies yuccie, keytar beard lomo."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "- Warrick Dunn"
            ),
            ", Master Chef at Prime Steak"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "RESERVE"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "SPECIAL MENU"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavors Of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                {
                  "class": "price" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "dish" },
              "Super BBQ Grill No Smoke"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "ingredients" },
              " Steak, Fried Eggs, Baked Potatoes, Vegetable Medley"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                {
                  "class": "price" },
                "$42"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "dish" },
              "Queen Of Autumn"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "ingredients" },
              "Warm Chicken Wings, Portabello Mushrooms, Fresh Mozzarella"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                {
                  "class": "price" },
                "$30"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "dish" },
              "Royal Liver Fried"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "ingredients" },
              "Grilled Beef Steak, Roasted Red Potatoes and Bell Peppers with Rosemary, Mushrooms, Famous Sauce, Tomatoes"
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "view-menu" },
        (0, _hyperapp.h)(
          "strong",
          null,
          "View Full Menu"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImage;

var _hyperapp = __webpack_require__(0);

function TopImage(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImage" },
    (0, _hyperapp.h)(
      "div",
      { "class": "overlay" },
      (0, _hyperapp.h)(
        "div",
        { "class": "container" },
        (0, _hyperapp.h)(
          "div",
          { "class": "title" },
          (0, _hyperapp.h)(
            "div",
            { "class": "motto" },
            (0, _hyperapp.h)(
              "h5",
              null,
              "Welcome"
            ),
            (0, _hyperapp.h)(
              "h1",
              null,
              "Prime Beef Steak"
            ),
            (0, _hyperapp.h)(
              "h1",
              null,
              "Restaurant"
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "details" },
            (0, _hyperapp.h)(
              "div",
              { "class": "contact-info" },
              (0, _hyperapp.h)(
                "h6",
                null,
                "Book Table Directly:"
              ),
              (0, _hyperapp.h)(
                "h3",
                null,
                "(919) 555-8004"
              ),
              (0, _hyperapp.h)(
                "h6",
                null,
                "Opening Hours | ",
                (0, _hyperapp.h)(
                  "strong",
                  null,
                  "Monday-Friday: "
                ),
                " 11:30am-9:30pm / ",
                (0, _hyperapp.h)(
                  "strong",
                  null,
                  "Weekend: "
                ),
                " 11am - 11pm"
              )
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[17]);