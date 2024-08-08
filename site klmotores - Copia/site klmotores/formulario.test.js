const {validatePassword, checkPassword,} = require('./formulario')

it('Testando se as regra contem 8 caracteres ' , () =>{
    
    expect(validatePassword("abcdabcd")).toBe(true)
    
})
it('Testando se as regra contem menos de 8 caracteres ' , () =>{
    
    expect(validatePassword("abcdabc")).toBe(false)
    
})
it('Testando se a regra contem letra minúscula' , () =>{
    
    expect(validatePassword("AAAAaaAA")).toBe(true)
    
})
it('Testando se a regra não contem letra minúscula' , () =>{
    
    expect(validatePassword("AAAAAA")).toBe(false)
    
})
it('Testando se a regra deve conter pelo menos um caractere especial' , () =>{
    
    expect(validatePassword("AAAA#@!A")).toBe(true)
    
})
it('Testando se a regra não deve conter pelo menos um caractere especial' , () =>{
    
    expect(validatePassword("AAAAAAA")).toBe(false)
    
})

it('Testando se as senhas são iguais' , () =>{
    
    expect(checkPassword("aaaa@#aa", "aaaa@#aa")).toBe(true)
    
})
it('Testando se as senhas são diferentes' , () =>{
    
    expect(checkPassword("aaaa@#aa", "aaa!@#aa")).toBe(false)
    
})