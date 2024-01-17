import DrinksList from '@/components/DrinksList'
import React from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('something went wrong')
  }
  const data = await response.json()
  return data
}

const DrinksPage = async () => {
  //We can use async/await here becasuse this is by default a server component
  const data = await fetchDrinks()
  //   console.log('data', data)

  return (
    <div>
      <DrinksList drinks={data.drinks}></DrinksList>{' '}
    </div>
  )
}

export default DrinksPage
