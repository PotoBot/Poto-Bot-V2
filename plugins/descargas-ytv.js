import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, command, usedPrefix }) => {
if (!args || !args[0]) throw `${mg}ππ£ππ§ππ¨π ππ‘ ππ£π‘πππ ππ ππ€πͺππͺππ π₯ππ§π πππ¨πππ§πππ§ ππ‘ π«ππππ€\nnππππ’π₯π‘π€\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*`
try {
let { thumbnail, video, title } = await youtubedl(args[0])
.catch(async () => await youtubedlv2(args[0]))
let link = await video['480p'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let isLimit = limitedSize < video['480p'].fileSize
if (!isY) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
β­βββ°  ${wm}  β±βββ¬£
βπ° πππ©πͺπ‘π€
β ${title}
ββββββββββββββββββ
β β¨ πππ¨π€ 
β ${video['480p'].fileSizeH}
β°βββββββ° *π  ${vs}* β±ββββββ¬£`.trim(), m)
  
await conn.sendFile(m.chat, link, title + '.mp3', `
 π° πΌπ¦πͺπ ππ¨π©π π©πͺ π«ππππ€ 
 π₯ πππ©πͺπ‘π€: ${title}`.trim(), m, null, {
  
asDocument: 0
})
}catch(e){
m.reply(`${fg}π¬π πππππππ πππ ππ πππππππ πππ πππ ππππππ πππππππΜ πππ ππππ`)
console.log(e)  
}
/* 
let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu'] 
], m,) 
*/
}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.exp = 100
export default handler
