(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"360":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o,n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=function get(e,t,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,r)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(r):void 0},p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=_interopRequireDefault(r(0)),c=_interopRequireDefault(r(6)),u=r(92),l=r(93);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(576);var d=(0,l.connect)(function(e){var t=e.order;return p({},t)})(o=function(e){function Order(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Order);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Order.__proto__||Object.getPrototypeOf(Order)).apply(this,arguments));return e.config={"navigationBarTitleText":"订单"},e.componentWillMount=function(){e.setState({"activeTypeIndex":e.$router.params.type})},e.toggleActiveType=function(t){e.setState({"activeTypeIndex":t.currentTarget.dataset.type})},e.state={"orderType":[{"type":0,"name":"待支付"},{"type":1,"name":"待发货"},{"type":2,"name":"已发货"},{"type":3,"name":"待归还"},{"type":4,"name":"全部订单"}],"activeTypeIndex":0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Order,c.default.Component),n(Order,[{"key":"render","value":function render(){var e=this,t=this.state,r=t.orderType,o=t.activeTypeIndex;return a.default.createElement(u.View,{"className":"order-page"},a.default.createElement(u.View,{"className":"toggleType"},r.map(function(t,r){return a.default.createElement(u.View,{"key":r,"className":o==r?"active item":"item","data-type":t.type,"onClick":e.toggleActiveType},t.name)})),a.default.createElement(u.View,{"className":"empty"}))}},{"key":"componentDidMount","value":function componentDidMount(){i(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidMount",this)&&i(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){i(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidShow",this)&&i(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){i(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidHide",this)&&i(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidHide",this).call(this)}}]),Order}())||o;t.default=d},"576":function(e,t,r){}}]);