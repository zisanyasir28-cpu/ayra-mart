import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2, ShoppingBag, Minus, Plus, ArrowRight } from 'lucide-react'
import './Cart.css'

export default function Cart({ items, open, onClose, onRemove, onQtyChange }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)
  const count = items.reduce((s, i) => s + i.qty, 0)

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          >
            {/* Header */}
            <div className="cart-head">
              <div className="cart-head-left">
                <ShoppingBag size={22} />
                <div>
                  <h3>My Cart</h3>
                  <p>{count} items</p>
                </div>
              </div>
              <button className="cart-close" onClick={onClose}><X size={20} /></button>
            </div>

            {/* Items */}
            <div className="cart-body">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <div className="cart-empty-icon">🛒</div>
                  <p>Your cart is empty</p>
                  <span>আপনার কার্ট খালি। পণ্য যোগ করুন!</span>
                  <button className="cart-shop-btn" onClick={onClose}>Start Shopping</button>
                </div>
              ) : (
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      className="cart-item"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30, height: 0, marginBottom: 0, padding: 0 }}
                      transition={{ duration: 0.25 }}
                      layout
                    >
                      <img src={item.img} alt={item.name} className="cart-item-img" />
                      <div className="cart-item-info">
                        <p className="cart-item-name">{item.name}</p>
                        <p className="cart-item-bn">{item.bn}</p>
                        <p className="cart-item-price">৳{item.price}/{item.unit}</p>
                        <div className="cart-qty">
                          <button onClick={() => onQtyChange(item.id, item.qty - 1)} disabled={item.qty <= 1}><Minus size={13} /></button>
                          <span>{item.qty}</span>
                          <button onClick={() => onQtyChange(item.id, item.qty + 1)}><Plus size={13} /></button>
                        </div>
                      </div>
                      <div className="cart-item-right">
                        <p className="cart-item-total">৳{(item.price * item.qty).toFixed(0)}</p>
                        <button className="cart-remove" onClick={() => onRemove(item.id)}><Trash2 size={15} /></button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="cart-foot">
                <div className="cart-subtotal">
                  <span>Subtotal ({count} items)</span>
                  <strong>৳{total.toFixed(0)}</strong>
                </div>
                <div className="cart-delivery">
                  {total >= 500
                    ? <span className="free-del">✅ Free delivery applied!</span>
                    : <span className="need-del">Add ৳{(500 - total).toFixed(0)} more for free delivery</span>}
                </div>
                <div className="cart-total">
                  <span>Total</span>
                  <strong>৳{total.toFixed(0)}</strong>
                </div>
                <button className="cart-checkout">
                  Checkout Now <ArrowRight size={17} />
                </button>
                <button className="cart-continue" onClick={onClose}>Continue Shopping</button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
