const insertItemInList =(list,item)=>{
    if (list.indexOf(item) === -1) {
        list.push(item);
      }
  
      return list;
};
const removeItemInList =(list,item)=>{
    if (list.indexOf(item) === -1) {
        list.remove(item);
      }
  
      return list;

};
module.exports = {
    insertItemInList,
    removeItemInList
};