import {
  VisitedCountryItem,
  CountryImage,
  NameRemoveContainer,
  VisitedCountryName,
  RemoveButton,
} from './styledComponents'

const VisitedCountry = props => {
  const {item, removeCountry} = props
  const {name, imageUrl, id} = item

  const onClickRemove = () => {
    removeCountry(id)
  }

  return (
    <VisitedCountryItem>
      <CountryImage src={imageUrl} alt="thumbnail" />
      <NameRemoveContainer>
        <VisitedCountryName>{name}</VisitedCountryName>
        <RemoveButton type="button" onClick={onClickRemove}>
          Remove
        </RemoveButton>
      </NameRemoveContainer>
    </VisitedCountryItem>
  )
}

export default VisitedCountry
