import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import $ from 'jquery'

import { FaBackspace } from 'react-icons/fa'

const Home: NextPage = () => {

  var [ letters, setLetters ] = useState([
    {
      letter: ""
    }
  ]);

  const [ targetDiv, setTarget ] = useState(0);

  function key_listener(e: any) {
    console.log(e.target.outerText)

    if(letters.length <= 5) {
      setLetters((letters) => [...letters, {
        letter: e.target.outerText
      }]);
    } else return;

    console.log(letters.length)
    document.getElementsByClassName(styles.wordBlockWrapper)[letters.length - 1].innerHTML = `<h3>${e.target.outerText}</h3>`

  };

  function backspaceFun() {
    if(letters.length >= 1) {
      letters.splice(letters.length - 1)
      var lett = letters.map(letter => { return letter.letter });
      console.log(lett)

      document.getElementsByClassName(styles.wordBlockWrapper)[letters.length - 1].innerHTML = `<h3></h3>`
    } else return;
  };

  function enterFun() {
    var lett = letters.map(letter => { return letter.letter });
    console.log(lett.join(""))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fute.ooo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>
          🏆FUTE.OOO🏆
        </h2>

        <div className={styles.grid} style={{padding:20, display:"inline-block"}} id="word-boxes-holder" >

          <div className={styles.wordLineHolder} id="line-wrapper">
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
          </div>

          <div className={styles.wordLineHolder} id="line-wrapper">
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
          </div>

          <div className={styles.wordLineHolder} id="line-wrapper">
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
          </div>

          <div className={styles.wordLineHolder} id="line-wrapper">
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
          </div>

          <div className={styles.wordLineHolder} id="line-wrapper">
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
            <div className={styles.wordBlockWrapper} id="generated-block" />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.keyboardWrapper}>
            <div className={styles.keyboardLineWrapper}>
              <div className={styles.keyboard_key}>
                <li><h3>Q</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener }>
                <li> <h3>W</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener }>
                <li><h3>E</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener }>
                <li> <h3>R</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener }>
                <li><h3>T</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener }>
                <li><h3>Y</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener }>
                <li><h3>U</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener }>
                <li><h3>I</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener }>
                <li><h3>O</h3></li>
              </div>

              <div className={styles.keyboard_key} onClick={ key_listener }>
                <li><h3>P</h3></li>
              </div>
            </div>

            <div className={styles.keyboardLineWrapper}>
              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>A</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>S</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>D</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>F</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>G</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>H</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>J</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>K</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>L</h3></li>
              </div>

              <div className={styles.keyboard_key} style={{width: 100}} onClick={backspaceFun} >
                <li><h3><FaBackspace /></h3></li>
              </div>
            </div>

            <div className={styles.keyboardLineWrapper}>
              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>Z</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>X</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>C</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>V</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>B</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>N</h3></li>
              </div>

              <div className={styles.keyboard_key}>
                <li onClick={ key_listener } ><h3>M</h3></li>
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
