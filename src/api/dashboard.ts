import axios from 'axios';

export interface CommoditySkuProductRecord {
  key: string;
  value: string;
}
export interface CommoditySkuRecord {
  id?: number;
  price?: number;
  img?: string;
  inventory?: number;
  product?: Array<CommoditySkuProductRecord>[];
}
export interface CommodityRecord {
  id: number;
  name?: string;
  price: number;
  image?: string;
  no?: string;
  number: number;
  inventory: number;
  classify_id?: number;
  sku?: Array<CommoditySkuRecord>[];
  specification?: any;
  productSkus?: any;
  ids?: string;
  product?: any;
  code: string;
}

export function commodityList(data: {
  pages: number;
  classify?: number;
  keyword?: string;
  type: string;
  code?: string;
}) {
  // return axios.get<CommodityRecord[]>('/api/commodity/list', { params });
  return axios.post<CommodityRecord[]>(
    'http://localhost:5050/api/products',
    data
  );
}

export interface ClassifyRecord {
  id: number;
  name: string;
}

export function classifyList() {
  return axios.get<ClassifyRecord[]>('http://localhost:5050/api/classify', {});
}
