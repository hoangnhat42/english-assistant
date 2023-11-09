import OpenAI from 'openai';
import {config} from 'dotenv';
import db from '../models';
config()

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
});

export async function sendPrompt(contentId) {

    const content = await db.Lesson.findByPk(contentId);

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `"You're a proofreading expert. Your role is to correct and list out the mistakes from the student's essay below delimited by "'":

    ${content.dataValues.writeContents}
    
    Response format:
    1. Original text > Revised text (Short Instruction)
    2. ...
    
    Response format example:
    1. I've eat. > I've eaten. (fix verb tense)
    2. ...` }],
    model: 'gpt-3.5-turbo',
  });
  
  return {
    content: content.dataValues.writeContents,
    result: chatCompletion.choices[0].message.content
  }
}

