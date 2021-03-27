let handler  = async (m, { conn, usedPrefix: _p }) => {
        conn.reply(m.chat, `
┏━────────────━┓
      _*-•zul gans bot•-*_
┗──────────────┛
╭───❉ *「  INFO 」 * ❉─────•>
╠➥ *IG : https://tinyurl.com/y*
╠➥ *YT : https://bit.ly/3fqjgFt* s
╠➥ *FB : https://tinyurl.com/yjmtcjav*
╠➥ *Grup : https://tinyurl.com/nhj2cn2p*
╠➥ *Owner : Wa.me/6281342508342*
╠➥ *Author Sc : mr zL*
╰──────────────•>
┏━❉ *《HELP》* ❉━┓
╠➠ *${_p}owner*
╠➠ *${_p}donasi*
╠➠ *${_p}grouplist*
╠➠ *${_p}ping*
╠➠ *jgn lupa*
╠➠ *subrek my yt*
┗━━━━━━━━━━━┛
`.trim(), m)
}
handler.command = /^info$/i

module.exports = handler
