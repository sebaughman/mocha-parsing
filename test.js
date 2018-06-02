const expect = require('chai').expect

const reverseNum = (num) => {
    if(typeof num !== 'number'){
        throw new TypeError(` This function requires a number and was provided a ${ typeof num }`)
    }
    return Number(num.toString().split(' ').reverse().join(''))
  }
  
  

describe('Testing reverseNum()', function (){
    it('should return a number', function (){
        expect (reverseNum(123)).to.be.a("number")
    })
    it('should be a function', function (){
        expect(reverseNum).to.be.a('function')

    })
    it('should reverse a number', function (){
        const stateBefore = 123;
        const stateAfter = 321

        expect (reverseNum(stateBefore)).to.equal(stateAfter)

    })
    //You shouldn't throw often. instead have your code return null or a certain string and then test for that
    it('should throw error if value input is not a number', function (){
        expect(reverseNum.bind(null, '123')).to.throw(TypeError)
        expect(reverseNum.bind(null, {1: '2'})).to.throw(TypeError)
        expect(reverseNum.bind(null, [1, 2, 3])).to.throw(TypeError)
        expect(reverseNum.bind(null, null)).to.throw(TypeError)
    })
})


// const isSame = (word) => {
//     if( typeof word !== 'string'){
//         return 'only accepts a string'
//     }
//    word = word.split(' ').join('').split(',').join('').toLowerCase()
//    return word  == word.split('').reverse().join('')
//   }

 
  
  
// const uppers = (str) =>{
//     return str.split(' ').map((word)=>{
//             return (word[0].toUpperCase() + word.slice(1))
//             }).join(' ')
//   }

//   const getData = () => {
//     return new Promise((resolve, reject) => {
//       const data = { data: [1, 2, 3] };
  
//       setTimeout(() => resolve(data), 1000)
//     })
//   }


// describe('Testing isSame()', function (){
//     it('should return a bool', function (){
//         expect(isSame('bob')).to.be.a('boolean')
//     })
//     it('should return "only accepts a string" if passed a non string', function (){
//         expect(isSame(123)).to.equal('only accepts a string')
//         expect(isSame([])).to.equal('only accepts a string')
//         expect(isSame({})).to.equal('only accepts a string')
//         expect(isSame(null)).to.equal('only accepts a string')

//     })
//     it('should return true if palindrome', function (){
//         expect(isSame('bob')).to.equal(true)
//         expect(isSame('A nut for a jar of tuna')).to.equal(true)
//         expect(isSame('A car, a man, a maraca')).to.equal(true)

//     })
//     it('should return false if not a palindrome', function (){
//         expect(isSame('bo')).to.equal(false)
//         expect(isSame('A nut a jar of tuna')).to.equal(false)
//         expect(isSame('A a man, a maraca')).to.equal(false)
//     })
// })

// describe('Testing uppers()', function (){
//     it('should return "should be a string" if not passed a string', function (){

//     })
//     it('should return a string', function (){

//     })
//     it('should capitalize the first letter of each string', function (){

//     })
// })

// describe('Testing getData()', () => {
//     it('should return an object', async () => {
//       const data = await getData()
//       expect(data).to.be.a('object');
//     });
//     it('should have a key called data', async () => {
//         const data = await getData()
//         expect(data).to.include.any.keys('data');
//       });
//     it('should have the key data equal to an array', async () => {
//         const data = await getData()
//         expect(data.data).to.be.a('array')
//     });
//   });
