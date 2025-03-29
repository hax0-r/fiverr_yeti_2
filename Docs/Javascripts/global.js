var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    speed: 700,
});

// player link

const players = [
    { name: "Firekirin", image: "./Docs/Assets/logo.jpg" },
    { name: "Orionstar", image: "./Docs/Assets/logo.jpg" },
    { name: "Juwa", image: "./Docs/Assets/logo.jpg" },
    { name: "GameVault", image: "./Docs/Assets/logo.jpg" },
    { name: "CasinoRoyale", image: "./Docs/Assets/logo.jpg" },
    { name: "VegasSwee", image: "./Docs/Assets/logo.jpg" },
    { name: "MIlky1Nay", image: "./Docs/Assets/logo.jpg" },
    { name: "Ultra Panda", image: "./Docs/Assets/logo.jpg" },
    { name: "Cash Frenzy", image: "./Docs/Assets/logo.jpg" },
    { name: "Pandamaster", image: "./Docs/Assets/logo.jpg" },
    { name: "Vblink", image: "./Docs/Assets/logo.jpg" },
    { name: "River Sweeps", image: "./Docs/Assets/logo.jpg" },
    { name: "HighStake", image: "./Docs/Assets/logo.jpg" },
    { name: "VegasX", image: "./Docs/Assets/logo.jpg" },
    { name: "Acebook", image: "./Docs/Assets/logo.jpg" },
    { name: "Blue Dragon", image: "./Docs/Assets/logo.jpg" },
    { name: "Para", image: "./Docs/Assets/logo.jpg" },
    { name: "River Monster", image: "./Docs/Assets/logo.jpg" },
    { name: "Moolah", image: "./Docs/Assets/logo.jpg" },
    { name: "Sirus", image: "./Docs/Assets/logo.jpg" },
    { name: "Meaga Spin", image: "./Docs/Assets/logo.jpg" },
    { name: "Egames", image: "./Docs/Assets/logo.jpg" },
    { name: "Loot", image: "./Docs/Assets/logo.jpg" },
    { name: "Ignite", image: "./Docs/Assets/logo.jpg" },
];

const playerContainer = document.querySelector(".playerLink");

players.forEach(player => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("w-full", "hover:bg-[#212121]", "p-3", "rounded-lg", "cursor-pointer", "transition-all", "duration-500", "hover:-translate-y-1.5", "fadeIn");

    playerCard.innerHTML = `
        <a href="https://yeti777.xyz">
        <img src="${player.image}" class="rounded-lg" alt="${player.name}">
        <div class="flex mt-5 items-center justify-center">
            <h3 class="yellow cursor-pointer text-2xl px-3 pb-2.5 pt-1.5 border-y-2 border-[#fbd827]">
                ${player.name}
            </h3>
        </div>
        </a>
    `;

    playerContainer.appendChild(playerCard);
});

// agent link

const agents = [
    { name: "Firekirin", image: "./Docs/Assets/logo.jpg" },
    { name: "Orionstar", image: "./Docs/Assets/logo.jpg" },
    { name: "Juwa", image: "./Docs/Assets/logo.jpg" },
    { name: "GameVault", image: "./Docs/Assets/logo.jpg" },
    { name: "CasinoRoyale", image: "./Docs/Assets/logo.jpg" },
    { name: "VegasSwee", image: "./Docs/Assets/logo.jpg" },
    { name: "MIlky1Nay", image: "./Docs/Assets/logo.jpg" },
    { name: "Ultra Panda", image: "./Docs/Assets/logo.jpg" },
    { name: "Cash Frenzy", image: "./Docs/Assets/logo.jpg" },
    { name: "Pandamaster", image: "./Docs/Assets/logo.jpg" },
    { name: "Vblink", image: "./Docs/Assets/logo.jpg" },
    { name: "River Sweeps", image: "./Docs/Assets/logo.jpg" },
    { name: "HighStake", image: "./Docs/Assets/logo.jpg" },
    { name: "VegasX", image: "./Docs/Assets/logo.jpg" },
    { name: "Acebook", image: "./Docs/Assets/logo.jpg" },
    { name: "Blue Dragon", image: "./Docs/Assets/logo.jpg" },
    { name: "Para", image: "./Docs/Assets/logo.jpg" },
    { name: "River Monster", image: "./Docs/Assets/logo.jpg" },
    { name: "Moolah", image: "./Docs/Assets/logo.jpg" },
    { name: "Sirus", image: "./Docs/Assets/logo.jpg" },
    { name: "Meaga Spin", image: "./Docs/Assets/logo.jpg" },
    { name: "Egames", image: "./Docs/Assets/logo.jpg" },
    { name: "Loot", image: "./Docs/Assets/logo.jpg" },
    { name: "Ignite", image: "./Docs/Assets/logo.jpg" },
];

const agentContainer = document.querySelector(".agentLink");

agents.forEach(agent => {
    const agentCard = document.createElement("div");
    agentCard.classList.add("w-full", "hover:bg-[#212121]", "p-3", "rounded-lg", "cursor-pointer", "transition-all", "duration-500", "hover:-translate-y-1.5", "fadeIn");

    agentCard.innerHTML = `
        <a href="https://yeti777.vip">
        <img src="${agent.image}" class="rounded-lg" alt="${agent.name}">
        <div class="flex mt-5 items-center justify-center">
            <h3 class="yellow cursor-pointer text-2xl px-3 pb-2.5 pt-1.5 border-y-2 border-[#fbd827]">
                ${agent.name}
            </h3>
        </div>
        </a>
    `;

    agentContainer.appendChild(agentCard);
});

// condition

const agentBtn = document.getElementById("agentBtn");
const playerBtn = document.getElementById("playerBtn");

agentBtn.addEventListener('click', () => {
    agentContainer.classList.add("grid");
    agentContainer.classList.remove("hidden");
    playerContainer.classList.remove("grid");
    playerContainer.classList.add("hidden");
    agentBtn.classList.add("text-white", "border-white")
    agentBtn.classList.remove("yellow","border-[#fbd827]")
    playerBtn.classList.remove("text-white", "border-white")
    playerBtn.classList.add("yellow","border-[#fbd827]")
})

playerBtn.addEventListener('click', () => {
    agentContainer.classList.add("hidden");
    agentContainer.classList.remove("grid");
    playerContainer.classList.remove("hidden");
    playerContainer.classList.add("grid");
    playerBtn.classList.add("text-white", "border-white")
    playerBtn.classList.remove("yellow","border-[#fbd827]")
    agentBtn.classList.remove("text-white", "border-white")
    agentBtn.classList.add("yellow","border-[#fbd827]")
})