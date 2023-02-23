var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid;
    let guess;

    while (low <= high){
        mid = Math.round((low + high) / 2);
        guess = nums[mid];

        if (guess === target) {
            return mid;
        } else if (guess < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};