
function superbowlWin(record){

  const win =  record.find(res => res.result === "W");
 if (win){
  return win.year
 }
}