// Mouse cursor water droplet effect
document.addEventListener("DOMContentLoaded", () => {
  // Create cursor elements
  const cursorContainer = document.createElement("div")
  cursorContainer.className = "cursor-container"

  const cursor = document.createElement("div")
  cursor.className = "cursor"

  const cursorRipple = document.createElement("div")
  cursorRipple.className = "cursor-ripple"

  cursorContainer.appendChild(cursor)
  cursorContainer.appendChild(cursorRipple)
  document.body.appendChild(cursorContainer)

  // Track mouse position
  let mouseX = 0
  let mouseY = 0
  let cursorX = 0
  let cursorY = 0

  // Update mouse position
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    // Create ripple effect on movement
    createRipple(e.clientX, e.clientY)
  })

  // Create ripple effect
  function createRipple(x, y) {
    const ripple = document.createElement("div")
    ripple.className = "ripple"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    document.body.appendChild(ripple)

    // Remove ripple after animation completes
    setTimeout(() => {
      ripple.remove()
    }, 1000)
  }

  // Animate cursor to follow mouse with smooth effect
  function animateCursor() {
    // Calculate distance between current cursor position and mouse position
    const dx = mouseX - cursorX
    const dy = mouseY - cursorY

    // Update cursor position with easing
    cursorX += dx * 0.1
    cursorY += dy * 0.1

    // Apply position to cursor elements
    cursor.style.left = cursorX + "px"
    cursor.style.top = cursorY + "px"
    cursorRipple.style.left = cursorX + "px"
    cursorRipple.style.top = cursorY + "px"

    // Continue animation
    requestAnimationFrame(animateCursor)
  }

  // Start animation
  animateCursor()

  // Add hover effect for interactive elements
  const interactiveElements = document.querySelectorAll("a, button, input, textarea, select, .interactive")

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-active")
      cursorRipple.classList.add("cursor-active")
    })

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-active")
      cursorRipple.classList.remove("cursor-active")
    })
  })

  // Hide cursor on mobile devices
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    cursorContainer.style.display = "none"
  }
})

