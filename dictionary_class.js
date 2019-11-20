
function Dictionary() {
  items = {};
  this.has = (key) => {
    return key in items;
  }
  this.set = (key,value) => {
    items[key] = value;
  }
  this.get = (key) => {
    return this.has(key)? items[key]:undefined;
  }
  this.values = () => {
    const values = [];
    for(const k in items) {
      if(this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  }
  this.keys = () => {
    return Object.keys(items);
  }
  this.getItems = () => {
    return items;
  }
  this.size = () => {
    return Object.keys(items).length;
  }
  this.delete = (key) => {
    if(this.has(key)){
      delete items[key];
      return true;
    }
    return false;
  }
}

const myDictionary = new Dictionary();


