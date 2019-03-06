export const filterAllData = (data) => {
  return data.map(filterData)
}

export const filterData = ({ titles, publication, coverimages, subjects }) => {
  return {
    title: titles && titles['short-title'] && titles['short-title']._text ? titles['short-title']._text : null,
    publication_year: publication && publication.year && publication.year._text ? publication.year._text : null,
    cover_image: coverimages && coverimages.coverimage && coverimages.coverimage[1] && coverimages.coverimage[1]._text ? coverimages.coverimage[1]._text : null,
    subject: subjects && subjects['topical-subject'] && subjects['topical-subject']._text ? subjects['topical-subject']._text : null
  }
}