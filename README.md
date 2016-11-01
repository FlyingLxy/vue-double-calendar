# vue-double-calendar
git: github.com/FlyingLxy/vue-double-calendar
> A Vue.js component

### install
> npm install vue-double-calendar --save

### option
- **begin** String: Start Date. Default: new Date()
- **end** String: End Date. Default: new Date()
- **isShow** Boolean: Show Trigger. Default: true
- **className** String: Container class. Default: 'double-calendar-container'
- **menus** Array: Custom menus button. Format for: ['Today','The Month']
- **menuHandler** CallBack: Click menus callBack. **Param**: String. The current name click on the menu
- **change** CallBack: Date change callBack. **Param**: Object. 'start' Start date.  and 'end' End date
- **confirm** CallBack:  Confirm button callBack. **Param**: Object. 'start' Start date.  and 'end' End date
- **cancel** CallBack: Cancel button callBack. **Param**: Object. 'start' Start date.  and 'end' End date


### example
```javascript
// xx.vue
// script
<script>
import DoubleCalendar  from 'vue-double-calendar';

//util.js
formatDate: function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    m.length === 1 && m = '0' + m;
    d.length === 1 && d = '0' + d;
    return `${y}-${m}-{d}`
}
export default {
  data() {
    var date = new Date();
    var end = date.getTime() + 60 * 60 * 24 * 7 * 1000
    return {
        begin: formatDate(date),
        end: formatDate(new Date(end)),
        menus: ['Today', 'Month', 'Quarter'],
        isShow: true
    }
  },
  components: {
      DoubleCalendar
  },
  methods: {
      dateHandler: function (obj) {
          // obj.start  '2016-06-20'
          this.begin = obj.start;
          // obj.end	'2016-7-29'
          this.end = obj.end;
          //...code
      },
      menuhandler: function (name) {
	  if (name === 'today') {
              var date = new Date()
              this.begin = formatDate(date);
              this.end = formatDate(date);
	  }
          //...code
      },
      confirm: function (obj) {
          //obj { start: 'xxxx-xx-xx', end: 'xxxx-xx-xx'}
          this.isShow = false;
          //...code
      },
      cancel: function (obj) {
         //obj { start: 'xxxx-xx-xx', end: 'xxxx-xx-xx'}
         this.isShow = false;
         //...code
      }
  }
}
</script>

// template
<template>
    <double-calendar
    	className="myCalendar"
        :begin="begin"
        :end="end"
        :menus="menus"
        :isShow="isShow"
        @change="dateHandler"
        @menuHandler="menuHandler"
        @confirm="confirmHandler"
        @cancel="cancelHandler"
        >
    <double-calendar>
</template>
```
