import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteService } from '../../services/domain/cliente.service';
import { ProfilePage } from './profile';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  providers: [
    ClienteService,
  ],
})
export class ProfilePageModule {}
