const canvasFunctions = ["startStroke", "endStroke", "draw"];

export const stroke = (fn, ctx, x, y) => {
  if (fn === canvasFunctions[0]) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else if (fn === canvasFunctions[1]) {
    ctx.closePath();
    ctx.restore();
  } else if (fn === canvasFunctions[2]) {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

export const parseTesting = () => {
  const dummyInstructions = `{"fn":"startStroke","ex":204,"ey":159,"color":"#000000","width":5};{"fn":"draw","ex":204,"ey":159,"color":"#000000","width":5};{"fn":"draw","ex":204,"ey":158,"color":"#000000","width":5};{"fn":"draw","ex":204,"ey":157,"color":"#000000","width":5};{"fn":"draw","ex":202,"ey":156,"color":"#000000","width":5};{"fn":"draw","ex":199,"ey":154,"color":"#000000","width":5};{"fn":"draw","ex":196,"ey":152,"color":"#000000","width":5};{"fn":"draw","ex":192,"ey":150,"color":"#000000","width":5};{"fn":"draw","ex":187,"ey":149,"color":"#000000","width":5};{"fn":"draw","ex":183,"ey":149,"color":"#000000","width":5};{"fn":"draw","ex":178,"ey":148,"color":"#000000","width":5};{"fn":"draw","ex":173,"ey":149,"color":"#000000","width":5};{"fn":"draw","ex":167,"ey":150,"color":"#000000","width":5};{"fn":"draw","ex":161,"ey":152,"color":"#000000","width":5};{"fn":"draw","ex":155,"ey":155,"color":"#000000","width":5};{"fn":"draw","ex":150,"ey":158,"color":"#000000","width":5};{"fn":"draw","ex":147,"ey":161,"color":"#000000","width":5};{"fn":"draw","ex":143,"ey":164,"color":"#000000","width":5};{"fn":"draw","ex":141,"ey":166,"color":"#000000","width":5};{"fn":"draw","ex":139,"ey":169,"color":"#000000","width":5};{"fn":"draw","ex":138,"ey":173,"color":"#000000","width":5};{"fn":"draw","ex":136,"ey":177,"color":"#000000","width":5};{"fn":"draw","ex":135,"ey":182,"color":"#000000","width":5};{"fn":"draw","ex":134,"ey":189,"color":"#000000","width":5};{"fn":"draw","ex":133,"ey":197,"color":"#000000","width":5};{"fn":"draw","ex":133,"ey":205,"color":"#000000","width":5};{"fn":"draw","ex":133,"ey":212,"color":"#000000","width":5};{"fn":"draw","ex":134,"ey":220,"color":"#000000","width":5};{"fn":"draw","ex":135,"ey":227,"color":"#000000","width":5};{"fn":"draw","ex":140,"ey":233,"color":"#000000","width":5};{"fn":"draw","ex":145,"ey":238,"color":"#000000","width":5};{"fn":"draw","ex":153,"ey":244,"color":"#000000","width":5};{"fn":"draw","ex":161,"ey":248,"color":"#000000","width":5};{"fn":"draw","ex":170,"ey":252,"color":"#000000","width":5};{"fn":"draw","ex":180,"ey":256,"color":"#000000","width":5};{"fn":"draw","ex":189,"ey":260,"color":"#000000","width":5};{"fn":"draw","ex":197,"ey":264,"color":"#000000","width":5};{"fn":"draw","ex":205,"ey":269,"color":"#000000","width":5};{"fn":"draw","ex":211,"ey":274,"color":"#000000","width":5};{"fn":"draw","ex":215,"ey":278,"color":"#000000","width":5};{"fn":"draw","ex":219,"ey":283,"color":"#000000","width":5};{"fn":"draw","ex":221,"ey":288,"color":"#000000","width":5};{"fn":"draw","ex":223,"ey":293,"color":"#000000","width":5};{"fn":"draw","ex":224,"ey":297,"color":"#000000","width":5};{"fn":"draw","ex":225,"ey":301,"color":"#000000","width":5};{"fn":"draw","ex":225,"ey":303,"color":"#000000","width":5};{"fn":"draw","ex":225,"ey":304,"color":"#000000","width":5};{"fn":"draw","ex":225,"ey":304,"color":"#000000","width":5};{"fn":"endStroke","ex":null,"ey":null,"color":null,"width":null};{"fn":"startStroke","ex":205,"ey":151,"color":"#000000","width":5};{"fn":"draw","ex":205,"ey":151,"color":"#000000","width":5};{"fn":"draw","ex":205,"ey":149,"color":"#000000","width":5};{"fn":"draw","ex":206,"ey":144,"color":"#000000","width":5};{"fn":"draw","ex":208,"ey":138,"color":"#000000","width":5};{"fn":"draw","ex":212,"ey":130,"color":"#000000","width":5};{"fn":"draw","ex":217,"ey":119,"color":"#000000","width":5};{"fn":"draw","ex":223,"ey":110,"color":"#000000","width":5};{"fn":"draw","ex":229,"ey":102,"color":"#000000","width":5};{"fn":"draw","ex":236,"ey":96,"color":"#000000","width":5};{"fn":"draw","ex":242,"ey":92,"color":"#000000","width":5};{"fn":"draw","ex":248,"ey":90,"color":"#000000","width":5};{"fn":"draw","ex":254,"ey":89,"color":"#000000","width":5};{"fn":"draw","ex":260,"ey":89,"color":"#000000","width":5};{"fn":"draw","ex":266,"ey":90,"color":"#000000","width":5};{"fn":"draw","ex":272,"ey":93,"color":"#000000","width":5};{"fn":"draw","ex":277,"ey":98,"color":"#000000","width":5};{"fn":"draw","ex":283,"ey":103,"color":"#000000","width":5};{"fn":"draw","ex":288,"ey":109,"color":"#000000","width":5};{"fn":"draw","ex":292,"ey":117,"color":"#000000","width":5};{"fn":"draw","ex":297,"ey":125,"color":"#000000","width":5};{"fn":"draw","ex":300,"ey":136,"color":"#000000","width":5};{"fn":"draw","ex":301,"ey":146,"color":"#000000","width":5};{"fn":"draw","ex":302,"ey":156,"color":"#000000","width":5};{"fn":"draw","ex":302,"ey":164,"color":"#000000","width":5};{"fn":"draw","ex":302,"ey":173,"color":"#000000","width":5};{"fn":"draw","ex":301,"ey":180,"color":"#000000","width":5};{"fn":"draw","ex":300,"ey":186,"color":"#000000","width":5};{"fn":"draw","ex":298,"ey":191,"color":"#000000","width":5};{"fn":"draw","ex":296,"ey":195,"color":"#000000","width":5};{"fn":"draw","ex":293,"ey":199,"color":"#000000","width":5};{"fn":"draw","ex":290,"ey":204,"color":"#000000","width":5};{"fn":"draw","ex":286,"ey":208,"color":"#000000","width":5};{"fn":"draw","ex":281,"ey":212,"color":"#000000","width":5};{"fn":"draw","ex":277,"ey":217,"color":"#000000","width":5};{"fn":"draw","ex":272,"ey":220,"color":"#000000","width":5};{"fn":"draw","ex":267,"ey":224,"color":"#000000","width":5};{"fn":"draw","ex":262,"ey":227,"color":"#000000","width":5};{"fn":"draw","ex":257,"ey":230,"color":"#000000","width":5};{"fn":"draw","ex":252,"ey":234,"color":"#000000","width":5};{"fn":"draw","ex":246,"ey":238,"color":"#000000","width":5};{"fn":"draw","ex":241,"ey":242,"color":"#000000","width":5};{"fn":"draw","ex":235,"ey":246,"color":"#000000","width":5};{"fn":"draw","ex":230,"ey":250,"color":"#000000","width":5};{"fn":"draw","ex":226,"ey":255,"color":"#000000","width":5};{"fn":"draw","ex":222,"ey":259,"color":"#000000","width":5};{"fn":"draw","ex":220,"ey":262,"color":"#000000","width":5};{"fn":"draw","ex":219,"ey":265,"color":"#000000","width":5};{"fn":"draw","ex":219,"ey":266,"color":"#000000","width":5};{"fn":"draw","ex":219,"ey":267,"color":"#000000","width":5};{"fn":"draw","ex":219,"ey":268,"color":"#000000","width":5};{"fn":"draw","ex":219,"ey":269,"color":"#000000","width":5};{"fn":"draw","ex":219,"ey":270,"color":"#000000","width":5};{"fn":"draw","ex":220,"ey":271,"color":"#000000","width":5};{"fn":"draw","ex":220,"ey":271,"color":"#000000","width":5};{"fn":"draw","ex":221,"ey":272,"color":"#000000","width":5};{"fn":"draw","ex":221,"ey":272,"color":"#000000","width":5};{"fn":"draw","ex":222,"ey":272,"color":"#000000","width":5};{"fn":"draw","ex":222,"ey":272,"color":"#000000","width":5};{"fn":"draw","ex":222,"ey":272,"color":"#000000","width":5};{"fn":"endStroke","ex":null,"ey":null,"color":null,"width":null};{"fn":"startStroke","ex":262,"ey":332,"color":"#789395","width":5};{"fn":"draw","ex":262,"ey":332,"color":"#789395","width":5};{"fn":"draw","ex":263,"ey":333,"color":"#789395","width":5};{"fn":"draw","ex":265,"ey":335,"color":"#789395","width":5};{"fn":"draw","ex":269,"ey":338,"color":"#789395","width":5};{"fn":"draw","ex":273,"ey":342,"color":"#789395","width":5};{"fn":"draw","ex":277,"ey":346,"color":"#789395","width":5};{"fn":"draw","ex":282,"ey":351,"color":"#789395","width":5};{"fn":"draw","ex":287,"ey":355,"color":"#789395","width":5};{"fn":"draw","ex":290,"ey":359,"color":"#789395","width":5};{"fn":"draw","ex":294,"ey":361,"color":"#789395","width":5};{"fn":"draw","ex":296,"ey":363,"color":"#789395","width":5};{"fn":"draw","ex":297,"ey":364,"color":"#789395","width":5};{"fn":"draw","ex":298,"ey":365,"color":"#789395","width":5};{"fn":"draw","ex":299,"ey":365,"color":"#789395","width":5};{"fn":"draw","ex":299,"ey":365,"color":"#789395","width":5};{"fn":"draw","ex":300,"ey":365,"color":"#789395","width":5};{"fn":"draw","ex":300,"ey":365,"color":"#789395","width":5};{"fn":"endStroke","ex":null,"ey":null,"color":null,"width":null};{"fn":"startStroke","ex":303,"ey":323,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":324,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":326,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":332,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":342,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":354,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":372,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":388,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":399,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":407,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":413,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":416,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":419,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":421,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":424,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":426,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":428,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":429,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":430,"color":"#789395","width":5};{"fn":"draw","ex":303,"ey":431,"color":"#789395","width":5};{"fn":"endStroke","ex":null,"ey":null,"color":null,"width":null};{"fn":"startStroke","ex":321,"ey":404,"color":"#789395","width":5};{"fn":"draw","ex":321,"ey":404,"color":"#789395","width":5};{"fn":"draw","ex":320,"ey":404,"color":"#789395","width":5};{"fn":"draw","ex":319,"ey":404,"color":"#789395","width":5};{"fn":"draw","ex":318,"ey":404,"color":"#789395","width":5};{"fn":"draw","ex":316,"ey":404,"color":"#789395","width":5};{"fn":"draw","ex":314,"ey":405,"color":"#789395","width":5};{"fn":"draw","ex":313,"ey":406,"color":"#789395","width":5};{"fn":"draw","ex":312,"ey":407,"color":"#789395","width":5};{"fn":"draw","ex":311,"ey":409,"color":"#789395","width":5};{"fn":"draw","ex":311,"ey":410,"color":"#789395","width":5};{"fn":"draw","ex":311,"ey":412,"color":"#789395","width":5};{"fn":"draw","ex":311,"ey":413,"color":"#789395","width":5};{"fn":"draw","ex":311,"ey":414,"color":"#789395","width":5};{"fn":"draw","ex":311,"ey":415,"color":"#789395","width":5};{"fn":"draw","ex":311,"ey":416,"color":"#789395","width":5};{"fn":"draw","ex":311,"ey":417,"color":"#789395","width":5};{"fn":"draw","ex":311,"ey":417,"color":"#789395","width":5};{"fn":"draw","ex":312,"ey":418,"color":"#789395","width":5};{"fn":"draw","ex":312,"ey":418,"color":"#789395","width":5};{"fn":"draw","ex":313,"ey":418,"color":"#789395","width":5};{"fn":"draw","ex":313,"ey":417,"color":"#789395","width":5};{"fn":"draw","ex":314,"ey":416,"color":"#789395","width":5};{"fn":"draw","ex":314,"ey":415,"color":"#789395","width":5};{"fn":"draw","ex":315,"ey":414,"color":"#789395","width":5};{"fn":"draw","ex":316,"ey":413,"color":"#789395","width":5};{"fn":"draw","ex":317,"ey":412,"color":"#789395","width":5};{"fn":"draw","ex":317,"ey":411,"color":"#789395","width":5};{"fn":"draw","ex":318,"ey":409,"color":"#789395","width":5};{"fn":"draw","ex":318,"ey":408,"color":"#789395","width":5};{"fn":"draw","ex":319,"ey":407,"color":"#789395","width":5};{"fn":"draw","ex":319,"ey":405,"color":"#789395","width":5};{"fn":"draw","ex":319,"ey":404,"color":"#789395","width":5};{"fn":"draw","ex":319,"ey":403,"color":"#789395","width":5};{"fn":"draw","ex":319,"ey":402,"color":"#789395","width":5};{"fn":"draw","ex":319,"ey":402,"color":"#789395","width":5};{"fn":"draw","ex":319,"ey":402,"color":"#789395","width":5};{"fn":"draw","ex":319,"ey":402,"color":"#789395","width":5};{"fn":"draw","ex":319,"ey":403,"color":"#789395","width":5};{"fn":"draw","ex":319,"ey":406,"color":"#789395","width":5};{"fn":"draw","ex":320,"ey":409,"color":"#789395","width":5};{"fn":"draw","ex":321,"ey":413,"color":"#789395","width":5};{"fn":"draw","ex":322,"ey":416,"color":"#789395","width":5};{"fn":"draw","ex":324,"ey":420,"color":"#789395","width":5};{"fn":"draw","ex":326,"ey":423,"color":"#789395","width":5};{"fn":"draw","ex":328,"ey":427,"color":"#789395","width":5};{"fn":"draw","ex":329,"ey":428,"color":"#789395","width":5};{"fn":"draw","ex":330,"ey":429,"color":"#789395","width":5};{"fn":"draw","ex":331,"ey":430,"color":"#789395","width":5};{"fn":"draw","ex":332,"ey":430,"color":"#789395","width":5};{"fn":"draw","ex":333,"ey":430,"color":"#789395","width":5};{"fn":"draw","ex":334,"ey":430,"color":"#789395","width":5};{"fn":"draw","ex":335,"ey":430,"color":"#789395","width":5};{"fn":"draw","ex":335,"ey":431,"color":"#789395","width":5};{"fn":"endStroke","ex":null,"ey":null,"color":null,"width":null};{"fn":"startStroke","ex":338,"ey":405,"color":"#789395","width":5};{"fn":"draw","ex":338,"ey":405,"color":"#789395","width":5};{"fn":"draw","ex":338,"ey":406,"color":"#789395","width":5};{"fn":"draw","ex":339,"ey":408,"color":"#789395","width":5};{"fn":"draw","ex":340,"ey":411,"color":"#789395","width":5};{"fn":"draw","ex":342,"ey":414,"color":"#789395","width":5};{"fn":"draw","ex":344,"ey":416,"color":"#789395","width":5};{"fn":"draw","ex":345,"ey":418,"color":"#789395","width":5};{"fn":"draw","ex":347,"ey":418,"color":"#789395","width":5};{"fn":"draw","ex":347,"ey":418,"color":"#789395","width":5};{"fn":"draw","ex":348,"ey":418,"color":"#789395","width":5};{"fn":"draw","ex":349,"ey":416,"color":"#789395","width":5};{"fn":"draw","ex":350,"ey":412,"color":"#789395","width":5};{"fn":"draw","ex":352,"ey":408,"color":"#789395","width":5};{"fn":"draw","ex":353,"ey":404,"color":"#789395","width":5};{"fn":"draw","ex":354,"ey":401,"color":"#789395","width":5};{"fn":"draw","ex":354,"ey":399,"color":"#789395","width":5};{"fn":"draw","ex":355,"ey":397,"color":"#789395","width":5};{"fn":"draw","ex":355,"ey":397,"color":"#789395","width":5};{"fn":"draw","ex":355,"ey":397,"color":"#789395","width":5};{"fn":"draw","ex":355,"ey":398,"color":"#789395","width":5};{"fn":"draw","ex":355,"ey":401,"color":"#789395","width":5};{"fn":"draw","ex":355,"ey":404,"color":"#789395","width":5};{"fn":"draw","ex":355,"ey":409,"color":"#789395","width":5};{"fn":"draw","ex":357,"ey":413,"color":"#789395","width":5};{"fn":"draw","ex":358,"ey":418,"color":"#789395","width":5};{"fn":"draw","ex":359,"ey":423,"color":"#789395","width":5};{"fn":"draw","ex":360,"ey":428,"color":"#789395","width":5};{"fn":"draw","ex":361,"ey":434,"color":"#789395","width":5};{"fn":"draw","ex":360,"ey":439,"color":"#789395","width":5};{"fn":"draw","ex":359,"ey":444,"color":"#789395","width":5};{"fn":"draw","ex":355,"ey":448,"color":"#789395","width":5};{"fn":"draw","ex":351,"ey":452,"color":"#789395","width":5};{"fn":"draw","ex":345,"ey":455,"color":"#789395","width":5};{"fn":"draw","ex":338,"ey":457,"color":"#789395","width":5};{"fn":"draw","ex":331,"ey":459,"color":"#789395","width":5};{"fn":"draw","ex":324,"ey":459,"color":"#789395","width":5};{"fn":"draw","ex":318,"ey":459,"color":"#789395","width":5};{"fn":"draw","ex":314,"ey":459,"color":"#789395","width":5};{"fn":"draw","ex":312,"ey":459,"color":"#789395","width":5};{"fn":"draw","ex":311,"ey":459,"color":"#789395","width":5};{"fn":"endStroke","ex":null,"ey":null,"color":null,"width":null}`;
  return parse(dummyInstructions);
};

export const parse = (instructionsString) => {
  if (instructionsString === "" || !instructionsString) return [];
  const instructions = instructionsString.split(";");
  return instructions.map(stringToObj);
};

export const stringToObj = (value) => {
  return JSON.parse(value);
};
