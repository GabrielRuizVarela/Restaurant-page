import createAndAppend from "./createAndAppend";
import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function generateAbout(main){
  createAndAppend(main, 'h2', 'Prime House', 'about-name');
  createAndAppend(main, 'h1', 'About us', 'about-title');
  createAndAppend(main, 'p', lorem.generateParagraphs(3), 'p-about');
  createAndAppend(main, 'div', '');
}

export default generateAbout;