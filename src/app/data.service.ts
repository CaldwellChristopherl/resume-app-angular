import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) {}

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId){
    return this.http.get(`http://192.168.1.18:3000/api/user/${userId}`)
  }
  getUserHistory(userId){
    return this.http.get(`http://192.168.1.18:3000/api/user/${userId}/workhistory`)
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}

