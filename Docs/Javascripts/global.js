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
    { name: "Yeti 777", image: "./Docs/Assets/0.jpg", link: "https://yeti777.xyz" },
    { name: "Firekirin", image: "./Docs/Assets/1.jpg", link: "" },
    { name: "Orionstar", image: "./Docs/Assets/2.jpg", link: "https://orionstars.vip:8781/default.aspx?638788524264582586" },
    { name: "Juwa", image: "./Docs/Assets/3.jpg", link: "https://ht.juwa777.com/login" },
    { name: "GameVault", image: "./Docs/Assets/4.jpg", link: "https://agent.gamevault999.com/login" },
    { name: "CasinoRoyale", image: "./Docs/Assets/5.jpg", link: "https://agent.casinoroyale07.com/login" },
    { name: "VegasSwee", image: "./Docs/Assets/6.jpg", link: "https://agent.lasvegassweeps.com/login" },
    { name: "MIlky1Nay", image: "./Docs/Assets/7.jpg", link: "https://milkywayapp.xyz:8781/default.aspx?638788524292114313" },
    { name: "Ultra Panda", image: "./Docs/Assets/8.jpg", link: "https://ht.ultrapanda.mobi/#/manage-user/account" },
    { name: "Cash Frenzy", image: "./Docs/Assets/9.jpg", link: "https://agentserver.cashfrenzy777.com:8003/admin" },
    { name: "Pandamaster", image: "./Docs/Assets/10.jpg", link: "https://www.google.com/" },
    { name: "Vblink", image: "./Docs/Assets/11.jpg", link: "https://gm.vblink777.club/" },
    { name: "River Sweeps", image: "./Docs/Assets/12.png", link: "https://river-pay.com/office/login" },
    { name: "HighStake", image: "./Docs/Assets/13.jpg", link: "https://ht.highstakesweeps.com/login" },
    { name: "VegasX", image: "./Docs/Assets/14.png", link: "https://cashier.vegas-x.org/login" },
    { name: "Acebook", image: "./Docs/Assets/15.jpg", link: "https://djwae.playacebook.mobi/#/login?redirect=%2Fmanage-user%2Faccount" },
    { name: "Blue Dragon", image: "./Docs/Assets/16.jpg", link: "https://agent.bluedragon777.com/Login.aspx" },
    { name: "Para", image: "./Docs/Assets/17.jpg", link: "https://agent.paracasino.net/#/pages/login/login" },
    { name: "River Monster", image: "./Docs/Assets/18.png", link: "" },
    { name: "Moolah", image: "./Docs/Assets/19.jpg", link: "https://moolah.vip:8781/default.aspx?638294807507914993" },
    { name: "Sirus", image: "./Docs/Assets/20.jpg", link: "https://agent.gamesirius999.com/login" },
    { name: "Meaga Spin", image: "./Docs/Assets/21.jpg", link: "" },
    { name: "Egames", image: "./Docs/Assets/22.jpg", link: "https://pko.egame99.club/#/login?redirect=%2Freport%2Fagent-total-profit" },
    { name: "Loot", image: "./Docs/Assets/23.jpg", link: "https://client.lootgame777.com/login" },
    { name: "Ignite", image: "./Docs/Assets/24.jpg", link: "https://agent.casinoignite.vip/#/pages/login/login" },
];

const playerContainer = document.querySelector(".playerLink");

players.forEach(player => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("w-full", "hover:bg-[#212121]", "p-3", "rounded-lg", "cursor-pointer", "transition-all", "duration-500", "hover:-translate-y-1.5", "fadeIn");

    playerCard.innerHTML = `
        <a href="${player.link}">
        <img src="${player.image}" class="rounded-lg md:h-40 h-28 object-cover" alt="${player.name}">
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
    { name: "Yeti 777", image: "./Docs/Assets/0.jpg", link: "https://yeti777.vip" },
    { name: "Firekirin", image: "./Docs/Assets/1.jpg", link: "" },
    { name: "Orionstar", image: "./Docs/Assets/2.jpg", link: "https://orionstars.vip:8781/default.aspx?638788639653281932" },
    { name: "Juwa", image: "./Docs/Assets/3.jpg", link: "https://ht.juwa777.com/login" },
    { name: "GameVault", image: "./Docs/Assets/4.jpg", link: "https://agent.gamevault999.com/login" },
    { name: "CasinoRoyale", image: "./Docs/Assets/5.jpg", link: "https://agent.casinoroyale07.com/login" },
    { name: "VegasSwee", image: "./Docs/Assets/6.jpg", link: "https://agent.lasvegassweeps.com/login" },
    { name: "MIlky1Nay", image: "./Docs/Assets/7.jpg", link: "https://milkywayapp.xyz:8781/default.aspx?638788524292114313" },
    { name: "Ultra Panda", image: "./Docs/Assets/8.jpg", link: "https://ht.ultrapanda.mobi/#/manage-user/account" },
    { name: "Cash Frenzy", image: "./Docs/Assets/9.jpg", link: "https://agentserver.cashfrenzy777.com:8003/admin" },
    { name: "Pandamaster", image: "./Docs/Assets/10.jpg", link: "https://www.google.com/" },
    { name: "Vblink", image: "./Docs/Assets/11.jpg", link: "https://gm.vblink777.club/" },
    { name: "River Sweeps", image: "./Docs/Assets/12.png", link: "https://river-pay.com/office/login" },
    { name: "HighStake", image: "./Docs/Assets/13.jpg", link: "https://ht.highstakesweeps.com/login" },
    { name: "VegasX", image: "./Docs/Assets/14.png", link: "https://cashier.vegas-x.org/login" },
    { name: "Acebook", image: "./Docs/Assets/15.jpg", link: "https://djwae.playacebook.mobi/#/login?redirect=%2Fmanage-user%2Faccount" },
    { name: "Blue Dragon", image: "./Docs/Assets/16.jpg", link: "https://agent.bluedragon777.com/Login.aspx" },
    { name: "Para", image: "./Docs/Assets/17.jpg", link: "https://agent.paracasino.net/#/" },
    { name: "River Monster", image: "./Docs/Assets/18.png", link: "" },
    { name: "Moolah", image: "./Docs/Assets/19.jpg", link: "https://moolah.vip:8781/default.aspx?638294807507914993" },
    { name: "Sirus", image: "./Docs/Assets/20.jpg", link: "https://agent.gamesirius999.com/login" },
    { name: "Meaga Spin", image: "./Docs/Assets/21.jpg", link: "" },
    { name: "Egames", image: "./Docs/Assets/22.jpg", link: "https://pko.egame99.club/#/login?redirect=%2Freport%2Fagent-total-profit" },
    { name: "Loot", image: "./Docs/Assets/23.jpg", link: "https://client.lootgame777.com/login" },
    { name: "Ignite", image: "./Docs/Assets/24.jpg", link: "https://agent.casinoignite.vip/#/pages/login/login" },
];

const agentContainer = document.querySelector(".agentLink");

agents.forEach(agent => {
    const agentCard = document.createElement("div");
    agentCard.classList.add("w-full", "hover:bg-[#212121]", "p-3", "rounded-lg", "cursor-pointer", "transition-all", "duration-500", "hover:-translate-y-1.5", "fadeIn");

    agentCard.innerHTML = `
        <a href="https://yeti777.vip">
        <img src="${agent.image}" class="rounded-lg md:h-40 h-28 object-cover" alt="${agent.name}">
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
    agentBtn.classList.remove("text-white", "border-white")
    agentBtn.classList.add("yellow", "border-[#fbd827]")
    playerBtn.classList.add("text-white", "border-white")
    playerBtn.classList.remove("yellow", "border-[#fbd827]")
})

playerBtn.addEventListener('click', () => {
    agentContainer.classList.add("hidden");
    agentContainer.classList.remove("grid");
    playerContainer.classList.remove("hidden");
    playerContainer.classList.add("grid");
    playerBtn.classList.remove("text-white", "border-white")
    playerBtn.classList.add("yellow", "border-[#fbd827]")
    agentBtn.classList.add("text-white", "border-white")
    agentBtn.classList.remove("yellow", "border-[#fbd827]")
})

// Rules

const closeRuleBtn = document.getElementById("closeRuleBtn")
const ruleBtn = document.getElementById("ruleBtn")
const rulesOverlay = document.getElementById("rulesOverlay")

ruleBtn.addEventListener('click', () => {
    rulesOverlay.classList.remove("hidden")
    rules.classList.remove("hidden")
})

rulesOverlay.addEventListener('click', () => {
    rulesOverlay.classList.add("hidden")
    rules.classList.add("hidden")
})

closeRuleBtn.addEventListener('click', () => {
    rulesOverlay.classList.add("hidden")
    rules.classList.add("hidden")
})