allAnagrams = (string) => {
  let result = {};
  getAnagrams = (str, prefix) => {
    if(str.length === 0){
      if(!result[prefix]){
        result[prefix] = true;
      }
      return;
    }
    for (let i = 0; i < str.length; i++){
      let begin = str.substring(0, i);
      let end = str.substring(i + 1);
      getAnagrams(begin + end, prefix + str[i]);
    }
  }
  getAnagrams(string, '');
  return Object.keys(result);
}
