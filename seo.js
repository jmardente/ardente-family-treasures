(() => {
  const siteUrl = 'https://ardentefamilytreasures.com/';
  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: siteUrl,
      name: 'Ardente Family Treasures',
      description: "Children's books, ocean-inspired DIY craft kits, handmade gifts, keepsakes and family treasures.",
      inLanguage: 'en-US'
    },
    {
      '@type': 'Store',
      '@id': `${siteUrl}#store`,
      name: 'Ardente Family Treasures',
      url: siteUrl,
      description: "Shop signed children's books, Cora's Ocean Adventures gifts, DIY craft kits, handmade keepsakes and seasonal family treasures.",
      image: `${siteUrl}assets/cora-coral-reef-book.png`
    }
  ];

  if (typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS)) {
    PRODUCTS.filter(product => product && product.status === 'available' && Number.isFinite(product.price)).forEach(product => {
      graph.push({
        '@type': 'Product',
        '@id': `${siteUrl}#product-${product.id}`,
        name: product.name,
        description: product.description || product.name,
        image: product.image ? new URL(product.image, siteUrl).href : undefined,
        category: product.category || undefined,
        offers: {
          '@type': 'Offer',
          url: `${siteUrl}#shop`,
          priceCurrency: 'USD',
          price: product.price.toFixed(2),
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition'
        }
      });
    });
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  document.head.appendChild(script);
})();
