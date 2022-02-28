import React, { useState, useEffect } from 'react';
import {Word} from './Word';
import './App.css';

export function App() {
  const [currentLetter, setCurrentLetter] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  let currentWordObject = Array(5).fill('.');
  let currentColorObject = Array(5).fill('blue');
  const correctWords = ['break', 'stare', 'chair', 'slide', 'chain', 'point', 'crane', 'chalk', 'route', 'spill', 'plane'];
  const [correctWord, setCorrectWord] = useState(correctWords[Math.floor(Math.random() * 10)]);
  //console.log(correctWord);



  //useEffect(() => {
  //  setCorrectWord(correctWords[Math.floor(Math.random() * 10)]);
  //}, [])


  const [colors, setColors] = useState({
    word1: Array(5).fill('#808080'),
    word2: Array(5).fill('#808080'),
    word3: Array(5).fill('#808080'),
    word4: Array(5).fill('#808080'),
    word5: Array(5).fill('#808080'),
    word6: Array(5).fill('#808080')
  });

  const [words, setWords] = useState({
    word1: Array(5).fill(''),
    word2: Array(5).fill(''),
    word3: Array(5).fill(''),
    word4: Array(5).fill(''),
    word5: Array(5).fill(''),
    word6: Array(5).fill('')
  });

  const handleKeyPress = (e) => {
    const key = e.key;
    let w = {...words};
    let c = {...colors};
    switch(currentWord) {
      case 0:
        currentWordObject = w.word1;
        currentColorObject = c.word1;
        break;
      case 1:
        currentWordObject = w.word2;
        currentColorObject = c.word2;
        break;
      case 2:
        currentWordObject = w.word3;
        currentColorObject = c.word3;
        break;
      case 3:
        currentWordObject = w.word4;
        currentColorObject = c.word4;
        break;
      case 4:
        currentWordObject = w.word5;
        currentColorObject = c.word5;
        break;
      case 5:
        currentWordObject = w.word6;
        currentColorObject = c.word6;
          break;
      default:
        break;
    }
    if(key.length === 1 && key.toUpperCase() !== key.toLowerCase() && currentLetter <= 4) {
      currentWordObject[currentLetter] = key;
      setWords(w);
      console.log(words);
      setCurrentLetter(currentLetter + 1);
    } else if(key === 'Backspace' && currentLetter >= 1) {
        currentWordObject[currentLetter - 1] = '';
        setWords(w);
        console.log(key);
        setCurrentLetter(currentLetter - 1);
      } else if(currentWordObject[0] !== '' 
        && currentWordObject[1] !== '' 
        && currentWordObject[2] !== '' 
        && currentWordObject[3] !== '' 
        && currentWordObject[4] !== ''
        && key === 'Enter') {
        setCurrentLetter(0);
        setCurrentWord(currentWord + 1);
        for(let i = 0; i <= 4; i++) {
            if(currentWordObject[i] === correctWord[i]) {
            currentColorObject[i] = '#00C000';
          } else if(currentWordObject[i] === correctWord[0] 
            || currentWordObject[i] === correctWord[1] 
            || currentWordObject[i] === correctWord[2] 
            || currentWordObject[i] === correctWord[3] 
            || currentWordObject[i] === correctWord[4]) {
              currentColorObject[i] = '#FF8000';
            } else currentColorObject[i] = '#000080';
        }
        setColors(c);
      }
  }

  //useEffect(() => {
  //  let w = [...words];
  //  w[currentWord] = letters;
  //  setWords([...w]);
  //}, [currentLetter])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  })

  return(
    <div>
      <h1>Wordle</h1>
      <div className='container'>
        <Word word={words.word1} color={colors.word1} />
        <Word word={words.word2} color={colors.word2}/>
        <Word word={words.word3} color={colors.word3}/>
        <Word word={words.word4} color={colors.word4}/>
        <Word word={words.word5} color={colors.word5}/>
        <Word word={words.word6} color={colors.word6}/>
      </div>
    </div>
  );
}