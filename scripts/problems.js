const length_property = {
    properties: [{
        name: "length",
        type: "number",
        scope: "public",
    }]
};
const list_interface = {
    methods: [{
        name: "prepend",
        args: "item: T",
        return: "void",
    }, {
        name: "insertAt",
        args: "item: T, idx: number",
        return: "void",
    }, {
        name: "append",
        args: "item: T",
        return: "void",
    }, {
        name: "remove",
        args: "item: T",
        return: "T | undefined",
    }, {
        name: "get",
        args: "idx: number",
        return: "T | undefined",
    }, {
        name: "removeAt",
        args: "idx: number",
        return: "T | undefined",
    }],
    ...length_property,
};

export default {
    neetcode: {
        arrays: {
            ContainsDuplicates: {
                type: "fn",
                fn: "containsDuplicates",
                args: "nums: number[]",
                return: "boolean",
                difficulty: "easy",
                tags: ["array", "hash table"],
                description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
            },
            TwoSum: {
                type: "fn",
                fn: "twoSum",
                args: "nums: number[], target: number",
                return: "number[]",
                difficulty: "easy",
                tags: ["array", "hash table"],
                description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
            },
            ValidAnagram: {
                type: "fn",
                fn: "isAnagram",
                args: "s: string, t: string",
                return: "boolean",
                difficulty: "easy",
                tags: ["string", "sorting"],
                description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
            },
            GroupAnagrams: {
                type: "fn",
                fn: "groupAnagrams",
                args: "strs: string[]",
                return: "string[][]",
                difficulty: "medium",
                tags: ["string", "hash table"],
                description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
            },
            TopKFrequentElements: {
                type: "fn",
                fn: "topKFrequent",
                args: "nums: number[], k: number",
                return: "number[]",
                difficulty: "medium",
                tags: ["array", "hash table", "sorting"],
                description: "Given an integer array nums and an integer k, return the k most frequent elements.",
            },
            EncodeAndDecodeStrings: {
                type: "fn",
                fn: "encode",
                args: "strs: string[]",
                return: "string",
                fn2: "decode",
                args2: "s: string",
                return2: "string[]",
                difficulty: "medium",
                tags: ["string", "design"],
                description: "Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings. Implement the encode and decode methods.",
            },
            ProductOfArrayExceptSelf: {
                type: "fn",
                fn: "productExceptSelf",
                args: "nums: number[]",
                return: "number[]",
                difficulty: "medium",
                tags: ["array", "prefix sum"],
                description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
            },
            ValidSudoku: {
                type: "fn",
                fn: "isValidSudoku",
                args: "board: string[][]",
                return: "boolean",
                difficulty: "medium",
                tags: ["array", "hash table"],
                description: "Determine if a 9 x 9 Sudoku board is valid.",
            },
            LongestConsecutiveSequence: {
                type: "fn",
                fn: "longestConsecutive",
                args: "nums: number[]",
                return: "number",
                difficulty: "medium",
                tags: ["array", "hash table"],
                description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
            }
        },
        twoPointers: {}
    },
    algorithms: {
        search: {
            LinearSearch: {
                type: "fn",
                fn: "linearSearch",
                args: "nums: number[], target: number",
                return: "number",
                difficulty: "easy",
                tags: ["search"],
                description: "Given an array of integers nums and an integer target, return the index of the target in the array. If the target is not in the array, return -1.",

            },
            BinarySearchList: {
                type: "fn",
                fn: "binarySearchList",
                args: "nums: number[], target: number",
                return: "number",
                difficulty: "easy",
                tags: ["search"],
                description: "Given a sorted array of integers nums and an integer target, return the index of the target in the array. If the target is not in the array, return -1.",
            }
        },
        sorting: {
            BubbleSort: {
                type: "fn",
                fn: "bubbleSort",
                args: "nums: number[]",
                return: "void",
                difficulty: "easy",
                tags: ["sorting"],
                description: "Given an array of integers nums, sort the array in ascending order using the Bubble Sort algorithm.",
            },
            InsertionSort: {
                type: "fn",
                fn: "insertionSort",
                args: "nums: number[]",
                return: "void",
                difficulty: "easy",
                tags: ["sorting"],
                description: "Given an array of integers nums, sort the array in ascending order using the Insertion Sort algorithm.",
            },
            SelectionSort: {
                type: "fn",
                fn: "selectionSort",
                args: "nums: number[]",
                return: "void",
                difficulty: "easy",
                tags: ["sorting"],
                description: "Given an array of integers nums, sort the array in ascending order using the Selection Sort algorithm.",
            },
            QuickSort: {
                type: "fn",
                fn: "quickSort",
                args: "nums: number[]",
                return: "void",
                difficulty: "easy",
                tags: ["sorting"],
                description: "Given an array of integers nums, sort the array in ascending order using the Quick Sort algorithm.",
            },
            MergeSort: {
                type: "fn",
                fn: "mergeSort",
                args: "nums: number[]",
                return: "number[]",
                difficulty: "easy",
                tags: ["sorting"],
                description: "Given an array of integers nums, sort the array in ascending order using the Merge Sort algorithm.",
            }
        },
    },
    dataStructures: {
        ds: {
            SinglyLinkedList: {
                type: "class",
                generic: "<T>",
                ...list_interface,
            },
            DoublyLinkedList: {
                type: "class",
                generic: "<T>",
                methods: [
                    ...list_interface.methods,
                    {
                        name: "getHead",
                        args: "",
                        return: "T | undefined",
                    },
                    {
                        name: "getTail",
                        args: "",
                        return: "T | undefined",
                    },
                    {
                        name: "traverseForward",
                        args: "",
                        return: "T[]",
                    },
                    {
                        name: "traverseBackward",
                        args: "",
                        return: "T[]",
                    }
                ],
                ...length_property,
            },
            Stack: {
                type: "class",
                generic: "<T>",
                methods: [
                    {
                        name: "push",
                        args: "item: T",
                        return: "void",
                    },
                    {
                        name: "pop",
                        args: "",
                        return: "T | undefined",
                    },
                    {
                        name: "peek",
                        args: "",
                        return: "T | undefined",
                    }
                ],
                ...length_property,
            },
            Queue: {
                type: "class",
                generic: "<T>",
                methods: [
                    {
                        name: "enqueue",
                        args: "item: T",
                        return: "void",
                    },
                    {
                        name: "dequeue",
                        args: "",
                        return: "T | undefined",
                    },
                    {
                        name: "peek",
                        args: "",
                        return: "T | undefined",
                    },
                    {
                        name: "isEmpty",
                        args: "",
                        return: "boolean",
                    }
                ],
            },
            BinarySearchTree: {
                type: "class",
                generic: "<T>",
                methods: [
                    {
                        name: "insert",
                        args: "item: T",
                        return: "void",
                    },
                    {
                        name: "delete",
                        args: "item: T",
                        return: "void",
                    },
                    {
                        name: "search",
                        args: "item: T",
                        return: "boolean",
                    },
                    {
                        name: "InOrderTraversal",
                        args: "",
                        return: "T[]",
                    },
                    {
                        name: "PreOrderTraversal",
                        args: "",
                        return: "T[]",
                    },
                    {
                        name: "PostOrderTraversal",
                        args: "",
                        return: "T[]",
                    }
                ],
            }
        }
    }
};
