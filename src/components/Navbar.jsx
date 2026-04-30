import { useState, useEffect } from 'react'
import { Search, ShoppingCart, MapPin, Phone, ChevronDown, Menu, X, Heart, User } from 'lucide-react'
import Logo from './Logo'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Vegetables & Fruits', href: '#vegetables' },
  { label: 'Fish & Meat', href: '#fish' },
  { label: 'Grocery', href: '#grocery' },
  { label: 'Household', href: '#household' },
  { label: 'Offers', href: '#flash', hot: true },
]

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top strip */}
      <div className="nav-topstrip">
        <div className="section-wrap nav-topinner">
          <div className="nav-topinfo">
            <span><MapPin size={13} /> Sirajganj, Bangladesh</span>
            <span><Phone size={13} /> +880 1700-000000</span>
          </div>
          <div className="nav-topinfo">
            <a href="#">Track Order</a>
            <a href="#">Help</a>
            <a href="#">Sign In</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="section-wrap nav-inner">
          <button className="mobile-toggle" onClick={() => setMobileOpen(o => !o)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Logo size={42} />

          {/* Search bar */}
          <div className="nav-search">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search vegetables, rice, fish, meat..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="search-btn">Search</button>
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <button className="nav-icon-btn">
              <User size={20} />
              <span>Account</span>
            </button>
            <button className="nav-icon-btn">
              <Heart size={20} />
              <span>Wishlist</span>
            </button>
            <button className="cart-btn" onClick={onCartOpen}>
              <div className="cart-icon-wrap">
                <ShoppingCart size={22} />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </div>
              <div className="cart-text">
                <span className="cart-label">My Cart</span>
                <span className="cart-items-count">{cartCount} items</span>
              </div>
            </button>
          </div>
        </div>

        {/* Nav links */}
        <nav className={`nav-links-bar ${mobileOpen ? 'mobile-open' : ''}`}>
          <div className="section-wrap nav-links-inner">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className={`nav-link ${l.hot ? 'hot' : ''}`} onClick={() => setMobileOpen(false)}>
                {l.label}
                {l.hot && <span className="hot-badge">HOT</span>}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}
