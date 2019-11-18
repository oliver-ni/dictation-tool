const LANGUAGE_BY_LOCALE = {
    "af": "Afrikaans",
    "sq": "Albanian",
    "am": "Amharic",
    "ar-dz": "Arabic – Algeria",
    "ar-bh": "Arabic – Bahrain",
    "ar-eg": "Arabic – Egypt",
    "ar-iq": "Arabic – Iraq",
    "ar-jo": "Arabic – Jordan",
    "ar-kw": "Arabic – Kuwait",
    "ar-lb": "Arabic – Lebanon",
    "ar-ly": "Arabic – Libya",
    "ar-ma": "Arabic – Morocco",
    "ar-om": "Arabic – Oman",
    "ar-qa": "Arabic – Qatar",
    "ar-sa": "Arabic – Saudi Arabia",
    "ar-sy": "Arabic – Syria",
    "ar-tn": "Arabic – Tunisia",
    "ar-ae": "Arabic – United Arab Emirates",
    "ar-ye": "Arabic – Yemen",
    "hy": "Armenian",
    "as": "Assamese",
    "az-az": "Azeri – Cyrillic",
    "az-az": "Azeri – Latin",
    "eu": "Basque",
    "be": "Belarusian",
    "bn": "Bengali – Bangladesh",
    "bn": "Bengali – India",
    "bs": "Bosnian",
    "bg": "Bulgarian",
    "my": "Burmese",
    "ca": "Catalan",
    "zh-cn": "Chinese – China",
    "zh-hk": "Chinese – Hong Kong SAR",
    "zh-mo": "Chinese – Macau SAR",
    "zh-sg": "Chinese – Singapore",
    "zh-tw": "Chinese – Taiwan",
    "hr": "Croatian",
    "cs": "Czech",
    "da": "Danish",
    "nl-be": "Dutch – Belgium",
    "nl-nl": "Dutch – Netherlands",
    "en-au": "English – Australia",
    "en-bz": "English – Belize",
    "en-ca": "English – Canada",
    "en-cb": "English – Caribbean",
    "en-gb": "English – Great Britain",
    "en-in": "English – India",
    "en-ie": "English – Ireland",
    "en-jm": "English – Jamaica",
    "en-nz": "English – New Zealand",
    "en-ph": "English – Philippines",
    "en-za": "English – Southern Africa",
    "en-tt": "English – Trinidad",
    "en-us": "English – United States",
    "et": "Estonian",
    "mk": "FYRO Macedonia",
    "fo": "Faroese",
    "fa": "Farsi – Persian",
    "fi": "Finnish",
    "fr-be": "French – Belgium",
    "fr-ca": "French – Canada",
    "fr-fr": "French – France",
    "fr-lu": "French – Luxembourg",
    "fr-ch": "French – Switzerland",
    "gd-ie": "Gaelic – Ireland",
    "gd": "Gaelic – Scotland",
    "de-at": "German – Austria",
    "de-de": "German – Germany",
    "de-li": "German – Liechtenstein",
    "de-lu": "German – Luxembourg",
    "de-ch": "German – Switzerland",
    "el": "Greek",
    "gn": "Guarani – Paraguay",
    "gu": "Gujarati",
    "he": "Hebrew",
    "hi": "Hindi",
    "hu": "Hungarian",
    "is": "Icelandic",
    "id": "Indonesian",
    "it-it": "Italian – Italy",
    "it-ch": "Italian – Switzerland",
    "ja": "Japanese",
    "kn": "Kannada",
    "ks": "Kashmiri",
    "kk": "Kazakh",
    "km": "Khmer",
    "ko": "Korean",
    "lo": "Lao",
    "la": "Latin",
    "lv": "Latvian",
    "lt": "Lithuanian",
    "ms-bn": "Malay – Brunei",
    "ms-my": "Malay – Malaysia",
    "ml": "Malayalam",
    "mt": "Maltese",
    "mi": "Maori",
    "mr": "Marathi",
    "mn": "Mongolian",
    "mn": "Mongolian",
    "ne": "Nepali",
    "no-no": "Norwegian – Bokml",
    "no-no": "Norwegian – Nynorsk",
    "or": "Oriya",
    "pl": "Polish",
    "pt-br": "Portuguese – Brazil",
    "pt-pt": "Portuguese – Portugal",
    "pa": "Punjabi",
    "rm": "Raeto-Romance",
    "ro-mo": "Romanian – Moldova",
    "ro": "Romanian – Romania",
    "ru": "Russian",
    "ru-mo": "Russian – Moldova",
    "sa": "Sanskrit",
    "sr-sp": "Serbian – Cyrillic",
    "sr-sp": "Serbian – Latin",
    "tn": "Setsuana",
    "sd": "Sindhi",
    "sk": "Slovak",
    "sl": "Slovenian",
    "so": "Somali",
    "sb": "Sorbian",
    "es-ar": "Spanish – Argentina",
    "es-bo": "Spanish – Bolivia",
    "es-cl": "Spanish – Chile",
    "es-co": "Spanish – Colombia",
    "es-cr": "Spanish – Costa Rica",
    "es-do": "Spanish – Dominican Republic",
    "es-ec": "Spanish – Ecuador",
    "es-sv": "Spanish – El Salvador",
    "es-gt": "Spanish – Guatemala",
    "es-hn": "Spanish – Honduras",
    "es-mx": "Spanish – Mexico",
    "es-ni": "Spanish – Nicaragua",
    "es-pa": "Spanish – Panama",
    "es-py": "Spanish – Paraguay",
    "es-pe": "Spanish – Peru",
    "es-pr": "Spanish – Puerto Rico",
    "es-es": "Spanish – Spain (Traditional)",
    "es-uy": "Spanish – Uruguay",
    "es-ve": "Spanish – Venezuela",
    "sw": "Swahili",
    "sv-fi": "Swedish – Finland",
    "sv-se": "Swedish – Sweden",
    "tg": "Tajik",
    "ta": "Tamil",
    "tt": "Tatar",
    "te": "Telugu",
    "th": "Thai",
    "bo": "Tibetan",
    "ts": "Tsonga",
    "tr": "Turkish",
    "tk": "Turkmen",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "uz-uz": "Uzbek – Cyrillic",
    "uz-uz": "Uzbek – Latin",
    "vi": "Vietnamese",
    "cy": "Welsh",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "zu": "Zulu",
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

let app = new Vue({
    el: '#app',
    data: {
        words: "",
        ready: false,
        voices: [],
        testing: false,
        svoice: 0,
        testIndex: 0,
        testWords: [],
        showWord: false,
        shuffle: true,
        currentDirection: "slide-right-fade",
        currentDirection2: "slide-up-fade",
    },
    methods: {
        initSpeech() {
            const voices = speechSynthesis.getVoices();
            for (const voice of voices) {
                voice.humanName = this.codeToLang(voice.lang) || "";
            }
            voices.sort((a, b) => {
                if (a.humanName == "") return 1;
                if (b.humanName == "") return -1;
                return a.humanName.localeCompare(b.humanName);
            });
            this.voices = voices;
            this.ready = true;
            console.log(this.voices);
        },
        codeToLang(code) {
            return LANGUAGE_BY_LOCALE[code.toLowerCase()] || LANGUAGE_BY_LOCALE[code.toLowerCase().split("-")[0]];
        },
        startTest() {
            this.testWords = this.words.split("\n");
            if (this.shuffle) {
                shuffle(this.testWords);
            }
            this.testIndex = 0;
            this.testing = true;
            this.speakWord();
        },
        speakWord() {
            let speech = new SpeechSynthesisUtterance();
            speech.voice = this.voices[this.svoice];
            speech.text = this.testWords[this.testIndex];
            speech.lang = speech.voice.lang;
            console.log(speech);
            speechSynthesis.speak(speech);
        },
        nextWord() {
            if (this.testIndex == this.testWords.length - 1) return;
            this.showWord = false;
            this.currentDirection = "slide-right-fade";
            this.testIndex++;
            this.speakWord();
        },
        previousWord() {
            if (this.testIndex == 0) return;
            this.showWord = false;
            this.currentDirection = "slide-left-fade";
            this.testIndex--;
            this.speakWord();
        },
        handleKeyPress(e) {
            if (!this.testing) return;

            if (e.key == "ArrowRight") {
                e.preventDefault();
                this.nextWord();
            } else if (e.key == "ArrowLeft") {
                e.preventDefault();
                this.previousWord();
            } else if (e.key == "Space") {
                e.preventDefault();
                this.speakWord();
            } else if (e.key == "ArrowUp") {
                e.preventDefault();
                this.currentDirection2 = "slide-up-fade";
                this.showWord = !this.showWord;
            } else if (e.key == "ArrowDown") {
                e.preventDefault();
                this.currentDirection2 = "slide-down-fade";
                this.showWord = !this.showWord;
            }
        }
    }
});

if (window.speechSynthesis) {
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = app.initSpeech;
    } else {
        app.initSpeech();
    }
} else {
    startButton.disabled = true;
}

window.addEventListener("keydown", app.handleKeyPress);
