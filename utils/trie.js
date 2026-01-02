class TrieNode{
    constructor(){
        this.isEnd=false;
        this.children=new Map();
    }
};

class Trie{
    constructor(){
        this.root=new TrieNode();
    }

    insert(word){
        let current=this.root;
        for(let letter of word){
            if(!current.children.has(letter)){
                current.children.set(letter,new TrieNode());
            }
            current=current.children.get(letter);
        }
        current.isEnd=true;
    }

    getMatchedWords(prefix,limit=50){
        let current=this.root;
        const len=prefix.length;
        for(let i=0;i<len;i++){
            if(!current.children.has(prefix[i]))
                return [];
            current=current.children.get(prefix[i]);
        }
        const matchingList=[];
        this.getMatchingListOfWords(matchingList,current,prefix,limit);
        return matchingList;
    }

    getMatchingListOfWords(matchingList,current,currentWord,limit){
        if(matchingList.length>=limit) return ;
        if(current.isEnd){
            matchingList.push(currentWord);
        }
        for(let [key,value] of current.children.entries()){
            if (matchingList.length >= limit) return;
            this.getMatchingListOfWords(matchingList,value,currentWord+key);
        }
    }
};

module.exports={Trie};