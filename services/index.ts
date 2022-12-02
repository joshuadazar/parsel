import {Observable, BehaviorSubject} from 'rxjs'

export class Service {
  subject: BehaviorSubject<string>;
  dataArray: BehaviorSubject<any>;
  data = [
    {
      id: '0',
      src: 'https://i.picsum.photos/id/163/200/200.jpg?hmac=mEG0MVDQnbY2PIFVIxZKgINnXrapgb5G5S1QMtMTt98'
    },
    {
      id: '1',
      src: 'https://i.picsum.photos/id/927/200/200.jpg?hmac=8gJRiqNVrPAFPg0IyGTTYxaPJBSoLOVg4elvGEPV30M'
    },
    {
      id: '2',
      src: 'https://i.picsum.photos/id/50/200/200.jpg?hmac=Tz-5Oumk5gfW4P4hAiYNsHDjmBVhOzedd8gy4aEsumY'
    },
    {
      id: '3',
      src: 'https://i.picsum.photos/id/170/200/200.jpg?hmac=2Xh3j3MMZE07_G7UDPgPRm557LRHzyFrkyeWRXdhdvU'
    },
    {
      id: '4',
      src: 'https://i.picsum.photos/id/1069/200/200.jpg?hmac=kdrhLJLz2Y5ldVFXX84RRoiGMO3j6z6AHWfWK7sxgI8'
    },
    {
      id: '5',
      src: 'https://i.picsum.photos/id/727/200/200.jpg?hmac=3t3XFTDKvF4DdvtTj-t8IMm5uwdlyzdECQmn87m3qk0'
    },
    {
      id: '6',
      src: 'https://i.picsum.photos/id/324/200/200.jpg?hmac=qhw4ORwk8T1r-Rxd2QREZORSVvc6l_R1S6F3Pl9mR_c'
    },
    {
      id: '7',
      src: 'https://i.picsum.photos/id/337/200/200.jpg?hmac=9bd24xSAcmLdObO71hB9dXskhXQmQ2b0YB3QTAzhUtY'
    },
    {
      id: '8',
      src: 'https://i.picsum.photos/id/36/200/200.jpg?hmac=VnDu-KXiZmaBJk0XmixLx-JdUPLqVQtLdiqMXOn4LZc'
    },
    {
      id: '9',
      src: 'https://i.picsum.photos/id/738/200/200.jpg?hmac=s1pXxIw4TdDLyUY2RRVeDyhLPUF2xW3AFjdzjVsE6zc'
    },
    {
      id: '10',
      src: 'https://i.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI'
    },
    {
      id: '11',
      src: 'https://i.picsum.photos/id/35/200/200.jpg?hmac=z-UuflRhQoAvC6fqr2wnIlQzwtzUxTNE6a0vimQirvA'
    },
    {
      id: '12',
      src: 'https://i.picsum.photos/id/974/200/200.jpg?hmac=3skiM35hn9GtUF77ruZWI1mTtIROBBhkDIOmGwS7kpY'
    },
    {
      id: '13',
      src: 'https://i.picsum.photos/id/477/200/200.jpg?hmac=pGA68LBET23UPGB7L8xL1pA7PYT_x7JazGX__CnlliU'
    },
    {
      id: '14',
      src: 'https://i.picsum.photos/id/928/200/200.jpg?hmac=5MQxbf-ANcu87ZaOn5sOEObpZ9PpJfrOImdC7yOkBlg'
    },
    {
      id: '15',
      src: 'https://i.picsum.photos/id/744/200/200.jpg?hmac=8T0b9ya-1hs9mQn1Sosud4eldJZ6haGcupAiLTJHe2o'
    },
    {
      id: '16',
      src: 'https://i.picsum.photos/id/1025/200/200.jpg?hmac=lPP7DRqIRSrMTmBMEg5NbVzguwqQQs2meA5kSrgLAhc'
    },
    {
      id: '17',
      src: 'https://i.picsum.photos/id/390/200/200.jpg?hmac=jO0I_KIqGlM283KrH_KN8THBmylOIRyiWbKAx8412Ss'
    },
    {
      id: '18',
      src: 'https://i.picsum.photos/id/360/200/200.jpg?hmac=uO4zEvFVrZ6_pBuLc0DuGdgwe5g3FiJCd7bGsr2lhCo'
    },
    {
      id: '19',
      src: 'https://i.picsum.photos/id/954/200/200.jpg?hmac=U_V-b3xGbMM1KTSaB5KKqncFD4fmOVG5iK39Bjd9DoQ'
    }]
  
  
 
  constructor(){
    this.subject = new BehaviorSubject('valor inicial');
    this.dataArray = new BehaviorSubject(this.data);
  }

  getSubject() {
      return this.subject.asObservable()
  }

  setSubject(value:string) {
    console.log(value)
    this.subject.next(value)
    console.log(this.subject) 
  }

  getObservable() {
    return new Observable((suscriber) => {
      const loteryNumber = [12, 11, 48, 38];
      loteryNumber.map((n) => suscriber.next(n));
    });
  }
  

  // dataArray
  getDataArray() {
    return this.dataArray.asObservable();
  }

  setDataArray(value: Array<any>) {
    this.dataArray.next(value);
  }
}

const rootElement = document.getElementById("root");
const loader = document.getElementById("loading");
let imgCount = 0;