// let arr=[2,3,4,5,6,8,7,99,];
// console.log(arr);
// let new_arr=[];
// let created=[]
// let choice;
// do {
//   created=[];
//   let userconfirm=confirm("Array yaradmaq isdeyirsiniz mi?")
//   if (userconfirm) {
//     let number=prompt("Nece eded yazmaq isdeyirsiniz?")
//     if (isNaN(number)) {
//       alert("Daxil edilmis data sadece reqem olabiler!!!")
//     }
//     else{
//       for (let i = 0; i < number; i++) {
//         let input=prompt("ededi daxil edin")
//         if (isNaN(input)) {
//            alert("Daxil edilmis data sadece reqem olar!!!")
//         }
//         else{
//           created.push(input)
//         }
//       }
//       let data=prompt("neceye vurmaq istediyinizi daxil edin")
//       if (isNaN(data)) {
//         alert("Daxil edilmis data sadece reqem olabiler!!!")
//       }
//       else{
//         multiplyx(data)
//         console.log(created);
//       }
//         choice=confirm("Davam etmek isdeyirsiniz mi?")
//     }
//   }
//   else{
//     new_arr=[];
//     let data=prompt("neceye vurmaq istediyinizi daxil edin")
//   if (isNaN(data)) {
//     alert("Daxil edilmis data sadece reqem olabiler!!!")
//   }
//   else{
//     multiply(data)
//     console.log(new_arr);
//   }
//     choice=confirm("Davam etmek isdeyirsiniz mi?")
//   }
// } while (choice==true);

// function multiply(data) {
//   for (let i = 0; i < arr.length; i++) {
//     let x;
//     x=arr[i]*data;
//     new_arr.push(x);
//   }
// }
// function multiplyx(data) {
//   for (let i = 0; i < created.length; i++) {
//     let x;
//     x=created[i]*data;
//     created.push(x);
//   }
// }


const photos=document.getElementsByTagName(img)
var count=2;
photos.addEventListener("click",function(){
  const div = document.querySelector(".row");
  index++;
  div.innerHTML += `<div class="col-md-3 width cursor-pointer"><img width="300" src="/assets/photo/wallpaperflare.com_wallpaper (${count}).jpg"></div>`
  let img = document.querySelector("img");
  let imgSrc = img.src;
  document.querySelector('img [name=bat]').src = imgSrc;
})