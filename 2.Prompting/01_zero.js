//Zero Prompting
import {OpenAI} from 'openai';

const client = new OpenAI({
    apiKey:'*****',
});

async function main(){
    const result = await client.chat.completions.create({
        model:'gpt-4',
        messages: [{role:'user', content: 'Hello,How are you?'}]
    });
    console.log(`Answer from OpenAI API:`,result.choices[0].message.content);
}

main();
