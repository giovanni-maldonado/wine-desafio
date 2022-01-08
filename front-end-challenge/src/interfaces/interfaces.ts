export interface Iitems {
  id: number,
  image: string,
  name: string,
  price: number,
  discount: number,
  priceMember: number,
  priceNonMember: number,
  type: string,
  classification: string,
  size: string,
  rating: number,
  avaliations: number,
  country: string,
  region: string,
  volume: string,
  flag: string,
  sommelierComment: string
}

export interface IapiResponse {
  items: Iitems[],
  page: number,
  totalPages: number,
  itemsPerPage: number,
  totalItems: number,
}
