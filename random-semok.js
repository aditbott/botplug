let handler = async (m, { conn, text }) => {
    let yh = global.semok
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, 'RANDOM SEMOK', 'by ragil bot 🗿🏳️‍🌈', url, [['NEXT', '#semok']], m)
  }
  handler.command = /^(semok)$/i
  handler.tags = ['random pict']
  handler.help = ['semok']
  
  handler.limit = true
  
  export default handler
  
  global.semok = [
"https://i.pinimg.com/236x/b4/89/67/b48967035211fbfcf665ffffc684b8a6.jpg",
"https://i.pinimg.com/236x/a6/ba/06/a6ba066279d66321c14f514d2dadfe98.jpg",
"https://i.pinimg.com/236x/6e/ec/df/6eecdfb34ed978a113d5b7672bf89b71.jpg",
"https://i.pinimg.com/236x/5d/dc/04/5ddc040268fbfb11850461fb8579de11.jpg",
"https://i.pinimg.com/236x/03/cd/4f/03cd4f04d095c51da8fdb0247ebe96b3.jpg",
"https://i.pinimg.com/236x/8a/64/46/8a6446449049efe962bb71e7990e1c73.jpg",
"https://i.pinimg.com/236x/4b/ad/7a/4bad7a03a8b763dd02919a2d4dc13664.jpg",
"https://i.pinimg.com/236x/b7/9e/bb/b79ebbd41ea1298ae0779b67dbe4fe7e.jpg",
"https://i.pinimg.com/236x/c4/f7/87/c4f7876cd94c9f756db5c3cdca3558b4.jpg",
"https://i.pinimg.com/236x/f7/c5/6b/f7c56bf79404a1b0d8c0ea5f70c63de7.jpg",
"https://i.pinimg.com/236x/16/43/ed/1643ed11b36813d804b6ef4fd12b0704.jpg",
"https://i.pinimg.com/236x/59/b0/ce/59b0ceae0da401d0803d577de44a89b0.jpg",
"https://i.pinimg.com/236x/71/08/5a/71085a58216024376ac2da75215124fd.jpg",
"https://i.pinimg.com/236x/2d/a2/f5/2da2f5641a1a9a08198355b87be9a8da.jpg",
"https://i.pinimg.com/236x/be/38/66/be386612bc1f75bf53c170486b516b51.jpg",
"https://i.pinimg.com/236x/18/8e/4d/188e4d45a26fbbe3fc6f7f4741a334c9.jpg",
"https://i.pinimg.com/236x/7f/04/64/7f0464dda4d681bbbe84e2bc8be210f3.jpg",
"https://i.pinimg.com/236x/8d/a4/f1/8da4f19429bf2c4272b46ea9e287b485.jpg",
"https://i.pinimg.com/236x/bc/ea/a4/bceaa40aeb3fcfa1db0def59e4e7e129.jpg",
"https://i.pinimg.com/236x/24/2c/cb/242ccbbc5c9946ac8b55879d3bcaef3c.jpg",
"https://i.pinimg.com/236x/b6/31/74/b63174334be34f20a9625450a48f648e.jpg",
"https://i.pinimg.com/236x/c4/07/09/c4070910cdc5bee07088560303e053bd.jpg",
"https://i.pinimg.com/236x/24/a5/51/24a551daaa80c9329230ad32fa8b8332.jpg",
"https://i.pinimg.com/236x/bd/73/d1/bd73d158c1843b1ec0333e24bab56d51.jpg",
"https://i.pinimg.com/236x/53/ee/72/53ee7252a9665d85760beb4747799000.jpg",
"https://i.pinimg.com/236x/5d/dc/04/5ddc040268fbfb11850461fb8579de11.jpg",
"https://i.pinimg.com/236x/d1/b7/ad/d1b7ad96e8f6252d659842764c7cc79d.jpg",
"https://i.pinimg.com/236x/b6/31/74/b63174334be34f20a9625450a48f648e.jpg",
"https://i.pinimg.com/236x/c4/07/09/c4070910cdc5bee07088560303e053bd.jpg",
"https://i.pinimg.com/236x/bc/6b/9f/bc6b9f1239c3069c1ffd3e358501992e.jpg",
"https://i.pinimg.com/236x/24/a5/51/24a551daaa80c9329230ad32fa8b8332.jpg",
"https://i.pinimg.com/236x/bd/73/d1/bd73d158c1843b1ec0333e24bab56d51.jpg",
"https://i.pinimg.com/236x/53/ee/72/53ee7252a9665d85760beb4747799000.jpg",
"https://i.pinimg.com/236x/5d/dc/04/5ddc040268fbfb11850461fb8579de11.jpg",
"https://i.pinimg.com/236x/d1/b7/ad/d1b7ad96e8f6252d659842764c7cc79d.jpg",
"https://i.pinimg.com/236x/8d/87/12/8d8712568dc6c4de5cb0cf2d5232e2b0.jpg",
"https://i.pinimg.com/236x/b6/31/74/b63174334be34f20a9625450a48f648e.jpg",
"https://i.pinimg.com/236x/c4/07/09/c4070910cdc5bee07088560303e053bd.jpg"
  ]