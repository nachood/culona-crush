const LOGIN_USER = "selenaunicornio";
const LOGIN_PASS = "lunita123";
const STORAGE_KEY = "selenaunicornio-roulette-state-v1";
const DAILY_RESET_HOUR = 6;
const RESET_TIME_ZONE = "America/Argentina/Buenos_Aires";
const CRUSH_PROGRESS_VERSION = 2;
const CRUSH_HINTS_PER_LEVEL = 3;
const DEV_INFINITE_SPINS = false;
const DEV_REPLAY_MINIGAME = false;
const CRUSH_AVATAR_IMAGE = "culonacrush.png";
const CRUSH_SIZE = 7;
const CRUSH_SPECIAL = "ella";
const CRUSH_BOMB = "bomb";
const crushLevels = [
  { level: 1, target: 1, moves: 18 },
  { level: 2, target: 1, moves: 16 },
  { level: 3, target: 2, moves: 18 },
  { level: 4, target: 2, moves: 16 },
  { level: 5, target: 2, moves: 14 },
  { level: 6, target: 3, moves: 16 },
  { level: 7, target: 3, moves: 14 },
  { level: 8, target: 3, moves: 12 },
  { level: 9, target: 4, moves: 14 },
  { level: 10, target: 4, moves: 12 },
  { level: 11, target: 5, moves: 14, message: "Que bien la pase anoche con vos" },
  { level: 12, target: 5, moves: 13, message: "Gracias a vos siempre me dan ganas de progresar mivida" },
  { level: 13, target: 5, moves: 12, message: "Espero que esta mañana arranques de lindo como yo cuando veo tu \"bom dia\" je" },
  { level: 14, target: 5, moves: 15, message: "Unas ganas de replicar lo que hicieron chile morron y la reyna 😳" },
  { level: 15, target: 5, moves: 14, message: "Fuera dolor de cabeza sos MALO 😡" },
  { level: 16, target: 6, moves: 15, message: "Otro dia mas sin ser la silla de la oficina..." },
  { level: 17, target: 6, moves: 14, message: "No me voy a cansar de decir que sos mi mejor soporte tanto en el Lol como en la vida bb<3" },
  { level: 18, target: 6, moves: 13, message: "Te amo muchomuchomucho Je" },
  { level: 19, target: 7, moves: 15, message: "Unas ganas de ser tu microfono asi me puteas asi de rico 😔" },
  { level: 20, target: 7, moves: 14, message: "LLegaste al final de CULONA CRUSH (por ahora jeje). Siempre me van a encantar hacer estas cosas y feliz 8vo mes amor mio, desde que llegaste a mi vida a pesar de las peleas y mil cosas que pasamos siempre voy a decir que sos lo mejor y te quedaste en mi corazon para siempre hacerme mejor y nunca me voy a cansar de pasar mi tiempo con vos bb<3, tu novio esta bastante tontito por vos sabias? mi compañera de vida jiji" },
  { level: 21, target: 6, moves: 16, message: "mmm parece que tendre que subir un poco mas el nivel" },
  { level: 22, target: 7, moves: 16, message: "okey okey okey, no me hagas calentaaar bella jugadora" },
  { level: 23, target: 7, moves: 15, message: "emmm emmm.... NO TE LO VOY A PONER TAN FACIL MUJER HERMOSA OK" },
  { level: 24, target: 8, moves: 15, message: "T-TENGO M-MIEDO DIJO EL AURONPLAY, OOOOU NOOO DIJO JERE, JUEGA DEMASIALO QLIAO DIJO HAN..... CONFIO EN VOS NIVEL 25" },
  { level: 25, target: 8, moves: 14, message: "LO-LOGRASTE... ES IMPOSIBLE GANARLE A LA MEJOR JUGADORA DE CULONACRUSH DE LA HISTORIA.... ME GANASTE PERO.... YA VAS A VER x.x" }
];
const crushPieces = [
  { id: CRUSH_SPECIAL, label: "Ella", icon: "💖" },
  { id: CRUSH_BOMB, label: "Bombita", icon: "💣" },
  { id: "pink", label: "Rosa", icon: "🍬" },
  { id: "mint", label: "Menta", icon: "🍭" },
  { id: "lemon", label: "Limón", icon: "⭐" },
  { id: "lilac", label: "Lila", icon: "💎" },
  { id: "cream", label: "Crema", icon: "🌙" }
];

const rewards = [
  { id: "maicena", title: "NOOOO LA PROHIBIIIDAAaAa", rarity: "comun", icon: "🍪", image: "maicena.png", text: "Unas ganas de comerte la maicena amor." },
  { id: "leo", title: "Leo", rarity: "comun", icon: "🐾", image: "leo.png", text: "ODA MAMAAA, yo tambien queria salir y saludarte hee he." },
  { id: "garfi", title: "Garfi", rarity: "comun", icon: "🐾", image: "garfi.png", text: "MIRA MAMA, SAQUE LA MIRADA DE PAPA * -  *." },
  { id: "chito", title: "Chito", rarity: "comun", icon: "🐾", image: "chito.png", text: "Y YO SAQUE TU MIRADA MAMA *- *." },
  { id: "sara", title: "Sara", rarity: "comun", icon: "🐾", image: "sara.png", text: "YO TAMBIEN QUIERO SALIR PARA SER PROTAGONISTA OK." },
  { id: "canela", title: "Canela", rarity: "comun", icon: "🐾", image: "canela.png", text: "holaaaa MA, tengo calor u.u." },
  { id: "milo", title: "Milo", rarity: "comun", icon: "🐾", image: "milo2.png", text: "HOLAA MA YO TAMBIEN APAREZCO JIJI." },
  { id: "cartita-1", title: "1/3 cartitas", rarity: "comun", icon: "💌", image: "yo2.png", weightMultiplier: 0.35, text: "No me voy a cansar de repetirte que estoy muy feliz de siempre pensar,dedicar y pasar el tiempo con vos tanto juntos como ahora q pienso cuando te hago estas cosas <3." },
  { id: "cartita-2", title: "carta 2/3", rarity: "rara", icon: "💌", image: "nosotros2.jpg", text: "Siempre amo cada parte de vos y como los 2 como relacion nos ayudamos mutuamente, pasamos por tormentas y mil mambos pero siempre terminamos juntos, te amo mucho bebe sos mi todo." },
  { id: "sabrina", title: "Sabrina", rarity: "rara", icon: "🎤", image: "sabrina.jpg", text: "oobvioamente no podia faltar tu amuleto de todo, tu sabrina jijij (aunque vos vas a ser siempre mi artista favorita sabes?" },
  { id: "yoperro", title: "WAF WAF DRRR WAF", rarity: "rara", icon: "🐶", image: "yoperro.jpg", audio: "audioperro.ogg", text: "WAF WAF DRRR WAF, digo digo que carajos." },
  { id: "cartita-3", title: "CARTA 3/3", rarity: "epica", icon: "💌", image: "juntitos.png", text: "En esta ultima carta mi amor quiero decirte que estos 5 meses con vos, es algo que nunca voy a olvidar y apreciar siempre. Me complemetas demasiado, a pesar de las peleas, lo que tengo con vos es algo que nunca en mi vida pense que iba a sentir, me generas tanto que a pesar de la distancia te siento cerca. Te amo mucho batul, sos lo mejor que me paso, nunca me voy a cansar de dedicar mi tiempo en vos y que sigamos haciendo nuestras tonteras <3 (y si esa cara de mogo me dejas cuando estoy con vs bebe me encantas)." },
  { id: "beso", title: "BESO", rarity: "epica", icon: "💋", image: "beso.png", text: "NO PODIA FALTAR ESTA JIJIJIJIJ TE AMOO (obligatoriamente y con muchas ganas te tengo que responder con un beso jiji)." },
  { id: "legendaria", title: "ESTE BLEND", rarity: "legendaria", icon: "🦄", image: "blend.png", text: "ESTE BLEND, no es como lo q hacia la gran y majestuosa selena pero espero te guste, lo hice con las fotos fav q me pasó la hermosa de mi novia. Feliz 5to mes mi amor <3." }
];

const finalReward = {
  id: "final-regalito",
  title: "Llegaste al final de tu regalito jiji",
  rarity: "legendaria",
  icon: "💖",
  final: true,
  text: "Llegaste al final de tu regalito jiji, espero que te haya gustado el proceso y hayas disfrutado mucho el llegar hasta aca, lo hice todo de corazon y con mucho amor. Te amo mucho mi vida, no me voy a cansar de repetirte q sos lo mejor que me paso <3."
};

const rarityLabels = {
  comun: "Común",
  rara: "Rara",
  epica: "Épica",
  legendaria: "Legendaria"
};

const rarityWeights = {
  comun: 62,
  rara: 24,
  epica: 11,
  legendaria: 3
};

let state = loadState();
let wheelRotation = 0;
let spinning = false;
let miniGame = null;
let pendingFinalPrompt = false;

const loginScreen = document.getElementById("loginScreen");
const gameScreen = document.getElementById("gameScreen");
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginError = document.getElementById("loginError");
const wheelCanvas = document.getElementById("wheelCanvas");
const wheelCtx = wheelCanvas ? wheelCanvas.getContext("2d") : null;
const spinButton = document.getElementById("spinButton");
const spinCount = document.getElementById("spinCount");
const resetText = document.getElementById("resetText");
const resultCard = document.getElementById("resultCard");
const collectionGrid = document.getElementById("collectionGrid");
const unlockedCount = document.getElementById("unlockedCount");
const miniGameSection = document.getElementById("miniGameSection");
const playMiniGameButton = document.getElementById("playMiniGameButton");
const closeMiniGameButton = document.getElementById("closeMiniGameButton");
const restartMiniGameButton = document.getElementById("restartMiniGameButton");
const crushHome = document.getElementById("crushHome");
const crushLevelsView = document.getElementById("crushLevels");
const crushGame = document.getElementById("crushGame");
const startCrushButton = document.getElementById("startCrushButton");
const backToCrushHomeButton = document.getElementById("backToCrushHomeButton");
const backToLevelsButton = document.getElementById("backToLevelsButton");
const hintButton = document.getElementById("hintButton");
const levelGrid = document.getElementById("levelGrid");
const crushBoard = document.getElementById("crushBoard");
const currentLevel = document.getElementById("currentLevel");
const miniScore = document.getElementById("miniScore");
const miniTarget = document.getElementById("miniTarget");
const miniMoves = document.getElementById("miniMoves");
const miniMessage = document.getElementById("miniMessage");
const crushOverlay = document.getElementById("crushOverlay");
const crushOverlayCard = document.getElementById("crushOverlayCard");
const crushOverlayTitle = document.getElementById("crushOverlayTitle");
const crushOverlayText = document.getElementById("crushOverlayText");
const crushOverlayButton = document.getElementById("crushOverlayButton");
const rewardModal = document.getElementById("rewardModal");
const rewardModalContent = document.getElementById("rewardModalContent");
const closeRewardModalButton = document.getElementById("closeRewardModalButton");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  if (username === LOGIN_USER && password === LOGIN_PASS) {
    loginError.textContent = "";
    loginScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    refreshDailyState();
    renderAll();
    showCrushHome();
    return;
  }

  loginError.textContent = "Ese no es el hechizo correcto.";
});

if (spinButton) spinButton.addEventListener("click", spinWheel);
if (playMiniGameButton) playMiniGameButton.addEventListener("click", openMiniGame);
if (closeMiniGameButton) closeMiniGameButton.addEventListener("click", closeMiniGame);
restartMiniGameButton.addEventListener("click", startMiniGame);
hintButton.addEventListener("click", showHint);
startCrushButton.addEventListener("click", showCrushLevels);
backToCrushHomeButton.addEventListener("click", showCrushHome);
backToLevelsButton.addEventListener("click", showCrushLevels);
crushOverlayButton.addEventListener("click", handleCrushOverlayAction);
closeRewardModalButton.addEventListener("click", closeRewardModal);
rewardModal.addEventListener("click", (event) => {
  if (event.target === rewardModal) closeRewardModal();
});

function loadState() {
  const fallback = makeFreshState();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const loaded = { ...fallback, ...saved };
    if (!loaded.crushHintsUsed || typeof loaded.crushHintsUsed !== "object") loaded.crushHintsUsed = {};
    if (Number(saved.crushProgressVersion || 1) < CRUSH_PROGRESS_VERSION) {
      if (loaded.crushCompleted && loaded.crushUnlockedLevel >= 20) {
        loaded.crushUnlockedLevel = Math.max(loaded.crushUnlockedLevel, 21);
      }
      loaded.crushCompleted = false;
      loaded.crushProgressVersion = CRUSH_PROGRESS_VERSION;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }
    return loaded;
  } catch {
    return fallback;
  }
}

function makeFreshState() {
  return {
    unlocked: [],
    repeatedOnce: [],
    finalUnlocked: false,
    crushUnlockedLevel: 1,
    crushCompleted: false,
    crushHintsUsed: {},
    crushProgressVersion: CRUSH_PROGRESS_VERSION,
    spins: 1,
    extraWonForDay: false,
    lastResetKey: getResetKey(new Date())
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getResetKey(date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: RESET_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const reset = new Date(`${values.year}-${values.month}-${values.day}T12:00:00`);
  if (Number(values.hour) < DAILY_RESET_HOUR) reset.setDate(reset.getDate() - 1);
  return reset.toISOString().slice(0, 10);
}

function refreshDailyState() {
  const key = getResetKey(new Date());
  if (state.lastResetKey !== key) {
    state.spins = 1;
    state.extraWonForDay = false;
    state.lastResetKey = key;
    saveState();
  }
}

function renderAll() {
  drawWheel();
  renderCollection();
  renderControls();
}

function renderControls() {
  if (spinCount) spinCount.textContent = DEV_INFINITE_SPINS ? "∞" : state.spins;
  if (spinButton) spinButton.disabled = (!DEV_INFINITE_SPINS && state.spins <= 0) || spinning;
  if (playMiniGameButton) playMiniGameButton.disabled = false;
  if (restartMiniGameButton) restartMiniGameButton.disabled = false;
  if (resetText) resetText.textContent = "Progreso guardado";
}

function drawWheel() {
  if (!wheelCanvas || !wheelCtx) return;
  const size = wheelCanvas.width;
  const center = size / 2;
  const radius = center - 12;
  const slice = (Math.PI * 2) / rewards.length;

  wheelCtx.clearRect(0, 0, size, size);
  rewards.forEach((reward, index) => {
    const start = -Math.PI / 2 + index * slice;
    const end = start + slice;
    wheelCtx.beginPath();
    wheelCtx.moveTo(center, center);
    wheelCtx.arc(center, center, radius, start, end);
    wheelCtx.closePath();
    wheelCtx.fillStyle = getRarityColor(reward.rarity, index);
    wheelCtx.fill();
    wheelCtx.strokeStyle = "rgba(255,255,255,0.88)";
    wheelCtx.lineWidth = 4;
    wheelCtx.stroke();

    wheelCtx.save();
    wheelCtx.translate(center, center);
    wheelCtx.rotate(start + slice / 2);
    wheelCtx.textAlign = "right";
    wheelCtx.fillStyle = "#512044";
    wheelCtx.font = "900 30px Trebuchet MS";
    wheelCtx.fillText("?", radius - 34, 10);
    wheelCtx.restore();
  });

  wheelCtx.beginPath();
  wheelCtx.arc(center, center, 72, 0, Math.PI * 2);
  wheelCtx.fillStyle = "#fff";
  wheelCtx.fill();
}

function getRarityColor(rarity, index) {
  const colors = {
    comun: ["#a8f2ff", "#7ee6f2", "#c6f8ff"],
    rara: ["#b9f7c6", "#8af2a2", "#d9ffe0"],
    epica: ["#d785ff", "#ff9add", "#c9a7ff"],
    legendaria: ["#ffe978"]
  };
  const palette = colors[rarity];
  return palette[index % palette.length];
}

function renderCollection() {
  if (!collectionGrid) return;
  const unlockedSet = new Set(state.unlocked);
  const visibleRewards = getCollectionRewards();
  const unlockedVisibleCount = visibleRewards.filter((reward) => isRewardUnlocked(reward)).length;
  unlockedCount.textContent = unlockedVisibleCount;
  document.querySelector(".collection-count").innerHTML = `<strong id="unlockedCount">${unlockedVisibleCount}</strong>/${visibleRewards.length}`;
  collectionGrid.innerHTML = visibleRewards.map((reward) => {
    const unlocked = isRewardUnlocked(reward);
    const finalReady = reward.final && isFinalAvailable();
    const enabled = unlocked || finalReady;
    const repeated = state.repeatedOnce.includes(reward.id);
    const title = unlocked ? reward.title : finalReady ? "TOCAME TOCAME TOCAME" : "Carta bloqueada";
    const text = unlocked ? reward.text : finalReady ? "Abrí la carta final." : "Todavía no salió en la ruleta.";
    const repeatNote = repeated ? " · repetida 1/1" : "";

    return `
      <button class="card-tile ${enabled ? "unlocked" : "locked"} ${finalReady && !unlocked ? "final-ready" : ""} rarity-${reward.rarity}" type="button" data-reward-id="${reward.id}" ${enabled ? "" : "disabled"}>
        <div class="card-art">${unlocked ? renderRewardArt(reward) : finalReady ? "💖" : "🔒"}</div>
        <div>
          <span class="rarity-badge">${rarityLabels[reward.rarity]}${repeatNote}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </div>
      </button>
    `;
  }).join("");

  collectionGrid.querySelectorAll(".card-tile.unlocked").forEach((tile) => {
    tile.addEventListener("click", () => {
      const reward = getRewardById(tile.dataset.rewardId);
      if (!reward) return;
      if (reward.final && !state.finalUnlocked) {
        openFinalPrompt();
        return;
      }
      openRewardModal(reward, state.repeatedOnce.includes(reward.id));
    });
  });
}

function getCollectionRewards() {
  return isFinalAvailable() ? [...rewards, finalReward] : rewards;
}

function isRewardUnlocked(reward) {
  if (reward.final) return state.finalUnlocked;
  return state.unlocked.includes(reward.id);
}

function getRewardById(id) {
  if (id === finalReward.id) return finalReward;
  return rewards.find((reward) => reward.id === id);
}

function isFinalAvailable() {
  return rewards.every((reward) => state.unlocked.includes(reward.id));
}

function spinWheel() {
  if (spinning || (!DEV_INFINITE_SPINS && state.spins <= 0)) return;
  refreshDailyState();
  const reward = pickReward();
  if (!reward) {
    showResult(null, "Ya no quedan cartas posibles por ahora.");
    return;
  }

  spinning = true;
  if (!DEV_INFINITE_SPINS) state.spins -= 1;
  renderControls();

  const index = rewards.findIndex((item) => item.id === reward.id);
  const wasRepeated = state.unlocked.includes(reward.id);
  const sliceDegrees = 360 / rewards.length;
  const targetCenter = index * sliceDegrees + sliceDegrees / 2;
  const desiredRotation = (360 - targetCenter) % 360;
  const currentRotation = ((wheelRotation % 360) + 360) % 360;
  const extraTurns = 5 * 360;
  const targetRotation = extraTurns + ((desiredRotation - currentRotation + 360) % 360);
  wheelRotation += targetRotation;
  wheelCanvas.style.transform = `rotate(${wheelRotation}deg)`;

  window.setTimeout(() => {
    unlockReward(reward);
    showResult(reward, "", wasRepeated);
    spinning = false;
    saveState();
    renderAll();
  }, 4200);
}

function pickReward() {
  const unlockedSet = new Set(state.unlocked);
  const repeatedSet = new Set(state.repeatedOnce);
  const locked = rewards.filter((reward) => !unlockedSet.has(reward.id));
  const repeatable = rewards.filter((reward) => unlockedSet.has(reward.id) && !repeatedSet.has(reward.id));
  const shouldRepeat = repeatable.length > 0 && (locked.length === 0 || Math.random() < 0.12);
  const pool = shouldRepeat ? repeatable : locked;

  if (pool.length === 0) return repeatable[0] || null;
  return weightedPick(pool);
}

function weightedPick(pool) {
  const total = pool.reduce((sum, reward) => sum + getRewardWeight(reward), 0);
  let roll = Math.random() * total;
  for (const reward of pool) {
    roll -= getRewardWeight(reward);
    if (roll <= 0) return reward;
  }
  return pool[pool.length - 1];
}

function getRewardWeight(reward) {
  return rarityWeights[reward.rarity] * (reward.weightMultiplier || 1);
}

function unlockReward(reward) {
  if (state.unlocked.includes(reward.id)) {
    if (!state.repeatedOnce.includes(reward.id)) state.repeatedOnce.push(reward.id);
    return;
  }

  state.unlocked.push(reward.id);
  if (reward.id === "legendaria" && isFinalAvailable()) pendingFinalPrompt = true;
}

function showResult(reward, fallbackText, repeated = false) {
  if (!reward) {
    resultCard.className = "result-card empty";
    resultCard.innerHTML = `<span class="result-icon">?</span><h2>Sin premio</h2><p>${fallbackText}</p>`;
    return;
  }

  resultCard.className = `result-card rarity-${reward.rarity}`;
  if (repeated) {
    resultCard.innerHTML = `
      <span class="result-icon">!</span>
      <h2>OOOH NOOO REPETIDAA AMOOOR</h2>
    `;
    openRewardModal(reward, true);
    return;
  }

  resultCard.innerHTML = `
    <div class="result-art">${renderRewardArt(reward)}</div>
    <span class="rarity-badge">${rarityLabels[reward.rarity]}</span>
    <h2>${reward.title}</h2>
    <p>${reward.text}</p>
    ${renderRewardAudio(reward)}
  `;
  openRewardModal(reward, repeated);
}

function renderRewardArt(reward) {
  if (reward.image) {
    return `<img class="reward-image" src="${reward.image}" alt="">`;
  }
  return `<span class="reward-fallback">${reward.icon}</span>`;
}

function renderRewardAudio(reward) {
  if (!reward.audio) return "";
  return `
    <div class="reward-audio">
      <audio controls src="${reward.audio}"></audio>
    </div>
  `;
}

function openRewardModal(reward, repeated) {
  if (repeated) {
    rewardModalContent.innerHTML = `
      <div class="repeat-message">
        <h2 id="rewardModalTitle">OOOH NOOO REPETIDAA AMOOOR</h2>
      </div>
    `;
    rewardModal.classList.remove("hidden");
    return;
  }

  rewardModalContent.innerHTML = `
    <div class="modal-rarity rarity-${reward.rarity}">
      <span class="rarity-badge">${rarityLabels[reward.rarity]}</span>
    </div>
    <div class="modal-reward-art">${renderRewardArt(reward)}</div>
    <h2 id="rewardModalTitle">${reward.title}</h2>
    <p>${reward.text}</p>
    ${renderRewardAudio(reward)}
  `;
  rewardModal.classList.remove("hidden");
}

function closeRewardModal() {
  rewardModal.querySelectorAll("audio").forEach((audio) => audio.pause());
  rewardModal.classList.add("hidden");
  if (pendingFinalPrompt) {
    pendingFinalPrompt = false;
    window.setTimeout(openFinalPrompt, 220);
  }
}

function openFinalPrompt() {
  rewardModalContent.innerHTML = `
    <button class="final-prompt" type="button" id="finalPromptButton">
      <span id="rewardModalTitle">TOCAME TOCAME TOCAME</span>
    </button>
  `;
  rewardModal.classList.remove("hidden");
  document.getElementById("finalPromptButton").addEventListener("click", () => {
    state.finalUnlocked = true;
    saveState();
    openRewardModal(finalReward, false);
    renderCollection();
  });
}

function openMiniGame() {
  miniGameSection.classList.remove("hidden");
  showCrushHome();
}

function closeMiniGame() {
  miniGameSection.classList.add("hidden");
  closeCrushOverlay();
}

function showCrushHome() {
  crushHome.classList.remove("hidden");
  crushLevelsView.classList.add("hidden");
  crushGame.classList.add("hidden");
  closeCrushOverlay();
}

function showCrushLevels() {
  crushHome.classList.add("hidden");
  crushLevelsView.classList.remove("hidden");
  crushGame.classList.add("hidden");
  closeCrushOverlay();
  renderLevelGrid();
}

function showCrushGame() {
  crushHome.classList.add("hidden");
  crushLevelsView.classList.add("hidden");
  crushGame.classList.remove("hidden");
  closeCrushOverlay();
}

function renderLevelGrid() {
  levelGrid.innerHTML = crushLevels.map((level) => {
    const unlocked = level.level <= state.crushUnlockedLevel;
    const completed = level.level < state.crushUnlockedLevel || (state.crushCompleted && level.level === crushLevels.length);
    const milestone = level.level % 5 === 0;
    return `
      <button class="level-button ${completed ? "completed" : ""}" type="button" data-level="${level.level}" ${unlocked ? "" : "disabled"}>
        <span class="level-number">${unlocked ? level.level : "🔒"}</span>
        ${completed ? '<span class="level-star" aria-label="Nivel superado">★</span>' : ""}
        ${milestone && unlocked ? `<span class="level-stamp" aria-label="Hito cada cinco niveles">${level.level === 25 ? "👑" : "🎀"}</span>` : ""}
        <small>${completed ? "Pasado" : unlocked ? `${level.target} combos` : "Bloqueado"}</small>
      </button>
    `;
  }).join("");

  levelGrid.querySelectorAll(".level-button:not(:disabled)").forEach((button) => {
    button.addEventListener("click", () => {
      const level = Number(button.dataset.level);
      startMiniGame(level, level === 21);
    });
  });
}

function startMiniGame(levelNumber = miniGame?.level || state.crushUnlockedLevel || 1, showThresholdIntro = false) {
  const levelConfig = crushLevels.find((level) => level.level === levelNumber) || crushLevels[0];
  miniGame = {
    level: levelConfig.level,
    levelConfig,
    board: createCrushBoard(levelConfig),
    selected: null,
    score: 0,
    moves: levelConfig.moves,
    hintsRemaining: levelConfig.level >= 21
      ? Math.max(0, CRUSH_HINTS_PER_LEVEL - Number(state.crushHintsUsed[levelConfig.level] || 0))
      : null,
    busy: false,
    over: false,
    overlayAction: null
  };
  ensurePlayableBoard();

  showCrushGame();
  currentLevel.textContent = levelConfig.level;
  miniScore.textContent = "0";
  miniTarget.textContent = levelConfig.target;
  miniMoves.textContent = levelConfig.moves;
  miniMessage.textContent = levelConfig.level >= 21
    ? "Desde este nivel, cada combo gasta un movimiento. Tenés tres pistas por nivel bb."
    : "Los combos de mi culona crush son gratis en movimientos. Las bombitas explotan alrededor y ayudan.";
  renderCrushBoard();
  updateHintButton();
  if (showThresholdIntro) {
    showCrushOverlay({
      type: "intro",
      title: "Bien... bien... bien...",
      text: "Apartir de ahora los combos de culonacrush si cuentan como movimiento.... asi que preparate... muejejejej",
      button: "¡A jugar!",
      action: "begin-level"
    });
  }
}

function createCrushBoard(levelConfig = crushLevels[0]) {
  const board = [];
  for (let row = 0; row < CRUSH_SIZE; row += 1) {
    board[row] = [];
    for (let col = 0; col < CRUSH_SIZE; col += 1) {
      board[row][col] = randomPieceAvoidingMatch(board, row, col, levelConfig);
    }
  }
  return board;
}

function randomPieceAvoidingMatch(board, row, col, levelConfig) {
  let piece = randomPiece(levelConfig);
  let guard = 0;
  while (guard < 40 && createsStartingMatch(board, row, col, piece)) {
    piece = randomPiece(levelConfig);
    guard += 1;
  }
  return piece;
}

function createsStartingMatch(board, row, col, piece) {
  const horizontal = col >= 2 && board[row][col - 1] === piece && board[row][col - 2] === piece;
  const vertical = row >= 2 && board[row - 1][col] === piece && board[row - 2][col] === piece;
  return horizontal || vertical;
}

function randomPiece(levelConfig = miniGame?.levelConfig || crushLevels[0]) {
  if (Math.random() < 0.18) return CRUSH_SPECIAL;
  const regularPieces = crushPieces.filter((piece) => piece.id !== CRUSH_SPECIAL && piece.id !== CRUSH_BOMB);
  return regularPieces[Math.floor(Math.random() * regularPieces.length)].id;
}

function renderCrushBoard(exploding = new Set()) {
  crushBoard.innerHTML = "";
  miniScore.textContent = miniGame.score;
  miniMoves.textContent = miniGame.moves;

  miniGame.board.forEach((row, rowIndex) => {
    row.forEach((pieceId, colIndex) => {
      const piece = getCrushPiece(pieceId);
      const button = document.createElement("button");
      const key = cellKey(rowIndex, colIndex);
      button.type = "button";
      button.className = `crush-cell piece-${pieceId}`;
      button.dataset.row = rowIndex;
      button.dataset.col = colIndex;
      button.setAttribute("role", "gridcell");
      button.setAttribute("aria-label", `${piece.label}, fila ${rowIndex + 1}, columna ${colIndex + 1}`);
      button.disabled = miniGame.busy || miniGame.over;
      if (miniGame.selected && miniGame.selected.row === rowIndex && miniGame.selected.col === colIndex) {
        button.classList.add("selected");
      }
      if (exploding.has(key)) button.classList.add("explode");
      if (pieceId === CRUSH_SPECIAL && CRUSH_AVATAR_IMAGE) {
        button.classList.add("has-image");
        const image = document.createElement("img");
        image.className = "crush-avatar";
        image.src = CRUSH_AVATAR_IMAGE;
        image.alt = "";
        image.draggable = false;
        button.appendChild(image);
      } else {
        button.textContent = piece.icon;
      }
      button.addEventListener("click", () => selectCrushCell(rowIndex, colIndex));
      crushBoard.appendChild(button);
    });
  });
}

function findPossibleSwap() {
  let firstRegularMove = null;
  for (let row = 0; row < CRUSH_SIZE; row += 1) {
    for (let col = 0; col < CRUSH_SIZE; col += 1) {
      const neighbors = [];
      if (col + 1 < CRUSH_SIZE) neighbors.push({ row, col: col + 1 });
      if (row + 1 < CRUSH_SIZE) neighbors.push({ row: row + 1, col });

      for (const a of neighbors) {
        const b = { row, col };
        swapCells(a, b);
        const matches = findMatches();
        swapCells(a, b);
        if (matches.size === 0) continue;

        const move = { a, b };
        const scoresCrush = [...matches].some((key) => {
          const cell = parseCellKey(key);
          return miniGame.board[cell.row][cell.col] === CRUSH_SPECIAL;
        });
        if (scoresCrush) return { ...move, scoresCrush: true };
        if (!firstRegularMove) firstRegularMove = { ...move, scoresCrush: false };
      }
    }
  }
  return firstRegularMove;
}

function ensurePlayableBoard() {
  for (let attempt = 0; attempt < 60 && !findPossibleSwap(); attempt += 1) {
    miniGame.board = createCrushBoard(miniGame.levelConfig);
  }
}

function showHint() {
  if (!miniGame || miniGame.busy || miniGame.over) return;
  if (miniGame.level >= 21 && miniGame.hintsRemaining <= 0) {
    miniMessage.textContent = "Te quedaste sin pistas para este nivel bb, confío en vos ✨";
    return;
  }
  const move = findPossibleSwap();
  if (!move) {
    ensurePlayableBoard();
    renderCrushBoard();
    miniMessage.textContent = "Te acomodé el tablero bb, ahora sí hay jugadas ✨";
    return;
  }

  if (miniGame.level >= 21) {
    miniGame.hintsRemaining -= 1;
    state.crushHintsUsed[miniGame.level] = Number(state.crushHintsUsed[miniGame.level] || 0) + 1;
    saveState();
    updateHintButton();
  }

  const first = crushBoard.querySelector(`[data-row="${move.a.row}"][data-col="${move.a.col}"]`);
  const second = crushBoard.querySelector(`[data-row="${move.b.row}"][data-col="${move.b.col}"]`);
  first?.classList.add("hinted");
  second?.classList.add("hinted");
  miniMessage.textContent = move.scoresCrush
    ? "¡Acá podés hacer combo de mi culona crush! ✨"
    : "Probá este cambio bb, prepara un combo ✨";
  window.setTimeout(() => {
    first?.classList.remove("hinted");
    second?.classList.remove("hinted");
  }, 1800);
}

function updateHintButton() {
  if (!miniGame || miniGame.level < 21) {
    hintButton.textContent = "✦ Pista";
    hintButton.removeAttribute("aria-label");
    return;
  }
  hintButton.textContent = `✦ Pista (${miniGame.hintsRemaining}/${CRUSH_HINTS_PER_LEVEL})`;
  hintButton.setAttribute("aria-label", `Pistas restantes: ${miniGame.hintsRemaining} de ${CRUSH_HINTS_PER_LEVEL}`);
}

function selectCrushCell(row, col) {
  if (!miniGame || miniGame.busy || miniGame.over) return;
  if (!miniGame.selected) {
    miniGame.selected = { row, col };
    renderCrushBoard();
    return;
  }

  const first = miniGame.selected;
  miniGame.selected = null;

  if (first.row === row && first.col === col) {
    renderCrushBoard();
    return;
  }

  if (!areNeighbors(first, { row, col })) {
    miniGame.selected = { row, col };
    renderCrushBoard();
    return;
  }

  attemptSwap(first, { row, col });
}

function areNeighbors(a, b) {
  return Math.abs(a.row - b.row) + Math.abs(a.col - b.col) === 1;
}

function attemptSwap(a, b) {
  swapCells(a, b);
  const matches = findMatches();
  if (matches.size === 0) {
    swapCells(a, b);
    miniMessage.textContent = "Ese cambio no sirve bb jiji";
    renderCrushBoard();
    return;
  }

  const scoresCrushCombo = [...matches].some((key) => {
    const { row, col } = parseCellKey(key);
    return miniGame.board[row][col] === CRUSH_SPECIAL;
  });
  if (miniGame.level >= 21 || !scoresCrushCombo) miniGame.moves -= 1;
  resolveMatches(matches);
}

function swapCells(a, b) {
  const board = miniGame.board;
  const temp = board[a.row][a.col];
  board[a.row][a.col] = board[b.row][b.col];
  board[b.row][b.col] = temp;
}

function expandBombMatches(matches) {
  const expanded = new Set(matches);
  matches.forEach((key) => {
    const { row, col } = parseCellKey(key);
    if (miniGame.board[row][col] !== CRUSH_BOMB) return;
    for (let blastRow = row - 1; blastRow <= row + 1; blastRow += 1) {
      for (let blastCol = col - 1; blastCol <= col + 1; blastCol += 1) {
        if (blastRow >= 0 && blastRow < CRUSH_SIZE && blastCol >= 0 && blastCol < CRUSH_SIZE) {
          expanded.add(cellKey(blastRow, blastCol));
        }
      }
    }
  });
  return expanded;
}

function findMatches() {
  const matches = new Set();

  for (let row = 0; row < CRUSH_SIZE; row += 1) {
    let start = 0;
    for (let col = 1; col <= CRUSH_SIZE; col += 1) {
      if (col < CRUSH_SIZE && miniGame.board[row][col] === miniGame.board[row][start]) continue;
      if (col - start >= 3 && miniGame.board[row][start] !== CRUSH_BOMB) {
        for (let matchCol = start; matchCol < col; matchCol += 1) {
          matches.add(cellKey(row, matchCol));
        }
      }
      start = col;
    }
  }

  for (let col = 0; col < CRUSH_SIZE; col += 1) {
    let start = 0;
    for (let row = 1; row <= CRUSH_SIZE; row += 1) {
      if (row < CRUSH_SIZE && miniGame.board[row][col] === miniGame.board[start][col]) continue;
      if (row - start >= 3 && miniGame.board[start][col] !== CRUSH_BOMB) {
        for (let matchRow = start; matchRow < row; matchRow += 1) {
          matches.add(cellKey(matchRow, col));
        }
      }
      start = row;
    }
  }

  miniGame.board.forEach((row, bombRow) => {
    row.forEach((piece, bombCol) => {
      if (piece !== CRUSH_BOMB) return;
      for (const [rowStep, colStep] of [[0, 1], [1, 0]]) {
        for (let offset = -2; offset <= 0; offset += 1) {
          const line = Array.from({ length: 3 }, (_, index) => ({
            row: bombRow + (offset + index) * rowStep,
            col: bombCol + (offset + index) * colStep
          }));
          if (line.some(({ row: r, col: c }) => r < 0 || r >= CRUSH_SIZE || c < 0 || c >= CRUSH_SIZE)) continue;
          const otherPieces = line
            .filter(({ row: r, col: c }) => miniGame.board[r][c] !== CRUSH_BOMB)
            .map(({ row: r, col: c }) => miniGame.board[r][c]);
          if (otherPieces.length !== 2 || otherPieces[0] !== otherPieces[1]) continue;
          line.forEach(({ row: r, col: c }) => matches.add(cellKey(r, c)));
        }
      }
    });
  });

  return matches;
}

function resolveMatches(matches) {
  miniGame.busy = true;
  const specialMatched = [...matches].some((key) => {
    const { row, col } = parseCellKey(key);
    return miniGame.board[row][col] === CRUSH_SPECIAL;
  });
  const bombCreation = findBombCreation(matches);
  const clearedMatches = expandBombMatches(matches);
  if (bombCreation) {
    miniGame.board[bombCreation.row][bombCreation.col] = CRUSH_BOMB;
    clearedMatches.delete(cellKey(bombCreation.row, bombCreation.col));
  }

  if (specialMatched) {
    miniGame.score = Math.min(miniGame.levelConfig.target, miniGame.score + 1);
    const remaining = Math.max(0, miniGame.levelConfig.target - miniGame.score);
    miniMessage.textContent = remaining === 0
      ? `Muy bien mor <3 ${miniGame.score}/${miniGame.levelConfig.target}. Nivel completado.`
      : `Muy bien mor <3 ${miniGame.score}/${miniGame.levelConfig.target}. Te faltan ${remaining}.`;
  } else {
    miniMessage.textContent = "Ese combo explotó lindo, pero no cuenta. Solo cuenta mi culona crush.";
  }

  renderCrushBoard(clearedMatches);
  spawnComboSparkles(clearedMatches);
  if (specialMatched) spawnHeartBurst(matches);

  window.setTimeout(() => {
    clearMatches(clearedMatches);
    dropPieces();
    fillBoard();
    if (miniGame.score >= miniGame.levelConfig.target) {
      miniGame.busy = false;
      renderCrushBoard();
      checkMiniGameEnd();
      return;
    }

    const cascades = findMatches();
    if (cascades.size > 0) {
      resolveMatches(cascades);
      return;
    }

    miniGame.busy = false;
    checkMiniGameEnd();
    if (miniGame.over) return;
    if (!findPossibleSwap()) {
      ensurePlayableBoard();
      miniMessage.textContent = "No había jugadas bb, te acomodé el tablero ✨";
    }
    renderCrushBoard();
  }, 360);
}

function findBombCreation(matches) {
  for (let row = 0; row < CRUSH_SIZE; row += 1) {
    for (let start = 0; start < CRUSH_SIZE - 3; start += 1) {
      const piece = miniGame.board[row][start];
      if (!piece || piece === CRUSH_SPECIAL || piece === CRUSH_BOMB) continue;
      const run = [];
      for (let col = start; col < CRUSH_SIZE && miniGame.board[row][col] === piece; col += 1) run.push({ row, col });
      if (run.length >= 4 && run.filter((cell) => matches.has(cellKey(cell.row, cell.col))).length >= 4) {
        const keep = run[Math.floor(run.length / 2)];
        return keep;
      }
    }
  }

  for (let col = 0; col < CRUSH_SIZE; col += 1) {
    for (let start = 0; start < CRUSH_SIZE - 3; start += 1) {
      const piece = miniGame.board[start][col];
      if (!piece || piece === CRUSH_SPECIAL || piece === CRUSH_BOMB) continue;
      const run = [];
      for (let row = start; row < CRUSH_SIZE && miniGame.board[row][col] === piece; row += 1) run.push({ row, col });
      if (run.length >= 4 && run.filter((cell) => matches.has(cellKey(cell.row, cell.col))).length >= 4) {
        const keep = run[Math.floor(run.length / 2)];
        return keep;
      }
    }
  }
  return null;
}

function clearMatches(matches) {
  matches.forEach((key) => {
    const { row, col } = parseCellKey(key);
    miniGame.board[row][col] = null;
  });
}

function dropPieces() {
  for (let col = 0; col < CRUSH_SIZE; col += 1) {
    const stack = [];
    for (let row = CRUSH_SIZE - 1; row >= 0; row -= 1) {
      const piece = miniGame.board[row][col];
      if (piece) stack.push(piece);
    }
    for (let row = CRUSH_SIZE - 1; row >= 0; row -= 1) {
      miniGame.board[row][col] = stack.shift() || null;
    }
  }
}

function fillBoard() {
  for (let row = 0; row < CRUSH_SIZE; row += 1) {
    for (let col = 0; col < CRUSH_SIZE; col += 1) {
      if (!miniGame.board[row][col]) miniGame.board[row][col] = randomPiece(miniGame.levelConfig);
    }
  }
}

function checkMiniGameEnd() {
  if (miniGame.score >= miniGame.levelConfig.target) {
    finishMiniGame(true);
    return;
  }

  if (miniGame.moves <= 0) finishMiniGame(false);
}

function finishMiniGame(won) {
  miniGame.over = true;

  if (won) {
    const nextLevel = Math.min(crushLevels.length, miniGame.level + 1);
    if (miniGame.level === state.crushUnlockedLevel && state.crushUnlockedLevel < crushLevels.length) {
      state.crushUnlockedLevel = nextLevel;
    }
    if (miniGame.level === crushLevels.length) state.crushCompleted = true;
    if (!state.extraWonForDay) {
      state.spins += 1;
      state.extraWonForDay = true;
    }
    saveState();
    miniMessage.textContent = "Nivel completado.";
    showCrushOverlay({
      type: "win",
      title: miniGame.level >= 11 ? `¡Nivel ${miniGame.level} superado!` : "MUY BIEN AMORRR Q PRO QUE SOSSS <3",
      text: miniGame.levelConfig.message || "(mi gordita crush *-)",
      button: "Siguiente",
      action: miniGame.level === crushLevels.length ? "victory" : "next"
    });
  } else {
    showCrushOverlay({
      type: "lose",
      title: "Uy, casi bb",
      text: "No pasa nada mi amor, intentalo de vuelta que como siempre vas a pasarlo mi vida",
      button: "Reintentar",
      action: "retry"
    });
  }

  renderCrushBoard();
  renderControls();
}

function showCrushOverlay({ type, title, text, button, action }) {
  miniGame.overlayAction = action;
  crushOverlayTitle.textContent = title;
  crushOverlayText.textContent = text;
  crushOverlayButton.textContent = button;
  crushOverlayCard.className = `crush-overlay-card ${type === "lose" ? "kiss-zoom" : ""} ${type === "final" ? "final-card" : ""}`;
  crushOverlay.classList.remove("hidden");
}

function closeCrushOverlay() {
  crushOverlay.classList.add("hidden");
}

function handleCrushOverlayAction() {
  const action = miniGame?.overlayAction;
  closeCrushOverlay();
  if (action === "next") {
    const nextLevel = Math.min(crushLevels.length, miniGame.level + 1);
    startMiniGame(nextLevel, nextLevel === 21);
    return;
  }
  if (action === "begin-level") {
    startMiniGame(21);
    return;
  }
  if (action === "victory") {
    showCrushOverlay({
      type: "final",
      title: "VICTORIA",
      text: "muy bien mi amor, que guapota que sos, como siempre superando los obstaculos dificiles para llegar a tu objetivo como siempre hiciste mi vida, mi monona hermosa, fish fish fish jijiji<3",
      button: "Volver a niveles",
      action: "levels"
    });
    return;
  }
  if (action === "retry") {
    startMiniGame(miniGame.level);
    return;
  }
  if (action === "levels") {
    showCrushLevels();
    return;
  }
  if (action === "home") {
    showCrushHome();
    return;
  }
  showCrushLevels();
}

function spawnHeartBurst(matches) {
  const specialKeys = [...matches].filter((key) => {
    const { row, col } = parseCellKey(key);
    return miniGame.board[row][col] === CRUSH_SPECIAL;
  });

  specialKeys.forEach((key) => {
    const cell = crushBoard.querySelector(`[data-row="${parseCellKey(key).row}"][data-col="${parseCellKey(key).col}"]`);
    if (!cell) return;
    const boardRect = crushBoard.getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();
    const centerX = cellRect.left - boardRect.left + cellRect.width / 2;
    const centerY = cellRect.top - boardRect.top + cellRect.height / 2;

    for (let index = 0; index < 10; index += 1) {
      const heart = document.createElement("span");
      const angle = (Math.PI * 2 * index) / 10;
      const distance = 28 + Math.random() * 24;
      heart.className = "heart-burst";
      heart.textContent = index % 2 === 0 ? "♥" : "♡";
      heart.style.left = `${centerX}px`;
      heart.style.top = `${centerY}px`;
      heart.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      heart.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
      heart.style.animationDelay = `${Math.random() * 80}ms`;
      crushBoard.appendChild(heart);
      window.setTimeout(() => heart.remove(), 780);
    }
  });
}

function spawnComboSparkles(matches) {
  [...matches].slice(0, 12).forEach((key, index) => {
    const { row, col } = parseCellKey(key);
    const cell = crushBoard.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (!cell) return;

    const boardRect = crushBoard.getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();
    const sparkle = document.createElement("span");
    sparkle.className = "combo-sparkle";
    sparkle.textContent = index % 3 === 0 ? "✦" : "✧";
    sparkle.style.left = `${cellRect.left - boardRect.left + cellRect.width / 2}px`;
    sparkle.style.top = `${cellRect.top - boardRect.top + cellRect.height / 2}px`;
    sparkle.style.setProperty("--sparkle-delay", `${(index % 4) * 35}ms`);
    crushBoard.appendChild(sparkle);
    window.setTimeout(() => sparkle.remove(), 700);
  });
}

function getCrushPiece(id) {
  return crushPieces.find((piece) => piece.id === id) || crushPieces[0];
}

function cellKey(row, col) {
  return `${row}-${col}`;
}

function parseCellKey(key) {
  const [row, col] = key.split("-").map(Number);
  return { row, col };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

refreshDailyState();
drawWheel();
