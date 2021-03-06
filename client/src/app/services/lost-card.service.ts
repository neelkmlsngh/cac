import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { config } from '../config';

@Injectable()
export class LostCardService {

	config = config;

  constructor(private http: Http) { }
  
  ngOnInit() {
}

//Lost Card Service to hit API of db to save comment & date
save(comment) {	
	console.log(comment)
 return this.http
             .post(this.config.connect.url+this.config.connect.port+'/'+'lostInsert',comment)
             .map(res=>res.json());
	}

//Lost Card Service to hit API of db to get details of lost card
getLostCard()
{
	return this.http
	            .get(this.config.connect.url+this.config.connect.port+'/'+'findlost')
	            .map(res=>res.json());
}

	}
