let handler = async (m, { conn, text }) => {
    let yh = global.cewekindo
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, 'RANDOM PICT', 'by ragil bot 🗿🏳️‍🌈', url, [['NEXT', '#cewekindo']], m)
  }
  handler.command = /^(cewekindo)$/i
  handler.tags = ['random pict']
  handler.help = ['cewekindo']
  
  handler.limit = true
  
  export default handler
  
  global.cewekindo = [
"https://g.top4top.io/p_1962pxls61.jpg",
"https://f.top4top.io/p_1962nx4b11.jpg",
"https://e.top4top.io/p_1962jhb921.jpg",
"https://c.top4top.io/p_1962bzui01.jpg",
"https://d.top4top.io/p_19628w4p81.jpg",
"https://b.top4top.io/p_19627hhbn1.jpg",
"https://a.top4top.io/p_1962u4xmj1.jpg",
"https://l.top4top.io/p_1962p29ex1.jpg",
"https://j.top4top.io/p_1962wjwxm1.jpg",
"https://d.top4top.io/p_1962j86vg1.jpg",
"https://c.top4top.io/p_1962isenn1.jpg",
"https://h.top4top.io/p_1962ad5ta1.jpg",
"https://b.top4top.io/p_1962bu9fo1.jpg",
"https://e.top4top.io/p_1962qbxvz1.jpg",
"https://g.top4top.io/p_19620eryq1.jpg",
"https://a.top4top.io/p_19629nnrd1.jpg",
"https://i.top4top.io/p_1962jpnks1.jpg",
"https://f.top4top.io/p_1962acmi41.jpg",
"https://i.top4top.io/p_1962ch8kf1.jpg",
"https://j.top4top.io/p_19620uhcl1.jpg",
"https://g.top4top.io/p_1962i4c901.jpg",
"https://f.top4top.io/p_1962ia36a1.jpg",
"https://e.top4top.io/p_1962hkubw1.jpg",
"https://d.top4top.io/p_1962jox5e1.jpg",
"https://b.top4top.io/p_19625de5c1.jpg",
"https://c.top4top.io/p_1962u8w7s1.jpg",
"https://a.top4top.io/p_1962pp58e1.jpg",
"https://k.top4top.io/p_19624ra1i1.jpg",
"https://e.top4top.io/p_1962b5dmv1.jpg",
"https://d.top4top.io/p_1962dh0df1.jpg",
"https://c.top4top.io/p_196242bxr1.jpg",
"https://a.top4top.io/p_1962wrlrh1.jpg",
"https://l.top4top.io/p_1962ghw031.jpg",
"https://i.top4top.io/p_1962ibxoe1.jpg",
"https://b.top4top.io/p_1962gmhco1.jpg",
"https://k.top4top.io/p_19627t5d41.jpg",
"https://j.top4top.io/p_1962m7uwg1.jpg",
"https://h.top4top.io/p_1962ks8m41.jpg"
  ]