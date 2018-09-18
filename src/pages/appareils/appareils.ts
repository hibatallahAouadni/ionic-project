import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SingleAppareilPage } from '../single-appareil/single-appareil';

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html'
})
export class AppareilsPage {

    appareilsList = [
        {
          name: 'Machine à laver',
          description: [
            'Volume: 6 litres',
            'Temps de lavage: 2 heures',
            'Consommation: 173 kWh/an'
          ]
        },
        {
          name: 'Télévision',
          description: [
            'Dimensions: 40 pouces',
            'Consommation: 22 kWh/an'
          ]
        },
        {
          name: 'Ordinateur',
          description: [
            'Marque: fait maison',
            'Consommation: 500 kWh/an'
          ]
        }
      ];

  constructor(private modalCtrl: ModalController) {}

  onLoadAppareil(appareil: {name: string, description: string[]}) {
    let modal = this.modalCtrl.create(SingleAppareilPage, {appareil: appareil});
    modal.present();
    }
}