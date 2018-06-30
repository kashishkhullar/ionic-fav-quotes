import { Component , OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from "../../data/quoteInterface";
import  quotes from "../../data/quotes";
import  {QuotesPage} from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

	quotesPage=QuotesPage;

	quoteCollection: {category: string, quotes: Quote[],icon: string}[]

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LibraryPage');
	}

	ngOnInit(){
		this.quoteCollection = quotes;
		console.log(quotes);
	}

}
