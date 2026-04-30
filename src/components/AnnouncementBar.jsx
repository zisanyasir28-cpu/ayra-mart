import './AnnouncementBar.css'

const messages = ['🎉 Ayra Family Mart is openning Sooon.. Stay tune',
  
]

export default function AnnouncementBar() {
  const text = messages.join('   •   ')
  return (
    <div className="ann-bar">
      <div className="ann-track">
        <span>{text}&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{text}</span>
      </div>
    </div>
  )
}
