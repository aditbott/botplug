let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `“${gcbot.getRandom()}”`, author, ['ᴍᴇɴᴜ', `${usedPrefix}menu di`], m)

handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^(gcbot)$/i

export default handler


// https://jalantikus.com/tips/kata-kata-bucin/
const gcbot = [
    "Ga join ga kece 🗿\n https://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY  ",
    "Join kuy, dijamin betah 🗿\n https://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY  ",
    "join gc, anak dibawah umur gaboleh masuk 🗿\n https://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY  "
]