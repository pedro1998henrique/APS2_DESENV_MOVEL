import { async } from '@angular/core/testing';
import { AuthService } from './../services/auth.service';
import { User } from '../User';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router} from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public userRegister: User = {};
  private loading: any;
  constructor(private db: AngularFireDatabase, private router: Router,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private authService: AuthService) { }
  ngOnInit() {
  }
  async Cadastrar(){

  await this.presentLoading();
  try {
    await this.authService.register(this.userRegister);
  } catch (error) {
    console.error(error);
    this.presentToast(error.message);
  } finally {
    this.loading.dismiss();
  }


}

  Retornar(){
    this.router.navigate(['login']);

}
async presentLoading(){
  this.loading = await this.loadingCtrl.create({message: 'Por favor, aguarde...'
});
  return this.loading.present();
}
async presentToast(message: string) {
  const toast = await this.toastCtrl.create({ message, duration:2000 });
  toast.present();
}
}
