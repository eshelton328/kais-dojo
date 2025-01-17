import { groupAnagrams } from '@code/GroupAnagrams';

describe('GroupAnagrams', () => {
    it('should group basic anagrams together', () => {
        const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
        // Sort each group and the groups themselves for consistent comparison
        const sortedResult = result.map(group => group.sort()).sort();
        expect(sortedResult).toEqual([
            ["ate", "eat", "tea"],
            ["bat"],
            ["nat", "tan"]
        ]);
    });

    it('should handle empty input', () => {
        expect(groupAnagrams([])).toEqual([]);
    });

    it('should handle single string input', () => {
        expect(groupAnagrams(["hello"])).toEqual([["hello"]]);
    });

    it('should handle strings with no anagrams', () => {
        const result = groupAnagrams(["cat", "dog", "bird"]);
        const sortedResult = result.map(group => group.sort()).sort();
        expect(sortedResult).toEqual([
            ["bird"],
            ["cat"],
            ["dog"]
        ]);
    });

    it('should handle strings with repeated characters', () => {
        const result = groupAnagrams(["boot", "toob", "save", "vase"]);
        const sortedResult = result.map(group => group.sort()).sort();
        expect(sortedResult).toEqual([
            ["boot", "toob"],
            ["save", "vase"]
        ]);
    });

    it('should handle strings of different lengths', () => {
        const result = groupAnagrams(["a", "ab", "ba", "abc"]);
        const sortedResult = result.map(group => group.sort()).sort();
        expect(sortedResult).toEqual([
            ["a"],
            ["ab", "ba"],
            ["abc"]
        ]);
    });

    it('should handle empty strings', () => {
        const result = groupAnagrams(["", "", "a"]);
        const sortedResult = result.map(group => group.sort()).sort();
        expect(sortedResult).toEqual([
            ["", ""],
            ["a"]
        ]);
    });
});
