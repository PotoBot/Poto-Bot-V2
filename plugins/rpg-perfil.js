import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/635b82df8d7abb4792eab.jpg'
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str =
`β π΅πππππ ${name}
ββββββββββββββββββ
β π΅πππππ ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
ββββββββββββββββββ
β π¬πππππ wa.me/${who.split`@`[0]}${registered ?'\nββββββββββββββββββ\nβ π¬πππ ' + age + ' *aΓ±os*' : ''}
ββββββββββββββββββ
β π³πππππ *${limit}* πππ ππππ
ββββββββββββββββββ
β πΉπππππππππ(π) ${registered ? 'β': 'β'}
ββββββββββββββββββ
β π·ππππππ ${prem ? 'β' : 'β'}
ββββββββββββββββββ
β π΅πππππ ππ πππππ
β *${sn}*`
conn.sendButton(m.chat, str, wm, await(await fetch(pp)).buffer(), [['π½ππππππππ', '/verificar β'], ['πΈππ πππππππ ππ ππππππππ!! π', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
