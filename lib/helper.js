module.exports = ( inPost, inOptions, inHexo ) => {
    const listJson   = require('./list-json.js')
    const lj         = listJson.getList(inOptions, inPost, inHexo)
    let returnHTML   = ''

    let generateHTML = (list) => {
        let ret = ''
        ret += `<div className="related">`

        if (list.date && list.date != '') {
            ret += `<label>${list.date}</label>`
        }

        //if (list.img && list.img != '') {
        //    ret += `<div class="${lj.class}-img"><img src="${list.img}" /></div>`
        //}

        ret += `<h1><a href="${list.path}" title="${list.title}" rel="bookmark">${list.title}</a></h1>`

        //if (list.excerpt &&  list.excerpt != '') {
        //    ret += `<div class="${lj.class}-excerpt"><p>${list.excerpt}</p></div>`
        //}

        ret +=  `</div>`
        return ret
    }

    for (let i=0; i < lj.json.length; i++) {
        returnHTML += generateHTML(lj.json[i])
    }

    if (returnHTML != '') returnHTML = `${returnHTML}`

  return returnHTML
}
