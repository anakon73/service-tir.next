export type FormFields = {
  firstName: string
  lastName: string
  phone: string
  email: string
  comment?: string
  delivery_method: 'nova_poshta' | 'ukr_post' | 'delivery_address'
  city: string
  address: string
  payment_method: 'cash' | 'card'
}
