export default {
    neetcode: {
        arrays: {
            ContainsDuplicates: {
                fn: "containsDuplicates",
                args: "nums: number[]",
                return: "boolean",
                difficulty: "easy",
                tags: ["array", "hash table"],
                description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
            },
            TwoSum: {
                fn: "twoSum",
                args: "nums: number[], target: number",
                return: "number[]",
                difficulty: "easy",
                tags: ["array", "hash table"],
                description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
            },
            ValidAnagram: {
                fn: "isAnagram",
                args: "s: string, t: string",
                return: "boolean",
                difficulty: "easy",
                tags: ["string", "sorting"],
                description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
            },
            GroupAnagrams: {
                fn: "groupAnagrams",
                args: "strs: string[]",
                return: "string[][]",
                difficulty: "medium",
                tags: ["string", "hash table"],
                description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
            },
            TopKFrequentElements: {
                fn: "topKFrequent",
                args: "nums: number[], k: number",
                return: "number[]",
                difficulty: "medium",
                tags: ["array", "hash table", "sorting"],
                description: "Given an integer array nums and an integer k, return the k most frequent elements.",
            },
            EncodeAndDecodeStrings: {
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
                fn: "productExceptSelf",
                args: "nums: number[]",
                return: "number[]",
                difficulty: "medium",
                tags: ["array", "prefix sum"],
                description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
            },
            ValidSudoku: {
                fn: "isValidSudoku",
                args: "board: string[][]",
                return: "boolean",
                difficulty: "medium",
                tags: ["array", "hash table"],
                description: "Determine if a 9 x 9 Sudoku board is valid.",
            },
            LongestConsecutiveSequence: {
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
                fn: "linearSearch",
                args: "nums: number[], target: number",
                return: "number",
                difficulty: "easy",
                tags: ["search"],
                description: "Given an array of integers nums and an integer target, return the index of the target in the array. If the target is not in the array, return -1.",
            },
            BinarySearch: {
                fn: "binarySearch",
                args: "nums: number[], target: number",
                return: "number",
                difficulty: "easy",
                tags: ["search"],
                description: "Given a sorted array of integers nums and an integer target, return the index of the target in the array. If the target is not in the array, return -1.",
            }
        },
        sorting: {
            BubbleSort: {
                fn: "bubbleSort",
                args: "nums: number[]",
                return: "number[]",
                difficulty: "easy",
                tags: ["sorting"],
                description: "Given an array of integers nums, sort the array in ascending order using the Bubble Sort algorithm.",
            },
            InsertionSort: {
                fn: "insertionSort",
                args: "nums: number[]",
                return: "number[]",
                difficulty: "easy",
                tags: ["sorting"],
                description: "Given an array of integers nums, sort the array in ascending order using the Insertion Sort algorithm.",
            },
            SelectionSort: {
                fn: "selectionSort",
                args: "nums: number[]",
                return: "number[]",
                difficulty: "easy",
                tags: ["sorting"],
                description: "Given an array of integers nums, sort the array in ascending order using the Selection Sort algorithm.",
            },
            QuickSort: {
                fn: "quickSort",
                args: "nums: number[]",
                return: "number[]",
                difficulty: "easy",
                tags: ["sorting"],
                description: "Given an array of integers nums, sort the array in ascending order using the Quick Sort algorithm.",
            },
            MergeSort: {
                fn: "mergeSort",
                args: "nums: number[]",
                return: "number[]",
                difficulty: "easy",
                tags: ["sorting"],
                description: "Given an array of integers nums, sort the array in ascending order using the Merge Sort algorithm.",
            }
        },
    }
};
