/**
 * Created by Administrator on 2017/9/3 0003.
 */
export function urlParse(){
  let url=window.location.search;
  let obj={};
  let reg=/[?&][^?&]+=[^?&]+/g;
  let arr=url.match(reg);
  if(arr){
    arr.forEach((item) =>{
      let temArr= item.substring(1).split("=");
      let key=decodeURLComponent(tempArr[0]);
      let val=decodeURLComponent(tempArr[1]);
      obj[key]=val;
    });
  }
  return obj;
};
