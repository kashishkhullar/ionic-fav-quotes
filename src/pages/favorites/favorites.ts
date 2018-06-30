import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes'; 
import { Quote } from '../../data/quoteInterface';
import {QuotePage} from '../quote/quote';
import { SettingsService } from '../../services/settings'; 

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

	quotes: Quote[];

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	private quotesService:QuotesService,
    private modalCtrl: ModalController,
    private settingsService:SettingsService,
    ) {

  	
  }

  onViewQuote(quote:Quote){
    let modal = this.modalCtrl.create(QuotePage,quote);
    modal.present();
    modal.onWillDismiss((remove:boolean)=>{
      if(remove)
        this.onRemoveFromFavorites(quote);
    });
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onRemoveFromFavorites(quote: Quote){
    this.quotesService.removeQuoteFromFavorite(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  getBackground(){
   return this.settingsService.isAltBackGround() ? 'altBackground' : 'primary';
  }

  isAltBacground(){
    return this.settingsService.isAltBackGround();
  }

}
