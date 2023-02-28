function selection_sort(arr) {
    let new_arr = [];
    let smallest, smallest_index;

    while (arr.length > 0) {
        smallest = arr[0];
        smallest_index = 0;
        for (let i = 0; i < arr.length; i++) {
            if (smallest > arr[i]) {
                smallest = arr[i];
                smallest_index = i;
            }
        }
        new_arr.push(arr.splice(smallest_index, 1)[0]);
    }
    return new_arr;
}

console.log(selection_sort([15, 6, 4, 2, 8, 1, 0, -1]));