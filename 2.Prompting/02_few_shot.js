// Few Shot Prompting

import {OpenAI} from 'openai';

const client = new OpenAI({
    apiKey:'****',
});

async function main(){
    const result = await client.chat.completions.create({
        model:'gpt-4',
        messages: [{role:'user',
             content: `what is 2 + 2 equals ?
             Do not add anything else in answer , take the samples from the examples.
             Examples :
             - what is 4+5
               expected output: 9(nine)
             - what is 10+10
                expected output: 20(twenty)
             `}]
    });
    console.log(`Answer from OpenAI API:`,result.choices[0].message.content);
}

main();
