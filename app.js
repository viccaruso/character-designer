// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const defaultBottomEl = document.getElementById('default-bottom');
const defaultMiddleEl = document.getElementById('default-middle');
const defaultHeadEl = document.getElementById('default-head');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
// set state for all of the character's catchphrases
let catchphraseArr = [];

headDropdown.addEventListener('change', () => {
    defaultHeadEl.setAttribute('disabled', true);
    // get the value of the head dropdown
    let headValue = headDropdown.value;
    // increment the head change count state
    headCount++;
    // update the dom for the head
    if (headEl.hasChildNodes()) { // if it has an image
        const imageEl = headEl.firstChild;
        headEl.removeChild(imageEl); // remove the image
    }
    const img = document.createElement('img');
    img.src = `./assets/${headValue}-head.png`;
    img.style.width = '50%';

    headEl.appendChild(img);
    // update the stats to show the new count
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    defaultMiddleEl.setAttribute('disabled', true);
    // get the value of the middle dropdown
    let middleValue = middleDropdown.value;
    // increment the middle change count state
    middleCount++;
    // update the dom for the middle
    if (middleEl.hasChildNodes()) { // if it has an image
        const imageEl = middleEl.firstChild;
        middleEl.removeChild(imageEl); // remove the image
    }
    const img = document.createElement('img');
    img.src = `./assets/${middleValue}-middle.png`;
    img.style.width = '50%';

    middleEl.appendChild(img);
    // update the stats to show the new count
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    defaultBottomEl.setAttribute('disabled', true);
    // get the value of the bottom dropdown
    let bottomValue = bottomDropdown.value;
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom
    if (bottomEl.hasChildNodes()) { // if it has an image
        const imageEl = bottomEl.firstChild;
        bottomEl.removeChild(imageEl); // remove the image
    }
    const img = document.createElement('img');
    img.src = `./assets/${bottomValue}-pants.png`;
    img.style.width = '50%';
    bottomEl.appendChild(img);
    // update the stats to show the new count
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    let catchphrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphraseArr.push(catchphrase);
    
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases(catchphraseArr);
});

function displayStats() {
    // change the text content of the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(headCount, middleCount, bottomCount); // call this function with the correct arguments
    reportEl.textContent = statsString;
}

function displayCatchphrases(catchphraseArr) {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let entry of catchphraseArr) {
        const p = document.createElement('p');
        p.textContent = entry;
        catchphrasesEl.append(p);
    }
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
