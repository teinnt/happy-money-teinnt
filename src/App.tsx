import React, { useState, useEffect, useRef } from 'react'
import {
  Container,
  Content,
  Title,
  Info,
  SupportButton,
  BlinkingContainer,
  Emoji,
  Modal,
  ModalContent,
  ModalButton,
  CloseButton,
  BankInfo,
} from './styles'

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isBankInfoVisible, setIsBankInfoVisible] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalVisible(false)
        setIsBankInfoVisible(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const getPastelColor = (value: number): string => {
    const hue = value % 360
    return `hsl(${hue}, 70%, 85%)`
  }

  const dynamicTitleColor = getPastelColor(mousePosition.x)
  const dynamicButtonColor = getPastelColor(mousePosition.y)

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
    setIsBankInfoVisible(false)
  }

  const handlePaypalClick = () => {
    window.open('https://www.paypal.com/paypalme/teinnt', '_blank')
  }

  const handleBankAccountClick = () => {
    setIsBankInfoVisible(true)
  }

  const handleBankCardClick = () => {
    window.open('https://buy.stripe.com/5kA7t67Ppgifg12aEN', '_blank')
  }

  return (
    <Container>
      <Content>
        <Title color={dynamicTitleColor}>Ủng Hộ Vui Vẻ</Title>
        <Info>Cảm ơn bạn thật nhiều nhé! 🥰 Quyên góp của bạn sẽ làm cho mọi thứ trở nên thật tuyệt vời! 🌟</Info>

        <SupportButton backgroundColor={dynamicButtonColor} onClick={toggleModal}>
          Ủng Hộ Thôi Nào! 🌈
        </SupportButton>

        <BlinkingContainer>
          <i className="fas fa-star"></i>
        </BlinkingContainer>
        <Emoji>🌟</Emoji>
        <Emoji>🎉</Emoji>
        <Emoji>✨</Emoji>
        <Emoji>💖</Emoji>
      </Content>

      <Modal isVisible={isModalVisible}>
        <ModalContent ref={modalRef}>
          <CloseButton onClick={toggleModal}>&times;</CloseButton>
          {!isBankInfoVisible ? (
            <>
              <ModalButton onClick={handlePaypalClick}>Paypal</ModalButton>
              <ModalButton onClick={handleBankAccountClick}>Bank Account</ModalButton>
              <ModalButton onClick={handleBankCardClick}>Bank Card</ModalButton>
            </>
          ) : (
            <>
              <BankInfo>Sacombank</BankInfo>
              <BankInfo>060313761889</BankInfo>
              <BankInfo>Trần Thị Phương Thảo</BankInfo>
            </>
          )}
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default App
