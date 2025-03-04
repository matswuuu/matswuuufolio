type Project = {
    name: string,
    description: string,
    link?: string,
    logo?: string,
}

const PROJECTS: Project[]  = [
    {
        name: "BeeSwarm",
        description: "Адаптация популярной игры из Roblox",
        link: "https://cristalix.gg/info/minigames/beeswarm"
    },
    {
        name: "Sprukkit",
        description: "Spring Boot Starter для Bukkit плагинов с готовыми решениями"
    },
    {
        name: "SCP",
        description: "Адаптация игры SCP: Secret Laboratory"
    },
    {
        name: "MLSH chatrix",
        description: "Школьный сайт-мессенджер для общения между учащимися, учителями и их родителями",
        link: "https://github.com/matswuuu/mlsh-chatrix"
    },
    {
        name: "Botstalix",
        description: "Java обертка Discord API"
    },
    {
        name: "Cristalix Account Changer",
        description: "Программа для смены аккаунтов в лаунчере Cristalix",
        link: "https://github.com/matswuuu/Cristalix-AccountChanger"
    },
    {
        name: "Discord Auto Poster",
        description: "Программа для автоматической отправки сообщений в Discord",
        link: "https://github.com/matswuuu/Discord-AutoPost"
    },
    {
        name: "Sponge Counter",
        description: "Калькулятор внутриигровых вещей на Minecraft сервере",
        link: "https://spongecounter.vercel.app/"
    }
]

export default PROJECTS;