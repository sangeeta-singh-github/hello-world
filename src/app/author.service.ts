import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  authors=[];

  constructor() { 
  }

  getAuthors(){
    return  [{
      givenName : 'Sangeeta',
      familyName: 'Singh',
      additionalName: '',
      birthDate: '1987-01-25',
      birthPlace:{
        type:'place',
        address:'Dumari, Uttar Pradesh'
      }
    },
    {
      givenName : 'Jitendra',
      familyName: 'Kori',
      additionalName: '',
      birthDate: '1982-10-10',
      birthPlace:{
        type:'place',
        address:'Ruhiyawa, Uttar Pradesh'
      }
    },
    {
      givenName : 'Tiara',
      familyName: 'Kori',
      additionalName: '',
      birthDate: '2022-02-02',
      birthPlace:{
        type:'place',
        address:'Mumbai, Maharashtra'
      }
    },
    {
      givenName : 'Kavita',
      familyName: 'Kori',
      additionalName: '',
      birthDate: '1987-01-25',
      birthPlace:{
        type:'place',
        address:'Ruhiyawa, Uttar Pradesh'
      }
    },
    {
      givenName : 'Shailendra',
      familyName: 'Kori',
      additionalName: '',
      birthDate: '1987-01-25',
      birthPlace:{
        type:'place',
        address:'Ruhiyawa, Uttar Pradesh'
      }
    },
  ]
  }
}
