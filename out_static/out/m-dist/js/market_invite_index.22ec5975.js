(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"375":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n,r=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),a=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(o):void 0},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=_interopRequireDefault(o(0)),p=o(6),u=_interopRequireDefault(p),l=o(93),s=o(383),h=o(94);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}o(603);var f=(0,h.connect)(function(e){var t=e.home,o=e.cart,n=e.loading;return i({},t,o,n)})(n=function(e){function Search(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Search);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=o=_possibleConstructorReturn(this,(e=Search.__proto__||Object.getPrototypeOf(Search)).call.apply(e,[this].concat(r))),o.config={"navigationBarTitleText":"搜索"},o.componentDidMount=function(){},_possibleConstructorReturn(o,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Search,u.default.Component),r(Search,[{"key":"onShareAppMessage","value":function onShareAppMessage(){return{"title":"基于Taro框架开发的时装衣橱","path":"/pages/home/index"}}},{"key":"onReachBottom","value":function onReachBottom(){this.props.dispatch({"type":"home/save","payload":{"ipage":this.props.ipage+1}}),this.props.dispatch({"type":"home/product"})}},{"key":"onChooseMenu","value":function onChooseMenu(e,t){console.log(t)}},{"key":"onChange","value":function onChange(e){this.setState({"value":e})}},{"key":"onActionClick","value":function onActionClick(){console.log("开始搜索")}},{"key":"render","value":function render(){var e=this.props,t=(e.banner,e.icons,e.brands);e.products_list,e.effects;return c.default.createElement(l.View,{"className":"home-page"},c.default.createElement(l.View,{"className":"nav"},c.default.createElement(s.AtSearchBar,{"actionName":"搜一下","value":this.state.value,"onChange":this.onChange.bind(this),"onActionClick":this.onActionClick.bind(this)})),c.default.createElement(l.View,null,"热门搜索"),c.default.createElement(l.View,{"className":"nav-list"},t.map(function(e,t){return c.default.createElement(l.View,{"className":"nav-item","key":t},c.default.createElement(l.Image,{"mode":"widthFix","src":e.image_url}))})))}},{"key":"componentDidMount","value":function componentDidMount(){a(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidMount",this)&&a(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){a(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidShow",this)&&a(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidShow",this).call(this),this._offReachBottom=(0,p.onReachBottom)({"callback":this.onReachBottom,"ctx":this,"onReachBottomDistance":void 0})}},{"key":"componentDidHide","value":function componentDidHide(){a(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidHide",this)&&a(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidHide",this).call(this),this._offReachBottom&&this._offReachBottom()}}]),Search}())||n;t.default=f},"603":function(e,t,o){}}]);