const qrku = "https://telegra.ph/file/f4ee3c55fd67cbd3ea861.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • im3/pulsa [6285853570297]
│ • Dana  [6285707645429]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285853570297
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
