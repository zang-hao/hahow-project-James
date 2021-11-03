describe('star_wars_api_test',()=>{
  it('How many species in episode 6?',()=>{
    cy.request('https://swapi.dev/api/films/')
      .then(res=>{
        const data= res.body.results 
        return data})
      .then(films=>{
        for (let i=0; i<films.length; i++){
          //Choose episode_id 6 
          if (films[i].episode_id==6){
            const species= films[i].species
            cy.log(`The episode 6 have ${species.length} species`)
            cy.log('Show all species as below')
            species.forEach(element => {
              cy.request(element)
                       .then(res=>cy.log(JSON.stringify(res.body.name)))
            });
          }
          
        }
      })
  })
  it('Sorting the films name by episode',()=>{
    cy.request('https://swapi.dev/api/films/')
      .then(res=>{
        const data= res.body.results
        return data})
        //Array sorting by episode_id
      .then(films=>{
        films.sort((a,b)=>{
          if (a.episode_id>b.episode_id){
            return 1
          }
          if (a.episode_id<b.episode_id){
            return -1
          }
          return 0
        })
        films.forEach(element=>{
          cy.log(`The episode ${element.episode_id} is ${element.title}`)
        })
      })
  })
  it('Filter all vehicles the hosrepower is greater than 1000',()=>{
    //Using recursion to find the next url until the next url is null
    const find_all_car=(url)=>{
      cy.request(url)
        .then(res=>{
          if (res.body.next==null){
            return
          }else{
            const vehicles=res.body.results
            vehicles.forEach(element=>{

              if (element.max_atmosphering_speed>=1000){
                cy.log(element.name)
              }
                        
            })
            find_all_car(res.body.next)
          }

        })

    }
    find_all_car('https://swapi.dev/api/vehicles/')

  })
})