import { Injectable, signal, computed } from '@angular/core';
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
      category: 'pajamas'
    },
    {
      id: 2,
      title: 'Heartland PJ Set',
      price: 48,
      description: 'Long sleeves with matching pants natural cotton pjs',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/IMG_8602_5d16fc15-bd39-474d-91c2-e39c6bb22156.jpg?v=1758787787&width=360',
      sku: 0,
      category: 'pajamas'
    },
    {
      id: 3,
      title: 'Drift Shorts PJ Set',
      price: 45,
      description: 'Short sleeves with matching shorts dandelion patterned msulin cotton pj set',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/46b0439f-d25a-4e7a-8c46-5d3174ae7d98.jpg?v=1744407861&width=360',
      sku: 10,
      category: 'pajamas'
    },
    {
      id: 4,
      title: 'Baby Blue Lounge Set',
      price: 40,
      description: 'Matching lounge set with baby blue top and pants',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/fabf09d1-f04a-420f-a645-e1dd7392eb56_96f290cc-116e-4c3c-a5f8-e7d1b8da5cef.jpg?v=1762347649&width=360',
      sku: 8,
      category: 'lounge wear'
    },
    {
      id: 5,
      title: 'Beige Breeze Lounge Robe',
      price: 35,
      description: 'Beige full-length cotton robe, featuring an open-front design, wide flowy sleeves, and soft ruffled edges',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/8c05e0f1-3c93-49b5-b05f-c0b595802703.jpg?v=1746993086&width=360',
      sku: 12,
      category: 'lounge wear'
    },
    {
      id: 6,
      title: 'Grey Ruffle Sandals',
      price: 40,
      description: 'Grey hand knitted ruffle sandals ( organic cotton ) totally handmade',
      imageURL: 'https://thethousandknot.com/cdn/shop/products/A50681FB-1EFF-4EBE-B813-96C81E30DC03.jpg?v=1660475663&width=360',
      sku: 9,
      category: 'slippers'
    },
    {
      id: 7,
      title: 'Plain Grey Shirt Dress',
      price: 35,
      description: 'Plain grey with pink pipping silk cotton shirt dress',
      imageURL: 'https://thethousandknot.com/cdn/shop/products/BF19577D-D0E7-4AA5-A2C3-481F5E0126EE.jpg?v=1661120363&width=360',
      sku: 6,
      category: 'shirt dresses'
    },
    {
      id: 8,
      title: 'Red Striped Shirt Dress',
      price: 35,
      description: 'Red striped above the knee silk cotton shirt dress',
      imageURL: 'https://thethousandknot.com/cdn/shop/products/WhatsAppImage2022-05-29at10.48.09AM_1.jpg?v=1654294803&width=360',
      sku: 11,
      category: 'shirt dresses'
    },
    {
      id: 9,
      title: 'Navy Blue Sports Set',
      price: 45,
      description: 'Navy blue micro fleece long sleeve shirt with high rise matching stirrup leggings',
      imageURL: 'https://thethousandknot.com/cdn/shop/products/C89E371F-F1EB-43B2-B870-5018550C708D.jpg?v=1670948658&width=360',
      sku: 14,
      category: 'sports wear'
    },
    {
      id: 10,
      title: 'Nude Bow Sandals',
      price: 40,
      description: 'Hand knitted organic cotton yarn &jute sandals ( totally handmade)',
      imageURL: 'https://thethousandknot.com/cdn/shop/products/B18F985B-7A03-486D-A50A-396F735A709C.jpg?v=1660226940&width=360',
      sku: 8,
      category: 'slippers'
    },
  ])

  selectedCategory = signal<string>('all');

  products = computed(() => {
    const category = this.selectedCategory();
    const allProducts = this.catalogSignal();
    return category === 'all' ? allProducts : allProducts.filter(p => p.category?.toLowerCase() === category.toLowerCase());
  })
}
