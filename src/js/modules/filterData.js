export const filterAllData = (data) => {
  return data.map(filterData)
}

export const filterData = ({ authors, coverimages, languages, publication, subjects, titles, 'undup-info' : undupInfo}) => {

  if(languages.language._text === "dut") languages.language._text = "Nederlands" 

  return {
    amount : undupInfo && undupInfo._attributes && undupInfo._attributes['frabl-global-count'] ? undupInfo._attributes['frabl-global-count'] : null,
    availableAmount : undupInfo && undupInfo._attributes && undupInfo._attributes.cnt ? undupInfo._attributes.cnt : null,
    author: authors && authors['main-author'] && authors['main-author']._attributes && authors['main-author']._attributes['search-term'] ? authors['main-author']._attributes['search-term'] : null,
    cover_image: coverimages && coverimages.coverimage && coverimages.coverimage[1] && coverimages.coverimage[1]._text ? coverimages.coverimage[1]._text : null,
    language: languages && languages.language && languages.language._text ? languages.language._text : null,
    publication_year: publication && publication.year && publication.year._text ? publication.year._text : null,
    subject: subjects && subjects['topical-subject'] && subjects['topical-subject']._text ? subjects['topical-subject']._text : null,
    title: titles && titles['short-title'] && titles['short-title']._text ? titles['short-title']._text : null,
  }
}