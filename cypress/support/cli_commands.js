Cypress.Commands.add('cloneViaSSH', project => {
  const domain = Cypress.config('baseUrl').replace('http://', '')
  const gitUrl = `git@${domain}:${Cypress.env('user_name')}/${project.name}.git`

  // Use a opção 'cwd' para definir o diretório de trabalho
  cy.exec(`git clone ${gitUrl}`, { cwd: 'cypress/downloads/' })
})


