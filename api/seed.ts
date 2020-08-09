import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function seed(): Promise<void> {
  // prisma.product.create({
  //   data: {
  //     title: "",
  //     images: { set: [] },
  //     url: "",
  //     merchant: ""
  //   }
  // })

  await prisma.product.create({
    data: {
      title: "Men's Wool Runners",
      images: {
        set: [
          'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_BTY_21b1041c-f9ef-4efe-853d-4d3ea4925c48.png?v=1589226918',
          'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_LAT_d5276b4f-c166-4106-a052-5ed37e101e56.png?v=1589226918',
          'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_MED_9ae17770-7706-4b17-a73f-fb64ecf2152c.png?v=1589226918',
          'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_HEL_bd2d53fb-9839-4c50-9b9f-fb607d59d6fd.png?v=1589226918',
          'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_TOP_ee258694-c30c-4caf-87cd-4fb863a09c4b.png?v=1589226918',
          'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_OUT_e67aa244-d8a6-4fad-8693-8c537b263e93.png?v=1589226918',
          'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_PAIR_000d704e-3ffe-4e81-8aea-0d04acfec8e5.png?v=1589226918',
          'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Allbirds_M_RUNNER_HP_GRID_1600x1600_2aa182f9-ff90-494e-a471-1d30e73581ad.jpg?v=1589226918'
        ]
      },
      url: 'https://www.allbirds.co.uk/products/mens-wool-runners',
      merchant: 'allbirds'
    }
  })

  await prisma.product.create({
    data: {
      title: 'iPhone 11',
      images: {
        set: [
          'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-gallery1-2019?wid=3360&hei=1280&fmt=png-alpha&qlt=80&.v=1567280206009'
        ]
      },
      url: 'https://www.apple.com/uk/shop/buy-iphone/iphone-11',
      merchant: ''
    }
  })

  await prisma.product.create({
    data: {
      title: '',
      images: {
        set: [
          'https://cdn.shopify.com/s/files/1/0050/7674/6329/products/Herbivore-CoconutBathSoak-16oz_600x.jpg?v=1595445713',
          'https://cdn.shopify.com/s/files/1/0050/7674/6329/products/Herbivore-CoconutBathSoak_600x.jpg?v=1590072456'
        ]
      },
      url: 'https://standarddose.com/collections/all-products/products/herbivore-botanicals-coconut-bath-soak',
      merchant: 'STANDARD DOSE'
    }
  })

  await prisma.product.create({
    data: {
      title:
        'king do way Insulated Stainless Steel Water Vacuum Bottle Flask Double-Walled with a Brush for Outdoor Sports Hiking Running, 500ml /18 oz',
      images: {
        set: [
          'https://images-na.ssl-images-amazon.com/images/I/61ZSjBoo7TL._AC_SX679_.jpg',
          '',
          'https://images-na.ssl-images-amazon.com/images/I/61D920jUggL._AC_SX679_.jpg'
        ]
      },
      url: '',
      merchant: 'Amazon'
    }
  })

  await prisma.product.create({
    data: {
      title: '',
      images: { set: ['none'] },
      url:
        'https://www.walmart.com/ip/Hamilton-Beach-The-Scoop-Single-Serve-Coffee-Maker-Single-Serve-Brewer-14-oz-Stainless-Steel-47550/911356214',
      merchant: 'Walmart'
    }
  })
}
