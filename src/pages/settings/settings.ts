import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings'; 



import {Toggle} from 'ionic-angular';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

	constructor(private settingsServices: SettingsService){}

	onToggle(toggle: Toggle){
		this.settingsServices.setBackground(toggle.checked);
	}

	checkAltBackground(){
		console.log(this.settingsServices.isAltBackGround());
		return this.settingsServices.isAltBackGround();
	}

}
