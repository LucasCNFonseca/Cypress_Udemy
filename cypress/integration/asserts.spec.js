/// <reference types="cypress" />

it('Equality', () => {
    /* Successes! */
    const a = 1;
    expect(a, 'Deveria ser 1').equal(1);

    expect(a, 'Deveria ser 1').to.be.equal(1);
    expect(a, '(A) não é (B)').not.to.be.equal('b');

    /* Errors! 
    const b = 1;
    expect(b, 'Deveria ser 1').equal(2);
    */
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(a).not.to.be.false;
    expect(a).to.be.not.null;
    expect(b).to.be.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    // expect(obj).to.be.equal({a: 1, b: 2}); -> https://www.linkedin.com/posts/mikael-ribeiro_javascript-objetos-tipos-activity-6940796853047185408-exk_?utm_source=linkedin_share&utm_medium=member_desktop_web
    expect(obj).to.be.deep.equal({a: 1, b: 2});
    expect(obj).eql({a: 1, b: 2});
    expect(obj).include({a: 1});
    expect(obj).to.have.property('b');
    expect(obj).to.have.property('b', 2);
    expect(obj).to.not.be.empty;
    expect({}).to.be.empty;
})

it('Arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).to.have.members([1, 2, 3]);
    expect(arr).to.have.include.members([1, 3]);
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;
})

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste');
    expect(str).to.have.length(15);
    expect(str).to.contains('de');
    expect(str).to.match(/de/)
    expect(str).to.match(/^String/) // Start with...
    expect(str).to.match(/teste$/) // End with...
    expect(str).to.match(/.{15}/) // Lenght
    expect(str).to.match(/\w+/) // Just words
    expect(str).to.match(/\D+/) // Don't have numbers
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 3.141592

    expect(number).to.be.eq(4);
    expect(number).to.be.above(3);
    expect(number).to.be.below(5);
    expect(floatNumber).to.be.closeTo(3.14, 0.1);
    expect(floatNumber).to.be.above(3);
    expect(floatNumber).to.be.below(3.2);
})