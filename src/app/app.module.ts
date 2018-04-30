import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BerandaComponent } from './beranda/beranda.component';
import { ProdukComponent } from './produk/produk.component';
import { ProdukdetailComponent } from './produkdetail/produkdetail.component';
import { KeranjangComponent } from './keranjang/keranjang.component';
import { KonfirmasiComponent } from './konfirmasi/konfirmasi.component';
import { InformasiusahaComponent } from './informasiusaha/informasiusaha.component';
import { ProfilComponent } from './profil/profil.component';
import { PembelianComponent } from './pembelian/pembelian.component';
import { UbahprofilComponent } from './ubahprofil/ubahprofil.component';
import { PenjualanComponent } from './penjualan/penjualan.component';
import { BuatusahaComponent } from './buatusaha/buatusaha.component';
import { ProdukusahaComponent } from './produkusaha/produkusaha.component';
import { UlasanComponent } from './ulasan/ulasan.component';
import { ProfilusahaComponent } from './profilusaha/profilusaha.component';
import { RekeningComponent } from './rekening/rekening.component';


@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent,
    ProdukComponent,
    ProdukdetailComponent,
    KeranjangComponent,
    KonfirmasiComponent,
    InformasiusahaComponent,
    ProfilComponent,
    PembelianComponent,
    UbahprofilComponent,
    PenjualanComponent,
    BuatusahaComponent,
    ProdukusahaComponent,
    UlasanComponent,
    ProfilusahaComponent,
    RekeningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
