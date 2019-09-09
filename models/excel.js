const csv = require('csvtojson');
const fs = require('fs');

class XuejiData {
  static getDataById(fpath, id, cb){
    fs.exists(fpath, (e) => {
      if (e) {
        csv()
        .fromFile(fpath)
        .then((jsonObj) => {
          let ret = jsonObj.filter(w => w.身份证件号 === id);
          if (ret.length === 0) {
            cb({result: 'fail', msg: '找不到此身份证号对应的信息，请确认后再次查询！'});
          } else {
            cb({result: 'ok', data: ret[0]});
          }
        });
      } else {
        cb({result: 'fail', msg: '该班级对应的文件不存在！'});
      }
    })
  }
}

module.exports = XuejiData;
