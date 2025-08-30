// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class Chat {
  
  
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Chat {
  // private apiUrl = 'http://localhost:3000/chat';
    private apiUrl = 'https://cb-backend-vnx2.onrender.com/chat';

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    return this.http.post<any>(this.apiUrl, { message });
  }
}
