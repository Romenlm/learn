//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
//
//
//
// 示例:
//
// 给定 nums = [2, 7, 11, 15], target = 9
//
//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回 [0, 1]
//
// Related Topics 数组 哈希表
// 👍 9410 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // 方法一
    /*for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            }
        }
    }*/

    // 方法二
    /*let temp = []
    for(let i = 0 ; i<nums.length;i++){
        let dif = target-nums[i]
        if(temp[dif] !== undefined){
            return [temp[dif],i]
        }
        temp[nums[i]] = i
    }*/

    // 方法三
    let map = new Map()
    for(let i = 0 ; i<nums.length;i++){
        let dif = target-nums[i]
        if(map.has(dif) !== undefined){
            return [map.get(dif),i]
        }
        map.set(nums[i],i)
    }

};

let nums = [2, 7, 11, 15],target = 9
console.log(twoSum(nums,target))
//leetcode submit region end(Prohibit modification and deletion)
