import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from "../pages/cadastro/cadastro";
import { MenuPage } from "../pages/menu/menu";
import { SlidePage } from "../pages/slide/slide";
import { CardapiobebidasPage } from "../pages/cardapiobebidas/cardapiobebidas";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CardapiobebidasPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
