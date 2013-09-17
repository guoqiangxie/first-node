/**
 * Created with IntelliJ IDEA.
 * User: xieguoqiang
 * Date: 13-9-17
 * Time: 下午1:42
 * To change this template use File | Settings | File Templates.
 */

exports.sayHello = function(req, res){
    res.send("hello, my first nodeJs.");
};

exports.firstPage = function(req, res){
    res.render('xgq/first', { title: 'First Node', words: 'welcome to nodeJs world.' });
};