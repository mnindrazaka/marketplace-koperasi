export interface Produk {
  id_produk: number;
  nama: string;
  deskripsi: string;
  id_usaha: number;
  id_kategori: number;
  foto: string;
  harga: number;
  status: boolean;
  satuan: string;
  berat: number;
}
