let handler = async m => m.reply(`

sᴄʀɪᴘᴛ ʀᴀɢɪʟ ʙᴏᴛ 
https://www.mediafire.com/file/h03rep1uc50mxvj/cs+bot+ragil.zip/file

ɴᴏᴅᴇ ᴍᴏᴅᴜʟᴇs
https://www.mediafire.com/file/hgev91xtv2pvr0g/node_modules.zip/file
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sc','script']
handler.tags = ['main','info']
handler.command = /^sc|script$/i
handler.register =false

export default handler
