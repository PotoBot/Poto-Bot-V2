let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*๐๐จ๐๐ง๐๐๐ ๐๐ก ๐ง๐๐ฅ๐ค๐ง๐ฉ๐*\n\n*๐๐๐๐๐๐๐:*\n*${usedPrefix + command} el comando ${usedPrefix}los stickers no funka.*`
if (text.length < 8) throw `${fg} โจ *Mรญnimo 10 caracteres para hacer El Reporte..*`
if (text.length > 1000) throw `${fg} ๐ผ *Mรกximo 1000 caracteres para hacer El Reporte.*`
let teks = `*โญโโ[ ๐๐๐๐๐๐๐ ]โโโโฌฃ*\n*โ*\n*โ* *๐๐๐๐๐๐*\nโ โฆ Wa.me/${m.sender.split`@`[0]}\n*โ*\n*โ* *๐๐๐๐๐ผ๐๐*\n*โ* โฆ ${text}\n*โ*\n*โฐโโโโโโโโโโโโโโโโโโโฌฃ*`
conn.reply('5492266466080@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`โฐโฑ๐โฑ *๐ฬ๐๐๐๐* โฑ๐โฑโฎ\n\n*El reporte ha sido enviado a mรญ Creador. Tendrรก una respuesta pronto. De ser Falso serรก Ignorado el reporte.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
