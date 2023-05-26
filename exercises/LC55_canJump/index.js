// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

function canJump(nums) {
    let dpPositions = new Array(nums.length).fill(false);
    dpPositions[0] = true;
    for(let j = 1; j < nums.length; j++) {
        for(let i = 0; i < j; i++) {
           if(dpPositions[i] && i + nums[i] >= j) {
                dpPositions[j] = true;
                break;
           }
        }
    }
    return dpPositions.pop()
}

module.exports = canJump;

/*
Initial values:
nums = [2, 3, 1, 1, 4]
dpPositions = [true, false, false, false, false]

Iteration 1:
j = 1, i = 0
dpPositions[i] && i + nums[i] >= j is true (dpPositions[0] is true and 0 + 2 >= 1)
dpPositions[1] is set to true

Iteration 2:
j = 2, i = 0
dpPositions[i] && i + nums[i] >= j is false (dpPositions[0] is true but 0 + 2 < 2)
i = 1
dpPositions[i] && i + nums[i] >= j is false (dpPositions[1] is false)
dpPositions[2] remains false

Iteration 3:
j = 3, i = 0
dpPositions[i] && i + nums[i] >= j is false (dpPositions[0] is true but 0 + 2 < 3)
i = 1
dpPositions[i] && i + nums[i] >= j is true (dpPositions[1] is true and 1 + 3 >= 3)
dpPositions[3] is set to true

Iteration 4:
j = 4, i = 0
dpPositions[i] && i + nums[i] >= j is false (dpPositions[0] is true but 0 + 2 < 4)
i = 1
dpPositions[i] && i + nums[i] >= j is true (dpPositions[1] is true and 1 + 3 >= 4)
dpPositions[4] is set to true

Final value of dpPositions: [true, false, true, true, true]
Last element of dpPositions is true, so the function returns true. */

/*
Initial values:
nums = [3, 2, 1, 0, 4]
dpPositions = [true, false, false, false, false]

Iteration 1:
j = 1, i = 0
dpPositions[i] && i + nums[i] >= j is true (dpPositions[0] is true and 0 + 3 >= 1)
dpPositions[1] is set to true

Iteration 2:
j = 2, i = 0
dpPositions[i] && i + nums[i] >= j is true (dpPositions[0] is true and 0 + 3 >= 2)
dpPositions[2] is set to true

Iteration 3:
j = 3, i = 0
dpPositions[i] && i + nums[i] >= j is true (dpPositions[0] is true and 0 + 3 >= 3)
dpPositions[3] is set to true

Iteration 4:
j = 4, i = 0
dpPositions[i] && i + nums[i] >= j is false (dpPositions[0] is true but 0 + 3 < 4)
i = 1
dpPositions[i] && i + nums[i] >= j is false (dpPositions
*/
