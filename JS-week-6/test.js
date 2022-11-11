let expect = require("chai").expect;

function doSomething(x,y) {
  if (typeof x !== "string") throw new Error("x must be a string");
  return x + y;
}

describe("myFunctions", () => {
  describe("#doSomething", () => {
    it ("should concatenate", () => {
      let x = doSomething("Hello", 5);
      expect(x).to.equal("Hello5");
    });
    it ("should throw error if not string", () => {
      expect(() => doSomething(5, 5)).to.throw(Error);
    });
  });
});

function isTheSame(input1, input2) {
  return input1 === input2
}

describe('isTheSame', () => {
  it('should return true if both inputs are the same', () => {
    const result = isTheSame(1,1)
    expect(result).to.be.true;
  })

  it('should return false if both inputs are not the same', () => {
    const result = isTheSame(1,2)
    expect(result).to.be.false;
  })
})

function getSum(a,b) {
  return a+b
}

describe('getSum', () => {
  it('should return the sum of two inputs', () => {
    const sum = getSum(2,3)
    expect(sum).to.equal(5)
  })

  it('should concatenate strings', () => {
    const sum = getSum('hello', ' world')
    expect(sum).to.equal('hello world')
  })
})

const nameAry = ['tom', 'jerry'];

describe('name array', () => {
    it('should have a length of 2', () => {
        expect(nameAry).to.have.length(2);
    })
})

const player1 = {card: 'king', value: 10}
const player2 = {card: 'heart', value: 5}
const player3 = {card: 'spade', value: 5}

function war(p1, p2) {
  if(p1.value > p2.value){
    return `${p1.card} card wins`;
  }else if (p1.value < p2.value) {
    return `${p2.card} card wins`;
  }
  return 'its a tie';
}

describe('Playing War', () => {
  it('should return king card wins', () => {
    const winner = war(player1, player2);
    expect(player1.value).to.be.greaterThan(player2.value)
    expect(winner).to.equal('king card wins')
  })

  it('should return its a tie', () => {
    const winner = war(player2, player3)
    expect(player2.value).to.equal(player3.value)
    expect(winner).to.equal('its a tie')
  })

})