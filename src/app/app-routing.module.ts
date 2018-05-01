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
    path: 'keranjang/1',
    component: KeranjangComponent
  },
  {
    path: 'konfirmasi/1',
    component: KonfirmasiComponent
  },
  {
    path: 'profilusaha/1',
    component: InformasiusahaComponent
  },
  {
    path: 'profil/1',
    component: ProfilComponent
  },
  {
    path: 'pembelian/1',
    component: PembelianComponent
  },
  {
    path: 'ubahprofil/1',
    component: UbahprofilComponent
  },
  {
    path: 'penjualan/1',
    component: PenjualanComponent
  },
  {
    path: 'buatusaha/1',
    component: BuatusahaComponent
  },
  {
    path: 'produkusaha/1',
    component: ProdukusahaComponent
  },
  {
    path: 'ulasan/1',
    component: UlasanComponent
  },
  {
    path: 'usaha/1',
    component: ProfilusahaComponent
  },
  {
    path: 'rekening/1',
    component: RekeningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
