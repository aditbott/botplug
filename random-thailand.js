let handler = async (m, { conn, text }) => {
    let yh = global.cewekthailand
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, 'RANDOM PICT', 'by ragil bot 🗿🏳️‍🌈', url, [['NEXT', '#cewekthailand']], m)
  }
  handler.command = /^(cewekthailand)$/i
  handler.tags = ['random pict']
  handler.help = ['cewekthailand']
  
  handler.limit = true
  
  export default handler
  
  global.cewekthailand = [
"https://d.top4top.io/p_1962yj34p1.jpg",
"https://h.top4top.io/p_19625i86i1.jpg",
"https://c.top4top.io/p_1962zveny1.jpg",
"https://b.top4top.io/p_196221mzj1.jpg",
"https://a.top4top.io/p_1962abu7p1.jpg",
"https://l.top4top.io/p_19628jnew1.jpg",
"https://j.top4top.io/p_1962nrl7q1.jpg",
"https://k.top4top.io/p_1962on9rv1.jpg",
"https://i.top4top.io/p_1962jl0ff1.jpg",
"https://h.top4top.io/p_19625rbg41.jpg",
"https://g.top4top.io/p_19629tjrl1.jpg",
"https://h.top4top.io/p_19621n2fn1.jpg",
"https://j.top4top.io/p_1962bogt61.jpg",
"https://d.top4top.io/p_1962tiz3j1.jpg",
"https://i.top4top.io/p_19629bz111.jpg",
"https://a.top4top.io/p_1962hcxhl1.jpg",
"https://c.top4top.io/p_19620yu8j1.jpg",
"https://e.top4top.io/p_1962a1u5x1.jpg",
"https://b.top4top.io/p_1962vn05h1.jpg",
"https://l.top4top.io/p_1962pkbhs1.jpg",
"https://k.top4top.io/p_1962m8ada1.jpg"
  ]