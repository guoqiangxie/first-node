/**
 * Created with IntelliJ IDEA.
 * User: xieguoqiang
 * Date: 13-9-17
 * Time: 下午2:06
 * To change this template use File | Settings | File Templates.
 */

var fs = require('fs');

exports.read = function (req, res) {
    fs.readFile('./xgq/hello.txt',"UTF-8", function (err, data) {
        if (err) throw err
        console.log(data);
        res.send(data);
    });
    console.log('async');
}


