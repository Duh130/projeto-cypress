
describe('Testes da aplicação Agenda de Contatos', () => {
    const baseUrl = 'https://agenda-contatos-react.vercel.app/';

    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it('Deve incluir um novo contato', () => {
   
        cy.get('[data-cy="input-name"]').type('João Silva');
        cy.get('[data-cy="input-email"]').type('joao.silva@gmail.com');
        cy.get('[data-cy="input-phone"]').type('11987654321');
        cy.get('[data-cy="btn-save"]').click();

        
        cy.contains('João Silva').should('exist');
        cy.contains('joao.silva@gmail.com').should('exist');
        cy.contains('11987654321').should('exist');
    });

    it('Deve editar um contato existente', () => {
       
        cy.contains('João Silva').parent().find('[data-cy="btn-edit"]').click();

       
        cy.get('[data-cy="input-name"]').clear().type('João Silva Atualizado');
        cy.get('[data-cy="btn-save"]').click();

        
        cy.contains('João Silva Atualizado').should('exist');
        cy.contains('João Silva').should('not.exist');
    });

    it('Deve remover um contato', () => {
        
        cy.contains('João Silva Atualizado').parent().find('[data-cy="btn-delete"]').click();

      
        cy.on('window:confirm', () => true);

       
        cy.contains('João Silva Atualizado').should('not.exist');
    });
});
