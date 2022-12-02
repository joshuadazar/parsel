import { Subscription } from "rxjs";
import { Service } from "./services";


export class BaseComponent {
  constructor() {

  }
}

let subscriber = new Subscription;
let dataArraySubscription = new Subscription;
let subscription = new Service;

const ID = {
  button : 'send',
  title : 'title',
  list : 'dataArrList'
}

const DOM = {
  button: document.getElementById(ID.button)!,
  titte: document.getElementById(ID.title)!,
  list: document.getElementById(ID.list)!
}

subscriber = subscription.getSubject().subscribe((val:string)=>{
  //console.log('esta pasando el subject')
  DOM.titte.innerText = val
})

dataArraySubscription = subscription.getDataArray().subscribe((arr:any[]) => {
  arr !== null && showListDataArray(arr)
})

function showListDataArray(array: any) {
  array.forEach((value,) => {
    DOM.list.innerHTML += `<li class="card">${value.id} <img src="${value.src}" alt="${value.id}"> </li>`
  })
}

//Event Listener

DOM.button.addEventListener('click', ()=> {
  subscription.setSubject('casa')
})





