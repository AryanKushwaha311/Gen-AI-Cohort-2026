import { get_encoding } from "tiktoken";

const encoderForGPT2 = get_encoding("gpt2");
const encoed = encoderForGPT2.encode("Hello World");
console.log(encoed);

const decoed = encoderForGPT2.decode(encoed);
console.log(new TextDecoder().decode(decoed));