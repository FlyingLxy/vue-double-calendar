export default {
    methods: {
        formatDate: function(date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            // 格式化年月日 xxxx-xx-xx
            m = m < 10 ? '0' + m : m;
            d = d < 10 ? '0' + d : d;
            return y + '-' + m + '-' + d;
        }
    }
};
