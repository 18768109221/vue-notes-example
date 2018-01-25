const db = new loki('notes', {
  autoload: true,
  autoloadCallback: databaseInitialize,  //自动载入回调
  autosave: true,
  autosaveInterval: 3000        //自动保存的间隔
})

function databaseInitialize() {
  const notes = db.getCollection('notes')   //获取到notes集合
  if(notes === null) {
    db.addCollection('notes')      //如果集合不存在就添加一个
  }
}


//返回数据里的 集合
function loadCollection(collection) {
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      //获取这个集合，如果不存就添加这个集合
      const _collection = db.getCollection(collection) || db.addCollection(collection)
      resolve(_collection)
    })
  })
}
