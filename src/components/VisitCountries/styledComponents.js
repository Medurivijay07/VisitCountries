import styled from 'styled-components'

export const AppMainContainer = styled.div`
  background-color: #161624;
  min-height: 100vh;
  padding: 20px;
`
export const AppTitle = styled.h1`
  color: #ffffff;
`
export const CountriesContainer = styled.ul`
  border: 1px solid #f8fafc;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
  background-color: #1f1f2f;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-y: auto;
`
export const EachCountry = styled.li`
  display: flex;
  flex-direction: column;
`
export const NameAndStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Line = styled.hr`
  width: 100%;
`
export const CountryName = styled.p`
  color: #ffffff;
`
export const CustomButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 7px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`
export const BottomTitle = styled.h1`
  color: #ffffff;
`
export const VisitedCountriesList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`
export const NoVisitedCountriesContainer = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoVisitedText = styled.p`
  color: #ffffff;
`
export const VisitedText = styled.p`
  color: #ffffff;
`
