import { createContext, useEffect, useState } from "react"
import { Assortement } from "../components/Assortement/Assortement"
import { FilterAndCardPagination } from "../components/FilterAndCardPagination/FilterAndCardPagination"
import { CardsServer } from "../data/data"
import { useGetCardsQuery } from "../redux/api/api"
import { useDispatch } from "react-redux"
import { setLoading, setRenderData } from "../redux/slices/renderCardSlice"

interface CardContextProps {
  cardsData: CardsServer[]
  setCardsData: React.Dispatch<React.SetStateAction<CardsServer[]>>
}

const ContextValue: CardContextProps = {
  cardsData: [],
  setCardsData: () => {},
}

export const CardContext = createContext<CardContextProps>(ContextValue)

const Home = () => {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetCardsQuery()
  const [cardsData, setCardsData] = useState<CardsServer[]>([])

  useEffect(() => {
    if (data) {
      dispatch(setRenderData(data))
      dispatch(setLoading(isLoading))
      setCardsData(data)
    }
  }, [data])

  if (error) {
    return <div className="">ОШИБКА !!</div>
  }
  console.log("isLoading - Home", isLoading)
  return (
    <>
      <CardContext.Provider value={{ cardsData, setCardsData }}>
        <Assortement />
        <FilterAndCardPagination />
      </CardContext.Provider>
    </>
  )
}

export default Home
