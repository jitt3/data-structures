
function HashTable() {
  let table = [];
  
  const loseloseHashCode = (key) => {
    let hash = 0;
    for(let i = 0; i < key.length; i++ ) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }
  const djb2HashCode = (key) => {
    let hash = 5381;
    for(let i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013
  }
  this.put = (key,value) => {
      const position = djb2HashCode(key);
      console.log(position,'post')
      table[position] = value;   
      
  }
  this.remove = (key) => {
    table[djb2HashCode(key)] = undefined;
  }
  this.getAll = () => {
    return table;
  }
  this.get = (key) => {
    return table[djb2HashCode(key)];
  }

}
const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com'); 
hash.put('John', 'johnsnow@email.com'); 
hash.put('Tyrion', 'tyrion@email.com'); 
hash.put('Aaron', 'aaron@email.com'); 
hash.put('Donnie', 'donnie@email.com'); 
hash.put('Ana', 'ana@email.com'); 
hash.put('Jonathan', 'jonathan@email.com'); 
hash.put('Jamie', 'jamie@email.com'); 
hash.put('Sue', 'sue@email.com'); 
hash.put('Mindy', 'mindy@email.com'); 
hash.put('Paul', 'paul@email.com'); 
hash.put('Nathan', 'nathan@email.com'); 
console.log(hash.getAll());
console.log(hash.get('Nathan'));
