const WebSocket = require('ws');

const keywords = {
  cpp: require('./data/cpp.js'),
  java: require('./data/java.js'),
  python: require('./data/python.js')
};

const wss = new WebSocket.Server({ port: 8080 });

console.log('Smart server is running on ws://localhost:8080');

wss.on('connection', (ws) => {
  console.log('Frontend connected!');

  ws.on('message', (message) => {
    try {
      const data=JSON.parse(message.toString());
      const partialWord=data.word || '';
      const language=data.language|| 'cpp';
      console.log(`${partialWord} received, language:${language}`);
      const languageList=keywords[language];
      const suggestionList=languageList.filter(kw=>
        kw.toLowerCase().startsWith(partialWord.toLowerCase())
      );

      const response=JSON.stringify(suggestionList);
      console.log('Sending matching words:',response);
      ws.send(response);
    } catch (error){
      console.error('error in message processing:',error);
    }
  });

  ws.on('close', () => {
    console.log('Frontend disconnected');
  });
});