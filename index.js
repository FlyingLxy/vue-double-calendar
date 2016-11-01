/**
* @file  double-calendar 双日历组件
* @param { begin } String - 开始日期. 默认为：当前时间
* @param { end } String - 结束日期. 默认为: 当前时间
* @param { menus } Array - 自定义按钮组. 如：['今日','本月']
* @param { className } String - 自定义类名.
* @param { isShow } Boolean - 显示开关. 默认为: true
* @param { menuHandler }  CallBack - menus点击回调. 参数: String 当前点击menu名称
* @param { change } CallBack - 日期变化后回调. 参数：Object.start(开始日期) / Object.end(结束日期)
* @param { confirm } CalBack - 确定按钮回调. 参数：Object.start(开始日期) / Object.end(结束日期)
* @param { cancel } CallBack - 取消按钮回调. 参数: Object.start(开始日期) / Object.end(结束日期)
* @author XiaoYu.Lang Email: webdeveloperfox@gmail.com
*/
const DoubleCalendar = require('./src/main.vue');

DoubleCalendar.install = function (Vue) {
  Vue.component(DoubleCalendar.name, DoubleCalendar);
};

module.exports = DoubleCalendar;
