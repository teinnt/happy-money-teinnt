import styled, { keyframes } from 'styled-components'

// Animation for swirling background
const swirlAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

// Animation for blinking effect
const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

// Animation for glowing effect
const glowAnimation = keyframes`
  0% { text-shadow: 0 0 5px #fff, 0 0 10px #fff; }
  50% { text-shadow: 0 0 10px #fff, 0 0 20px #ff00ff; }
  100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff; }
`

// Animation for random movement
const randomMovement = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(calc(100vw - 10px), calc(100vh - 10px)); }
  100% { transform: translate(0, 0); }
`

// Main container with anime-themed background
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('./img/bg.png') no-repeat center center fixed;
  background-size: cover;
  animation: ${swirlAnimation} 20s ease infinite;
  overflow: hidden; /* Ensure emojis do not overflow */
  position: relative; /* For positioning emojis outside the content */
`

// Content box with dark semi-transparent background
export const Content = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.7); /* Darker background for better contrast */
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  width: 90%;
  max-width: 600px; /* Limit width for better layout on large screens */
  position: relative; /* For positioning inside the content */
`

// Title with dynamic pastel color and glowing effect
interface TitleProps {
  color: string
}

export const Title = styled.h1<TitleProps>`
  font-size: 2.5em;
  color: ${(props) => props.color}; /* Dynamic pastel color */
  margin-bottom: 20px;
  animation: ${glowAnimation} 1.5s ease-in-out infinite alternate; /* Glowing effect */
`

// Info text with a softer secondary color
export const Info = styled.p`
  font-size: 1.2em;
  color: #f1d1e4; /* Soft pink for secondary text */
  margin-bottom: 40px;
  animation: ${glowAnimation} 2s ease-in-out infinite alternate; /* Glowing effect */
`

// Submit button with dynamic pastel background and fantasy style
interface SupportButtonProps {
  backgroundColor: string
}

export const SupportButton = styled.button<SupportButtonProps>`
  font-size: 1.5em;
  color: #fff; /* White text */
  background: ${(props) => props.backgroundColor}; /* Dynamic pastel background color */
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.5s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background: ${(props) => props.backgroundColor}; /* Keep the dynamic pastel background on hover */
    transform: scale(1.05); /* Slight scale effect on hover */
    box-shadow: 0 0 15px ${(props) => props.backgroundColor}; /* Glowing effect on hover */
  }

  &:active {
    transform: scale(0.95); /* Slight shrink effect when clicked */
    box-shadow: 0 0 10px ${(props) => props.backgroundColor}; /* Glowing effect on click */
  }
`

// Blinking icon or character container
export const BlinkingContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 3em;
  color: #ff00ff; /* Pink color for the icon */
  animation: ${blinkAnimation} 1.5s ease-in-out infinite; /* Blinking effect */
`

// Randomly positioned emojis with animation
export const Emoji = styled.div`
  position: absolute;
  font-size: 2em;
  animation: ${randomMovement} 10s linear infinite;

  &:nth-child(1) {
    top: 5%;
    left: 5%;
  }
  &:nth-child(2) {
    top: 15%;
    left: 85%;
  }
  &:nth-child(3) {
    top: 85%;
    left: 20%;
  }
  &:nth-child(4) {
    top: 70%;
    left: 70%;
  }
  &:nth-child(5) {
    top: 30%;
    left: 40%;
  }
  // Add more emojis or adjust positions as needed
`

// Modal styles
interface ModalProps {
  isVisible: boolean
}

export const Modal = styled.div<ModalProps>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`

export const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ModalButton = styled.button`
  font-size: 1.2em;
  margin: 10px;
  padding: 10px 20px;
  color: #fff;
  background: #ff69b4; /* Hot pink */
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #ff1493; /* Deep pink */
    transform: scale(1.05); /* Slight scale effect on hover */
  }

  &:active {
    transform: scale(0.95); /* Slight shrink effect when clicked */
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  color: #ff1493; /* Deep pink */
  cursor: pointer;

  &:hover {
    color: #ff69b4; /* Hot pink */
  }
`

export const BankInfo = styled.p`
  font-size: 1.2em;
  color: #333; /* Dark color for better contrast */
  margin-bottom: 10px;
`
