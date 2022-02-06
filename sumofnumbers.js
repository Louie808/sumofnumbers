const list = [1, 2, 3, 4, 5];
const sumFor = nums => {
  let ret = 0;
  for (const num of nums) {
    ret += num;
  }
  return ret;
};
console.log(sumFor(list));

const sumWhile = nums => {
  let ret = 0;
  let i = 0;
  while (i < nums.length) {
    ret += nums[i];
    i++;
  }
  return ret;
};
console.log(sumWhile(list));

const sumRecursion = nums => {
  if (nums.length === 0) {
    return 0;
  }
  const [num, ...rest] = nums;
  return sumRecursion(rest) + num;
};
console.log(sumRecursion(list));

const sumTheSimpleWay = nums => _.reduce(nums, (v1, v2) => v1 + v2);
console.log(sumTheSimpleWay(list));
