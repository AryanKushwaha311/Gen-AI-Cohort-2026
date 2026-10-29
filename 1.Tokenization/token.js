// Text Tokenization and Detokenization Using Tiktoken in JavaScript.

import {get_encoding} from 'tiktoken';

const encoderForGPT2 = get_encoding("gpt2");
const encoed = encoderForGPT2.encode("Hello i am aryan kushwaha")
console.log(encoed);

const deco = encoderForGPT2.decode(encoed);
console.log(new TextDecoder().decode(deco));


