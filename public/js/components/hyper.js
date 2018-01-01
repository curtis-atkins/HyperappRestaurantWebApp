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

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _TopImage = __webpack_require__(20);

var _TopImage2 = _interopRequireDefault(_TopImage);

var _OurStory = __webpack_require__(16);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(19);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(17);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(18);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(13);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

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
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
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
var companyInfo = {
  title: "PRIME BEEF STEAK",
  phone: "919 - 555 - 8004",
  region: "Durham, North Carolina",
  address1: "110 Parrish Street",
  address2: "Durham, NC 27701",
  email: "info@primebeefsteak.com"
};

var specialMenuData = [{
  title: "Super BBQ Grill No Smoke",
  ingredients: "Steak, Fried Eggs, Baked Potatoes, Vegetable Medley",
  price: "$25"
}, {
  title: "Queen Of Autumn",
  ingredients: "Warm Chicken Wings, Portabello Mushrooms, Fresh Mozzarella",
  price: "$42"
}, {
  title: "Royal Liver Fried",
  ingredients: "Grilled Beef Steak, Roasted Red Potatoes and Bell Peppers with Rosemary, Mushrooms, Famous Sauce, Tomatoes",
  price: "$30"
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "CONTACT US"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delivering Delicious Dining Daily"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.region
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "address" },
              state.companyInfo.address1,
              " ",
              (0, _hyperapp.h)("br", null),
              state.companyInfo.address2
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "email" },
              (0, _hyperapp.h)(
                "strong",
                null,
                "Email"
              ),
              ":",
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@primebeefsteak.com" },
                " ",
                state.companyInfo.email
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.phone
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Monday - Thursday:  11:30am - 4:30pm"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday - Sunday:  11am - 4:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Monday -Thursday: 4:30pm - 9:30pm"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday - Sunday:  4:30pm - 11pm"
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    { id: "Footer" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "footer-menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Home"
        ),
        (0, _hyperapp.h)(
          "p",
          null,
          "|"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story  "
        ),
        (0, _hyperapp.h)(
          "p",
          null,
          "|"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "p",
          null,
          "|"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Review"
        ),
        (0, _hyperapp.h)(
          "p",
          null,
          "|"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "p",
          null,
          "|"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://twitter.com/", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-twitter", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.facebook.com/", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-facebook", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://plus.google.com/discover", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-google-plus", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.instagram.com/", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-instagram", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.snapchat.com/", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-snapchat", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.youtube.com/", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-youtube", "aria-hidden": "true" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        (0, _hyperapp.h)("i", { "class": "fa fa-copyright", "aria-hidden": "true" }),
        "Design by Curtis Atkins",
        (0, _hyperapp.h)("br", null),
        "2018 All Rights Reserved"
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
            "Reservations"
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "RandomQuote" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "A well cooked steak is LOVE made visible"
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        "- Tiffany Derry, Co-Host on Spike's Hungry Investors"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)("img", { "class": "chef-img", src: "/img/chef-roble2.jpg" })
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "REVIEWS"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            " The Food's Masters Say About Us"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "\"Best restaurant that I used to experience!\""
            )
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
              "- Chef Robl\xE9 Ali"
            ),
            ",",
            (0, _hyperapp.h)("br", null),
            "Executive Chef at Robl\xE9 & Co., Streets, and regular contributor on ABC's \"The Chew\""
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { "class": "fa fa-arrow-left", "aria-hidden": "true" }),
            (0, _hyperapp.h)("i", { "class": "fa fa-arrow-right ready", "aria-hidden": "true" })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 19 */
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


  var loopSpecialMenu = function loopSpecialMenu() {
    return state.specialMenuData.map(function (item) {
      console.log(item.title);
      return (0, _hyperapp.h)(
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
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "dish" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "ingredients" },
            " ",
            item.ingredients
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu", "class": "textureBG" },
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
        loopSpecialMenu()
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
/* 20 */
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
              state.companyInfo.title
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
                "div",
                { "class": "container" },
                (0, _hyperapp.h)(
                  "h6",
                  null,
                  "Book Table Directly:"
                ),
                (0, _hyperapp.h)(
                  "h3",
                  null,
                  state.companyInfo.phone
                ),
                (0, _hyperapp.h)(
                  "h6",
                  null,
                  "Opening Hours | ",
                  (0, _hyperapp.h)(
                    "strong",
                    null,
                    "Monday-Thursday: "
                  ),
                  " 11:30am-9:30pm || ",
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
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 21 */
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
  state: _globalState.globalState,
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
],[21]);