export const range = (index:number) => {
    let arr = [];
    for(let i=0; i < index+1; i++) {
        arr.push(i);
    }
    return arr;
}

export const txtChange = (text: string) => {
    const result = text ?
    text.replaceAll("&lt;br /&gt;", "").replaceAll("&amp;nbsp;", "").
    replaceAll("<BR>","\n").replaceAll("<br>","\n").replaceAll("<br />","\n")
    .replaceAll("<p>","").replaceAll("</p>","")
    : 
    ""
    return result;
}