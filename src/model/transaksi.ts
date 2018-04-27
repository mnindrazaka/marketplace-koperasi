export interface Transaksi {
  id_transaksi: number;
  total_bayar: number;
  id_pengguna: number;
  latitude: string;
  longitude: string;
  status: boolean;
  bukti: string;
  total_berat: number;
  id_kurir: number;
  ongkir: number;
}
