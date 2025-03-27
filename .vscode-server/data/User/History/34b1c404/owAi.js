class PersonDataAccessObject {
    constructor(database) {
      this.database = database
    }
  
    saveToDatabase(person) {
      this.database.save(person)
    }
  }

const { PersonDataAccessObject } = require('./src');

describe('the PersonDataAccessObject', () => {
  it('calls the function that would save Ada Lovelace to the database', () => {
    /* Arrange */
    const mockSaveMethod = undefined;
    const mockDatabase = undefined;
    const personDataAccessObject = new PersonDataAccessObject(undefined)

    const expectedArgument = {firstName: 'Ada', lastName: 'Lovelace'}

    /* Act */
    personDataAccessObject.saveToDatabase(expectedArgument);

    /* Assert */
    expect(mockSaveMethod).toHaveBeenCalledWith(expectedArgument);
  })
})