// ===== JURIS COSTA BLANCA — WIDGET CHAT IA =====
const N8N_WEBHOOK_URL = 'https://kenzel2122.app.n8n.cloud/webhook/71fbff38-e113-4401-a344-5f731c87f1fd/chat';
const SESSION_ID = 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();

const welcomeMessages = {
  es: "¡Hola! Soy el asistente jurídico de Juris Costa Blanca. Puedo ayudarle con preguntas sobre inmigración, residencia, NIE, regularización 2026 y mucho más. ¿En qué puedo ayudarle hoy?",
  en: "Hello! I'm the legal assistant of Juris Costa Blanca. I can help you with questions about immigration, residence, NIE, 2026 regularization and much more. How can I help you today?",
  fr: "Bonjour ! Je suis l'assistant juridique de Juris Costa Blanca. Je peux vous aider avec vos questions sur l'immigration, la résidence, le NIE, la régularisation 2026 et bien plus. Comment puis-je vous aider ?"
};

const placeholders = {
  es: "Escriba su pregunta...",
  en: "Type your question...",
  fr: "Écrivez votre question..."
};

const chatTitles = {
  es: "Asistente Jurídico IA",
  en: "Legal AI Assistant",
  fr: "Assistant Juridique IA"
};

const chatSubtitles = {
  es: "Responde en 7 idiomas · 24h/24",
  en: "Answers in 7 languages · 24/7",
  fr: "Répond en 7 langues · 24h/24"
};

function createChatWidget() {
  const widget = document.createElement('div');
  widget.id = 'jcb-chat-widget';
  widget.innerHTML = `
    <button id="jcb-chat-toggle" aria-label="Ouvrir le chat IA">
      <span id="jcb-chat-icon-open">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </span>
      <span id="jcb-chat-icon-close" style="display:none;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </span>
      <span id="jcb-chat-badge">IA</span>
    </button>

    <div id="jcb-chat-window" style="display:none;">
      <div id="jcb-chat-header">
        <div id="jcb-chat-header-info">
          <div id="jcb-chat-avatar">⚖️</div>
          <div>
            <div id="jcb-chat-title">Asistente Jurídico IA</div>
            <div id="jcb-chat-subtitle">Responde en 7 idiomas · 24h/24</div>
          </div>
        </div>
        <button id="jcb-chat-close" aria-label="Fermer">✕</button>
      </div>

      <div id="jcb-chat-messages"></div>

      <div id="jcb-chat-suggestions">
        <button class="jcb-suggestion" data-es="¿Qué es la regularización 2026?" data-en="What is the 2026 regularization?" data-fr="C'est quoi la régularisation 2026 ?">📋 Regularización 2026</button>
        <button class="jcb-suggestion" data-es="¿Cómo obtener el NIE?" data-en="How to get the NIE?" data-fr="Comment obtenir le NIE ?">🪪 NIE / TIE</button>
        <button class="jcb-suggestion" data-es="Quiero pedir una cita" data-en="I want to book an appointment" data-fr="Je veux prendre un rendez-vous">📅 Rendez-vous</button>
      </div>

      <div id="jcb-chat-input-area">
        <textarea id="jcb-chat-input" placeholder="Escriba su pregunta..." rows="1"></textarea>
        <button id="jcb-chat-send" aria-label="Envoyer">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>

      <div id="jcb-chat-footer">
        Powered by <strong>Claude AI</strong> · Juris Costa Blanca
      </div>
    </div>
  `;

  document.body.appendChild(widget);
  injectChatStyles();
  initChatEvents();
  showWelcomeMessage();
}

function injectChatStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #jcb-chat-widget { position: fixed; bottom: 100px; left: 30px; z-index: 9999; font-family: 'Cormorant Garamond', 'Georgia', serif; }
    #jcb-chat-toggle { width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, #1B2A4A, #2E4A7A); border: 2px solid rgba(201,169,110,0.5); color: #F5F0E8; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 30px rgba(27,42,74,0.5); transition: all 0.3s; position: relative; }
    #jcb-chat-toggle:hover { transform: scale(1.1); border-color: #C9A96E; }
    #jcb-chat-toggle svg { width: 24px; height: 24px; }
    #jcb-chat-badge { position: absolute; top: -5px; right: -5px; background: #C9A96E; color: #1B2A4A; font-size: 9px; font-weight: 700; padding: 2px 5px; border-radius: 10px; font-family: serif; letter-spacing: 0.5px; }
    #jcb-chat-window { position: absolute; bottom: 75px; left: 0; width: 360px; height: 520px; background: #FDFAF5; border-radius: 16px; box-shadow: 0 20px 60px rgba(27,42,74,0.25); display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(201,169,110,0.2); animation: chatOpen 0.3s ease; }
    @keyframes chatOpen { from { opacity:0; transform: translateY(20px) scale(0.95); } to { opacity:1; transform: translateY(0) scale(1); } }
    #jcb-chat-header { background: linear-gradient(135deg, #1B2A4A, #2E4A7A); padding: 16px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(201,169,110,0.3); }
    #jcb-chat-header-info { display: flex; align-items: center; gap: 12px; }
    #jcb-chat-avatar { width: 40px; height: 40px; background: rgba(201,169,110,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; border: 1px solid rgba(201,169,110,0.4); }
    #jcb-chat-title { font-size: 15px; font-weight: 600; color: #F5F0E8; font-family: 'Playfair Display', serif; }
    #jcb-chat-subtitle { font-size: 11px; color: rgba(201,169,110,0.9); }
    #jcb-chat-close { background: none; border: none; color: rgba(245,240,232,0.6); cursor: pointer; font-size: 16px; padding: 4px 8px; transition: color 0.2s; }
    #jcb-chat-close:hover { color: #F5F0E8; }
    #jcb-chat-messages { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 12px; scroll-behavior: smooth; }
    #jcb-chat-messages::-webkit-scrollbar { width: 4px; }
    #jcb-chat-messages::-webkit-scrollbar-thumb { background: rgba(201,169,110,0.3); border-radius: 2px; }
    .jcb-message { max-width: 85%; padding: 10px 14px; border-radius: 12px; font-size: 14px; line-height: 1.6; animation: msgIn 0.3s ease; }
    @keyframes msgIn { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform: translateY(0); } }
    .jcb-message-bot { background: #F0EBE0; color: #1A1A2E; align-self: flex-start; border-bottom-left-radius: 4px; border-left: 3px solid #C9A96E; }
    .jcb-message-user { background: linear-gradient(135deg, #1B2A4A, #2E4A7A); color: #F5F0E8; align-self: flex-end; border-bottom-right-radius: 4px; }
    .jcb-typing { display: flex; gap: 4px; align-items: center; padding: 12px 14px; }
    .jcb-typing span { width: 7px; height: 7px; background: #C9A96E; border-radius: 50%; animation: typing 1.2s infinite; }
    .jcb-typing span:nth-child(2) { animation-delay: 0.2s; }
    .jcb-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typing { 0%,60%,100% { transform: translateY(0); opacity:0.5; } 30% { transform: translateY(-5px); opacity:1; } }
    #jcb-chat-suggestions { padding: 8px 12px; display: flex; gap: 6px; flex-wrap: wrap; border-top: 1px solid rgba(201,169,110,0.15); background: #FAF7F2; }
    .jcb-suggestion { background: white; border: 1px solid rgba(201,169,110,0.35); color: #1B2A4A; padding: 5px 10px; border-radius: 20px; font-size: 11px; cursor: pointer; transition: all 0.2s; font-family: 'Cormorant Garamond', serif; white-space: nowrap; }
    .jcb-suggestion:hover { background: #1B2A4A; color: #F5F0E8; border-color: #1B2A4A; }
    #jcb-chat-input-area { display: flex; align-items: flex-end; gap: 8px; padding: 12px 14px; border-top: 1px solid rgba(201,169,110,0.2); background: white; }
    #jcb-chat-input { flex: 1; border: 1px solid rgba(201,169,110,0.3); border-radius: 8px; padding: 10px 12px; font-family: 'Cormorant Garamond', serif; font-size: 15px; color: #1A1A2E; outline: none; resize: none; max-height: 100px; background: #FDFAF5; transition: border-color 0.2s; }
    #jcb-chat-input:focus { border-color: #C9A96E; }
    #jcb-chat-send { width: 40px; height: 40px; background: linear-gradient(135deg, #C9A96E, #B8973A); border: none; border-radius: 8px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; flex-shrink: 0; }
    #jcb-chat-send:hover { transform: scale(1.05); }
    #jcb-chat-send svg { width: 18px; height: 18px; }
    #jcb-chat-footer { text-align: center; font-size: 10px; color: rgba(27,42,74,0.35); padding: 6px; background: white; letter-spacing: 0.5px; }
    @media (max-width: 480px) { #jcb-chat-widget { bottom: 80px; left: 15px; } #jcb-chat-window { width: calc(100vw - 30px); left: 0; height: 480px; } }
  `;
  document.head.appendChild(style);
}

function initChatEvents() {
  const toggle = document.getElementById('jcb-chat-toggle');
  const chatWindow = document.getElementById('jcb-chat-window');
  const closeBtn = document.getElementById('jcb-chat-close');
  const sendBtn = document.getElementById('jcb-chat-send');
  const input = document.getElementById('jcb-chat-input');
  const iconOpen = document.getElementById('jcb-chat-icon-open');
  const iconClose = document.getElementById('jcb-chat-icon-close');
  let isOpen = false;

  toggle.addEventListener('click', function() {
    isOpen = !isOpen;
    chatWindow.style.display = isOpen ? 'flex' : 'none';
    chatWindow.style.flexDirection = 'column';
    iconOpen.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
  });

  closeBtn.addEventListener('click', function() {
    isOpen = false;
    chatWindow.style.display = 'none';
    iconOpen.style.display = 'block';
    iconClose.style.display = 'none';
  });

  sendBtn.addEventListener('click', sendMessage);

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  input.addEventListener('input', function() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  });

  document.querySelectorAll('.jcb-suggestion').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var lang = window.currentLang || 'es';
      var text = btn.getAttribute('data-' + lang) || btn.getAttribute('data-es');
      input.value = text;
      sendMessage();
    });
  });
}

function showWelcomeMessage() {
  var lang = window.currentLang || 'es';
  var msg = welcomeMessages[lang] || welcomeMessages.es;
  addMessage(msg, 'bot');
}

function addMessage(text, type) {
  var messages = document.getElementById('jcb-chat-messages');
  var div = document.createElement('div');
  div.className = 'jcb-message jcb-message-' + type;
  div.innerHTML = text
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/### (.+)/g, '<strong>$1</strong>')
  .replace(/## (.+)/g, '<strong>$1</strong>')
  .replace(/\n/g, '<br>');
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}

function showTyping() {
  var messages = document.getElementById('jcb-chat-messages');
  var div = document.createElement('div');
  div.className = 'jcb-message jcb-message-bot jcb-typing';
  div.id = 'jcb-typing-indicator';
  div.innerHTML = '<span></span><span></span><span></span>';
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function hideTyping() {
  var typing = document.getElementById('jcb-typing-indicator');
  if (typing) typing.remove();
}

// Parse le format NDJSON streaming de n8n
// n8n envoie plusieurs lignes JSON : {"type":"begin",...} {"type":"item","content":"..."} {"type":"end",...}
function parseN8NResponse(rawText) {
  var lines = rawText.trim().split('\n');
  var fullContent = '';

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (!line) continue;

    try {
      var obj = JSON.parse(line);

      // Type "item" contient le contenu du message
      if (obj.type === 'item' && obj.content) {
        fullContent += obj.content;
      }

      // Certaines versions de n8n utilisent "message" directement
      if (obj.output) {
        return obj.output;
      }
      if (obj.text) {
        return obj.text;
      }
      if (obj.message && typeof obj.message === 'string') {
        return obj.message;
      }

    } catch (e) {
      // Ligne non-JSON, on ignore
    }
  }

  // Si on a accumulé du contenu via les chunks "item"
  if (fullContent) {
    return fullContent;
  }

  // Essai de parser tout le texte comme un seul JSON
  try {
    var single = JSON.parse(rawText);
    return single.output || single.text || single.message || rawText;
  } catch (e) {
    return rawText;
  }
}

async function sendMessage() {
  var input = document.getElementById('jcb-chat-input');
  var text = input.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  input.value = '';
  input.style.height = 'auto';

  var suggestions = document.getElementById('jcb-chat-suggestions');
  if (suggestions) suggestions.style.display = 'none';

  showTyping();

  try {
    var response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'sendMessage',
        sessionId: SESSION_ID,
        chatInput: text
      })
    });

    hideTyping();

    var rawText = await response.text();
    console.log('n8n raw response:', rawText);

    var botReply = parseN8NResponse(rawText);

    if (!botReply || botReply.trim() === '') {
      botReply = welcomeMessages[window.currentLang || 'es'];
    }

    addMessage(botReply, 'bot');

  } catch (error) {
    hideTyping();
    console.error('Chat error:', error);
    var lang = window.currentLang || 'es';
    var errorMessages = {
      es: "Lo siento, hay un problema de conexión. Por favor, inténtelo de nuevo o contáctenos por WhatsApp.",
      en: "Sorry, there's a connection issue. Please try again or contact us via WhatsApp.",
      fr: "Désolé, il y a un problème de connexion. Veuillez réessayer ou nous contacter par WhatsApp."
    };
    addMessage(errorMessages[lang] || errorMessages.es, 'bot');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  createChatWidget();
});

console.log('💬 Chat IA Juris Costa Blanca — Connecté à n8n');
