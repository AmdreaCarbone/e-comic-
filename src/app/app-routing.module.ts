import { RimborsiComponent } from './pages/rimborsi/rimborsi.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SpedizioniComponent } from './pages/spedizioni/spedizioni.component';
import { ServizioclientiComponent } from './pages/servizioclienti/servizioclienti.component';
import { UserComponent } from './pages/user/user.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { BancomatComponent } from './pages/bancomat/bancomat.component';
import { PaypalComponent } from './pages/paypal/paypal.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome/null' },
  { path: 'welcome/:type', component: WelcomeComponent },
  { path: 'profilo', component: UserProfileComponent },
  { path: 'rimborsi', component: RimborsiComponent },
  { path: 'spedizioni', component: SpedizioniComponent },
  { path: 'servizioClienti', component: ServizioclientiComponent },
  { path: 'login', component: UserComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'pagamento', component: PagamentoComponent, children: [{
    path: 'bancomat', component: BancomatComponent
  }, {
    path: 'paypal', component:PaypalComponent
  }] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
