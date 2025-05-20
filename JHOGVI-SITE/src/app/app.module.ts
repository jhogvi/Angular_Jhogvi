import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/nav-bar/menu-bar/menu-bar.component';
import { FooterBarComponent } from './components/nav-bar/footer-bar/footer-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { CostumerSupportComponent } from './pages/costumer-support/costumer-support.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { LeftComponent } from './components/home/left/left.component';
import { RightComponent } from './components/home/right/right.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ContactComponent } from './components/costumer/contact/contact.component';
import { SupportComponent } from './components/costumer/support/support.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './components/filters/filter/filter.component';
// Importando os módulos do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MiniCardComponent } from './components/cards/mini-card/mini-card.component';
import { ContentComponent } from './pages/content/content.component';
import { ElementsComponent } from './components/shopping-cart/elements/elements.component';
import { ResultedComponent } from './components/shopping-cart/resulted/resulted.component';
import { ParsePrecoPipe } from './shared/parse-preco.pipe';
import { CardEventComponent } from './components/card-event/card-event.component';
import { EventComponent } from './pages/event/event.component';
import { ProfileComponent } from './components/my-account/profile/profile.component';
import { WalletComponent } from './components/my-account/wallet/wallet.component';
import { AddressComponent } from './components/my-account/address/address.component';
import { OrdersComponent } from './components/my-account/orders/orders.component';
import { CardResumoComponent } from './components/checkout/card-resumo/card-resumo.component';
import { MatCardModule } from '@angular/material/card';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AlertCompraComponent } from './components/alert-compra/alert-compra.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    MyAccountComponent,
    CostumerSupportComponent,
    EventosComponent,
    LeftComponent,
    RightComponent,
    SocialMediaComponent,
    ContactComponent,
    SupportComponent,
    FilterComponent,
    MiniCardComponent,
    ContentComponent,
    ElementsComponent,
    ResultedComponent,
    ParsePrecoPipe,
    CardEventComponent,
    EventComponent,
    ProfileComponent,
    WalletComponent,
    AddressComponent,
    OrdersComponent,
    CardResumoComponent,
    AlertCompraComponent,
  ],
  imports: [
	ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
	MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
	FormsModule,
	MatCardModule,
	NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
