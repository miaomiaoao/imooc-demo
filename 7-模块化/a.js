define(['./a-util.js'],function(aUtil) {
    var a = {
        printDate: function(date) {
            console.log('----');
            console.log(aUtil.aGetFormateDate(date));
        }
    }
    return a;
});