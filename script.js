// Variáveis para armazenar vozes
let voices = [];
const voiceSelect = document.getElementById('voice-select');

// Função para carregar as vozes disponíveis
function carregarVozes() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach((voice, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

// Função para falar o texto digitado
function falar() {
  const textInput = document.getElementById('text-input').value;
  const utterance = new SpeechSynthesisUtterance(textInput);
  const selectedVoiceIndex = voiceSelect.value;
  utterance.voice = voices[selectedVoiceIndex];
  window.speechSynthesis.speak(utterance);
}

// Event listener para garantir que as vozes sejam carregadas corretamente
window.speechSynthesis.onvoiceschanged = carregarVozes;
