function getSelectedElement(arr, index) {
    // Check if the index is within the valid range of the array
    if (index >= 0 && index < arr.length) {
        return arr[index];
    } else {
        return "Index out of range";
    }
}

// Example usage:
let myArray = ['apple', 'banana', 'cherry', 'date'];
let selectedIndex = 2;

let selectedElement = getSelectedElement(myArray, selectedIndex);
console.log(selectedElement);  // Output: cherry
