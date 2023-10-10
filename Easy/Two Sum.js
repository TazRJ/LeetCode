/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//return indices that add to target
//one solution, no repeated numbers

//nums => array of integers => no negatives, no floats/decimals, no strings
//return => indices of the two numbers in an array
//[1,2,3,5], 8 => [3,5] or [5,3]

var twoSum = function(nums, target) {
    //loop through nums
    
    for(let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
    
    //loop through nums again
        //if two nums add to target, return [num1, num2]
    //return [...]
};

//Optimal Solution:
// Using a hash map or set(), you loop through the nums once, calculate the diff between the target and current num, and if the diff is in the set, you return the two number indices, or else you store the num and its index as a key/value pair in the set/hashmap
// var twoSum = function(nums, target) {
//     let map = new Map();
    
//     for(let i = 0; i < nums.length; i ++) {
//         if(map.has(target - nums[i])) {
//             return [map.get(target - nums[i]), i];
//         } else {
//             map.set(nums[i], i);
//         }
//     }
// 	return [];
// };
