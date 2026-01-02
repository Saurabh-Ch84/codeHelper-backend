const WebSocket = require('ws');
const { Trie } = require('./utils/trie.js');

const keywords = {
  cpp: require('./data/cpp.js'),
  java: require('./data/java.js'),
  python: require('./data/python.js')
};

const tries = {
    cpp: new Trie(),
    java: new Trie(),
    python: new Trie()
};

Object.keys(keywords).forEach(lang => {
    console.log(`Loading ${keywords[lang].length} words into ${lang} Trie...`);
    keywords[lang].forEach(word => {
        tries[lang].insert(word);
    });
});

console.log("Initialization Complete. Server Ready.");

const PORT = process.env.PORT || 8080;
const server = require('http').createServer(); // Create a standard HTTP server
const wss = new WebSocket.Server({ server }); // Attach WebSocket to it

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

wss.on('connection', (ws) => {
  console.log('Frontend connected!');

  ws.on('message', (message) => {
    try {
      const data=JSON.parse(message.toString());
      const partialWord=data.word || '';
      const language=data.language|| 'cpp';
      console.log(`${partialWord} received, language:${language}`);
      
      // this was version 1.0.0
      // const languageList=keywords[language];
      // const suggestionList=languageList.filter(kw=>
      //   kw.toLowerCase().startsWith(partialWord.toLowerCase())
      // );

      // version 1.1.0
      const selectedTrie=tries[language];
      let suggestionList=[];
      suggestionList = selectedTrie.getMatchedWords(partialWord);

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