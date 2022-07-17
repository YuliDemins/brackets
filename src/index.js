module.exports = function check(str, bracketsConfig) {

  let res = [];

  let resNo = []
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '[',
    '2': '1',
    '4': '3',
    '6': '5',
  }

let arr = str.split('');
const Close = (value) => Object.keys(brackets).indexOf(value) >= 0;
const bracket = (value) => {
  return (Object.keys(brackets).includes(value))||(Object.values(brackets).includes(value))
}

for (let i = 0; i < arr.length; i++) {
  
  if (!bracket(arr[i])) {
    if (resNo[resNo.length - 1] === arr[i]) {
      resNo.pop()
      res.pop()
    }
    else {
      resNo.push(arr[i])
      res.push(arr[i])
    }    
 }

  else {
    if (Close(arr[i])) {
      if (brackets[arr[i]] !== res.pop()) return false;
    } else {
      res.push(arr[i])
    }
  }
}

return res.length == 0 && resNo.length == 0

}
