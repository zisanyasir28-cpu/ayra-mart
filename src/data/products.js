const BASE = 'https://images.unsplash.com/photo-'
const IMG = (id, w = 400, h = 400) => `${BASE}${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

export const vegetables = [
  { id:'v1', name:'Fresh Tomato', bn:'টমেটো', price:40, old:60, unit:'kg', img:IMG('1546094096-0df4bcaaa337'), badge:'Fresh', rating:4.5, reviews:234, cat:'Vegetables' },
  { id:'v2', name:'Potato', bn:'আলু', price:30, old:null, unit:'kg', img:IMG('1508313880080-c4bef0730395'), badge:null, rating:4.3, reviews:189, cat:'Vegetables' },
  { id:'v3', name:'Onion', bn:'পেঁয়াজ', price:45, old:65, unit:'kg', img:IMG('1518977956812-cd3dbadaaf31'), badge:'Sale', rating:4.4, reviews:312, cat:'Vegetables' },
  { id:'v4', name:'Carrot', bn:'গাজর', price:55, old:null, unit:'kg', img:IMG('1598170845058-32b9d6a5da37'), badge:null, rating:4.6, reviews:156, cat:'Vegetables' },
  { id:'v5', name:'Spinach', bn:'পালং শাক', price:30, old:45, unit:'bunch', img:IMG('1576045057995-568f588f82fb'), badge:'Organic', rating:4.7, reviews:98, cat:'Vegetables' },
  { id:'v6', name:'Garlic', bn:'রসুন', price:160, old:200, unit:'kg', img:IMG('1540148426945-6cf22a6b2383'), badge:'Sale', rating:4.5, reviews:203, cat:'Vegetables' },
  { id:'v7', name:'Green Chili', bn:'কাঁচা মরিচ', price:80, old:null, unit:'kg', img:IMG('1518967769795-d3edf6fd1d55'), badge:null, rating:4.2, reviews:145, cat:'Vegetables' },
  { id:'v8', name:'Brinjal', bn:'বেগুন', price:50, old:70, unit:'kg', img:IMG('1659240207895-79ba2e0c3a95'), badge:null, rating:4.3, reviews:112, cat:'Vegetables' },
]

export const fruits = [
  { id:'f1', name:'Banana', bn:'কলা', price:50, old:null, unit:'dozen', img:IMG('1603833665858-e61d17a86224'), badge:'Fresh', rating:4.6, reviews:278, cat:'Fruits' },
  { id:'f2', name:'Mango', bn:'আম', price:120, old:150, unit:'kg', img:IMG('1553279768-865429fa0078'), badge:'Seasonal', rating:4.9, reviews:542, cat:'Fruits' },
  { id:'f3', name:'Apple', bn:'আপেল', price:200, old:240, unit:'kg', img:IMG('1570913149827-d2ac84ab3f9a'), badge:null, rating:4.5, reviews:198, cat:'Fruits' },
  { id:'f4', name:'Watermelon', bn:'তরমুজ', price:35, old:null, unit:'kg', img:IMG('1587049016823-69ef9d68bd44'), badge:'Summer', rating:4.7, reviews:167, cat:'Fruits' },
]

export const fish = [
  { id:'fi1', name:'Hilsa Fish', bn:'ইলিশ মাছ', price:800, old:1000, unit:'kg', img:IMG('1519708227418-c8fd9a32b7a2'), badge:'Premium', rating:4.9, reviews:876, cat:'Fish' },
  { id:'fi2', name:'Rohu Fish', bn:'রুই মাছ', price:280, old:350, unit:'kg', img:IMG('1510130387422-82bed34b37e9'), badge:null, rating:4.6, reviews:432, cat:'Fish' },
  { id:'fi3', name:'Catla Fish', bn:'কাতলা মাছ', price:260, old:null, unit:'kg', img:IMG('1534422298391-e4f8c172dddb'), badge:'Fresh', rating:4.5, reviews:234, cat:'Fish' },
  { id:'fi4', name:'Prawn', bn:'চিংড়ি', price:650, old:800, unit:'kg', img:IMG('1559948952-7f2fe49d01e4'), badge:'Hot', rating:4.8, reviews:345, cat:'Fish' },
]

export const meat = [
  { id:'m1', name:'Chicken', bn:'মুরগি', price:220, old:260, unit:'kg', img:IMG('1587593810167-a84920ea0781'), badge:'Fresh', rating:4.7, reviews:654, cat:'Meat' },
  { id:'m2', name:'Beef', bn:'গরুর মাংস', price:700, old:850, unit:'kg', img:IMG('1607623814075-e51df1bdc82f'), badge:'Sale', rating:4.5, reviews:312, cat:'Meat' },
  { id:'m3', name:'Mutton', bn:'খাসির মাংস', price:900, old:null, unit:'kg', img:IMG('1529692236671-f1f6cf9683ba'), badge:'Premium', rating:4.8, reviews:198, cat:'Meat' },
  { id:'m4', name:'Eggs', bn:'ডিম', price:140, old:160, unit:'dozen', img:IMG('1498654077810-12c21d4d6dc3'), badge:null, rating:4.6, reviews:789, cat:'Meat' },
]

export const grocery = [
  { id:'g1', name:'Miniket Rice', bn:'মিনিকেট চাল', price:65, old:75, unit:'kg', img:IMG('1536304993881-ff86e0c9e8b3'), badge:'Best Seller', rating:4.7, reviews:1203, cat:'Grocery' },
  { id:'g2', name:'Mustard Oil', bn:'সরিষার তেল', price:165, old:195, unit:'ltr', img:IMG('1474979266404-7eaacbcd87c5'), badge:'Sale', rating:4.6, reviews:567, cat:'Grocery' },
  { id:'g3', name:'Soybean Oil', bn:'সয়াবিন তেল', price:155, old:180, unit:'ltr', img:IMG('1565299507177-b0ac66763828'), badge:null, rating:4.5, reviews:432, cat:'Grocery' },
  { id:'g4', name:'Red Lentil', bn:'মসুর ডাল', price:110, old:135, unit:'kg', img:IMG('1515543904379-3d757afe72e4'), badge:'Sale', rating:4.6, reviews:345, cat:'Grocery' },
  { id:'g5', name:'Sugar', bn:'চিনি', price:55, old:null, unit:'kg', img:IMG('1559825481-12adc8787546'), badge:null, rating:4.4, reviews:234, cat:'Grocery' },
  { id:'g6', name:'Salt', bn:'লবণ', price:20, old:null, unit:'kg', img:IMG('1590080878069-ae33b94aebc4'), badge:null, rating:4.5, reviews:189, cat:'Grocery' },
  { id:'g7', name:'Turmeric Powder', bn:'হলুদ গুঁড়া', price:85, old:100, unit:'250g', img:IMG('1596040033229-a9821ebd058d'), badge:null, rating:4.7, reviews:312, cat:'Grocery' },
  { id:'g8', name:'Atta (Flour)', bn:'আটা', price:50, old:60, unit:'kg', img:IMG('1574323347407-f5e1ad6d020b'), badge:'Popular', rating:4.5, reviews:543, cat:'Grocery' },
]

export const dairy = [
  { id:'d1', name:'Fresh Milk', bn:'তাজা দুধ', price:70, old:null, unit:'ltr', img:IMG('1550583724-b2692b85b150'), badge:'Daily Fresh', rating:4.8, reviews:432, cat:'Dairy' },
  { id:'d2', name:'Yogurt', bn:'দই', price:80, old:null, unit:'500g', img:IMG('1571805341004-04e8a0e5b8b9'), badge:null, rating:4.6, reviews:234, cat:'Dairy' },
  { id:'d3', name:'Butter', bn:'মাখন', price:120, old:140, unit:'200g', img:IMG('1589985270826-4b7bb135bc9d'), badge:null, rating:4.5, reviews:178, cat:'Dairy' },
  { id:'d4', name:'Cream', bn:'ক্রিম', price:90, old:null, unit:'200ml', img:IMG('1550258987-190a2d41a8ba'), badge:'New', rating:4.4, reviews:89, cat:'Dairy' },
]

export const snacks = [
  { id:'s1', name:'Potato Chips', bn:'চিপস', price:35, old:null, unit:'pack', img:IMG('1566478989037-eec170784d0b'), badge:null, rating:4.3, reviews:456, cat:'Snacks' },
  { id:'s2', name:'Biscuits', bn:'বিস্কুট', price:25, old:null, unit:'pack', img:IMG('1519996529931-28324d5a630e'), badge:'Popular', rating:4.4, reviews:345, cat:'Snacks' },
  { id:'s3', name:'Instant Noodles', bn:'নুডলস', price:20, old:null, unit:'pack', img:IMG('1569050467447-ce54b3bbc37d'), badge:null, rating:4.2, reviews:678, cat:'Snacks' },
  { id:'s4', name:'Tea (CTC)', bn:'চা', price:180, old:210, unit:'250g', img:IMG('1556679343-c7306c1976bc'), badge:'Aromatic', rating:4.7, reviews:567, cat:'Snacks' },
]

export const household = [
  { id:'h1', name:'Washing Powder', bn:'ওয়াশিং পাউডার', price:120, old:145, unit:'1kg', img:IMG('1585054647979-75c0eea6dc0d'), badge:'Sale', rating:4.5, reviews:432, cat:'Household' },
  { id:'h2', name:'Dish Soap', bn:'বাসন সাবান', price:55, old:null, unit:'500ml', img:IMG('1583248369069-9d91f1640fe6'), badge:null, rating:4.4, reviews:234, cat:'Household' },
  { id:'h3', name:'Toilet Cleaner', bn:'টয়লেট ক্লিনার', price:80, old:95, unit:'500ml', img:IMG('1582735689369-4fe89db7114c'), badge:null, rating:4.3, reviews:156, cat:'Household' },
  { id:'h4', name:'Soap Bar', bn:'সাবান', price:45, old:null, unit:'3 pack', img:IMG('1543163521-1bf539c55dd2'), badge:'Value Pack', rating:4.6, reviews:312, cat:'Household' },
]

export const flashDeals = [
  { ...vegetables[0], flashPrice: 28, expiresIn: 3600 * 2 },
  { ...fish[0], flashPrice: 650, expiresIn: 3600 * 2 },
  { ...grocery[0], flashPrice: 55, expiresIn: 3600 * 2 },
  { ...meat[0], flashPrice: 185, expiresIn: 3600 * 2 },
  { ...grocery[1], flashPrice: 130, expiresIn: 3600 * 2 },
  { ...dairy[0], flashPrice: 58, expiresIn: 3600 * 2 },
]

export const allProducts = [...vegetables, ...fruits, ...fish, ...meat, ...grocery, ...dairy, ...snacks, ...household]
