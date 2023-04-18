import React, { useState } from 'react'

function CollapsibleTemplate(props) {
  const [isOpen, setIsOpen] = useState(false)
  const { label, children, fontSize } = props

  return (
    <div
      className={`${
        isOpen ? 'collapsible' : 'collapsible collapsible-close-height'
      }`}
    >
      <button
        className="collapsible-button-label"
        style={{ fontSize }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        {
          <svg
            className={`${
              isOpen
                ? 'collapsible-button-icon'
                : 'collapsible-button-icon rotate-open'
            }`}
            viewBox="0 0 28 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z"
              fill="white"
            />
          </svg>
        }
      </button>
      {
        <div
          className={`${
            isOpen
              ? 'collapsible-button-content content-open'
              : 'collapsible-button-content content-closed'
          }`}
        >
          {isOpen ? children : <div className="hidden">{children}</div>}
        </div>
      }
    </div>
  )
}

export default CollapsibleTemplate
