const templates = {
    'sorting': {
        'Bubble Sort': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'process', x: 100, y: 120, content: 'i = 0' },
                { type: 'process', x: 100, y: 190, content: 'j = 0' },
                { type: 'decision', x: 100, y: 260, content: 'j < n-i-1?' },
                { type: 'decision', x: 100, y: 330, content: 'arr[j] > arr[j+1]?' },
                { type: 'process', x: 100, y: 400, content: 'Swap arr[j] and arr[j+1]' },
                { type: 'process', x: 100, y: 470, content: 'j = j + 1' },
                { type: 'process', x: 100, y: 540, content: 'i = i + 1' },
                { type: 'decision', x: 100, y: 610, content: 'i < n-1?' },
                { type: 'end', x: 100, y: 680, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2 },
                { from: 2, to: 3 },
                { from: 3, to: 4, label: 'Yes' },
                { from: 3, to: 7, label: 'No' },
                { from: 4, to: 5, label: 'Yes' },
                { from: 4, to: 6, label: 'No' },
                { from: 5, to: 6 },
                { from: 6, to: 3 },
                { from: 7, to: 8 },
                { from: 8, to: 2, label: 'Yes' },
                { from: 8, to: 9, label: 'No' }
            ],
            algorithm: `function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}`
        },
        'Insertion Sort': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'process', x: 100, y: 120, content: 'i = 1' },
                { type: 'decision', x: 100, y: 190, content: 'i < n?' },
                { type: 'process', x: 100, y: 260, content: 'key = arr[i]' },
                { type: 'process', x: 100, y: 330, content: 'j = i-1' },
                { type: 'decision', x: 100, y: 400, content: 'j >= 0 && arr[j] > key?' },
                { type: 'process', x: 100, y: 470, content: 'arr[j+1] = arr[j]' },
                { type: 'process', x: 100, y: 540, content: 'j = j-1' },
                { type: 'process', x: 100, y: 610, content: 'arr[j+1] = key' },
                { type: 'process', x: 100, y: 680, content: 'i = i+1' },
                { type: 'end', x: 100, y: 750, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2 },
                { from: 2, to: 3, label: 'Yes' },
                { from: 2, to: 10, label: 'No' },
                { from: 3, to: 4 },
                { from: 4, to: 5 },
                { from: 5, to: 6, label: 'Yes' },
                { from: 5, to: 8, label: 'No' },
                { from: 6, to: 7 },
                { from: 7, to: 5 },
                { from: 8, to: 9 },
                { from: 9, to: 2 }
            ],
            algorithm: `function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}`
        },
        'Merge Sort': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'decision', x: 100, y: 120, content: 'n <= 1?' },
                { type: 'process', x: 100, y: 190, content: 'return arr' },
                { type: 'process', x: 100, y: 260, content: 'mid = n/2' },
                { type: 'process', x: 100, y: 330, content: 'left = arr[0..mid]' },
                { type: 'process', x: 100, y: 400, content: 'right = arr[mid..n]' },
                { type: 'process', x: 100, y: 470, content: 'left = mergeSort(left)' },
                { type: 'process', x: 100, y: 540, content: 'right = mergeSort(right)' },
                { type: 'process', x: 100, y: 610, content: 'return merge(left, right)' },
                { type: 'end', x: 100, y: 680, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2, label: 'Yes' },
                { from: 1, to: 3, label: 'No' },
                { from: 2, to: 9 },
                { from: 3, to: 4 },
                { from: 4, to: 5 },
                { from: 5, to: 6 },
                { from: 6, to: 7 },
                { from: 7, to: 8 },
                { from: 8, to: 9 }
            ],
            algorithm: `function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}`
        },
        'Quick Sort': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'decision', x: 100, y: 120, content: 'n <= 1?' },
                { type: 'process', x: 100, y: 190, content: 'return arr' },
                { type: 'process', x: 100, y: 260, content: 'pivot = arr[last]' },
                { type: 'process', x: 100, y: 330, content: 'i = low-1' },
                { type: 'process', x: 100, y: 400, content: 'j = low' },
                { type: 'decision', x: 100, y: 470, content: 'j < high?' },
                { type: 'decision', x: 100, y: 540, content: 'arr[j] < pivot?' },
                { type: 'process', x: 100, y: 610, content: 'i++, swap arr[i] and arr[j]' },
                { type: 'process', x: 100, y: 680, content: 'j++' },
                { type: 'process', x: 100, y: 750, content: 'swap arr[i+1] and arr[high]' },
                { type: 'process', x: 100, y: 820, content: 'return i+1' },
                { type: 'end', x: 100, y: 890, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2, label: 'Yes' },
                { from: 1, to: 3, label: 'No' },
                { from: 2, to: 12 },
                { from: 3, to: 4 },
                { from: 4, to: 5 },
                { from: 5, to: 6 },
                { from: 6, to: 7, label: 'Yes' },
                { from: 6, to: 10, label: 'No' },
                { from: 7, to: 8, label: 'Yes' },
                { from: 7, to: 9, label: 'No' },
                { from: 8, to: 9 },
                { from: 9, to: 6 },
                { from: 10, to: 11 },
                { from: 11, to: 12 }
            ],
            algorithm: `function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}`
        }
    },
    'searching': {
        'Binary Search': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'process', x: 100, y: 120, content: 'left = 0, right = n-1' },
                { type: 'decision', x: 100, y: 190, content: 'left <= right?' },
                { type: 'process', x: 100, y: 260, content: 'mid = (left + right) / 2' },
                { type: 'decision', x: 100, y: 330, content: 'arr[mid] == target?' },
                { type: 'process', x: 100, y: 400, content: 'return mid' },
                { type: 'decision', x: 100, y: 470, content: 'arr[mid] < target?' },
                { type: 'process', x: 100, y: 540, content: 'left = mid + 1' },
                { type: 'process', x: 100, y: 610, content: 'right = mid - 1' },
                { type: 'process', x: 100, y: 680, content: 'return -1' },
                { type: 'end', x: 100, y: 750, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2 },
                { from: 2, to: 3, label: 'Yes' },
                { from: 2, to: 9, label: 'No' },
                { from: 3, to: 4 },
                { from: 4, to: 5, label: 'Yes' },
                { from: 4, to: 6, label: 'No' },
                { from: 5, to: 10 },
                { from: 6, to: 7, label: 'Yes' },
                { from: 6, to: 8, label: 'No' },
                { from: 7, to: 2 },
                { from: 8, to: 2 },
                { from: 9, to: 10 }
            ],
            algorithm: `function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}`
        },
        'Linear Search': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'process', x: 100, y: 120, content: 'i = 0' },
                { type: 'decision', x: 100, y: 190, content: 'i < n?' },
                { type: 'decision', x: 100, y: 260, content: 'arr[i] == target?' },
                { type: 'process', x: 100, y: 330, content: 'return i' },
                { type: 'process', x: 100, y: 400, content: 'i = i + 1' },
                { type: 'process', x: 100, y: 470, content: 'return -1' },
                { type: 'end', x: 100, y: 540, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2 },
                { from: 2, to: 3, label: 'Yes' },
                { from: 2, to: 6, label: 'No' },
                { from: 3, to: 4, label: 'Yes' },
                { from: 3, to: 5, label: 'No' },
                { from: 4, to: 7 },
                { from: 5, to: 2 },
                { from: 6, to: 7 }
            ],
            algorithm: `function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}`
        }
    },
    'recursion': {
        'Factorial': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'decision', x: 100, y: 120, content: 'n == 0?' },
                { type: 'process', x: 100, y: 190, content: 'return 1' },
                { type: 'process', x: 100, y: 260, content: 'return n * factorial(n-1)' },
                { type: 'end', x: 100, y: 330, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2, label: 'Yes' },
                { from: 1, to: 3, label: 'No' },
                { from: 2, to: 4 },
                { from: 3, to: 4 }
            ],
            algorithm: `function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}`
        },
        'Fibonacci': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'decision', x: 100, y: 120, content: 'n <= 1?' },
                { type: 'process', x: 100, y: 190, content: 'return n' },
                { type: 'process', x: 100, y: 260, content: 'return fibonacci(n-1) + fibonacci(n-2)' },
                { type: 'end', x: 100, y: 330, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2, label: 'Yes' },
                { from: 1, to: 3, label: 'No' },
                { from: 2, to: 4 },
                { from: 3, to: 4 }
            ],
            algorithm: `function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}`
        },
        'Tower of Hanoi': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'decision', x: 100, y: 120, content: 'n == 1?' },
                { type: 'process', x: 100, y: 190, content: 'Move disk from source to destination' },
                { type: 'process', x: 100, y: 260, content: 'Move n-1 disks from source to auxiliary' },
                { type: 'process', x: 100, y: 330, content: 'Move nth disk from source to destination' },
                { type: 'process', x: 100, y: 400, content: 'Move n-1 disks from auxiliary to destination' },
                { type: 'end', x: 100, y: 470, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2, label: 'Yes' },
                { from: 1, to: 3, label: 'No' },
                { from: 2, to: 6 },
                { from: 3, to: 4 },
                { from: 4, to: 5 },
                { from: 5, to: 6 }
            ],
            algorithm: `function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
        console.log(\`Move disk 1 from \${source} to \${destination}\`);
        return;
    }
    
    towerOfHanoi(n - 1, source, auxiliary, destination);
    console.log(\`Move disk \${n} from \${source} to \${destination}\`);
    towerOfHanoi(n - 1, auxiliary, destination, source);
}`
        }
    },
    'number-theory': {
        'Prime Check': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'decision', x: 100, y: 120, content: 'n <= 1?' },
                { type: 'process', x: 100, y: 190, content: 'return false' },
                { type: 'process', x: 100, y: 260, content: 'i = 2' },
                { type: 'decision', x: 100, y: 330, content: 'i*i <= n?' },
                { type: 'decision', x: 100, y: 400, content: 'n % i == 0?' },
                { type: 'process', x: 100, y: 470, content: 'return false' },
                { type: 'process', x: 100, y: 540, content: 'i = i + 1' },
                { type: 'process', x: 100, y: 610, content: 'return true' },
                { type: 'end', x: 100, y: 680, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2, label: 'Yes' },
                { from: 1, to: 3, label: 'No' },
                { from: 2, to: 9 },
                { from: 3, to: 4 },
                { from: 4, to: 5, label: 'Yes' },
                { from: 4, to: 8, label: 'No' },
                { from: 5, to: 6, label: 'Yes' },
                { from: 5, to: 7, label: 'No' },
                { from: 6, to: 9 },
                { from: 7, to: 4 },
                { from: 8, to: 9 }
            ],
            algorithm: `function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}`
        },
        'GCD using Euclidean Algorithm': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'decision', x: 100, y: 120, content: 'b == 0?' },
                { type: 'process', x: 100, y: 190, content: 'return a' },
                { type: 'process', x: 100, y: 260, content: 'return gcd(b, a % b)' },
                { type: 'end', x: 100, y: 330, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2, label: 'Yes' },
                { from: 1, to: 3, label: 'No' },
                { from: 2, to: 4 },
                { from: 3, to: 4 }
            ],
            algorithm: `function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}`
        }
    },
    'string-algorithms': {
        'Palindrome Checker': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'process', x: 100, y: 120, content: 'left = 0, right = str.length-1' },
                { type: 'decision', x: 100, y: 190, content: 'left < right?' },
                { type: 'decision', x: 100, y: 260, content: 'str[left] == str[right]?' },
                { type: 'process', x: 100, y: 330, content: 'return false' },
                { type: 'process', x: 100, y: 400, content: 'left++, right--' },
                { type: 'process', x: 100, y: 470, content: 'return true' },
                { type: 'end', x: 100, y: 540, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2 },
                { from: 2, to: 3, label: 'Yes' },
                { from: 2, to: 6, label: 'No' },
                { from: 3, to: 4, label: 'No' },
                { from: 3, to: 5, label: 'Yes' },
                { from: 4, to: 7 },
                { from: 5, to: 2 },
                { from: 6, to: 7 }
            ],
            algorithm: `function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}`
        },
        'Anagram Check': {
            flowchart: [
                { type: 'start', x: 100, y: 50, content: 'Start' },
                { type: 'decision', x: 100, y: 120, content: 'str1.length == str2.length?' },
                { type: 'process', x: 100, y: 190, content: 'return false' },
                { type: 'process', x: 100, y: 260, content: 'count1 = {}, count2 = {}' },
                { type: 'process', x: 100, y: 330, content: 'i = 0' },
                { type: 'decision', x: 100, y: 400, content: 'i < str1.length?' },
                { type: 'process', x: 100, y: 470, content: 'count1[str1[i]]++, count2[str2[i]]++' },
                { type: 'process', x: 100, y: 540, content: 'i++' },
                { type: 'process', x: 100, y: 610, content: 'return count1 == count2' },
                { type: 'end', x: 100, y: 680, content: 'End' }
            ],
            connections: [
                { from: 0, to: 1 },
                { from: 1, to: 2, label: 'No' },
                { from: 1, to: 3, label: 'Yes' },
                { from: 2, to: 9 },
                { from: 3, to: 4 },
                { from: 4, to: 5 },
                { from: 5, to: 6, label: 'Yes' },
                { from: 5, to: 8, label: 'No' },
                { from: 6, to: 7 },
                { from: 7, to: 5 },
                { from: 8, to: 9 }
            ],
            algorithm: `function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const count1 = {};
    const count2 = {};
    
    for (let i = 0; i < str1.length; i++) {
        count1[str1[i]] = (count1[str1[i]] || 0) + 1;
        count2[str2[i]] = (count2[str2[i]] || 0) + 1;
    }
    
    return JSON.stringify(count1) === JSON.stringify(count2);
}`
        }
    }
};

class HistoryManager {
    constructor(maxHistory = 50) {
        this.maxHistory = maxHistory;
        this.history = [];
        this.currentIndex = -1;
        this.undoBtn = document.getElementById('undoBtn');
        this.redoBtn = document.getElementById('redoBtn');
        this.setupKeyboardShortcuts();
        this.updateButtonStates();
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'z') {
                e.preventDefault();
                this.undo();
            } else if ((e.ctrlKey && e.key === 'y') || (e.ctrlKey && e.shiftKey && e.key === 'Z')) {
                e.preventDefault();
                this.redo();
            }
        });
    }

    addAction(action) {
        // Clear redo stack when adding new action
        this.history = this.history.slice(0, this.currentIndex + 1);
        
        // Add new action
        this.history.push(action);
        this.currentIndex = this.history.length - 1;
        
        // Trim history if it exceeds max size
        if (this.history.length > this.maxHistory) {
            this.history.shift();
            this.currentIndex--;
        }
        
        this.updateButtonStates();
    }

    undo() {
        if (this.currentIndex >= 0) {
            const action = this.history[this.currentIndex];
            action.undo();
            this.currentIndex--;
            this.updateButtonStates();
        }
    }

    redo() {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            const action = this.history[this.currentIndex];
            action.redo();
            this.updateButtonStates();
        }
    }

    updateButtonStates() {
        if (this.undoBtn) {
            this.undoBtn.disabled = this.currentIndex < 0;
        }
        if (this.redoBtn) {
            this.redoBtn.disabled = this.currentIndex >= this.history.length - 1;
        }
    }
}

class Flowchart {
    constructor() {
        try {
            this.nodes = [];
            this.connections = [];
            this.selectedNode = null;
            this.dragging = false;
            this.offset = { x: 0, y: 0 };
            this.canvas = document.getElementById('flowchart-canvas');
            if (!this.canvas) throw new Error('Canvas element not found');
            
            this.connectionMode = false;
            this.connectionStart = null;
            this.historyManager = new HistoryManager();
            
            this.setupEventListeners();
            this.setupDragAndDrop();
            this.setupConnectionHandlers();
            this.setupTemplates();
            this.setupNavbar();

            // Check for stored template when initializing
            if (localStorage.getItem('selectedTemplate')) {
                this.insertTemplateFromStorage();
            }

            // Restore state from localStorage if available
            this.restoreState();
        } catch (error) {
            console.error('Error initializing Flowchart:', error);
            this.showError(error.message);
        }
    }

    setupNavbar() {
        // Mobile menu toggle
        const navbarToggler = document.getElementById('navbarToggler');
        const navbarMenu = document.getElementById('navbarMenu');

        if (navbarToggler && navbarMenu) {
            navbarToggler.addEventListener('click', () => {
                navbarMenu.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbarMenu.contains(e.target) && !navbarToggler.contains(e.target)) {
                navbarMenu.classList.remove('active');
            }
        });

        // Active state management
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Handle specific actions
                const id = link.id;
                if (id) {
                    switch(id) {
                        case 'templatesBtn':
                            this.setupTemplates();
                            break;
                        case 'simulateBtn':
                            this.simulateFlowchart();
                            break;
                        case 'validateBtn':
                            this.validateFlowchart();
                            break;
                        case 'saveImageBtn':
                            this.saveAsImage();
                            break;
                        case 'saveFileBtn':
                            this.saveFlowchart();
                            break;
                        case 'loadBtn':
                            this.loadFlowchart();
                            break;
                        case 'helpBtn':
                            this.showHelp();
                            break;
                    }
                }
            });
        });
    }

    saveAsImage() {
        try {
            // Implementation for saving as image
            this.showError('Save as Image functionality coming soon!');
        } catch (error) {
            this.showError(`Error saving as image: ${error.message}`);
        }
    }

    showHelp() {
        try {
            // Implementation for help documentation
            this.showError('Help documentation coming soon!');
        } catch (error) {
            this.showError(`Error showing help: ${error.message}`);
        }
    }

    showError(message) {
        const errorMessage = document.getElementById('errorMessage');
        if (errorMessage) {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 5000);
        }
    }

    setupEventListeners() {
        try {
            const buttons = ['saveBtn', 'loadBtn', 'validateBtn', 'simulateBtn'];
            buttons.forEach(btnId => {
                const button = document.getElementById(btnId);
                if (!button) throw new Error(`Button ${btnId} not found`);
                
                button.addEventListener('click', () => {
                    try {
                        switch(btnId) {
                            case 'saveBtn': this.saveFlowchart(); break;
                            case 'loadBtn': this.loadFlowchart(); break;
                            case 'validateBtn': this.validateFlowchart(); break;
                            case 'simulateBtn': this.simulateFlowchart(); break;
                        }
                    } catch (error) {
                        this.showError(`Error in ${btnId}: ${error.message}`);
                    }
                });
            });
        } catch (error) {
            this.showError(`Error setting up event listeners: ${error.message}`);
        }
    }

    setupConnectionHandlers() {
        try {
            this.canvas.addEventListener('click', (e) => {
                if (!this.connectionMode) return;
                
                const target = e.target.closest('.flow-node');
                if (!target) return;
                
                const node = this.nodes.find(n => n.element === target);
                if (!node) return;
                
                if (!this.connectionStart) {
                    this.connectionStart = node;
                    target.classList.add('connection-selected');
                } else {
                    if (this.connectionStart !== node) {
                        // For decision nodes, prompt for condition
                        let condition = '';
                        if (this.connectionStart.type === 'decision') {
                            condition = prompt('Enter condition (Yes/No):');
                            if (!condition) {
                                this.connectionStart.element.classList.remove('connection-selected');
                                this.connectionStart = null;
                                this.connectionMode = false;
                                this.canvas.style.cursor = 'default';
                                return;
                            }
                        }
                        
                        this.createConnection(this.connectionStart, node, condition);
                    }
                    this.connectionStart.element.classList.remove('connection-selected');
                    this.connectionStart = null;
                    this.connectionMode = false;
                    this.canvas.style.cursor = 'default';
                }
            });
        } catch (error) {
            this.showError(`Error setting up connection handlers: ${error.message}`);
        }
    }

    setupDragAndDrop() {
        try {
            const nodeTypes = document.querySelectorAll('.node-type');
            nodeTypes.forEach(nodeType => {
                nodeType.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', nodeType.dataset.type);
                });
            });

            this.canvas.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            this.canvas.addEventListener('drop', (e) => {
                try {
                    e.preventDefault();
                    const type = e.dataTransfer.getData('text/plain');
                    const rect = this.canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    this.addNode(type, x, y);
                } catch (error) {
                    this.showError(`Error in drop handler: ${error.message}`);
                }
            });
        } catch (error) {
            this.showError(`Error setting up drag and drop: ${error.message}`);
        }
    }

    addNode(type, x, y) {
        try {
            const node = document.createElement('div');
            node.className = `flow-node ${type}`;
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            
            const content = document.createElement('div');
            content.className = 'node-content';
            content.contentEditable = true;
            content.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            node.appendChild(content);

            node.addEventListener('mousedown', (e) => this.startDragging(e, node));
            node.addEventListener('dblclick', () => this.toggleConnectionMode(node));

            this.canvas.appendChild(node);
            const nodeData = {
                element: node,
                type: type,
                x: x,
                y: y,
                connections: []
            };
            this.nodes.push(nodeData);

            // Save state after adding node
            this.saveState();

            return nodeData;
        } catch (error) {
            this.showError(`Error adding node: ${error.message}`);
        }
    }

    removeNode(node) {
        try {
            const index = this.nodes.indexOf(node);
            if (index === -1) return;

            // Remove all connections involving this node
            const connectionsToRemove = [...node.connections];
            connectionsToRemove.forEach(conn => {
                this.removeConnection(conn);
            });

            // Remove the node
            node.element.remove();
            this.nodes.splice(index, 1);

            // Save state after removing node
            this.saveState();
        } catch (error) {
            this.showError(`Error removing node: ${error.message}`);
        }
    }

    createConnection(startNode, endNode, condition) {
        try {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', 'connection');
            svg.style.position = 'absolute';
            svg.style.top = '0';
            svg.style.left = '0';
            svg.style.width = '100%';
            svg.style.height = '100%';
            svg.style.pointerEvents = 'none';
            svg.style.zIndex = '-1';

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('class', 'connection-line');
            path.setAttribute('stroke', '#34495e');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('fill', 'none');
            path.setAttribute('marker-end', 'url(#arrowhead)');

            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
            marker.setAttribute('id', 'arrowhead');
            marker.setAttribute('markerWidth', '10');
            marker.setAttribute('markerHeight', '7');
            marker.setAttribute('refX', '9');
            marker.setAttribute('refY', '3.5');
            marker.setAttribute('orient', 'auto');
            
            const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
            polygon.setAttribute('fill', '#34495e');
            
            marker.appendChild(polygon);
            defs.appendChild(marker);
            svg.appendChild(defs);
            svg.appendChild(path);
            
            this.canvas.appendChild(svg);

            const connection = {
                start: startNode,
                end: endNode,
                element: path,
                svg: svg,
                condition: condition
            };

            this.connections.push(connection);
            startNode.connections.push(connection);

            this.updateConnection(connection);

            // Save state after creating connection
            this.saveState();

            return connection;
        } catch (error) {
            console.error('Error creating connection:', error);
            this.showError('Error creating connection. Please try again.');
        }
    }

    removeConnection(connection) {
        try {
            const index = this.connections.indexOf(connection);
            if (index === -1) return;

            const startNode = connection.start;
            const startConnIndex = startNode.connections.indexOf(connection);
            if (startConnIndex !== -1) {
                startNode.connections.splice(startConnIndex, 1);
            }

            connection.svg.remove();
            this.connections.splice(index, 1);
        } catch (error) {
            this.showError(`Error removing connection: ${error.message}`);
        }
    }

    updateConnection(connection) {
        try {
            const startRect = connection.start.element.getBoundingClientRect();
            const endRect = connection.end.element.getBoundingClientRect();
            const canvasRect = this.canvas.getBoundingClientRect();

            const startX = startRect.left + startRect.width / 2 - canvasRect.left;
            const startY = startRect.top + startRect.height / 2 - canvasRect.top;
            const endX = endRect.left + endRect.width / 2 - canvasRect.left;
            const endY = endRect.top + endRect.height / 2 - canvasRect.top;

            const midX = (startX + endX) / 2;
            const controlPoint1 = { x: midX, y: startY };
            const controlPoint2 = { x: midX, y: endY };

            const pathData = `M${startX},${startY} C${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y} ${endX},${endY}`;
            connection.element.setAttribute('d', pathData);
        } catch (error) {
            this.showError(`Error updating connection: ${error.message}`);
        }
    }

    startDragging(e, node) {
        try {
            this.dragging = true;
            this.selectedNode = node;
            const rect = node.getBoundingClientRect();
            this.offset = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };

            document.addEventListener('mousemove', this.dragNode);
            document.addEventListener('mouseup', this.stopDragging);
        } catch (error) {
            this.showError(`Error starting drag: ${error.message}`);
        }
    }

    dragNode = (e) => {
        try {
            if (!this.dragging) return;
            
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left - this.offset.x;
            const y = e.clientY - rect.top - this.offset.y;
            
            this.selectedNode.style.left = `${x}px`;
            this.selectedNode.style.top = `${y}px`;
            
            const node = this.nodes.find(n => n.element === this.selectedNode);
            if (node) {
                node.connections.forEach(conn => {
                    this.updateConnection(conn);
                });
            }
        } catch (error) {
            this.showError(`Error during drag: ${error.message}`);
        }
    }

    stopDragging = () => {
        try {
            this.dragging = false;
            this.selectedNode = null;
            document.removeEventListener('mousemove', this.dragNode);
            document.removeEventListener('mouseup', this.stopDragging);
        } catch (error) {
            this.showError(`Error stopping drag: ${error.message}`);
        }
    }

    toggleConnectionMode(node) {
        try {
            if (this.connectionMode) {
                this.connectionMode = false;
                this.canvas.style.cursor = 'default';
                if (this.connectionStart) {
                    this.connectionStart.element.classList.remove('connection-selected');
                    this.connectionStart = null;
                }
            } else {
                this.connectionMode = true;
                this.canvas.style.cursor = 'crosshair';
                this.connectionStart = this.nodes.find(n => n.element === node);
                node.classList.add('connection-selected');
            }
        } catch (error) {
            this.showError(`Error toggling connection mode: ${error.message}`);
        }
    }

    saveFlowchart() {
        try {
            const flowchartData = {
                nodes: this.nodes.map(node => ({
                    type: node.type,
                    x: parseInt(node.element.style.left),
                    y: parseInt(node.element.style.top),
                    content: node.element.querySelector('.node-content').textContent,
                    connections: node.connections.map(conn => ({
                        startId: this.nodes.indexOf(conn.start),
                        endId: this.nodes.indexOf(conn.end)
                    }))
                }))
            };
            
            const blob = new Blob([JSON.stringify(flowchartData)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'flowchart.json';
            a.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            this.showError(`Error saving flowchart: ${error.message}`);
        }
    }

    loadFlowchart() {
        try {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            
            input.onchange = (e) => {
                try {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    
                    reader.onload = (event) => {
                        try {
                            const data = JSON.parse(event.target.result);
                            this.clearCanvas();
                            
                            data.nodes.forEach(nodeData => {
                                this.addNode(nodeData.type, nodeData.x, nodeData.y);
                                const node = this.nodes[this.nodes.length - 1];
                                node.element.querySelector('.node-content').textContent = nodeData.content;
                            });
                            
                            data.nodes.forEach((nodeData, index) => {
                                nodeData.connections.forEach(connData => {
                                    this.createConnection(this.nodes[index], this.nodes[connData.endId]);
                                });
                            });
                        } catch (error) {
                            this.showError(`Error parsing flowchart data: ${error.message}`);
                        }
                    };
                    
                    reader.readAsText(file);
                } catch (error) {
                    this.showError(`Error reading file: ${error.message}`);
                }
            };
            
            input.click();
        } catch (error) {
            this.showError(`Error loading flowchart: ${error.message}`);
        }
    }

    clearCanvas() {
        try {
            this.nodes.forEach(node => node.element.remove());
            this.connections.forEach(conn => conn.svg.remove());
            this.nodes = [];
            this.connections = [];
        } catch (error) {
            this.showError(`Error clearing canvas: ${error.message}`);
        }
    }

    validateFlowchart() {
        try {
            let isValid = true;
            const errors = [];

            const startNodes = this.nodes.filter(node => node.type === 'start');
            if (startNodes.length === 0) {
                errors.push('No start node found');
                isValid = false;
            } else if (startNodes.length > 1) {
                errors.push('Multiple start nodes found');
                isValid = false;
            }

            const endNodes = this.nodes.filter(node => node.type === 'end');
            if (endNodes.length === 0) {
                errors.push('No end node found');
                isValid = false;
            }

            const unconnectedNodes = this.nodes.filter(node => 
                node.connections.length === 0 && 
                node.type !== 'start' && 
                node.type !== 'end'
            );
            if (unconnectedNodes.length > 0) {
                errors.push('Found unconnected nodes');
                isValid = false;
            }

            if (this.hasCycle()) {
                errors.push('Flowchart contains cycles');
                isValid = false;
            }

            this.nodes.forEach(node => {
                node.element.classList.remove('node-error');
            });

            if (!isValid) {
                errors.forEach(error => {
                    this.showError(error);
                });
                unconnectedNodes.forEach(node => {
                    node.element.classList.add('node-error');
                });
            }

            return isValid;
        } catch (error) {
            this.showError(`Error validating flowchart: ${error.message}`);
            return false;
        }
    }

    hasCycle() {
        try {
            const visited = new Set();
            const recursionStack = new Set();

            const hasCycleUtil = (node) => {
                if (recursionStack.has(node)) return true;
                if (visited.has(node)) return false;

                visited.add(node);
                recursionStack.add(node);

                for (const conn of node.connections) {
                    if (hasCycleUtil(conn.end)) return true;
                }

                recursionStack.delete(node);
                return false;
            };

            for (const node of this.nodes) {
                if (!visited.has(node) && hasCycleUtil(node)) {
                    return true;
                }
            }

            return false;
        } catch (error) {
            this.showError(`Error checking for cycles: ${error.message}`);
            return false;
        }
    }

    simulateFlowchart() {
        try {
            if (!this.validateFlowchart()) {
                this.showError('Please fix validation errors before simulation');
                return;
            }

            const startNode = this.nodes.find(node => node.type === 'start');
            if (!startNode) {
                this.showError('No start node found');
                return;
            }

            this.simulateNode(startNode);
        } catch (error) {
            this.showError(`Error simulating flowchart: ${error.message}`);
        }
    }

    async simulateNode(node) {
        try {
            node.element.classList.add('active');
            await new Promise(resolve => setTimeout(resolve, 1000));
            node.element.classList.remove('active');

            if (node.type === 'end') return;

            const nextNode = this.getNextNode(node);
            if (nextNode) {
                this.simulateNode(nextNode);
            }
        } catch (error) {
            this.showError(`Error simulating node: ${error.message}`);
        }
    }

    getNextNode(node) {
        try {
            if (node.connections.length === 0) return null;
            
            if (node.type === 'decision') {
                const choice = prompt('Enter choice (Yes/No):');
                const yesConn = node.connections.find(conn => 
                    conn.element.getAttribute('data-label') === 'Yes');
                const noConn = node.connections.find(conn => 
                    conn.element.getAttribute('data-label') === 'No');
                
                return choice?.toLowerCase() === 'yes' ? yesConn?.end : noConn?.end;
            }
            
            return node.connections[0].end;
        } catch (error) {
            this.showError(`Error getting next node: ${error.message}`);
            return null;
        }
    }

    setupTemplates() {
        try {
            const templatesBtn = document.getElementById('templatesBtn');
            if (!templatesBtn) {
                console.warn('Templates button not found');
                return;
            }

            templatesBtn.addEventListener('click', () => {
                window.location.href = 'templates.html';
            });

            // If we're on the templates page, render the templates
            if (window.location.pathname.includes('templates.html')) {
                this.renderTemplates();
            }
        } catch (error) {
            console.error('Error setting up templates:', error);
        }
    }

    renderTemplates() {
        const templatesContainer = document.getElementById('templatesContainer');
        if (!templatesContainer) {
            console.error('Templates container not found');
            return;
        }

        // Clear existing content
        templatesContainer.innerHTML = '';

        // Create search input
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search templates...';
        searchInput.className = 'search-input';
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const templateCards = document.querySelectorAll('.template-card');
            templateCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const category = card.querySelector('.category').textContent.toLowerCase();
                if (title.includes(searchTerm) || category.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
        templatesContainer.appendChild(searchInput);

        // Create categories container
        const categoriesContainer = document.createElement('div');
        categoriesContainer.className = 'categories-container';
        templatesContainer.appendChild(categoriesContainer);

        // Render each category
        Object.entries(templates).forEach(([category, data]) => {
            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';

            const categoryHeader = document.createElement('h2');
            categoryHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categorySection.appendChild(categoryHeader);

            const categoryContent = document.createElement('div');
            categoryContent.className = 'category-content';

            // Render each template in the category
            data.templates.forEach((template) => {
                const templateCard = document.createElement('div');
                templateCard.className = 'template-card';

                const templateTitle = document.createElement('h3');
                templateTitle.textContent = template.name;
                templateCard.appendChild(templateTitle);

                const templateCategory = document.createElement('div');
                templateCategory.className = 'category';
                templateCategory.textContent = category;
                templateCard.appendChild(templateCategory);

                const templatePreview = document.createElement('canvas');
                templatePreview.className = 'template-preview';
                templatePreview.width = 300;
                templatePreview.height = 200;
                templateCard.appendChild(templatePreview);

                const templateActions = document.createElement('div');
                templateActions.className = 'template-actions';

                const insertButton = document.createElement('button');
                insertButton.textContent = 'Insert Template';
                insertButton.addEventListener('click', () => {
                    this.insertTemplate(category, template.name);
                });
                templateActions.appendChild(insertButton);

                templateCard.appendChild(templateActions);
                categoryContent.appendChild(templateCard);

                // Render the preview
                this.renderTemplatePreview(templatePreview, template);
            });

            categorySection.appendChild(categoryContent);
            categoriesContainer.appendChild(categorySection);
        });
    }

    renderTemplatePreview(preview, template) {
        try {
            const ctx = preview.getContext('2d');
            const scale = 0.3;
            const offsetX = 20;
            const offsetY = 20;

            // Clear the preview
            ctx.clearRect(0, 0, preview.width, preview.height);

            // Draw nodes
            template.flowchart.forEach(node => {
                const x = node.x * scale + offsetX;
                const y = node.y * scale + offsetY;
                
                ctx.beginPath();
                if (node.type === 'decision') {
                    ctx.ellipse(x, y, 30, 20, 0, 0, Math.PI * 2);
                } else {
                    ctx.rect(x - 30, y - 15, 60, 30);
                }
                ctx.stroke();
                
                ctx.font = '8px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(node.content, x, y + 3);
            });

            // Draw connections
            template.connections.forEach(conn => {
                const from = template.flowchart[conn.from];
                const to = template.flowchart[conn.to];
                
                const fromX = from.x * scale + offsetX;
                const fromY = from.y * scale + offsetY;
                const toX = to.x * scale + offsetX;
                const toY = to.y * scale + offsetY;

                ctx.beginPath();
                ctx.moveTo(fromX, fromY);
                ctx.lineTo(toX, toY);
                ctx.stroke();

                if (conn.label) {
                    ctx.font = '8px Arial';
                    ctx.fillText(conn.label, (fromX + toX) / 2, (fromY + toY) / 2);
                }
            });
        } catch (error) {
            this.showError(`Error rendering template preview: ${error.message}`);
        }
    }

    insertTemplate(category, templateName) {
        try {
            const template = templates[category].templates.find(t => t.name === templateName);
            if (!template) return;

            // Store the template data in localStorage
            localStorage.setItem('selectedTemplate', JSON.stringify({
                category: category,
                name: templateName,
                template: template
            }));
            
            // Redirect to the main page
            window.location.href = 'index.html';
        } catch (error) {
            console.error('Error inserting template:', error);
            this.showError('Error inserting template. Please try again.');
        }
    }

    insertTemplateFromStorage() {
        try {
            const templateData = localStorage.getItem('selectedTemplate');
            if (!templateData) return;

            const { template } = JSON.parse(templateData);
            
            // Clear the stored template data
            localStorage.removeItem('selectedTemplate');

            // Clear the canvas before inserting the template
            this.clearCanvas();

            // First, create all nodes
            const createdNodes = [];
            template.flowchart.forEach(nodeData => {
                const node = this.addNode(nodeData.type, nodeData.x, nodeData.y);
                if (node) {
                    const contentElement = node.element.querySelector('.node-content');
                    if (contentElement) {
                        contentElement.textContent = nodeData.content;
                    }
                    createdNodes.push(node);
                }
            });

            // Then, create all connections
            template.connections.forEach(connData => {
                if (createdNodes[connData.from] && createdNodes[connData.to]) {
                    const connection = this.createConnection(createdNodes[connData.from], createdNodes[connData.to]);
                    if (connection && connData.label) {
                        const path = connection.element;
                        if (path) {
                            path.setAttribute('data-label', connData.label);
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error inserting template from storage:', error);
            this.showError('Error inserting template. Please try again.');
        }
    }

    copyAlgorithm(algorithm) {
        try {
            navigator.clipboard.writeText(algorithm).then(() => {
                this.showError('Algorithm copied to clipboard!');
            }).catch(() => {
                this.showError('Failed to copy algorithm');
            });
        } catch (error) {
            this.showError(`Error copying algorithm: ${error.message}`);
        }
    }

    restoreState() {
        try {
            const savedState = localStorage.getItem('flowchartState');
            if (!savedState) return;

            const state = JSON.parse(savedState);
            
            // Clear existing canvas
            this.clearCanvas();

            // Restore nodes
            state.nodes.forEach(nodeData => {
                const node = this.addNode(nodeData.type, nodeData.x, nodeData.y);
                if (node) {
                    const contentElement = node.element.querySelector('.node-content');
                    if (contentElement) {
                        contentElement.textContent = nodeData.content;
                    }
                }
            });

            // Restore connections
            state.connections.forEach(connData => {
                const startNode = this.nodes[connData.startId];
                const endNode = this.nodes[connData.endId];
                if (startNode && endNode) {
                    this.createConnection(startNode, endNode);
                }
            });

            this.showError('State restored successfully');
        } catch (error) {
            console.error('Error restoring state:', error);
            this.showError('Error restoring state. Please try again.');
        }
    }

    saveState() {
        try {
            const state = {
                nodes: this.nodes.map(node => ({
                    type: node.type,
                    x: parseInt(node.element.style.left),
                    y: parseInt(node.element.style.top),
                    content: node.element.querySelector('.node-content').textContent
                })),
                connections: this.connections.map(conn => ({
                    startId: this.nodes.indexOf(conn.start),
                    endId: this.nodes.indexOf(conn.end)
                }))
            };

            localStorage.setItem('flowchartState', JSON.stringify(state));
        } catch (error) {
            console.error('Error saving state:', error);
            this.showError('Error saving state. Please try again.');
        }
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the templates page
    if (window.location.pathname.includes('templates.html')) {
        initializeTemplatesPage();
    } else {
        init();
    }
});

// Templates Page Functionality
function initializeTemplatesPage() {
    const templatesContent = document.getElementById('templatesContent');
    const searchInput = document.querySelector('.search-input');
    const algorithmModal = document.getElementById('algorithmModal');
    const closeModal = document.getElementById('closeModal');
    const copyAlgorithm = document.getElementById('copyAlgorithm');

    // Load templates
    function loadTemplates(searchTerm = '') {
        templatesContent.innerHTML = '';
        
        Object.entries(templates).forEach(([category, data]) => {
            const filteredTemplates = data.templates.filter(template => 
                template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                template.description.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredTemplates.length === 0) return;

            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';
            
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            categoryHeader.innerHTML = `
                <h2>${data.title}</h2>
                <i class="fas fa-chevron-down category-icon"></i>
            `;
            
            const categoryContent = document.createElement('div');
            categoryContent.className = 'category-content';
            
            filteredTemplates.forEach(template => {
                const templateCard = document.createElement('div');
                templateCard.className = 'template-card';
                templateCard.innerHTML = `
                    <div class="template-header">
                        <h3 class="template-title">${template.name}</h3>
                    </div>
                    <p>${template.description}</p>
                    <div class="template-preview">
                        <!-- Flowchart preview will be rendered here -->
                    </div>
                    <div class="template-actions">
                        <button class="template-btn insert-btn" onclick="insertTemplate('${category}', '${template.name}')">
                            <i class="fas fa-plus"></i> Insert
                        </button>
                        <button class="template-btn view-algo-btn" onclick="showAlgorithm('${category}', '${template.name}')">
                            <i class="fas fa-code"></i> View Algorithm
                        </button>
                    </div>
                `;
                categoryContent.appendChild(templateCard);
            });
            
            categorySection.appendChild(categoryHeader);
            categorySection.appendChild(categoryContent);
            templatesContent.appendChild(categorySection);

            // Add click event to category header
            categoryHeader.addEventListener('click', () => {
                const icon = categoryHeader.querySelector('.category-icon');
                categoryContent.classList.toggle('active');
                icon.classList.toggle('rotated');
            });
        });
    }

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        loadTemplates(e.target.value);
    });

    // Modal functionality
    window.showAlgorithm = function(category, templateName) {
        const template = templates[category].templates.find(t => t.name === templateName);
        if (!template) return;

        document.getElementById('algorithmTitle').textContent = template.name;
        document.getElementById('algorithmText').textContent = template.algorithm;
        algorithmModal.style.display = 'block';
    };

    closeModal.addEventListener('click', () => {
        algorithmModal.style.display = 'none';
    });

    copyAlgorithm.addEventListener('click', () => {
        const algorithmText = document.getElementById('algorithmText').textContent;
        navigator.clipboard.writeText(algorithmText).then(() => {
            copyAlgorithm.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyAlgorithm.innerHTML = '<i class="fas fa-copy"></i> Copy Algorithm';
            }, 2000);
        });
    });

    // Initialize templates
    loadTemplates();
}

// Insert template into flowchart
window.insertTemplate = function(category, templateName) {
    const template = templates[category].templates.find(t => t.name === templateName);
    if (!template) return;

    // Store the template data in localStorage
    localStorage.setItem('selectedTemplate', JSON.stringify({
        category: category,
        name: templateName,
        template: template
    }));
    
    // Redirect to the main page
    window.location.href = 'index.html';
};

// Initialize the flowchart
document.addEventListener('DOMContentLoaded', () => {
    try {
        const flowchart = new Flowchart();
        
        // Set up templates after initialization
        flowchart.setupTemplates();
        
        // If we're on the templates page, render the templates
        if (window.location.pathname.includes('templates.html')) {
            flowchart.renderTemplates();
        }
        
        // Check for stored template
        if (localStorage.getItem('selectedTemplate')) {
            flowchart.insertTemplateFromStorage();
        }
    } catch (error) {
        console.error('Error initializing Flowchart:', error);
        const errorMessage = document.getElementById('errorMessage');
        if (errorMessage) {
            errorMessage.textContent = `Initialization Error: ${error.message}`;
            errorMessage.style.display = 'block';
        }
    }
}); 