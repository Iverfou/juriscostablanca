// ===== JURIS COSTA BLANCA — WIDGET CHAT IA =====
// Connecté à n8n Agent Juridique Alicante

const N8N_WEBHOOK_URL = 'https://kenzel2122.app.n8n.cloud/webhook/71fbff38-e113-4401-a344-5f731c87f1fd/chat';

// Génère un ID de session unique par visiteur
const SESSION_ID = 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();

// Messages d'accueil selon la langue
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

const sendLabels = {
  es: "Enviar",
  en: "Send",
  fr: "Envoyer"
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

// ===== CRÉER LE HTML DU WIDGET =====
function createChatWidget() {
  const widget = document.createElement('div');
  widget.id = 'jcb-chat-widget';
  widget.innerHTML = `
    <!-- Bouton d'ouverture -->
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

    <!-- Fenêtre de chat -->
    <div id="jcb-chat-window" style="display:none;">
      <!-- Header -->
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

      <!-- Messages -->
      <div id="jcb-chat-messages"></div>

      <!-- Suggestions rapides -->
      <div id="jcb-chat-suggestions">
        <button class="jcb-suggestion" data-es="¿Qué es la regularización 2026?" data-en="What is the 2026 regularization?" data-fr="C'est quoi la régularisation 2026 ?">📋 Regularización 2026</button>
        <button class="jcb-suggestion" data-es="¿Cómo obtener el NIE?" data-en="How to get the NIE?" data-fr="Comment obtenir le NIE ?">🪪 NIE / TIE</button>
        <button class="jcb-suggestion" data-es="Quiero pedir una cita" data-en="I want to book an appointment" data-fr="Je veux prendre un rendez-vous">📅 Rendez-vous</button>
      </div>

      <!-- Input -->
      <div id="jcb-chat-input-area">
        <textarea id="jcb-chat-input" placeholder="Escriba su pregunta..." rows="1"></textarea>
        <button id="jcb-chat-send" aria-label="Envoyer">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>

      <!-- Footer -->
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

// ===== STYLES DU WIDGET =====
function injectChatStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #jcb-chat-widget {
      position: fixed;
      bottom: 100px;
      left: 30px;
      z-index: 9999;
      font-family: 'Cormorant Garamond', 'Georgia', serif;
    }

    #jcb-chat-toggle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1B2A4A, #2E4A7A);
      border: 2px solid rgba(201, 169, 110, 0.5);
      color: #F5F0E8;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 30px rgba(27, 42, 74, 0.5);
      transition: all 0.3s;
      position: relative;
    }

    #jcb-chat-toggle:hover {
      transform: scale(1.1);
      box-shadow: 0 12px 40px rgba(27, 42, 74, 0.6);
      border-color: #C9A96E;
    }

    #jcb-chat-toggle svg {
      width: 24px;
      height: 24px;
    }

    #jcb-chat-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background: #C9A96E;
      color: #1B2A4A;
      font-size: 9px;
      font-weight: 700;
      padding: 2px 5px;
      border-radius: 10px;
      font-family: 'Libre Baskerville', serif;
      letter-spacing: 0.5px;
      animation: badgePulse 2s infinite;
    }

    @keyframes badgePulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }

    #jcb-chat-window {
      position: absolute;
      bottom: 75px;
      left: 0;
      width: 360px;
      height: 520px;
      background: #FDFAF5;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(27, 42, 74, 0.25);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid rgba(201, 169, 110, 0.2);
      animation: chatOpen 0.3s ease;
    }

    @keyframes chatOpen {
      from { opacity: 0; transform: translateY(20px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    #jcb-chat-header {
      background: linear-gradient(135deg, #1B2A4A, #2E4A7A);
      padding: 16px 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(201, 169, 110, 0.3);
    }

    #jcb-chat-header-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    #jcb-chat-avatar {
      width: 40px;
      height: 40px;
      background: rgba(201, 169, 110, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      border: 1px solid rgba(201, 169, 110, 0.4);
    }

    #jcb-chat-title {
      font-size: 15px;
      font-weight: 600;
      color: #F5F0E8;
      font-family: 'Playfair Display', serif;
    }

    #jcb-chat-subtitle {
      font-size: 11px;
      color: rgba(201, 169, 110, 0.9);
      letter-spacing: 0.5px;
    }

    #jcb-chat-close {
      background: none;
      border: none;
      color: rgba(245, 240, 232, 0.6);
      cursor: pointer;
      font-size: 16px;
      padding: 4px 8px;
      transition: color 0.2s;
    }

    #jcb-chat-close:hover {
      color: #F5F0E8;
    }

    #jcb-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      scroll-behavior: smooth;
    }

    #jcb-chat-messages::-webkit-scrollbar {
      width: 4px;
    }

    #jcb-chat-messages::-webkit-scrollbar-track {
      background: transparent;
    }

    #jcb-chat-messages::-webkit-scrollbar-thumb {
      background: rgba(201, 169, 110, 0.3);
      border-radius: 2px;
    }

    .jcb-message {
      max-width: 85%;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 14px;
      line-height: 1.6;
      animation: msgIn 0.3s ease;
    }

    @keyframes msgIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .jcb-message-bot {
      background: #F0EBE0;
      color: #1A1A2E;
      align-self: flex-start;
      border-bottom-left-radius: 4px;
      border-left: 3px solid #C9A96E;
    }

    .jcb-message-user {
      background: linear-gradient(135deg, #1B2A4A, #2E4A7A);
      color: #F5F0E8;
      align-self: flex-end;
      border-bottom-right-radius: 4px;
    }

    .jcb-typing {
      display: flex;
      gap: 4px;
      align-items: center;
      padding: 12px 14px;
    }

    .jcb-typing span {
      width: 7px;
      height: 7px;
      background: #C9A96E;
      border-radius: 50%;
      animation: typing 1.2s infinite;
    }

    .jcb-typing span:nth-child(2) { animation-delay: 0.2s; }
    .jcb-typing span:nth-child(3) { animation-delay: 0.4s; }

    @keyframes typing {
      0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
      30% { transform: translateY(-5px); opacity: 1; }
    }

    #jcb-chat-suggestions {
      padding: 8px 12px;
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      border-top: 1px solid rgba(201, 169, 110, 0.15);
      background: #FAF7F2;
    }

    .jcb-suggestion {
      background: white;
      border: 1px solid rgba(201, 169, 110, 0.35);
      color: #1B2A4A;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 11px;
      cursor: pointer;
      transition: all 0.2s;
      font-family: 'Cormorant Garamond', serif;
      white-space: nowrap;
    }

    .jcb-suggestion:hover {
      background: #1B2A4A;
      color: #F5F0E8;
      border-color: #1B2A4A;
    }

    #jcb-chat-input-area {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      padding: 12px 14px;
      border-top: 1px solid rgba(201, 169, 110, 0.2);
      background: white;
    }

    #jcb-chat-input {
      flex: 1;
      border: 1px solid rgba(201, 169, 110, 0.3);
      border-radius: 8px;
      padding: 10px 12px;
      font-family: 'Cormorant Garamond', serif;
      font-size: 15px;
      color: #1A1A2E;
      outline: none;
      resize: none;
      max-height: 100px;
      background: #FDFAF5;
      transition: border-color 0.2s;
    }

    #jcb-chat-input:focus {
      border-color: #C9A96E;
    }

    #jcb-chat-send {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #C9A96E, #B8973A);
      border: none;
      border-radius: 8px;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      flex-shrink: 0;
    }

    #jcb-chat-send:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(201, 169, 110, 0.4);
    }

    #jcb-chat-send svg {
      width: 18px;
      height: 18px;
    }

    #jcb-chat-footer {
      text-align: center;
      font-size: 10px;
      color: rgba(27, 42, 74, 0.35);
      padding: 6px;
      background: white;
      letter-spacing: 0.5px;
    }

    @media (max-width: 480px) {
      #jcb-chat-widget {
        bottom: 80px;
        left: 15px;
      }

      #jcb-chat-window {
        width: calc(100vw - 30px);
        left: 0;
        height: 480px;
      }
    }
  `;
  document.head.appendChild(style);
}

// ===== ÉVÉNEMENTS =====
function initChatEvents() {
  const toggle = document.getElementById('jcb-chat-toggle');
  const window_ = document.getElementById('jcb-chat-window');
  const closeBtn = document.getElementById('jcb-chat-close');
  const sendBtn = document.getElementById('jcb-chat-send');
  const input = document.getElementById('jcb-chat-input');
  const iconOpen = document.getElementById('jcb-chat-icon-open');
  const iconClose = document.getElementById('jcb-chat-icon-close');

  let isOpen = false;

  // Toggle chat
  toggle.addEventListener('click', () => {
    isOpen = !isOpen;
    window_.style.display = isOpen ? 'flex' : 'none';
    window_.style.flexDirection = 'column';
    iconOpen.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
  });

  closeBtn.addEventListener('click', () => {
    isOpen = false;
    window_.style.display = 'none';
    iconOpen.style.display = 'block';
    iconClose.style.display = 'none';
  });

  // Envoyer avec bouton
  sendBtn.addEventListener('click', sendMessage);

  // Envoyer avec Enter (Shift+Enter pour nouvelle ligne)
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Auto-resize textarea
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  });

  // Suggestions rapides
  document.querySelectorAll('.jcb-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = window.currentLang || 'es';
      const text = btn.getAttribute('data-' + lang) || btn.getAttribute('data-es');
      input.value = text;
      sendMessage();
    });
  });
}

// ===== MESSAGE D'ACCUEIL =====
function showWelcomeMessage() {
  const lang = window.currentLang || 'es';
  const msg = welcomeMessages[lang] || welcomeMessages.es;
  addMessage(msg, 'bot');
}

// ===== AJOUTER UN MESSAGE =====
function addMessage(text, type) {
  const messages = document.getElementById('jcb-chat-messages');
  const div = document.createElement('div');
  div.className = `jcb-message jcb-message-${type}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}

// ===== INDICATEUR DE FRAPPE =====
function showTyping() {
  const messages = document.getElementById('jcb-chat-messages');
  const div = document.createElement('div');
  div.className = 'jcb-message jcb-message-bot jcb-typing';
  div.id = 'jcb-typing-indicator';
  div.innerHTML = '<span></span><span></span><span></span>';
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function hideTyping() {
  const typing = document.getElementById('jcb-typing-indicator');
  if (typing) typing.remove();
}

// ===== ENVOYER UN MESSAGE =====
async function sendMessage() {
  const input = document.getElementById('jcb-chat-input');
  const text = input.value.trim();
  if (!text) return;

  // Afficher le message utilisateur
  addMessage(text, 'user');
  input.value = '';
  input.style.height = 'auto';

  // Masquer les suggestions après le premier message
  const suggestions = document.getElementById('jcb-chat-suggestions');
  if (suggestions) suggestions.style.display = 'none';

  // Afficher l'indicateur de frappe
  showTyping();

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatInput: text,
        sessionId: SESSION_ID,
        action: 'sendMessage'
      })
    });

    hideTyping();

    if (!response.ok) {
      throw new Error('Erreur réseau');
    }

    const data = await response.json();
    
    // Extraire la réponse selon la structure n8n
    const botReply = data.output 
      || data.text 
      || data.message 
      || data.response
      || (data[0] && data[0].output)
      || (data[0] && data[0].text)
      || "Je suis désolé, une erreur s'est produite. Veuillez réessayer.";

    addMessage(botReply, 'bot');

  } catch (error) {
    hideTyping();
    console.error('Chat error:', error);
    const lang = window.currentLang || 'es';
    const errorMessages = {
      es: "Lo siento, hay un problema de conexión. Por favor, inténtelo de nuevo o contáctenos por WhatsApp.",
      en: "Sorry, there's a connection issue. Please try again or contact us via WhatsApp.",
      fr: "Désolé, il y a un problème de connexion. Veuillez réessayer ou nous contacter par WhatsApp."
    };
    addMessage(errorMessages[lang] || errorMessages.es, 'bot');
  }
}

// ===== MISE À JOUR LANGUE =====
function updateChatLang(lang) {
  const title = document.getElementById('jcb-chat-title');
  const subtitle = document.getElementById('jcb-chat-subtitle');
  const input = document.getElementById('jcb-chat-input');

  if (title) title.textContent = chatTitles[lang] || chatTitles.es;
  if (subtitle) subtitle.textContent = chatSubtitles[lang] || chatSubtitles.es;
  if (input) input.placeholder = placeholders[lang] || placeholders.es;
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
  createChatWidget();
});

// Hook sur le changement de langue du site
const originalSetLang = window.setLang;
if (typeof window.setLang === 'function') {
  window.setLang = function(lang) {
    originalSetLang(lang);
    updateChatLang(lang);
  };
}

console.log('💬 Chat IA Juris Costa Blanca — Connecté à n8n');
