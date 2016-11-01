const DoubleCalendar = require('./src/main.vue');

DoubleCalendar.install = function (Vue) {
  Vue.component(DoubleCalendar.name, DoubleCalendar);
};

module.exports = DoubleCalendar;
