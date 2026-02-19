/**
 * Memory Game - Translations
 *
 * Language support: English, Spanish, Portuguese
 */

const translations = {
  en: {
    memoryGame: "Memory Game!",
    level: "Level:",
    moves: "Moves:",
    startOver: "Start Over",
    playAgain: "Play again?",
    welcome: "Welcome to the Memory Game!",
    instructions: "Flip the tiles and try to match them up in pairs. Pair up all the tiles to win. Try to complete the game in as few moves as possible!",
    selectLevel: "Select Level",
    level1: "Level 1 - Easy (4 x 2)",
    level2: "Level 2 - Medium (6 x 3)",
    level3: "Level 3 - Hard (8 x 4)",
    winTitle: "Sweet!",
    winMessage: "You won the round in {moves} moves. Go you."
  },
  es: {
    memoryGame: "¡Memorama!",
    level: "Nivel:",
    moves: "Movimientos:",
    startOver: "Empezar de Nuevo",
    playAgain: "¿Jugar de nuevo?",
    welcome: "¡Bienvenido al Memorama de Jesús!",
    instructions: "Voltea las fichas e intenta emparejarlas. Empareja todas las fichas para ganar. ¡Intenta completar el juego en la menor cantidad de movimientos posible!",
    selectLevel: "Selecciona Nivel",
    level1: "Nivel 1 - Fácil (4 x 2)",
    level2: "Nivel 2 - Medio (6 x 3)",
    level3: "Nivel 3 - Difícil (8 x 4)",
    winTitle: "¡Excelente!",
    winMessage: "¡Ganaste la ronda en {moves} movimientos. Felicidades!"
  },
  pt: {
    memoryGame: "Jogo da Memória!",
    level: "Nível:",
    moves: "Movimentos:",
    startOver: "Começar Novamente",
    playAgain: "Jogar novamente?",
    welcome: "Bem-vindo ao Jogo da Memória!",
    instructions: "Vire as peças e tente juntá-las em pares. Junta todos os pares para vencer. Tente completar o jogo em quantos menos movimentos possível!",
    selectLevel: "Selecione o Nível",
    level1: "Nível 1 - Fácil (4 x 2)",
    level2: "Nível 2 - Médio (6 x 3)",
    level3: "Nível 3 - Difícil (8 x 4)",
    winTitle: "Incrível!",
    winMessage: "Você venceu a rodada em {moves} movimentos. Parabéns!"
  }
};

// Get current language from localStorage or default to English
function getCurrentLanguage() {
  return localStorage.getItem('gameLanguage') || 'en';
}

// Set current language to localStorage
function setLanguage(lang) {
  if (translations[lang]) {
    localStorage.setItem('gameLanguage', lang);
    return true;
  }
  return false;
}

// Get translation string
function t(key) {
  const lang = getCurrentLanguage();
  return translations[lang][key] || translations['en'][key] || key;
}

// Replace placeholders in translation strings
function tFormat(key, params) {
  let str = t(key);
  for (let param in params) {
    str = str.replace('{' + param + '}', params[param]);
  }
  return str;
}
