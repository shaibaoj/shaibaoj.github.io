(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"356":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r,n=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),a=function get(e,t,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},p=_interopRequireDefault(o(0)),c=_interopRequireDefault(o(6)),u=o(94),l=o(383),s=o(93);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}o(564);var y=(0,u.connect)(function(e){var t=e.category;return i({},t)})(r=function(e){function Category(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Category);for(var r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=o=_possibleConstructorReturn(this,(e=Category.__proto__||Object.getPrototypeOf(Category)).call.apply(e,[this].concat(n))),o.config={"navigationBarTitleText":"分类","navigationBarBackgroundColor":"#df1e1a","navigationBarTextStyle":"white"},o.componentDidMount=function(){o.props.dispatch({"type":"category/nav"}),o.props.dispatch({"type":"category/children"})},o.gotoPanel=function(e){var t=e.currentTarget.dataset.id;o.props.dispatch({"type":"category/save","payload":{"cid":t}}),o.props.dispatch({"type":"category/children"})},_possibleConstructorReturn(o,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Category,c.default.Component),n(Category,[{"key":"onShareAppMessage","value":function onShareAppMessage(){return{"title":"多逛逛","path":"/pages/category/index","imageUrl":"http://storage.360buyimg.com/mtd/home/share1535013100318.jpg"}}},{"key":"onChooseMenu","value":function onChooseMenu(e,t){console.log(e,t),console.log(t),c.default.navigateTo({"url":"/pages/search/index?q="+e.value})}},{"key":"render","value":function render(){var e=this,t=this.props,o=t.menus,r=t.cid,n=t.icons;t.effects;return p.default.createElement(s.View,{"className":"page page-index"},p.default.createElement(s.View,{"className":"nav"},o.map(function(t,o){return p.default.createElement(s.View,{"className":t.id==r?"active item":"item","key":o,"data-id":t.id,"onClick":e.gotoPanel},t.title)})),p.default.createElement(s.View,{"className":"main"},p.default.createElement(s.View,{"className":"icon-list"},p.default.createElement(l.AtGrid,{"mode":"square","data":n,"hasBorder":!1,"columnNum":"3","onClick":this.onChooseMenu}))))}},{"key":"componentDidMount","value":function componentDidMount(){a(Category.prototype.__proto__||Object.getPrototypeOf(Category.prototype),"componentDidMount",this)&&a(Category.prototype.__proto__||Object.getPrototypeOf(Category.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){a(Category.prototype.__proto__||Object.getPrototypeOf(Category.prototype),"componentDidShow",this)&&a(Category.prototype.__proto__||Object.getPrototypeOf(Category.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){a(Category.prototype.__proto__||Object.getPrototypeOf(Category.prototype),"componentDidHide",this)&&a(Category.prototype.__proto__||Object.getPrototypeOf(Category.prototype),"componentDidHide",this).call(this)}}]),Category}())||r;t.default=y},"564":function(e,t,o){}}]);