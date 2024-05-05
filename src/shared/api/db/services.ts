import type { z } from 'zod'
import type { PriceSchema, ServiceSchema } from '../service'

const description = `Это текст-"рыба", часто используемый
в печати и вэб-дизайне. Lorem Ipsum является`

const full_description = `Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.`

const prices: z.infer<typeof PriceSchema>[] = [
  {
    name: 'Заміна поршнів на двигунах Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 2, max: 3 },
    price: 25500,
  },
  {
    name: 'Капітальний ремонт двигуна Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 3, max: null },
    price: 20500,
  },
  {
    name: 'Ремонт двигуна Scania R-Series 4x2 2016 DC16 115',
    duration: { min: null, max: 10 },
    price: 15500,
  },
  {
    name: 'Заміна поршнів на двигунах Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 2, max: 3 },
    price: 32500,
  },
  {
    name: 'Капітальний ремонт двигуна Scania R-Series 4x2 2016 DC16 115',
    duration: { min: null, max: 5 },
    price: 25500,
  },
  {
    name: 'Ремонт двигуна Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 3, max: null },
    price: 65500,
  },
]

const services: z.infer<typeof ServiceSchema>[] = [
  {
    id: 1,
    name: 'Ремонт двигунів',
    category: 'Мотор сервіс',
    image: 'https://www.car-service.in.ua/wp-content/uploads/2020/04/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D0%B4%D0%B2%D0%B8%D0%B3%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B9.jpg',
    description,
    full_description,
    prices,
  },
  {
    id: 2,
    name: 'Cервис ходовой',
    category: 'Тех. огляд',
    image: 'https://s3-alpha-sig.figma.com/img/848a/d1aa/80e54290c6f25a13b05f0520529ae899?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B5UitLF1WlSMXYyztnu58l~hGyVHN9M4WD4jOjrdJyW3XaWuNsjBqR1MEDWWLM88y1smBZbKQCSIS5amIG8EenHvVdLpMSs8rbOSWPYGQFWQqK4n0sWWBczn78LOrFrjgC4vO2Jqn0zSrRIkSjfdCUIbgjPBvIlFMGQQv8n5LtSPMloFRPqE95srqIcX5a9HFFP8pvVCD~rVsCy6ALtGoMWgbzeBp-FabZW91-TqmvR89Mc~1fbBo~HmeG2Pn42B3WgKETZoJ7oD99tLxQE~ZUATpOgLTIxEj9WxRfRdx0Fo0WpxZyx7sUU2IwAAr6UzrPbt9281xrc5ZFbp9kUUCw__',
    description,
    full_description,
    prices,
  },
  {
    id: 3,
    name: 'Сварочные роботы',
    category: 'Металообробка',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Yb_Hhn-r5jrGasfitlum3Eug7ceDIkZDLN-sEwyVebKGLxq4qCI3NA6-mrU3dJk1dbo&usqp=CAU',
    description,
    full_description,
    prices,
  },
  {
    id: 4,
    name: 'Дезинфекция и озонирование автомобилей и автобусов',
    category: 'Мийка, шиномонтаж',
    image: 'https://s3-alpha-sig.figma.com/img/9e66/5f74/3c3af79ecfc6088104a02003bfc3b0ad?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JJHZ3-HKm~bvi4QXNseVPk4bMaZ~B0daGQnStPcp5PUbmj6h-N7BP8exSTrnUrPTGoSvmqx2zoGE1FMSvgIOCbsrmqXwyGNIf5LVjb11qQS-l4a32Z6QxQCiTOzvaTanC8bQYcehabhdq-DvHTYlgQkZpUcIcEa5ovR4TV2rB0sxEjwhHlQEn8jjV9mSWyOQKR8XijYxoYBM7Fwfl-3XN8q59d-umVPo15XcBLEZV7564BTa~G-ZFpuvr8pyQCj0hpGQPnqxma7FucoeTOAqihXv~7kwO51MyTrlrjw7W-Ysc~9UmcxbsJIgw8bAXVClUHzZB1pzJW~aMdtIfMqBiA__',
    description,
    full_description,
    prices,
  },
  {
    id: 5,
    name: 'Токарные роботы',
    category: 'Металообробка',
    image: 'https://s3-alpha-sig.figma.com/img/2241/871a/ba411a7bb00316419271ec78c26d6d19?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UzY6VKPV1lyQIxR0C1mU5pibAPVEUInnct9GgxeX7Zf--QR7LqjBvjfCKifov27F3wXcLoLApQ9Clae5u~H3hTAsPUtTDOdfjq8ioaqbvHiH8Rasev0J7ASdkzr7Z7NvAezQvJHKbX05a9YacUtrCD9CQ2UrCiQRkiD6kaxKhUXCsS6M0oqHemMx0R14FjX16TZCaeauJJA8ubROR8t2YB-NK7ZcLcDNoDRLPVQoHlvDHLluozgrDG4MKtb~6D~MFPMSqf6dLRT1GAQvOrGVFneijQa~hqmxn6vaR2gUuXd8UmV3TrzIQUzDOXasPGIF58Iv91-5B6lUSfoHrQwtdA__',
    description,
    full_description,
    prices,
  },
  {
    id: 6,
    name: 'Ремонт турбин',
    category: 'Турбо сервіс',
    image: 'https://s3-alpha-sig.figma.com/img/6d60/1844/67b54532f33d7f672815d60690dc2c47?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gWmatBWXcbfbVSdxH5Mb7b6P197XkQs4igu-bm6rLUS27s-x8wiZZ8gCtAFsTOwLsdj51Sx7jtpXa38T-LwEsj0QWuFvJ3FTbGEOMOBjvtHFOSLUlFi26t51HNSNf6kGTWGzoDXWU00DotkcdqFok80NesxLplxqxdbJshWyGcNHgrVtrNuQlzgeVngT~zfC7Y~nz01PHZkHHlWGNc7WyRNmQh77Q-LAXmZAlW-25KBHwoUNmxBDwb5-pjdarZ2n1rxzVYCFTiTdFrKz5lgLkPVuZF-lPPLbDBhAFrvIVYDDZaJjVbihPjw5L8zo6Mbt2JJB-sRbpzQdVEPMB2-7bw__',
    description,
    full_description,
    prices,
  },
  {
    id: 7,
    name: 'Заміна зношених запчастин',
    category: 'Віділ запчастин',
    image: 'https://japan-cars.com.ua/imgbank/Image/stati/luchshie-proizvoditeli-neoriginalnyh-zapchastej.jpg',
    description,
    full_description,
    prices,
  },
  {
    id: 8,
    name: 'Перевезення грузів',
    category: 'Вантажні перевезення',
    image: 'https://www.seeds.org.ua/wp-content/uploads/2020/04/%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D1%96%D0%B2%D0%BA%D0%B0-%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B0.jpg',
    description,
    full_description,
    prices,
  },
  {
    id: 9,
    name: 'Стоянка для вантажівок',
    category: 'Стоянка TIR',
    image: 'https://logist.today/wp-content/uploads/2020/06/parking_tir.jpg',
    description,
    full_description,
    prices,
  },
  {
    id: 10,
    name: 'Технічний огляд',
    category: 'Тех. огляд',
    image: 'https://centr-avto.com.ua/wp-content/uploads/sertificatsia.jpg',
    description,
    full_description,
    prices,
  },
]

export default services
