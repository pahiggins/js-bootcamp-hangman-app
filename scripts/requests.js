const getPuzzle = async () => {
    const response = await fetch('http://puzzle.mead.io/puzzle?wordCount=3', {});
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Could not get data!');
    }
};