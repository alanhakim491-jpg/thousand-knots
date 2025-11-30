import { Injectable, signal } from '@angular/core';
import { Catalogs } from '../models/catalog.types';

@Injectable({
  providedIn: 'root',
})
export class Catalog {
  catalogSignal = signal<Catalogs[]>([
    {
      id: 1,
      title: 'Heartspot Shorts PJ Set',
      price: 45,
      description: 'Short sleeves with matching shorts heart patterned muslin cotton pj set',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/c749a523-d423-4224-8f35-b0ffce225e2b.jpg?v=1744407786&width=360',
      sku: 12,
    },
    {
      id: 2,
      title: 'Heartland PJ Set',
      price: 48,
      description: 'Long sleeves with matching pants natural cotton pjs',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/IMG_8602_5d16fc15-bd39-474d-91c2-e39c6bb22156.jpg?v=1758787787&width=360',
      sku: 0,
    },
    {
      id: 3,
      title: 'Drift Shorts PJ Set',
      price: 45,
      description: 'Short sleeves with matching shorts dandelion patterned msulin cotton pj set',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/46b0439f-d25a-4e7a-8c46-5d3174ae7d98.jpg?v=1744407861&width=360',
      sku: 10
    },    
    {
      id: 4,
      title: 'Heartland PJ Set',
      price: 48,
      description: 'Long sleeves with matching pants natural cotton pjs',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/IMG_8602_5d16fc15-bd39-474d-91c2-e39c6bb22156.jpg?v=1758787787&width=360',
      sku: 15,
    },
    {
      id: 5,
      title: 'Heartland PJ Set',
      price: 48,
      description: 'Long sleeves with matching pants natural cotton pjs',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/IMG_8602_5d16fc15-bd39-474d-91c2-e39c6bb22156.jpg?v=1758787787&width=360',
      sku: 15,
    },
    {
      id: 6,
      title: 'Heartland PJ Set',
      price: 48,
      description: 'Long sleeves with matching pants natural cotton pjs',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/IMG_8602_5d16fc15-bd39-474d-91c2-e39c6bb22156.jpg?v=1758787787&width=360',
      sku: 15,
    },
    {
      id: 7,
      title: 'Heartland PJ Set',
      price: 48,
      description: 'Long sleeves with matching pants natural cotton pjs',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/IMG_8602_5d16fc15-bd39-474d-91c2-e39c6bb22156.jpg?v=1758787787&width=360',
      sku: 15,
    },
    {
      id: 8,
      title: 'Heartland PJ Set',
      price: 48,
      description: 'Long sleeves with matching pants natural cotton pjs',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/IMG_8602_5d16fc15-bd39-474d-91c2-e39c6bb22156.jpg?v=1758787787&width=360',
      sku: 15,
    },
    {
      id: 9,
      title: 'Heartland PJ Set',
      price: 48,
      description: 'Long sleeves with matching pants natural cotton pjs',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/IMG_8602_5d16fc15-bd39-474d-91c2-e39c6bb22156.jpg?v=1758787787&width=360',
      sku: 15,
    },
    {
      id: 10,
      title: 'Heartland PJ Set',
      price: 48,
      description: 'Long sleeves with matching pants natural cotton pjs',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/IMG_8602_5d16fc15-bd39-474d-91c2-e39c6bb22156.jpg?v=1758787787&width=360',
      sku: 15,
    },
  ])

  products = this.catalogSignal.asReadonly();
}
