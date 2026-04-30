import { useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import FeatureBar from './components/FeatureBar'
import Categories from './components/Categories'
import FlashDeals from './components/FlashDeals'
import ProductSection from './components/ProductSection'
import PromoBanners from './components/PromoBanners'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { vegetables, fruits, fish, meat, grocery, dairy, snacks, household } from './data/products'
import './App.css'

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (product, overridePrice) => {
    const price = overridePrice ?? product.price
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id)
      if (ex) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, price, qty: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = id => setCart(prev => prev.filter(i => i.id !== id))

  const changeQty = (id, qty) => {
    if (qty < 1) return
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <>
      <AnnouncementBar />
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main>
        <HeroSlider />
        <FeatureBar />
        <Categories />
        <FlashDeals onAddToCart={addToCart} />
        <ProductSection
          id="vegetables"
          title="🥦 Fresh Vegetables"
          subtitle="তাজা শাকসবজি — সরাসরি কৃষক থেকে"
          products={[...vegetables, ...fruits]}
          onAdd={addToCart}
        />
        <PromoBanners />
        <ProductSection
          id="fish"
          title="🐟 Fish & Meat"
          subtitle="প্রতিদিন তাজা মাছ ও মাংস"
          products={[...fish, ...meat]}
          onAdd={addToCart}
          bg="linear-gradient(180deg, #eff6ff 0%, #fff 100%)"
        />
        <ProductSection
          id="grocery"
          title="🛒 Rice, Oil & Grocery"
          subtitle="চাল, ডাল, তেল, মশলা — সেরা দামে"
          products={[...grocery, ...dairy]}
          onAdd={addToCart}
          bg="linear-gradient(180deg, #fff7ed 0%, #fff 100%)"
        />
        <ProductSection
          id="snacks"
          title="🍪 Snacks & Beverages"
          subtitle="স্ন্যাক্স, চা, বিস্কুট ও আরও অনেক কিছু"
          products={snacks}
          onAdd={addToCart}
        />
        <ProductSection
          id="household"
          title="🧴 Household & Cleaning"
          subtitle="গৃহস্থালীর সব প্রয়োজন"
          products={household}
          onAdd={addToCart}
          bg="linear-gradient(180deg, #f0fdf4 0%, #fff 100%)"
        />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <Cart
        items={cart}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onQtyChange={changeQty}
      />
    </>
  )
}
