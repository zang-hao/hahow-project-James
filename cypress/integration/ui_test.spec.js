describe('github_ui_test',()=>{
  beforeEach(()=>cy.visit('https://github.com/hahow/hahow-recruit'))
  it('How many contributor and list their name?',()=>{
    //Using text Contributors to search element and click
    cy.contains('Contributors').find('span').then((el)=>cy.log(`The contributor have ${el.text()} people as below`)).click()
    //Using each() to get the text on every li element
    cy.get('ol>li').each(($el)=>{
      cy.wrap($el).find('a[data-hovercard-type=user]').eq(1).then((el)=>cy.log(el.text()))
    })
  })
  it('Enter to Frontend.md and check Wireframe img is existed?',()=>{
    cy.contains('frontend.md').click()
    cy.get('h2 #user-content-wireframe')
      .parent()
      .next()
      .find('img').should('be.visible')
    cy.get('h2 #user-content-wireframe')
      .parent()
      .next()
      .next()
      .find('img').should('be.visible')
  })
  it('Who is the last one commits?',()=>{
    //It's a bug, should use .click().click()
    cy.contains('commits').click().click()
    cy.get('.commit-author').eq(0).then(el=>cy.log(`The last one commits is ${el.text()}`))
  })
})