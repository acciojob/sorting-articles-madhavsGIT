//your JS code here. If required.
const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

const ignoreWords = ["a", "an", "the"];

function stripArticle(bandName) {
    const regex = new RegExp(`^(${ignoreWords.join('|')})\\s`, 'i');
    return bandName.replace(regex, '');
}

function sortBands(bands) {
    return bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));
}

function displayBands(sortedBands) {
    const ul = document.getElementById("band");
    sortedBands.forEach(band => {
        const li = document.createElement("li");
        li.textContent = band;
        ul.appendChild(li);
    });
}

const sortedBands = sortBands(bands);
displayBands(sortedBands);
