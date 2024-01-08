//Ex:1

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
// console.log(bubsort([9, 8, 7, 4, 6, 1, 2, 3, 0]))

//Ex:2

const BinarySearch = (arr, k) => {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === k) {
            return `Explanation ${k} appears at index ${mid}`
        }
        else if (arr[mid] > k) {
            end = mid - 1
        } else if (arr[mid] < k) {
            start = mid + 1
        }
    }
    return `Explanation: ${k} is not present.
`
}
// console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))

//Ex:3

const createNode = (value) => ({
    value,
    next: null
});

const createLinkedList = () => {
    let head = null;

    return {
        addNode(value) {
            const newNode = createNode(value);

            if (!head) {
                head = newNode;
            } else {
                let current = head;
                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
        },

        printList() {
            let result = "";
            let current = head;

            while (current) {
                result += `${current.value} `;
                current = current.next;
            }

            console.log(result.trim());
        }
    };
};
const linkedList = createLinkedList();
linkedList.addNode(3);
linkedList.addNode(7);
linkedList.addNode(10);
linkedList.printList(); 
