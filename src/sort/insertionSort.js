
class InsertionSort {
    #privateField = 42;

  constructor(list) {
    this.list = list;
  }

  sort() {
    var sorted_list = []
    for (let i of this.list){
        this.insert(sorted_list, i);
    }
    this.list = sorted_list;
    // this.list.sort();
  }

  insert(list, element) {
    for (let i = 0; i < list.length; i++) {
        if (element < list[i]) {
            list.splice(i, 0, element);
            return;
        }
    }
    list.splice(list.length, 0, element);
  }
}

module.exports = InsertionSort;