import React from 'react'

const Search = ({onClose}) => {
  return (
    <div onClick={onClose} style={{
        position: 'fixed',
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.9)",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999
    }}>
        <div onClick={(e) => e.stopPropagation()} style={{
            width: "50%",
            maxWidth: 500,
            height: 60,
            position: "absolute",
            borderWidth: 2,
            borderColor: "rgba(255, 255, 255, 0.4)",
            borderRadius: 10, // Add border-radius for smooth edges
            overflow: "hidden" // Ensure rounded corners are visible
        }}>
            <input placeholder='Search for medication' type='search' style={{
                width: "100%",
                backgroundColor: "transparent",
                height: "100%",
                border: "none",
                padding: "10px",
                fontSize: "1.5rem", // Adjusted font-size for better readability
                fontWeight: 300,
                color: "#fff",
                outline: "none", // Remove default outline
                borderRadius: 10, // Match the div's border-radius
            }}
            onFocus={(e) => e.target.style.border = "2px solid #fff"} // Add focus state
            onBlur={(e) => e.target.style.border = "none"} // Remove border on blur
            />
        </div>
    </div>
  )
}

export default Search