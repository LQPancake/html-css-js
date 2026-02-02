const [isValid, getLongerWord, isOpen, inNegative, dotVowels] = require('./functions');
test('valid grade', () =>{
    expect(isValid(1)).toBeTruthy();
    expect(isValid(2)).toBeTruthy();
    expect(isValid(3)).toBeTruthy();
});
test('not valid grade', () =>{
    expect(isValid(0)).toBeFalsy();
    expect(isValid(6)).toBeFalsy();
    expect(isValid(-3)).toBeFalsy();
});
test('word1 longer', () =>{
    expect(getLongerWord("elefánt", "cica")).toBe("elefánt")
    expect(getLongerWord("asztal", "asztalterítő")).toBe("asztalterítő")
});
test('word2 longer', () =>{
    expect(getLongerWord("elefánt", "cicamica")).toBe("cicamica")
    expect(getLongerWord("asztal", "asztalterítő")).toBe("asztalterítő")
});
test('are of equal length', () =>{
    expect(getLongerWord("elefánt", "parkoló")).toBe("egyformák")
    expect(getLongerWord("asztal", "tányér")).toBe("egyformák")
});
test('is close', () => {
    expect(isOpen(7)).toBeFalsy()
    expect(isOpen(16)).toBeFalsy()
    expect(isOpen(20)).toBeFalsy()
    expect(isOpen(2)).toBeFalsy()
})
test('is open',() => {
    expect(isOpen(9)).toBeTruthy()
    expect(isOpen(14)).toBeTruthy()
})
test('in negative', () => {
    expect(inNegative([9, 27, 413, -9, 77, 650])).toBeTruthy
    expect(inNegative([9, 27, 413, 9, 77, -650])).toBeTruthy
    expect(inNegative([-9, 27, 413, 9, 77, 650])).toBeTruthy
    expect(inNegative([-9, -27, -413, -9, -77, -650])).toBeTruthy    
})
test('not in negative', () => {
    expect(inNegative([9, 27, 413, 9, 77, 650])).toBeFalsy
    expect(inNegative([])).toBeFalsy
    expect(inNegative([-9, 27, 413])).toBeFalsy
    expect(inNegative([0, 0, 0, 0, 0, 0])).toBeFalsy 
})
test('vowels', () =>{
    expect(dotVowels("alma")).toBe(".lm.")
    expect(dotVowels("javascript")).toBe("j.v.scr.pt")
    expect(dotVowels("árvíztűrő")).toBe(".rv.zt.r.")
})