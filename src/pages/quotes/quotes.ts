import { Component } from '@angular/core';
import { IonicPage, NavParams,AlertController } from 'ionic-angular';
import { Quote } from '../../data/quoteInterface';
import { QuotesService } from '../../services/quotes'; 


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

    quoteGroup:{category: string, quotes: Quote[], icon: string};



	 constructor(
	 	private navParams: NavParams,
	 	private alertCtrl: AlertController,
	 	private quotesService:QuotesService){
	 	this.quoteGroup = this.navParams.data;
	 	// console.log(this.quoteGroup)
	 }

	 ionViewDidLoad(){
	 	
	 }

	 onAddToFavourites(selectedQuote: Quote){
	 	let alert = this.alertCtrl.create({
	 		title: "Add Quote",
	 		subTitle: "Are you sure?",
	 		message: "Are you sure you wanna add this quote?",
	 		buttons: [
	 		{

	 			text: 'yes go ahead',
	 			handler: () =>{
	 				this.quotesService.addQuoteToFavorite(selectedQuote);
	 			}

	 		},
	 		{
	 			text: 'No I dont want to',
	 			role: 'cancel',
	 			handler:()=>{
	 				console.log("cancelled");
	 			}
	 		}
	 		]
	 	});

	 	alert.present();
	 }

	onRemoveFromFavourites(selectedQuote: Quote){
			 	let alert = this.alertCtrl.create({
	 		title: "Remove Quote",
	 		subTitle: "Are you sure?",
	 		message: "Are you sure you wanna remove this quote?",
	 		buttons: [
	 		{

	 			text: 'yes go ahead',
	 			handler: () =>{
	 				this.quotesService.removeQuoteFromFavorite(selectedQuote);
	 			}

	 		},
	 		{
	 			text: 'No I dont want to',
	 			role: 'cancel',
	 			handler:()=>{
	 				console.log("cancelled");
	 			}
	 		}
	 		]
	 	});

	 	alert.present();
	 }
		
	

	isFavorite(quote: Quote){
		return this.quotesService.isQuoteFavorite(quote);
	}


}
