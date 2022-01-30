import styles from '../styles/Home.module.css'

export default function colorizeKeyboard(matching_indexes: any[], has_in_word: any[], not_in_word: any[]) {
    var keys = document.getElementsByClassName(styles.keyboard_key);

    for(var key in keys) {
        try {
            var element = keys[key];
            var elementText = keys[key].getElementsByTagName("h3")[0].innerText.toLowerCase();

            matching_indexes.forEach(matching => {
                if(matching.letter == elementText) {
                    console.log({ letter: matching.letter, elementText, equal: true })
                    var key = document.getElementById(element.id);
                    console.log(key)
                    if(key === null) return;
                    key.style.background = "#13d178"
                    key.style.color = "#fff"
                } else { console.log({ letter: matching.letter, elementText, equal: false }) }
            });

            has_in_word.forEach(hasinw => {
                if(hasinw.letter == elementText) {
                    console.log({ letter: hasinw.letter, elementText, equal: true })
                    var key = document.getElementById(element.id);
                    console.log(key)
                    if(key === null) return;
                    key.style.background = "#e3b944"
                    key.style.color = "#fff"
                } else { console.log({ letter: hasinw.letter, elementText, equal: false }) }
            });

            not_in_word.forEach(notinw => {
                if(notinw.letter == elementText) {
                    console.log({ letter: notinw.letter, elementText, equal: true })
                    var key = document.getElementById(element.id);
                    console.log(key)
                    if(key === null) return;
                    key.style.background = "#5f778c"
                    key.style.color = "#fff"
                } else { console.log({ letter: notinw.letter, elementText, equal: false }) }
            });
        } catch(e) { if(e) return false; }
    }
}