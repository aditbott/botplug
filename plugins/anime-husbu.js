let handler = async (m, { conn, text }) => {
    let yh = global.husbu
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, 'RANDOM HUSBU', 'by ragil bot 🗿🏳️‍🌈', url, [['NEXT', '#husbu']], m)
  }
  handler.command = /^(husbu)$/i
  handler.tags = ['anime']
  handler.help = ['husbu']
  handler.limit = true
  
  export default handler
  
  global.husbu = [
"https://i.pinimg.com/originals/ad/de/a8/addea895a1e367dbb7ec77ed643441c2.jpg",
"https://i.pinimg.com/originals/8c/5f/84/8c5f845ef47b196e364dbd55560abc7c.jpg",
"https://i.pinimg.com/originals/c3/10/4b/c3104beed2932a1e6f24d592eade7d4b.jpg",
"https://i.pinimg.com/originals/08/fd/8f/08fd8f049b790e1666713da3db2396fd.png",
"https://i.pinimg.com/originals/5b/4d/3c/5b4d3c16ff93c5924fa6486519b675aa.jpg",
"https://i.pinimg.com/originals/f2/95/42/f295423c8168af259ccb5f2acefaff1b.jpg",
"https://i.pinimg.com/originals/c7/33/ce/c733ce7a89e3376e2e99e1988ae0416b.jpg",
"https://i.pinimg.com/originals/92/73/44/927344aff0050e7214eff46d173967ec.jpg",
"https://i.pinimg.com/originals/7b/16/df/7b16dfd42ce3f77522529365a8693ae6.jpg",
"https://i.pinimg.com/originals/40/7c/1f/407c1ff2f73a327e17a366f84671d91e.jpg",
"https://i.pinimg.com/originals/5c/ec/37/5cec3735d5ca352ac374eeaf10d0038f.jpg",
"https://i.pinimg.com/originals/dc/95/9c/dc959c36c13f673056eb8899b1447551.jpg",
"https://i.pinimg.com/originals/ec/57/a7/ec57a7ba11031e143b222c006235c2e4.jpg",
"https://i.pinimg.com/originals/1d/b3/1e/1db31ecd2d58a2081fd85f201e8ba399.jpg",
"https://i.pinimg.com/originals/d0/cd/2c/d0cd2c187f3c1c8748bd96631c1e5d00.jpg",
"https://i.pinimg.com/originals/e5/52/e2/e552e29b43dd71ffd669fc73a13fcad4.jpg",
"https://i.pinimg.com/originals/92/d8/c5/92d8c5f6f481747ab2d7645f2ef6b229.jpg",
"https://i.pinimg.com/originals/f5/8c/d2/f58cd2b5806d80e7dd9b17e74df973ed.jpg",
"https://i.pinimg.com/originals/63/e4/80/63e480ed67a44cc849e7d5cde18c73ef.jpg",
"https://i.pinimg.com/originals/00/85/08/00850896f6fc90f95e7842dd01e0fd62.jpg",
"https://i.pinimg.com/originals/0a/76/ce/0a76cebd989ceb8b7bef91fc84c5ac78.jpg",
"https://i.pinimg.com/originals/dd/dc/02/dddc02414cefab0f5f009d73dc0c3431.jpg",
"https://i.pinimg.com/originals/51/ea/16/51ea1678e225e5349be1d7515fb030c8.jpg",
"https://i.pinimg.com/originals/74/4f/12/744f125cd6f78929737f573c55a9a6d4.jpg",
"https://i.pinimg.com/originals/e8/ca/2f/e8ca2f775fd9ac9bd4d601c80ba9edab.jpg",
"https://i.pinimg.com/originals/9d/dd/95/9ddd958462d7af0413985931b377cbee.jpg",
"https://i.pinimg.com/originals/1b/fd/49/1bfd49d7fe6e976339252bc97e3c48e1.jpg",
"https://i.pinimg.com/originals/6b/9d/ed/6b9ded92b2928c6345b391558a159d20.jpg",
"https://i.pinimg.com/originals/f3/68/fa/f368fa2dc4d529fd0c3f98a4460f1b43.jpg",
"https://i.pinimg.com/originals/00/bf/1f/00bf1fe39a252fd39ad45776c643b819.jpg",
"https://i.pinimg.com/originals/86/7f/00/867f0064325224a2e58a0c7da65c09af.jpg",
"https://i.pinimg.com/originals/92/25/98/922598da08af85de47a8b3ca5a109a62.png",
"https://i.pinimg.com/originals/c6/6d/40/c66d404bf9e6664c18a04f1472de83e9.jpg",
"https://i.pinimg.com/originals/8e/34/8f/8e348f6f2590ee75bc5672f12fae858c.jpg",
"https://i.pinimg.com/originals/40/2d/f0/402df0219330e7cd0788ec4e4fecad04.jpg",
"https://i.pinimg.com/originals/a7/4e/a5/a74ea5211dfeed371fddbe7b39b03785.jpg",
"https://i.pinimg.com/originals/00/71/ba/0071bada0de4fc59afeb2526e5d341b4.png",
"https://i.pinimg.com/originals/30/33/ef/3033efed9c5214e54ac67afa42886983.png",
"https://i.pinimg.com/originals/0c/f8/a5/0cf8a59aeddc1c8c3699333d4ea50e38.jpg",
"https://i.pinimg.com/originals/e5/1b/89/e51b898d2de941ca41c8d11dead6cf71.jpg",
"https://i.pinimg.com/originals/98/25/4f/98254fa6c142314fb25ebd892484a7e5.jpg",
"https://i.pinimg.com/originals/93/d0/b1/93d0b17e0459a8ca928e5f886abb2d0c.jpg",
"https://i.pinimg.com/originals/d2/33/97/d2339772568a3d348d9ebedf4143d66a.jpg",
"https://i.pinimg.com/originals/b7/3d/2b/b73d2b89c50def2dd26868b0c664abc6.png",
"https://i.pinimg.com/originals/cc/c3/ea/ccc3ea05d34fdc434e64240c81e7c7e0.jpg",
"https://i.pinimg.com/originals/5d/99/11/5d991124a92f6be7f33e9da4350a8094.jpg",
"https://i.pinimg.com/originals/4f/41/3f/4f413fde71bf1d1995b3f19144bcec87.jpg",
"https://i.pinimg.com/originals/b2/88/8f/b2888f2f7da853f0c8aeb61327595d42.jpg",
"https://i.pinimg.com/originals/28/f6/08/28f6083b284fd7f2211a95e84a4d6ce5.jpg",
"https://i.pinimg.com/originals/1a/61/4b/1a614b939d6da368a319bfcb7b65f670.png",
"https://i.pinimg.com/originals/42/51/63/425163ee0a36fe3e2f38d8b950674daf.jpg",
"https://i.pinimg.com/originals/0f/71/3d/0f713d539a84035f531a7236e8042e94.jpg",
"https://i.pinimg.com/originals/74/82/03/7482030c89104e4e2945987330ac5498.png",
"https://i.pinimg.com/originals/8b/78/8c/8b788ced48d8c01c608f26eb0db50b26.jpg",
"https://i.pinimg.com/originals/8c/af/d2/8cafd2288610b29ad2584546a4dc92fa.jpg",
"https://i.pinimg.com/originals/4b/d7/7c/4bd77cf2861a066ec3737e1217bc725e.jpg",
"https://i.pinimg.com/originals/63/3c/78/633c7833cdfc306ce97f9a4eddf04be7.jpg",
"https://i.pinimg.com/originals/be/7e/c3/be7ec332fd4431982fad18d8f7c3cf0d.jpg",
"https://i.pinimg.com/originals/f4/31/67/f43167866d199ff61904670bcc83cc9c.jpg",
"https://i.pinimg.com/originals/f2/95/42/f295423c8168af259ccb5f2acefaff1b.jpg",
"https://i.pinimg.com/originals/cd/4d/02/cd4d026038988b7761eea52f63e6b454.png",
"https://i.pinimg.com/originals/ad/36/27/ad3627193edbc882ba2e81e941f2fcb1.jpg",
"https://i.pinimg.com/originals/59/97/7d/59977dd2811f76dffc6d2d76ee4fe6c1.jpg",
"https://i.pinimg.com/originals/21/4f/f8/214ff8247de32c1dad6d7867b72ae587.jpg",
"https://i.pinimg.com/originals/50/4a/00/504a003c1d35426946c9bf10a4b50322.jpg",
"https://i.pinimg.com/originals/fb/85/68/fb8568e331629abb0809a5d5fd8021be.png",
"https://i.pinimg.com/originals/70/11/1d/70111d48da5f1a80255935d519bc48f0.jpg",
"https://i.pinimg.com/originals/d7/cf/36/d7cf364fa0630cf22a332fa89358a98c.jpg",
"https://i.pinimg.com/originals/4a/32/ae/4a32aea32cda962b7c94d50dc02e7a5a.jpg",
"https://i.pinimg.com/originals/c5/d9/94/c5d994bf34b265fadcbc56025ce9d50d.jpg",
"https://i.pinimg.com/originals/da/e4/5f/dae45f01b319caf2bf05bdcd2ce9ec14.jpg",
"https://i.pinimg.com/originals/9c/6b/08/9c6b08ccf136deac18df1d221010688c.jpg",
"https://i.pinimg.com/originals/14/e0/1e/14e01edd089b5f8abc484879da89f69e.jpg",
"https://i.pinimg.com/originals/95/f5/3f/95f53f18c44f7ff6462fe750ddeb3a3e.jpg",
"https://i.pinimg.com/originals/c0/8e/6d/c08e6d15025cee7745d2115a32066a88.jpg",
"https://i.pinimg.com/originals/26/40/50/2640500cfab8bbb9d24996327850f2ef.jpg",
"https://i.pinimg.com/originals/81/de/91/81de9194b40ed497408429398b587186.jpg",
"https://i.pinimg.com/originals/9e/b9/0a/9eb90a839c3bf58632637e7fb8384497.jpg",
"https://i.pinimg.com/originals/57/58/70/5758705efbc448655baec384f0520f56.jpg",
"https://i.pinimg.com/originals/1c/2f/23/1c2f233f01b6eb5b7b29dea0f3917b48.png",
"https://i.pinimg.com/originals/06/a1/a7/06a1a72841ea4942b8a5226aa2b21ae6.jpg",
"https://i.pinimg.com/originals/d8/bc/bc/d8bcbc5e74cbcfd610f3668a8e7f3fe4.jpg",
"https://i.pinimg.com/originals/48/cd/26/48cd260f72922df0caba73fe8ac3572e.jpg",
"https://i.pinimg.com/originals/23/ef/cf/23efcf02f1ac464ef3688cccf219b302.jpg",
"https://i.pinimg.com/originals/83/2f/0f/832f0f8d5adf929e6ef6be9fa6f083d0.png",
"https://i.pinimg.com/originals/6e/8b/02/6e8b025c8888cb6589151f0dbcf569d0.jpg",
"https://i.pinimg.com/originals/7f/16/b0/7f16b05ab6cde6ac98402ca105bf3401.jpg",
"https://i.pinimg.com/originals/83/b5/7b/83b57b9cb5c0b599da8e6c7515ffd599.jpg",
"https://i.pinimg.com/originals/04/89/d3/0489d39dd3a5656656144736ce3662b7.jpg",
"https://i.pinimg.com/originals/d6/11/d2/d611d2669573256d9862392a20f57e7f.png",
"https://i.pinimg.com/originals/c2/98/cf/c298cf565da845f6485bc544cb4a7603.jpg",
"https://i.pinimg.com/originals/25/66/5f/25665fb52cee8c6417ef70c70075cf52.jpg",
"https://i.pinimg.com/originals/94/91/96/949196b6ec53ad06a0e5d89edd8a4fca.jpg",
"https://i.pinimg.com/originals/c8/39/07/c839075e8a66afb5f3f784bc89c0744e.jpg",
"https://i.pinimg.com/originals/41/c0/82/41c082a4d12f5d26c4a87d0e8b4a6ca0.jpg",
"https://i.pinimg.com/originals/5e/31/b3/5e31b3bf1b31fe265021559acce88ba8.jpg",
"https://i.pinimg.com/originals/6d/5a/e5/6d5ae5994b4b3da25559192a3e1160eb.jpg",
"https://i.pinimg.com/originals/02/1c/07/021c07431026a37962e33e4d38c50481.png",
"https://i.pinimg.com/originals/07/46/9d/07469d6936926103df4bc8824bc59fc8.jpg",
"https://i.pinimg.com/originals/f4/fa/ad/f4faad335bc6296977cbbade347d1094.jpg"
  ]