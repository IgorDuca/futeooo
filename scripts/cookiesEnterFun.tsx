import daydata from '../data/daydata.json';
import { useCookies } from 'react-cookie';
import colorizeBlocks from './blockColorizer'

export default function cookiesEnter(letters: any[], targetDiv: number, triesCookies: any, setTries: any) {
    var word = daydata.word;

    if(letters[0].letter === "") { letters.splice(0, 1); }
    var finalletters = [];

    for(var i = 0; i < letters.length; i++) { finalletters.push(letters[i].toLowerCase()); }

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
      var letter = finalletters[i];

      if(originalWordLetters[i] === letter) {
        matching_indexes.push({ letter: letter, index: i })
        cache_result.push("🟩")
      } else {
        if(originalWordLetters.includes(letter) === true) {
          has_in_word.push({ letter: letter, index: i })
          cache_result.push("🟨")
        } else {
          not_in_word.push({ letter: letter, index: i })
          cache_result.push("⬛")
        }
      }
    };

    var text = cache_result.join("");

    if(triesCookies.tries === undefined) {  
        setTries("tries", JSON.stringify(word_string), {
        path: "/",
        maxAge: 86400,
        sameSite: true,
        });
    } else {
      setTries("tries", JSON.stringify(`${triesCookies.tries}/${word_string}`), {
        path: "/",
        maxAge: 86400,
        sameSite: true,
      });
    }

    console.log(triesCookies)

    colorizeBlocks(matching_indexes, has_in_word, not_in_word, word_string, originalWordLetters, targetDiv);

    console.log({ matching_indexes, has_in_word });
    // letters.splice(0, letters.length);
    // setTarget(targetDiv + 1);
    // console.log(letters);

    // setResult(() => [...result, {
    //   text: text
    // }]);

    // if(resultText !== "") {
    //   resultText = `${resultText}/${text}`
    // } else { resultText = text };

    // console.log({ resultText })

    // if(matching_indexes.length === 5) rightAnswer();
}