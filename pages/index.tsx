import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useCookies } from "react-cookie"

import $ from 'jquery'

import { FaBackspace } from 'react-icons/fa'

import colorizeBlocks from '../scripts/blockColorizer'
import colorizeKeyboard from '../scripts/colorizeKeyboard'

import daydata from '../data/daydata.json'

import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon
} from 'next-share';

var resultText = "";

const Home: NextPage = () => {

  var [ letters, setLetters ] = useState([
    {
      letter: ""
    }
  ]);

  var [ result, setResult ] = useState([
    {
      text: ""
    }
  ]);

  // const [ triesCookies, setTries ] = useCookies(["tries"]);

  var result_tries: string[] = [];

  // useEffect(() => {
  //   if(triesCookies.tries !== undefined) {
  //     var words = triesCookies.tries.split("/");

  //     words.forEach((word: string) => {
  //       var word_index = words.indexOf(word) + 1;

  //       word.split("").forEach(letter => {
  //         var letter_index = word.split("").indexOf(letter) + 1;
  //         var targetBlock = document.getElementById(`generated-block-${word_index}-${letter_index}`);

  //         if(targetBlock === null) return;

  //         setLetters((letters) => [...letters, {
  //           letter: letter
  //         }]);

  //         targetBlock.innerHTML = `<h3>${letter}</h3>`;

  //         cookiesEnter(word.split(""), targetDiv, triesCookies, setTries)

  //         console.log({ letter, word_index, letter_index, targetBlock });
  //       })
  //     })
  //   }
  //   else return;
  // }, [triesCookies])

  const [ targetDiv, setTarget ] = useState(0);
  var word = daydata.word;
  const [ isCongrats, setCongrats ] = useState(true);

  function key_listener(e: any) {
    if(isCongrats === false) return false;

    if(letters.length <= 5) {
      setLetters((letters) => [...letters, {
        letter: e.target.outerText
      }]);
    } else return;

    var targetBlock;

    console.log(targetDiv)

    if(targetDiv == 0) {
      targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[letters.length - 1]
    } else if (targetDiv == 1) {
      targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[5 + letters.length]
    } else if(targetDiv == 2) {
      targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[10 + letters.length]
    } else if(targetDiv == 3) {
      targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[15 + letters.length]
    } else if(targetDiv == 4) {
      targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[20 + letters.length]
    } else if(targetDiv == 5) {
      targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[25 + letters.length]
    } else if(targetDiv == 6) {
      targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[30 + letters.length]
    }

    if(targetBlock === undefined) return;

    targetBlock.innerHTML = `<h3>${e.target.outerText}</h3>`
  };

  function backspaceFun() {
    if(letters.length >= 1) {
      letters.splice(letters.length - 1)
      var lett = letters.map(letter => { return letter.letter });
      console.log(lett);

      var targetBlock;

      if(targetDiv == 0) {
        targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[letters.length - 1]
      } else if (targetDiv == 1) {
        targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[5 + letters.length]
      } else if(targetDiv == 2) {
        targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[10 + letters.length]
      } else if(targetDiv == 3) {
        targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[15 + letters.length]
      } else if(targetDiv == 4) {
        targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[20 + letters.length]
      } else if(targetDiv == 5) {
        targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[25 + letters.length]
      } else if(targetDiv == 6) {
        targetBlock = document.getElementsByClassName(styles.wordBlockWrapper)[30 + letters.length]
      }
  
      if(targetBlock === undefined) return;

      targetBlock.innerHTML = `<h3></h3>`;
    } else return;
  };

  function rightAnswer() {
    setCongrats(false);
    console.log(result);
    console.log({result_tries});

    var resultparsed = resultText.split("/");
    resultText = `Joguei https://zdnfuteooo.netlify.app #${daydata.day} ${resultparsed.length}/6 \n\n${resultparsed.join("\n")}`;
    
    var keyboard = document.createElement("keyboard");
    if(keyboard === null) return;
    keyboard.style.pointerEvents = "none";
  }

  function enterFun() {
    if(letters[0].letter === "") { letters.splice(0, 1); }
    var finalletters = [];
    for(var l in letters) { finalletters.push(letters[l].letter.toLowerCase()) };
    var word_string = finalletters.join("").toLowerCase();
    console.log({word_string, word});
    console.log({ finalletters })

    var matching_indexes = [];
    var has_in_word = [];
    var not_in_word = [];

    var cache_result: any[] = [];

    var originalWordLetters = word.toLowerCase().split("");

    console.log({finalletters, originalWordLetters});

    for(var i = 0; i < finalletters.length; i++) {
      var l = finalletters[i];

      if(originalWordLetters[i] === l) {
        matching_indexes.push({ letter: l, index: i })
        cache_result.push("????")
      } else {
        if(originalWordLetters.includes(l) === true) {
          has_in_word.push({ letter: l, index: i })
          cache_result.push("????")
        } else {
          not_in_word.push({ letter: l, index: i })
          cache_result.push("???")
        }
      }
    };

    var text = cache_result.join("");

    colorizeBlocks(matching_indexes, has_in_word, not_in_word, word_string, originalWordLetters, targetDiv);

    console.log({ matching_indexes, has_in_word });
    letters.splice(0, letters.length);
    setTarget(targetDiv + 1);
    console.log(letters);

    setResult(() => [...result, {
      text: text
    }]);

    if(resultText !== "") {
      resultText = `${resultText}/${text}`
    } else { resultText = text };

    console.log({ resultText })

    if(matching_indexes.length === 5) rightAnswer();

    colorizeKeyboard(matching_indexes, has_in_word, not_in_word)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>????fute.ooo????</title>
        <meta name="description" content="VENHA JOGAR E TENTE ADIVINHAR O NOME DO TIME COM 5 LETRAS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>
          ????fute.ooo????
        </h2>

        <div hidden={isCongrats} >
          <h2 style={{color: "#13d178"}} hidden={isCongrats} >PARAB??NS!</h2>
          
          <div style={{display: "flex", alignItems: "center"}}>
            <WhatsappShareButton
              url={resultText} 
              hidden={isCongrats}
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <TwitterShareButton
              url={resultText} 
              hidden={isCongrats}
              style={{marginLeft: 5}}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>

        <div className={styles.grid} style={{padding:20, display:"inline-block"}} id="word-boxes-holder" >

          <div className={styles.wordLineHolder} id="line-wrapper">
            <div className={styles.wordBlockWrapper} id="generated-block-1-1" />
            <div className={styles.wordBlockWrapper} id="generated-block-1-2" />
            <div className={styles.wordBlockWrapper} id="generated-block-1-3" />
            <div className={styles.wordBlockWrapper} id="generated-block-1-4" />
            <div className={styles.wordBlockWrapper} id="generated-block-1-5" />
          </div>

          <div className={styles.wordLineHolder} id="line-wrapper">
            <div className={styles.wordBlockWrapper} id="generated-block-2-1" />
            <div className={styles.wordBlockWrapper} id="generated-block-2-2" />
            <div className={styles.wordBlockWrapper} id="generated-block-2-3" />
            <div className={styles.wordBlockWrapper} id="generated-block-2-4" />
            <div className={styles.wordBlockWrapper} id="generated-block-2-5" />
          </div>

          <div className={styles.wordLineHolder} id="line-wrapper">
            <div className={styles.wordBlockWrapper} id="generated-block-3-1" />
            <div className={styles.wordBlockWrapper} id="generated-block-3-2" />
            <div className={styles.wordBlockWrapper} id="generated-block-3-3" />
            <div className={styles.wordBlockWrapper} id="generated-block-3-4" />
            <div className={styles.wordBlockWrapper} id="generated-block-3-5" />
          </div>

          <div className={styles.wordLineHolder} id="line-wrapper">
            <div className={styles.wordBlockWrapper} id="generated-block-4-1" />
            <div className={styles.wordBlockWrapper} id="generated-block-4-2" />
            <div className={styles.wordBlockWrapper} id="generated-block-4-3" />
            <div className={styles.wordBlockWrapper} id="generated-block-4-4" />
            <div className={styles.wordBlockWrapper} id="generated-block-4-5" />
          </div>

          <div className={styles.wordLineHolder} id="line-wrapper">
            <div className={styles.wordBlockWrapper} id="generated-block-5-1" />
            <div className={styles.wordBlockWrapper} id="generated-block-5-2" />
            <div className={styles.wordBlockWrapper} id="generated-block-5-3" />
            <div className={styles.wordBlockWrapper} id="generated-block-5-4" />
            <div className={styles.wordBlockWrapper} id="generated-block-5-5" />
          </div>

          <div className={styles.wordLineHolder} id="line-wrapper">
            <div className={styles.wordBlockWrapper} id="generated-block-6-1" />
            <div className={styles.wordBlockWrapper} id="generated-block-6-2" />
            <div className={styles.wordBlockWrapper} id="generated-block-6-3" />
            <div className={styles.wordBlockWrapper} id="generated-block-6-4" />
            <div className={styles.wordBlockWrapper} id="generated-block-6-5" />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.keyboardWrapper} id="keyboard" >
            <div className={styles.keyboardLineWrapper}>
              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-1-1" >
                <li><h3>Q</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-1-2">
                <li> <h3>W</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-1-3">
                <li><h3>E</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-1-4">
                <li> <h3>R</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-1-5">
                <li><h3>T</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-1-6">
                <li><h3>Y</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-1-7">
                <li><h3>U</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-1-8">
                <li><h3>I</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-1-9">
                <li><h3>O</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-1-10">
                <li><h3>P</h3></li>
              </div>
            </div>

            <div className={styles.keyboardLineWrapper}>
              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-2-1">
                <li><h3>A</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-2-2">
                <li><h3>S</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-2-3">
                <li><h3>D</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-2-4">
                <li><h3>F</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-2-5">
                <li><h3>G</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-2-6">
                <li><h3>H</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-2-7">
                <li><h3>J</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-2-8">
                <li><h3>K</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-2-9">
                <li><h3>L</h3></li>
              </div>

              <div className={styles.keyboard_key} style={{width: 100}} onClick={backspaceFun} >
                <li><h3><FaBackspace /></h3></li>
              </div>
            </div>

            <div className={styles.keyboardLineWrapper}>
              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-3-1">
                <li><h3>Z</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-3-2">
                <li><h3>X</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-3-3">
                <li><h3>C</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-3-4">
                <li><h3>V</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-3-5">
                <li><h3>B</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-3-6">
                <li><h3>N</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener } id="keycap-3-7">
                <li><h3>M</h3></li>
              </div>

              <div className={styles.keyboard_key} style={{width: 100}} onClick={enterFun} >
                <li><h3>ENTER</h3></li>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
