import React from 'react'

export const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        backgroundColor: '#015f44'
      }}
      onClick={onClick}
    />
  )
}

export const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        backgroundColor: '#015f44'
      }}
      onClick={onClick}
    />
  )
}
