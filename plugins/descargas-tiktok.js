import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `${mg}πΏππ½π πππππππΌπ ππ ππππΌπΎπ πΏπ ππππππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://vm.tiktok.com/ZMNQvKJqL/?k=1*`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `${fg}ππ ππππΌπΎπ πΏπ ππππππ ππ πππΎπππππΎππ, ππππΎπππ πππ ππππ ππΌπππΏπ`, fkontak,  m)  
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) return conn.reply(m.chat, `${fg}πππππ πΌπ πππππππΌπ πΏπππΎπΌπππΌπ ππ πππ πππ, ππππππΌ πΌ πππππππΌπ πππ ππΌπππ`, fkontak,  m)
await conn.reply(m.chat, `${eg}*β _Cargando..._\nβ°β°β°β±β±β±β±β±β±\nππ¨π₯ππ§π πͺπ£π€π¨ π¨πππͺπ£ππ€π¨ ππ‘ π¦πͺπ π’ππ£ππ€ π¨πͺπ¨ π«ππππ€ ππ π©ππ π©π€π  π₯π€π§ πππ«π€π§ π°*`, fkontak,  m)    
conn.sendFile(m.chat, url, 'tiktok.mp4', `
β±οΈ ππππΌπππ\n*${nickname}*\n${description ? `\nβ±οΈ πΏπππΎππππΎπππ\n*${description}*` : ''}\n${wm}`.trim(), m)
} catch {
await conn.reply(m.chat, `${fg}πππππ πΌπ πππππππΌπ πΏπππΎπΌπππΌπ ππ πππ πππ, ππππππΌ πΌ πππππππΌπ πππ ππΌπππ`, fkontak,  m)  
}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.limit = 1
export default handler