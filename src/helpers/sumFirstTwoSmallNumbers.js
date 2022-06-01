const sumFirstTwoSmallNumbers = (numbers) => {
    if (numbers.length < 2) {
        return null;
    }

    const [min1, min2] = numbers.sort((a, b) => a - b); 
    return min1 + min2;
};

export default sumFirstTwoSmallNumbers;