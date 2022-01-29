import styles from '../styles/Home.module.css'

export default function colorizeBlocks(matching_indexes: any, has_in_word: any, not_in_word: any, word_string: string, originalWordLetters: string[], targetDiv: number) {
    console.log({matching_indexes, has_in_word, word_string, originalWordLetters, not_in_word});

    matching_indexes.forEach((matching: any) => {
        if(targetDiv == 0) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[matching.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#13d178"
            targBlockId.style.color = "#fff"
          }
        } else if(targetDiv == 1) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[5 + matching.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#13d178"
            targBlockId.style.color = "#fff"
          }
        } else if(targetDiv == 2) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[10 + matching.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#13d178"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 3) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[15 + matching.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#13d178"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 4) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[20 + matching.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#13d178"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 5) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[25 + matching.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#13d178"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 6) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[30 + matching.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#13d178"
            targBlockId.style.color = "#fff"
          }
        }
    });

    has_in_word.forEach((hasin: any) => {
        if(targetDiv == 0) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[hasin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#e3b944"
            targBlockId.style.color = "#fff"
          }
        } else if(targetDiv == 1) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[5 + hasin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#e3b944"
            targBlockId.style.color = "#fff"
          }
        } else if(targetDiv == 2) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[10 + hasin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#e3b944"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 3) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[15 + hasin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#e3b944"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 4) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[20 + hasin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#e3b944"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 5) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[25 + hasin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#e3b944"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 6) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[30 + hasin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#e3b944"
            targBlockId.style.color = "#fff"
          }
        }
    });

    not_in_word.forEach((notin: any) => {
        if(targetDiv == 0) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[notin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#5f778c"
            targBlockId.style.color = "#fff"
          }
        } else if(targetDiv == 1) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[5 + notin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#5f778c"
            targBlockId.style.color = "#fff"
          }
        } else if(targetDiv == 2) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[10 + notin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#5f778c"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 3) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[15 + notin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#5f778c"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 4) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[20 + notin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#5f778c"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 5) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[25 + notin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#5f778c"
            targBlockId.style.color = "#fff"
          }
        } else if (targetDiv == 6) {
          var tb = document.getElementsByClassName(styles.wordBlockWrapper)[30 + notin.index]
          var targBlockId = document.getElementById(tb.id);
  
          if(targBlockId !== null) {
            targBlockId.style.backgroundColor = "#5f778c"
            targBlockId.style.color = "#fff"
          }
        }
    });
}