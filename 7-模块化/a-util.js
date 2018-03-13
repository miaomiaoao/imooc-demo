define(['./util.js'], function(Util) {
    var aUtil = {
        aGetFormateDate: function(date) {
            console.log('------');
            return Util.getFormatDate(date, 2);
        }
    }
    
    return aUtil;
});