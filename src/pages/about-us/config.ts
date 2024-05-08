import { fakerUK as f } from '@faker-js/faker'
import type { Advantage } from '@/shared/types'
import { makeReviewMock } from '@/shared/api/review/mock'

function makeAdvantageMock(): Advantage {
  return {
    name: f.lorem.words({ min: 1, max: 3 }),
    description: f.lorem.words({ min: 15, max: 23 }),
    image: f.internet.emoji({ types: ['object'] }),
  }
}

export const advantages = Array.from({ length: 8 }, () => makeAdvantageMock())

export const reviews = Array.from({ length: 6 }, () => makeReviewMock())

export const workers = [
  {
    image: 'https://s3-alpha-sig.figma.com/img/96b9/8050/a24ef1c4e886fee25ce78383d1e7cbe8?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AT9KT5eHzs4nDt-LFHlJcaxGgqA~8IDyMM5vNwlBoYjU55jROuNG~DwOrT7-Y-JPSetqkaFFCC8rKZ7Sh3obiqSGAss8uurOiolZ1UTV9btim26x8WtpsKUNiFPnrmbGOJBfah9RMIbdgAFiBM8I--14MJOpHujSZRBQA1V7qsTRaSGhsUQEf6JN50kX6xkrXjofpIR2Facrh~XIFCKaSJGF5sGo-jLgvlgqNpxk1ugCSeaWN4hsvn~V-KnWCiwcLpieJo1FJOdvgoX7jzRK4lakmYcYVzJZFTyeG368coxoRcTcwQvDVa8CcYQUmrocxRPKxmmLGAi9Kb7jZ6GcOA__',
    name: 'Дмитро Евременко',
    jobTitle: 'Електрик',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/e83a/95d2/5d6f9c3d5aae922b57b7ed02c8914995?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ka380nqcNitiJE61GE~z6jzqJK4TSvpYlMV3ycTivp~kqwiImCzg8Ur7mwEnHNBQZ0VlWJLjQkUuiTmrYEN0VJy9mRdYqyhFH0pw~ujQfF7v-P92rjh2SzOXsd0BmuuWy5fkxyg13rWHuJI5Mkh2sV6~0EubsnNlzR9vYkMivO4wtAzbNiYjBCjGI3LOYmvd-v3iTTihGOu5MsZpBmsks52DSnhPlwoDObrfXyEqcSwCb-poRfjSObycq-xnz7us6CSmdQ6QoCFq1uAb4qIXV06atOP028upRfDz~QoMZvJhp7QE-ngZ6ZY7AIxdZEy7fiJJQB86p-dVMKxLxU5PcQ__',
    name: 'Микола Заварев',
    jobTitle: 'Майстер по ходовій',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/52d4/c6bb/c67f150c2c1dcdb33bca32e9208892d2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RurShc7gXZoD3CbtRjNHOCBG2g49w2NWFCmK0bKeYKqNpwEirRmq6mzAFkdzoq~binUFWez~v37uPSC~dkPIi03cFJgUC5cgf2le7iqQiyjAapbLmQCscHBshFyDV3OrGwpd-yJcxIoMOXLUgWeBd7Xc6gR242QYxn7ykpaElUQ0mukIa8j4kL~z3ObViO6hAWXCl3xveAbn8Dpu-A4obgbvpGYEvAl7FwOK6a6bVwvU2~iZLsLz6QkdapOsgAbIyn5yuHyZQHDaStL0GBatwGN49~4g4Z3l2~t2Vr1gYy-MIYKBsrEjwOrwDXkqHdr0T3~RARPvkd4ybdSCGp04Dw__',
    name: 'Олександр Симонов',
    jobTitle: 'Моторист',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/9a23/d272/3a3ad156a7d761ddc51b73da5ecbf801?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TNg9JIXdbTIkgHh0v-fvllHmne2A~67oICHOhEj8wezmyhYTwzYTL0qfLqu6iBGJY6PAFIbQiS0WR72OUj2~q~Eph70-tMffIDKQkdEdhDT9GqjRI7FniVIoHBDE3vPZJKtlZpeSTgV~kyxNoiGfFgNlmOcm8OH3sKFgPzpF5hL8Bm1dXjKOjnmFOHHQ6Hek-VG4NSduyuBA2kDcQqcByCzk0egmMmyuxxd55Sagn~0obBbXmoAjYFRUVctKm-rJXovx8StvdItKRpwvFaeh1DU5xZppb9mRPSpyyGjEOyjZrxc~xccz7Efy8JOJ0PXHs2AEBjvmOmzdTznJ0cpo2Q__',
    name: 'Максим Захаров',
    jobTitle: 'Електрик',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/04f1/0605/cf702c81810039bba15729d7e14bafd4?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ROmi4fvEkuLjbXyG7UN2T7nTto-ys9g~crQfxNX7jDU2hP3MyHqBdxQwPbaIeBYhKoZo8BXWMuXyy~Dq-k1Au0Qwh-5~M3vDjzHOoJillrO9IlBe0DCY0GgTjNVCR1rn-AMZWj5JhRDYL5gS6e5Seuwnkxrdkmk9MdoKwgIkQFotwdkC9hqs4YA2WfI3krVO2-g8~ocTvK6zqmmcLcsAg17id7KGjd~wbnp6E88gazzInytoAFJZbJ~79RjFKaEjHwWxJDnjMJ5fF53FHHtVcW2b64hiHtYh6FGeScAQoLoegbC8NnPdHB09JtKbN7WWLShQYH~RkVvU94f9TXI4DQ__',
    name: 'Дмитро Лисюк',
    jobTitle: 'Моторист',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/eaa3/4b82/9567b7de143abef42110d00b678670c8?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8HJ36nkJdBLuz8jrlWJHOVk48wYVe00g1WqyP19V4bQt~4gemHxQWD7wMHynVDTuz8wuGkPHMNEBgn73kpvqcllnXtK1pvpeFjgotmtWftCfoeGlgbo0IR8WRl54eANE5GDLDhM9PaDDazmOTWDemE3wMOesS7hqyIQoBppVVK2pMUQa4nVa3uTupMGkOtsZSYx4L1g6AWxV79V1ggjswJYK-UWI2OLxCEIuzGwflOQJM9lVm5rLJKWM~h~rbCpdQH6tNezLWoG29jXbOcvdv~YhodjqTVwPAFa4vwMPuEFHI15NVT-AiPTtPe0ndZVBkxa1JFmtuXY9jnn9KU4tw__',
    name: 'Володимир Матвієнко',
    jobTitle: 'Майстер по ходовій',
  },
]
