import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../User';
import { LoadingController, ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { AngularFireDatabaseModule } from '@angular/fire/database';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  private loading: any;
  constructor(private db: AngularFireDatabase, private router: Router,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private authService: AuthService) {}

  ngOnInit() {
  }
  async Login(user: User){
    await this.presentLoading();
    try {
      await this.authService.login(this.userLogin);
      this.router.navigate(['home']);
    } catch (error) {
      console.error(error);
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }

  }
  Register(){
    this.router.navigate(['cadastro']);

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

