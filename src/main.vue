<script>
    import calendar from 'vue-multifunction-calendar';
    import calendarMixin from './mixins.js';
    export default {
        name: 'double-calendar',
        mixins: [calendarMixin],
        data() {
            return {
                startDate: new Date(this.begin),
                endDate: new Date(this.end)
            }
        },
        props: {
            begin: {
                type: String,
                default: function () {
                    var date = new Date();
                    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                }
            },
            end: {
                type: String,
                default: function () {
                    var date = new Date();
                    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                }
            },
            menus: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            className: {
                type: String,
                default: 'double-calendar'
            },
            isShow: {
                type: Boolean,
                default: true
            }
        },
        components: {
            calendar
        },
        methods: {
            startDateChange: function (params) {
                this.change({
                    start: this.formatDate(new Date(params)),
                    end: this.formatDate(this.endDate)
                });
            },
            endDateChange: function (params) {
                this.change({
                    start: this.formatDate(this.startDate),
                    end: this.formatDate(new Date(params))
                });
            },
            confirm: function () {
                if (this.startDate > this.endDate) {
                    var start = new Date(this.startDate);
                    var end = new Date(this.endDate);
                    this.startDate = end;
                    this.endDate = start;
                }
                this.$emit('confirm', {
                    start: this.formatDate(this.startDate),
                    end: this.formatDate(this.endDate)
                });
            },
            cancel: function () {
                this.$emit('cancel', {
                    start: this.formatDate(this.startDate),
                    end: this.formatDate(this.endDate)
                });
            },
            menuHandler: function (name) {
                this.$emit('menuChange', name);
            },
            change: (function (type) {
                var _type = type;
                return function () {
                    var _args = arguments[0];
                    this.$emit(_type, _args);
                }
            }).call(this,'change')
        },
        watch: {
            begin: function (value) {
                this.startDate = new Date(value);
            },
            end: function (value) {
                this.endDate = new Date(value);
            }
        }
    }
</script>

<template>
    <div
        :class="className + ' double-calendar-container'"
        v-show="isShow"
        >
        <ul
            class="double-calendar-menus"
            v-if="menus.length"
            >
            <li
                :class="'double-calendar-menus-' + index"
                v-for="(menu, index) in menus"
                v-text="menu"
                @click="menuHandler(menu)"
                :key="index"
                >
            </li>
        </ul>
        <calendar
            className="date-start"
            calendarTitle="开始日期"
            key="start"
            :date="startDate"
            @change="startDateChange"
            >
        </calendar>
        <calendar
            className="date-end"
            calendarTitle="结束日期"
            key="end"
            :date="endDate"
            @change="endDateChange"
            >
        </calendar>
        <div class="double-calendar-footer">
            <span class="double-calendar-footer-confirm" @click="confirm">确定</span>
            <span class="double-calendar-footer-cancel" @click="cancel">取消</span>
        </div>
    </div>
</template>

<style>
ul,ol {
    list-style: none;
}
.double-calendar-container {
    width: 380px;
    padding: 10px 20px 0;
    font-size: 0;
    box-shadow: 0 0 1px 2px #eee;
    background-color: #fff;
    transition: all 0.3s ease;
}
.double-calendar-menus {
    width: 100%;
    height: 40px;
    text-align: left;
    line-height: 40px;
}
.double-calendar-menus li {
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
    transition: color 0.3s ease;
}
.double-calendar-menus li:hover {
    color: #da3e3d;
}
.double-calendar-container .date-start {
    display: inline-block;
    margin-right: 2%;
    width: 49%;
}
.double-calendar-container .date-end {
    display: inline-block;
    width: 49%;
}

/* 确定/取消 */
.double-calendar-footer {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: right;
}
.double-calendar-footer span {
    padding: 4px 10px;
    font-size: 12px;
    border-radius: 4px;
    color: #fff;
    background: #da3e3d;
    cursor: pointer;
}
.double-calendar-footer .double-calendar-footer-confirm {
    margin-right: 10px;
}
</style>
