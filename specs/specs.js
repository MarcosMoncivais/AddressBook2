describe('Contact', function() {
  it("Creates anew contact with the given specifications", function(){
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Morena");
    expect(testContact.address).to.eql([]);
  });
});
