(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"357":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r,a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),n=function get(e,t,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,o)}if("value"in r)return r.value;var n=r.get;return void 0!==n?n.call(o):void 0},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},c=_interopRequireDefault(o(0)),s=o(6),l=_interopRequireDefault(s),u=o(93),p=o(384),f=o(94),d=_interopRequireDefault(o(405));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}o(566);var h=(0,f.connect)(function(e){var t=e.search,o=e.cart,r=e.loading;return i({},t,o,r)})(r=function(e){function Search(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Search);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Search.__proto__||Object.getPrototypeOf(Search)).call(this,e));return t.config={"navigationBarTitleText":"搜索"},t.componentDidMount=function(){t.$router.params&&t.$router.params.q&&(console.log(t.$router.params.q),t.props.dispatch({"type":"search/save","payload":{"query":1,"ipage":1,"q":t.$router.params.q}}),console.log(t.state.value),t.props.dispatch({"type":"search/product","query":{"q":t.state.value}}))},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Search,l.default.Component),a(Search,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"onShareAppMessage","value":function onShareAppMessage(){return{"title":"多逛逛","path":"/pages/search/index"}}},{"key":"onReachBottom","value":function onReachBottom(){1==this.props.query&&(this.props.dispatch({"type":"search/save","payload":{"ipage":this.props.ipage+1}}),this.props.dispatch({"type":"search/product"}))}},{"key":"onChange","value":function onChange(e){this.props.dispatch({"type":"search/save","payload":{"q":e}})}},{"key":"onActionClick","value":function onActionClick(){var e=this.props.q;e&&""!=e?(this.props.dispatch({"type":"search/save","payload":{"query":1,"ipage":1}}),this.props.dispatch({"type":"search/product"})):this.props.dispatch({"type":"search/save","payload":{"query":0}})}},{"key":"render","value":function render(){var e=this.props,t=e.q,o=(e.banner,e.icons,e.brands),r=e.products_list,a=e.query,n=e.effects;return c.default.createElement(u.View,{"className":"seach-page"},c.default.createElement(u.View,{"className":"nav"},c.default.createElement(p.AtSearchBar,{"fixed":!0,"actionName":"搜一下","value":t,"onChange":this.onChange.bind(this),"onActionClick":this.onActionClick.bind(this)})),0==a&&c.default.createElement(u.View,{"className":"query"},c.default.createElement(u.View,null,"热门搜索"),c.default.createElement(u.View,{"className":"nav-list"},o.map(function(e,t){return c.default.createElement(u.View,{"className":"nav-item","key":t},c.default.createElement(u.Image,{"mode":"widthFix","src":e.image_url}))}))),1==a&&c.default.createElement(u.View,{"className":"query"},c.default.createElement(d.default,{"list":r,"loading":n["search/product"]})))}},{"key":"componentDidMount","value":function componentDidMount(){n(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidMount",this)&&n(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){n(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidShow",this)&&n(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidShow",this).call(this),this._offReachBottom=(0,s.onReachBottom)({"callback":this.onReachBottom,"ctx":this,"onReachBottomDistance":void 0})}},{"key":"componentDidHide","value":function componentDidHide(){n(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidHide",this)&&n(Search.prototype.__proto__||Object.getPrototypeOf(Search.prototype),"componentDidHide",this).call(this),this._offReachBottom&&this._offReachBottom()}}]),Search}())||r;t.default=h},"405":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),a=_interopRequireDefault(o(0)),n=_interopRequireDefault(o(6)),i=o(93),c=_interopRequireDefault(o(377));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}o(406);var s=function(e){function GoodsList(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GoodsList);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=o=_possibleConstructorReturn(this,(e=GoodsList.__proto__||Object.getPrototypeOf(GoodsList)).call.apply(e,[this].concat(a))),o.gotoDetail=function(e){n.default.navigateTo({"url":"/pages/detail/index?id="+e.currentTarget.dataset.id})},_possibleConstructorReturn(o,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GoodsList,n.default.Component),r(GoodsList,[{"key":"render","value":function render(){var e=this,t=this.props,o=t.list,r=t.loading;return a.default.createElement(i.View,{"className":"goods-list-container"},o&&o.length>0?a.default.createElement(i.View,{"className":"goods-ul"},o.map(function(t,o){return a.default.createElement(i.View,{"key":o,"className":"goods-li","data-id":t.num_iid,"onClick":e.gotoDetail},a.default.createElement(i.View,{"className":"pos"},a.default.createElement(i.View,{"className":"Image-container"},a.default.createElement(i.Image,{"mode":"widthFix","src":t.pic_url?t.pic_url+"!w750":"http://static-r.msparis.com/uploads/d/1/d1ca37e902e5550ad2c82c721bc216ce.png","alt":""}))),a.default.createElement(i.Text,{"className":"title"},t.title),a.default.createElement(i.View,{"className":"goods_item"},a.default.createElement(i.View,{"className":"tag"},t.user_type_name),t.click.share_commission>0&&a.default.createElement(i.View,{"className":"fan"},"返",t.click.share_commission)),a.default.createElement(i.View,{"className":"goods_item goods_bt"},a.default.createElement(i.View,{"className":"item-r"},a.default.createElement(i.View,{"className":"price"},"¥ ",t.price),t.volume>0&&a.default.createElement(i.View,{"className":"volume"},"售",t.volume,"件")),t.coupon_money>0&&a.default.createElement(i.View,{"className":"coupon"},t.coupon_money,"元券")))})):a.default.createElement(i.View,null),r&&a.default.createElement(i.View,{"className":"loadMoreGif"},a.default.createElement(i.View,{"className":"zan-loading"}),a.default.createElement(i.View,{"className":"text"},"加载中...")))}}]),GoodsList}();s.propTypes={"list":c.default.array},s.defaultProps={"list":[]},t.default=s},"406":function(e,t,o){},"566":function(e,t,o){}}]);