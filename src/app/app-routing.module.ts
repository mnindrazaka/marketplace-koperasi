import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';
import { ProdukComponent } from './produk/produk.component';
import { ProdukdetailComponent } from './produkdetail/produkdetail.component';
import { KeranjangComponent } from './keranjang/keranjang.component';
import { KonfirmasiComponent } from './konfirmasi/konfirmasi.component';
import { InformasiusahaComponent } from "./informasiusaha/informasiusaha.component";
import { ProfilComponent } from "./profil/profil.component";
import { PembelianComponent } from "./pembelian/pembelian.component";
import { UbahprofilComponent } from "./ubahprofil/ubahprofil.component";
import { PenjualanComponent } from "./penjualan/penjualan.component";
import { BuatusahaComponent } from "./buatusaha/buatusaha.component";
import { ProdukusahaComponent } from "./produkusaha/produkusaha.component";
import { UlasanComponent } from "./ulasan/ulasan.component";
import { ProfilusahaComponent } from "./profilusaha/profilusaha.component";
import { RekeningComponent } from "./rekening/rekening.component";


const routes: Routes = [
  {
    path: '',
    component: BerandaComponent,
  },
  {
    path: 'produk',
    component: ProdukComponent,
  },
  {
    path: 'produk/1',
    component: ProdukdetailComponent
  },
  {
    path: 'keranjang',
    component: KeranjangComponent
  },
  {
    path: 'konfirmasi',
    component: KonfirmasiComponent
  },
  {
    path: 'usaha',
    component: InformasiusahaComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'pembelian',
    component: PembelianComponent
  },
  {
    path: 'ubahprofil',
    component: UbahprofilComponent
  },
  {
    path: 'penjualan',
    component: PenjualanComponent
  },
  {
    path: 'buatusaha',
    component: BuatusahaComponent
  },
  {
    path: 'produkusaha',
    component: ProdukusahaComponent
  },
  {
    path: 'ulasan',
    component: UlasanComponent
  },
  {
    path: 'profilusaha',
    component: ProfilusahaComponent
  },
  {
    path: 'rekening',
    component: RekeningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
