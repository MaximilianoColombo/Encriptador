//This function encrypts the text
const encryptText = (text) => {
    let encryptedText = '' //Create a new empty string that will be the encrypted text
    for (const char of text) { //Iterate the original string with a 'for' loop
      switch (char) { //Set the rules for encryption
        case 'e':
          encryptedText += 'enter';
          break;
        case 'i':
          encryptedText += 'imes';
          break;
        case 'a':
          encryptedText += 'ai';
          break;
        case 'o':
          encryptedText += 'ober';
          break;
        case 'u':
          encryptedText += 'ufat';
          break;
        default:
          encryptedText += char;
      }
    }
    return encryptedText //returns a string with the encrypted text
  }

//This function receives a timestamp as parameter (in this case, the id) and converts it to a DD/MM/YYYY HH:MM:SS format
//Then returns the date and hour
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const dateString = date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
    const timeString = date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    return {dateString, timeString};
  };

//This function checks if the text has accents or uppercases
//Returns only 'true' or 'false'
  const isTextValid = (text) => {
    const hasUppercase = /[A-Z]/.test(text);
    const hasAccents = /[\u0300-\u036f]/.test(text.normalize('NFD'));
  
    return !hasUppercase && !hasAccents;
  };

  export {encryptText, formatDateTime, isTextValid}

