let tOGGLEcASE = document.getElementById('tOGGLEcASE');
        let SentenceCase = document.getElementById('SentenceCase');
        let lowercase = document.getElementById('lowercase');
        let UPPERCASE = document.getElementById('UPPERCASE');
        let CapitalizeWord = document.getElementById('CapitalizeWord');
        let clearBtn = document.getElementById('clearBtn');
        let textBox = document.getElementById('textBox');

        tOGGLEcASE.addEventListener('click', () => {
            let usertext = textBox.value;
            textBox.value = usertext.toUpperCase().split(" ")
                .map((e) => e.charAt(0).toLowerCase() + e.substring(1))
                .join(" ");
        })

        SentenceCase.addEventListener('click', () => {
            let usertext = textBox.value;
            textBox.value = usertext.split(". ").map((e) => e.charAt(0).toUpperCase() + e.substring(1)
                    .toLowerCase())
                .join(". ");
        })

        CapitalizeWord.addEventListener('click', () => {
            let usertext = textBox.value;
            textBox.value = usertext.toLowerCase().split(" ")
                .map((e) => e.charAt(0).toUpperCase() + e.substring(1))
                .join(" ");
        })

        lowercase.addEventListener('click', () => {
            let usertext = textBox.value;
            textBox.value = usertext.toLowerCase();
        })

        UPPERCASE.addEventListener('click', () => {
            let usertext = textBox.value;
            textBox.value = usertext.toUpperCase();
        })

        clearBtn.addEventListener('click', () => {
            textBox.value = "";
        })