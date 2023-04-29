import { useEffect, useState } from 'react'

import { Board } from './Board'
import { Card } from '../Card/Card'

import { CardEntity, findCards } from '../../data'

const BoardContainer = () => {
  const [cards, setCards] = useState<CardEntity[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cards = await findCards()
        setCards(cards)
      } catch (error) {
        alert(
          'Ensure server is running. For more details, check project readme.'
        )
        setCards([])
      }
    }
    fetchCards()
  }, [])

  return (
    <Board>
      {cards.map((cardProps) => (
        <Card
          key={cardProps.id}
          id={cardProps.id}
          content={cardProps.content}
          createdAt={cardProps.createdAt}
        />
      ))}
    </Board>
  )
}

export default BoardContainer
