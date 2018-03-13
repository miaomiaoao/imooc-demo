define(function() {
    console.log('*********');
    var util = {
        getFormatDate: function(date, type) {
            if (type === 1) {
                return '2017-10-10'
            } else {
                return '2017年6月20日'
            }
        }
    }
    return util;
});