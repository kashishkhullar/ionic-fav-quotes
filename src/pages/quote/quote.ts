import { Component } from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

	author: string;
	quote: string;

	constructor(private viewCtrl: ViewController,
				private navParams:NavParams){

	}

	ionViewDidLoad(){
		this.author=this.navParams.get('person');
		this.quote=this.navParams.get('text');
	}

	onClose(remove = false){
		this.viewCtrl.dismiss(remove);
	}


}
