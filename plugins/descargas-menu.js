import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  let vn = './media/medescarg.mp3'

/*const sections = [
{
title: `πππππΌ πΏπππππππΌπ½ππ`,
rows: [
{title: "βοΈ πππ£πͺ ππ§ππ£πππ₯ππ‘ βοΈ", description: null, rowId: `${usedPrefix}menu`},
{title: "β³οΈ πππ£πͺ πΎπ€π’π₯π‘ππ©π€ β³οΈ", description: null, rowId: `${usedPrefix}allmenu`},
{title: "β πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ β", description: null, rowId: `${usedPrefix}cuentasgatabot`},
{title: "π ππ’ππππ£ ππ ππ€π€ππ‘π π", description: "πΏπππΎπΌπππΌπ πππΌπππ πΏπ ππππππ", rowId: `${usedPrefix}imagen`},
{title: "π ππ’ππππ£ ππ πππ£π©ππ§ππ¨π© π", description: "ππππΏππ πΏπππΎπΌπππΌπ πππΌπππππ πΏπ πππππππππ", rowId: `${usedPrefix}pinterest`},
{title: "π ππ’ππππ£ππ¨ ππ ππ€π£ππ€ π", description: "πΏπππΎπΌπππΌ πππΌπππ πΏπ ππππΏπ", rowId: `${usedPrefix}wallpaper`},
{title: "π πΏππ¨πππ§πππ¨ ππ ππ€πͺππͺππ π", description: "πΏπππΎπΌπππΌ πππΏπππ π πΌππΏπππ πππΌππΏπ ππ ππππ½ππ π ππππΌπΎπ", rowId: `${usedPrefix}play`},
{title: "π πΌπͺπππ€π¨ ππ ππ€πͺππͺππ π", description: "πΏπππΎπΌπππΌ πΌππΏπππ πππΌππΏπ ππ ππππΌπΎπ", rowId: `${usedPrefix}yta`},
{title: "π πππππ€π¨ ππ ππ€πͺππͺππ π", description: "πΏπππΎπΌπππΌ πππΏπππ πππΌππΏπ ππ ππππΌπΎπ", rowId: `${usedPrefix}ytv`},
{title: "π πππππ€π¨ ππ ππππππ€π€π  π", description: "πΏπππΎπΌπππΌ πππΏπππ πΏπ ππΌπΎππ½πππ πΎππ ππ ππππΌπΎπ", rowId: `${usedPrefix}facebook`},
{title: "π πΏππ¨πππ§πππ¨ ππ ππ£π¨π©πππ§ππ’ π", description: "πΏπππΎπΌπππΌ πππΏπππ π πππΌπππππ πΏπ πππππΌπππΌπ πΎππ ππ ππππΌπΎπ", rowId: `${usedPrefix}instagram`},
{title: "π ππ¨πͺππ§ππ€ ππ ππ£π¨π©πππ§ππ’ π", description: "πππππΌππππΌπ ππππΌπππ πΏπ πππππΌπππΌπ", rowId: `${usedPrefix}igstalk`},
{title: "π πππ¨π©π€π§πππ¨ ππ ππ£π¨π©πππ§ππ’ π", description: "πΏπππΎπΌπππΌπ ππΌπ ππππππππΌπ", rowId: `${usedPrefix}igstory`},   
{title: "π πΏππ¨πππ§πππ¨ ππ πππ ππ€π  π", description: "πΏπππΎπΌπππΌ πππΏπππ πΏπ ππππππ πΎππ ππ ππππΌπΎπ", rowId: `${usedPrefix}tiktok`},    
{title: "π ππ€π©π€ ππ ππ¨πͺππ§ππ€ ππ πππ ππ€π  π", description: "πΏπππΎπΌπππΌ ππΌ ππππ πππΌππΏπ ππ ππππΌπππ πΏπ ππππππ", rowId: `${usedPrefix}tiktokfoto`},      
{title: "π πΏππ©ππ‘π‘ππ¨ ππ ππ¨πͺππ§ππ€ ππ πππ ππ€π  π", description: "πΎππππΎπ ππΌπ πππΌππΏπ ππ ππππΌπππ πΏπ ππππππ", rowId: `${usedPrefix}vertiktok`},    
{title: "π πΏππ¨πππππ§ ππ€π£ ππππππππ§π π", description: "πππΌ ππ ππππΌπΎπ ππΌπππΏπ πΏπ πππΏππΌππππ", rowId: `${usedPrefix}mediafire`},
{title: "π πΏππ¨πππ§πππ§ πππ₯π€π¨ππ©π€π§ππ€ π", description: "πππΌ ππ ππππΌπΎπ πΏπ πππππππππππ πΏπ ππππππ½", rowId: `${usedPrefix}gitclone`},
]}, ] */
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menuvid1.mp4'  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let menu = `
β­ββγ *${wm}* γβββ¬£
βπ *Β‘HOLA!* ${username}
βββββββββββββββββββ
βπͺπͺπͺπͺπͺπͺπͺπͺπͺ
ββͺ *EXPERIENCIA  βΊ ${exp}*
ββͺ *NIVEL βΊ ${level}*
ββͺ *ROL βΊ* ${role}
ββͺ *LOLICOINS βΊ $ ${money}*
ββͺ *USUARIOS βΊ ${Object.keys(global.db.data.users).length}* 
βπͺπͺπͺπͺπͺπͺπͺπͺπͺ
βββββββββββββββββββ
βγ πΏπππΎπΌπππΌπ γ
βββββββββββββββββββ
βπβΊ _${usedPrefix}imagen | image *texto*_
βπβΊ _${usedPrefix}pinterest | dlpinterest *texto*_
βπβΊ _${usedPrefix}wallpaper|wp *texto*_
βπβΊ _${usedPrefix}play | play2 *texto o link*_
βπβΊ _${usedPrefix}play.1 *texto o link*_
βπβΊ _${usedPrefix}play.2 *texto o link*_ 
βπβΊ _${usedPrefix}ytmp3 | yta *link*_
βπβΊ _${usedPrefix}ytmp4 | ytv *link*_
βπβΊ _${usedPrefix}facebook | fb *link*_
βπβΊ _${usedPrefix}instagram *link video o imagen*_
βπβΊ _${usedPrefix}verig | igstalk *usuario(a)*_
βπβΊ _${usedPrefix}ighistoria | igstory *usuario(a)*_
βπβΊ _${usedPrefix}tiktok *link*_
βπβΊ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
βπβΊ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
βπβΊ _${usedPrefix}mediafire | dlmediafire *link*_
βπβΊ _${usedPrefix}clonarepo | gitclone *link*_
β°ββββββββββββββββββββ¬£`.trim()
conn.sendHydrated(m.chat, menu, wm, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', 'π»ππ π³ππππ©ππ-π΄π«', null, null, [
['πππ£πͺΜ ππ€π’π₯π‘ππ©π€ π«', '.allmenu'],
['πππ£πͺ πππ¨π₯π‘πππππ‘π π', '/menulista'],
['πππ£πͺ ππ§ππ£πππ₯ππ‘ β‘', '#menu']
], m,)
conn.sendFile(m.chat, vn, 'medescarg.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(descargasmenu)$/i
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
