const properties = [{ a: "x" }, { b: "y" }, { c: "z" }];

function check(data) {
  let updatedObj = {};
  properties.forEach(obj => {
    Object.assign(updatedObj, obj);
  });
  return updatedObj;
}

console.log('problem 1 ->',check(properties));

const array = [
  {
    value: "one",
    children: [
      {
        value: "two",
        children: []
      }
    ]
  },
  {
    value: "three",
    children: []
  }
];

function flatten(data) {
  let output = [];
  function recurse(array) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      let obj = {};
      if (element.children.length == 0) {
        obj.value = element.value;
        output.push(obj);
        return;
      } else {
        obj.value = element.value;
        output.push(obj);
        recurse(element.children);
      }
    }
  }
  recurse(data);
  return output;
}

console.log('problem 2 ->',flatten(array));

function longestConsecutive(num) {
  if (num.length == 0) {
    return 0;
  }

  var set = [];
  var max = 1;

  for (var i = 0; i < num.length; i++) set.push(num[i]);

  for (var i = 0; i < num.length; i++) {
    var left = num[i] - 1;
    var right = num[i] + 1;
    var count = 1;

    while (set.indexOf(left) != -1) {
      count++;
      set.splice(set.indexOf(left), 1);
      left--;
    }

    while (set.indexOf(right) != -1) {
      count++;
      set.splice(set.indexOf(right), 1);
      right++;
    }

    max = Math.max(count, max);
  }

  return max;
}

console.log('problem 3 ->',longestConsecutive([100, 4, 500, 1, 3, 2]));
