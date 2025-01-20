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
                examples: [
                    {
                        args: "[1, 2, 3, 1]",
                        return: "true",
                    },
                    {
                        args: "[1, 2, 3, 4]",
                        return: "false",
                    }
                ],
            },
            TwoSum: {
                type: "fn",
                fn: "twoSum",
                args: "nums: number[], target: number",
                return: "number[]",
                difficulty: "easy",
                tags: ["array", "hash table"],
                description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
                examples: [
                    {
                        args: "[2, 7, 11, 15], 9",
                        return: "[0, 1]",
                    },
                    {
                        args: "[3, 2, 4], 6",
                        return: "[1, 2]",
                    }
                ]
            },
            ValidAnagram: {
                type: "fn",
                fn: "isAnagram",
                args: "s: string, t: string",
                return: "boolean",
                difficulty: "easy",
                tags: ["string", "sorting"],
                description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
                examples: [
                    {
                        args: "s = 'anagram', t = 'nagaram'",
                        return: "true",
                    },
                    {
                        args: "s = 'rat', t = 'car'",
                        return: "false",
                    }
                ]
            },
            GroupAnagrams: {
                type: "fn",
                fn: "groupAnagrams",
                args: "strs: string[]",
                return: "string[][]",
                difficulty: "medium",
                tags: ["string", "hash table"],
                description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
                examples: [
                    {
                        args: "['eat', 'tea', 'tan', 'ate', 'nat', 'bat']",
                        return: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]",
                    }
                ]
            },
            TopKFrequentElements: {
                type: "fn",
                fn: "topKFrequent",
                args: "nums: number[], k: number",
                return: "number[]",
                difficulty: "medium",
                tags: ["array", "hash table", "sorting"],
                description: "Given an integer array nums and an integer k, return the k most frequent elements.",
                examples: [
                    {
                        args: "[1, 1, 1, 2, 2, 3], 2",
                        return: "[1, 2]",
                    },
                    {
                        args: "[1], 1",
                        return: "[1]",
                    }
                ]
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
                examples: [
                    {
                        args: "['lint', 'code', 'love', 'you']",
                        return: "'lint:code:love:you'",
                    },
                    {
                        args2: "'lint#code#love#you'",
                        return2: "['lint', 'code', 'love', 'you']",
                    }
                ]
            },
            ProductOfArrayExceptSelf: {
                type: "fn",
                fn: "productExceptSelf",
                args: "nums: number[]",
                return: "number[]",
                difficulty: "medium",
                tags: ["array", "prefix sum"],
                description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
                examples: [
                    {
                        args: "[1, 2, 3, 4]",
                        return: "[24, 12, 8, 6]",
                    },
                    {
                        args: "[1, 0]",
                        return: "[0, 1]",
                    }
                ]
            },
            ValidSudoku: {
                type: "fn",
                fn: "isValidSudoku",
                args: "board: string[][]",
                return: "boolean",
                difficulty: "medium",
                tags: ["array", "hash table"],
                description: "Determine if a 9 x 9 Sudoku board is valid.",
                examples: [
                    {
                        args: "[['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','8','.','6','.','.','.','3'],['.','.','.','8','.','3','.','.','1']]",
                        return: "true",
                    },
                    {
                        args: "[['8','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','8','.','6','.','.','.','3'],['.','.','.','8','.','3','.','.','1']]",
                        return: "false",
                    }
                ]
            },
            LongestConsecutiveSequence: {
                type: "fn",
                fn: "longestConsecutive",
                args: "nums: number[]",
                return: "number",
                difficulty: "medium",
                tags: ["array", "hash table"],
                description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
                examples: [
                    {
                        args: "[100, 4, 200, 1, 3, 2]",
                        return: "4",
                    },
                    {
                        args: "[0, 3, 7, 2, 5, 8, 4, 6, 1]",
                        return: "9",
                    }
                ]
            }
        },
        twoPointers: {
            ValidPalindrome: {
                type: "fn",
                fn: "isPalindrome",
                args: "s: string",
                return: "boolean",
                difficulty: "easy",
                tags: ["string", "two pointers"],
                description: "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
                examples: [
                    {
                        args: "'A man, a plan, a canal: Panama'",
                        return: "true",
                    }
                ]
            },
            TwoSumSorted: {
                type: "fn",
                fn: "twoSumSorted",
                args: "nums: number[], target: number",
                return: "number[]",
                difficulty: "easy",
                tags: ["array", "two pointers"],
                description: "Given a sorted array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.",
                examples: [
                    {
                        args: "[2, 7, 11, 15], 9",
                        return: "[1, 2]",
                    },
                    {
                        args: "[2, 3, 4], 6",
                        return: "[0, 2]",
                    }
                ]
            },
            ThreeSum: {
                type: "fn",
                fn: "threeSum",
                args: "nums: number[]",
                return: "number[][]",
                difficulty: "medium",
                tags: ["array", "two pointers"],
                description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
                examples: [
                    {
                        args: "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
                        return: "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
                    }
                ]
            }
        }
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
