// This is the database for ReactMart. 
// Each product has an id, name, price, and image URL.

const products = [
  { id: 1, name: "Apples", price: 2.99, image: "https://www.sciencefriday.com/wp-content/uploads/2020/09/cosmic-crisp-shutterstock-downsized-min.jpg" },
  { id: 2, name: "Bananas", price: 3.14, image: "https://www.freshplaza.com/remote/https/agfstorage.blob.core.windows.net/misc/FP_cn/2021/10/14/Xiangjiao05.jpg?preset=ContentFullSmall" },
  { id: 3, name: "Onions", price: 6.14, image: "https://www.jesmondfruitbarn.com.au/wp-content/uploads/2016/10/Jesmond-Fruit-Barn-Red-Onions.jpg" },
  { id: 4, name: "Yams", price: 1.99, image: "https://i.insider.com/59de5e9d6d80adb51a8b57bc?width=816&format=jpeg" },
  { id: 5, name: "Potatoes", price: 1.66, image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/stock%2FGettyImages-1300367338" },
  { id: 6, name: "Carrots", price: 4.55, image: "https://spoonuniversity.com/cdn-cgi/image/width=1020,height=680,fit=cover,format=auto/https://s3.amazonaws.com/secretsaucefiles/photos/images/000/135/874/original/Carrot_Variety_Linzie_Gienau.jpg" },
  { id: 7, name: "Melons", price: 7.66, image: "https://static.vecteezy.com/system/resources/previews/007/930/146/large_2x/melons-and-watermelons-on-display-on-a-supermarket-shelf-for-sale-photo.JPG" },
  { id: 8, name: "Bread", price: 8.99, image: "https://www.mashed.com/img/gallery/grocery-store-white-bread-ranked/intro-1696617288.jpg" },
  { id: 9, name: "Milk", price: 3.49, image: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/milk.jpg" },
  { id: 10, name: "Eggs", price: 4.25, image: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg" },
  { id: 11, name: "Rice", price: 10.99, image: "https://media.istockphoto.com/id/1390859496/photo/white-rice.jpg?s=612x612&w=0&k=20&c=CdDcfDTyYE5WtbJKVRFu63cg4zMEGbyeoh6qW-eyQ18=" },
  { id: 12, name: "Tomatoes", price: 2.75, image: "https://img.freepik.com/free-photo/heap-fresh-red-tomatoes-market_23-2147916087.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 13, name: "Cheese", price: 6.52, image: "https://images.squarespace-cdn.com/content/v1/68c715b30c996e31b5eaf9a5/1759715247317-R6P0T19LGGTJHYIJREF8/unsplash-image-YW_5rJvAdKw.jpg" },
  { id: 14, name: "Chicken", price: 12.99, image: "https://thumbs.dreamstime.com/b/close-up-raw-chicken-meat-counter-fresh-market-69814481.jpg" },
  { id: 15, name: "Cooking Oil", price: 9.49, image: "https://pbs.twimg.com/media/GFuiefnWgAAI8RA.jpg" },
  { id: 16, name: "Sugar", price: 5.25, image: "https://news.switchtv.ke/wp-content/uploads/2023/08/Packaged-sugar-in-a-Kenyan-supermarket.webp" },
  { id: 17, name: "Salt", price: 1.57, image: "https://m.media-amazon.com/images/I/71qNFj6EkkL._SL1000_.jpg" },
  { id: 18, name: "Flour", price: 4.12, image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/6334623/1.jpg?8489" },
  { id: 19, name: "Pasta", price: 3.75, image: "https://images.squarespace-cdn.com/content/v1/5f7a25adebb0954c5ed99fa6/35a39965-f28a-4452-af0c-813581fb99e0/271584358_1801691106692748_8089996078490938818_n.jpg" },
  { id: 20, name: "Cereal", price: 6.88, image: "https://sagaciresearch.com/wp-content/uploads/2023/08/Breakfast-cereal-market-in-Africa.png" },
  { id: 21, name: "Orange Juice", price: 4.99, image: "https://i5.walmartimages.com/seo/Minute-Maid-No-Pulp-Orange-Fruit-Juice-59-fl-oz-Carton_a98d42e2-18b9-40e7-a2c9-0b343880af83.9be1c4727add8d010bf840212cb5f727.jpeg" },
  { id: 22, name: "Butter", price: 5.63, image: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/1200/675/ewrew43543435111.jpg?ve=1&tl=1" },
  { id: 23, name: "Mango Juice", price: 11.99, image: "https://cdn.mafrservices.com/sys-master-root/h4f/ha5/26402221064222/13363_main.jpg" },
  { id: 24, name: "Yogurt", price: 4.65, image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ithPL7y6O6_o/v1/-1x-1.webp" },
  { id: 25, name: "Ground Beef", price: 14.55, image: "https://www.mashed.com/img/gallery/why-you-should-never-buy-ground-beef-at-walmart/intro-1568669177.jpg" },
  { id: 26, name: "Fish Fillet", price: 13.25, image: "https://www.northcoastseafoods.com/cdn/shop/articles/fresh-fish-on-display-in-retail-case.jpg?v=1700676008" },
  { id: 27, name: "Lettuce", price: 2.11, image: "https://images.squarespace-cdn.com/content/v1/63064607eb816a4d50027fd1/1662578995994-0RTJLQVENGH5Y1245D5X/image-asset.jpeg" },
  { id: 28, name: "Cucumbers", price: 1.89, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWRhv1NXisfjQ2Tsfc1ND6mzo-0V2sMcCrw&s" },
  { id: 29, name: "Bell Peppers", price: 3.99, image: "https://thumbs.dreamstime.com/b/fresh-yellow-green-bell-peppers-displayed-grocery-store-produce-section-vibrant-rest-neat-display-their-glossy-surfaces-402018962.jpg" },
  { id: 30, name: "Ice Cream", price: 6.75, image: "https://www.tastingtable.com/img/gallery/12-grocery-store-brand-vanilla-ice-creams-ranked/11-aldis-sundae-shoppe-vanilla-bean-ice-cream-1713567749.jpg"},
];

export default products;
