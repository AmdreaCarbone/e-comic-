import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CardProductComponent } from './card-product/card-product.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ProductService } from './services/product.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { UserComponent } from './pages/user/user.component';
import { LoginService } from './services/log-in.services';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';




registerLocaleData(it);

@NgModule({
  declarations: [
    AppComponent,
    CardProductComponent,
    WelcomeComponent,
    UserComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzCardModule,
    NzGridModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: it_IT },
    ProductService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
