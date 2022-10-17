// let arr=[2,3,4,5,6,8,7,99,];
// console.log(arr);
// let new_arr=[];
// let created=[];
// let choice;
// var number;
// do {
//   let userconfirm=confirm("Array yaradmaq isdeyirsiniz mi?")
//   if (userconfirm) {
//      number=prompt("Nece eded yazmaq isdeyirsiniz?")
//     if (isNaN(number)) {
//       alert("Daxil edilmis data sadece reqem olabiler!!!")
//     }
//     else{
//       for (let i = 0; i < number; i++) {
//         let input=prompt(" ededi daxil edin")
//         if (isNaN(input)) {
//            alert("Daxil edilmis data sadece reqem olar!!!")
//         }
//         else{
//           created.push(input)
//         }
//       }
//       created=[];
//       let h=prompt("neceye vurmaq istediyinizi daxil edin")
//       if (isNaN(h)) {
//         alert("Daxil edilmis data sadece reqem olabiler!!!")
//       }
//       else{
//         multiplyx(h)
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
//   for (let i = 0; i < number; i++) {
//     let x;
//     x=created[i]*data;
//     created.push(x);
//   }
// }


// const photos=document.getElementsByTagName(img)
// var count=2;
// photos.addEventListener("click",function(){
//   const div = document.querySelector(".row");
//   count++;
//   div.innerHTML += `<div class="col-md-3 width cursor-pointer"><img width="300" src="/assets/photo/wallpaperflare.com_wallpaper (${count}).jpg"></div>`
//   let img = document.querySelectorAll("img");
//   let imgSrc = img.src;
//   document.querySelector('img[name=bat]') = imgSrc;
// })


// let index=0

// const photo=document.getElementById("main")

// let photos=new Array('')



// var photos=[
//   /Users/seymur/Desktop/17-10-2022-Homework/assets/photo/wallpaperflare.com_wallpaper (2).jpg,
//   /Users/seymur/Desktop/17-10-2022-Homework/assets/photo/wallpaperflare.com_wallpaper (3).jpg,
//   /Users/seymur/Desktop/17-10-2022-Homework/assets/photo/wallpaperflare.com_wallpaper (4).jpg,
//   /Users/seymur/Desktop/17-10-2022-Homework/assets/photo/wallpaperflare.com_wallpaper (4).jpg
// ]

//   let img = document.getElementsByTagName("img");
//   var count=0;
//   img.addEventListener("click",function(){
//     count++
//     div.innerHTML += `<div class="col-md-3 width cursor-pointer"><img width="300" src="photos[${count}]"></div>`
//     let img = document.querySelectorAll("img");
//     let imgSrc = img.src;
//     document.querySelectorAll("img").src = imgSrc;
// })